"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  applyActionCode, 
  signInWithEmailAndPassword, 
  verifyPasswordResetCode,
  confirmPasswordReset,
  signInWithCustomToken
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { EmbyService } from "@/lib/services/emby";

export default function ActionPage() {
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [actionCode, setActionCode] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [mode, setMode] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    async function handleAction() {
      try {
        const mode = searchParams.get('mode');
        const oobCode = searchParams.get('oobCode');
        const continueUrl = searchParams.get('continueUrl');
        console.log('Action params:', { mode, oobCode, continueUrl });

        if (!mode || !oobCode) {
          setError("Invalid action link");
          setVerifying(false);
          return;
        }

        setMode(mode);
        setActionCode(oobCode);

        if (mode === 'resetPassword') {
          try {
            // Verify the password reset code first
            const email = await verifyPasswordResetCode(auth, oobCode);
            setEmail(email);
            setVerifying(false);
          } catch (error: any) {
            console.error('Reset code verification error:', error);
            setError(
              error.code === 'auth/invalid-action-code'
                ? "This password reset link has expired or already been used."
                : "Invalid password reset link."
            );
            setVerifying(false);
          }
        } else if (mode === 'verifyEmail') {
          try {
            await applyActionCode(auth, oobCode);
            
            if (email) {
              try {
                const userCred = await signInWithEmailAndPassword(auth, email, '');
                const user = userCred.user;
                
                await updateDoc(doc(db, "users", user.uid), {
                  emailVerified: true,
                  updatedAt: new Date().toISOString()
                });

                await auth.signOut();
              } catch (error) {
                console.warn('Could not auto-update Firestore:', error);
              }
            }
            
            toast({
              title: "Email Verified",
              description: "Your email has been successfully verified. You can now log in.",
            });
            
            setTimeout(() => {
              router.push("/login?verified=true");
            }, 2000);
          } catch (error: any) {
            console.error('Email verification error:', error);
            setError(
              error.code === 'auth/invalid-action-code'
                ? "This verification link has expired or already been used."
                : "Failed to verify email. Please try again."
            );
            setVerifying(false);
          }
        } else {
          setError("Unsupported action type");
          setVerifying(false);
        }
      } catch (error: any) {
        console.error("Action handling error:", error);
        setError(
          error.code === 'auth/invalid-action-code'
            ? "This link has expired or already been used."
            : "Failed to process request. Please try again."
        );
        setVerifying(false);
      }
    }

    handleAction();
  }, [searchParams, router, toast, email]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!actionCode || !email) {
      setError("Invalid action code or email");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setVerifying(true);

    try {
      // First confirm the password reset with Firebase
      await confirmPasswordReset(auth, actionCode, newPassword);

      // Sign in the user to get their UID
      const userCred = await signInWithEmailAndPassword(auth, email, newPassword);
      const user = userCred.user;

      // Get user's Emby ID
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      // Update Emby password if user has Emby ID
      if (userData?.embyUserId) {
        try {
          await EmbyService.updatePassword(userData.embyUserId, newPassword);
        } catch (error) {
          console.error('Failed to update Emby password:', error);
          // Continue anyway as Firebase password is updated
        }
      }

      // Sign out the user
      await auth.signOut();
      
      toast({
        title: "Password Reset",
        description: "Your password has been successfully reset. You can now log in with your new password.",
      });

      setTimeout(() => {
        router.push("/login?reset=true");
      }, 2000);
    } catch (error: any) {
      console.error("Password reset error:", error);
      setError(
        error.code === 'auth/expired-action-code'
          ? "This password reset link has expired. Please request a new one."
          : "Failed to reset password. Please try again."
      );
    } finally {
      setVerifying(false);
    }
  };

  if (verifying) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p>Processing your request...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Action Failed</CardTitle>
            <CardDescription className="text-center">
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/login">
              <Button>Return to Login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (mode === 'resetPassword' && email) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              Enter your new password for {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={verifying}>
                {verifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Resetting Password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Email Verified!</CardTitle>
          <CardDescription className="text-center">
            Your email has been successfully verified. Redirecting to login...
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}