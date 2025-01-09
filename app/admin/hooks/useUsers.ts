import { useState, useCallback, useEffect, useRef } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { EmbyService } from '@/lib/services/emby';
import { toast } from "@/hooks/use-toast";
import { User, Receipt } from '@/types/admin';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  // Add abort controller for cleanup
  const abortControllerRef = useRef<AbortController | null>(null);
  
  // Add request cache
  const lastFetchRef = useRef<number>(0);
  const CACHE_DURATION = 5000; // 5 seconds

  const fetchUsers = useCallback(async (force: boolean = false) => {
    // Check cache unless forced refresh
    const now = Date.now();
    if (!force && now - lastFetchRef.current < CACHE_DURATION) {
      return;
    }

    // Cleanup previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/admin/users', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error(response.statusText || 'Unauthorized');
      }

      const { users: usersData } = await response.json();
      setUsers(usersData);
      lastFetchRef.current = now;
    } catch (error) {
      // Ignore abort errors
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
      
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users. Please check your permissions."
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleAccess = useCallback(async (userId: string, embyUserId: string, currentStatus: string) => {
    if (actionLoading) return; // Prevent concurrent actions
    
    setActionLoading(userId);
    try {
      const enableAccess = currentStatus !== 'active';
      
      // Execute requests in parallel
      await Promise.all([
        EmbyService.updateUserPolicy(embyUserId, enableAccess),
        updateDoc(doc(db, 'users', userId), {
          subscriptionStatus: enableAccess ? 'active' : 'inactive'
        })
      ]);
      
      // Force refresh users
      await fetchUsers(true);
      
      toast({
        title: "Success",
        description: `User access has been ${enableAccess ? 'enabled' : 'disabled'}`,
      });
    } catch (error) {
      console.error('Error toggling access:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update user access"
      });
    } finally {
      setActionLoading(null);
    }
  }, [fetchUsers, actionLoading]);

  const deleteUser = useCallback(async (userId: string, embyUserId: string) => {
    if (actionLoading) return; // Prevent concurrent actions
    
    setActionLoading(userId);
    try {
      const response = await fetch('/api/admin/users/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        body: JSON.stringify({ userId, embyUserId }),
        credentials: 'include',
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete user');
      }

      // Force refresh users
      await fetchUsers(true);
      
      toast({
        title: "Success",
        description: "User deleted successfully"
      });

      return true;
    } catch (error: any) {
      console.error('Error in deleteUser:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to delete user"
      });
      throw error;
    } finally {
      setActionLoading(null);
    }
  }, [fetchUsers, actionLoading]);

  useEffect(() => {
    fetchUsers();

    const intervalId = setInterval(() => fetchUsers(), 30000);

    return () => {
      clearInterval(intervalId);
      // Cleanup any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchUsers]);

  return {
    users,
    loading,
    actionLoading,
    fetchUsers: useCallback(() => fetchUsers(true), [fetchUsers]), // Export forced refresh
    toggleAccess,
    deleteUser
  };
} 