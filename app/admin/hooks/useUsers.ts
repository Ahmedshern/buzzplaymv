import { useState, useCallback, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { EmbyService } from '@/lib/services/emby';
import { toast } from "@/hooks/use-toast";
import { User, Receipt } from '@/types/admin';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      console.log('Fetching users...');
      const response = await fetch('/api/admin/users', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (!response.ok) {
        throw new Error('Unauthorized');
      }

      const { users: usersData } = await response.json();
      console.log('Received users data:', usersData);
      setUsers(usersData);
    } catch (error) {
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

  useEffect(() => {
    fetchUsers();

    const intervalId = setInterval(fetchUsers, 30000);

    return () => clearInterval(intervalId);
  }, [fetchUsers]);

  const toggleAccess = useCallback(async (userId: string, embyUserId: string, currentStatus: string) => {
    setActionLoading(userId);
    try {
      const enableAccess = currentStatus !== 'active';
      
      await EmbyService.updateUserPolicy(embyUserId, enableAccess);
      await updateDoc(doc(db, 'users', userId), {
        subscriptionStatus: enableAccess ? 'active' : 'inactive'
      });
      
      await fetchUsers();
      
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
  }, [fetchUsers]);

  const deleteUser = async (userId: string, embyUserId: string) => {
    setActionLoading(userId);
    try {
      console.log('Attempting to delete user:', { userId, embyUserId });
      
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

      await fetchUsers();
      
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
  };

  return {
    users,
    loading,
    actionLoading,
    fetchUsers,
    toggleAccess,
    deleteUser
  };
} 