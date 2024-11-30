"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { User } from "@/types/admin";

interface DeleteConfirmDialogProps {
  user: User | null;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  loading: boolean;
}

export function DeleteConfirmDialog({
  user,
  onClose,
  onConfirm,
  loading,
}: DeleteConfirmDialogProps) {
  return (
    <AlertDialog open={!!user} onOpenChange={() => onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete User</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          {user && (
            <div className="text-sm">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Plan:</strong> {user.plan}</p>
            </div>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onClose()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => onConfirm()} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              'Delete'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
} 