"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { applyActionCode, sendEmailVerification, getAuth } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from 'sonner';
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function VerifyEmailPage() {
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const email = searchParams.get('email');
  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    if (oobCode) {
      verifyEmail(oobCode);
    } else {
      setVerifying(false);
    }
  }, [oobCode]);

  const verifyEmail = async (code: string) => {
    try {
      const auth = getAuth();
      await applyActionCode(auth, code);

      // Get the current user
      const user = auth.currentUser;
      if (user) {
        // Reload the user to get updated emailVerified status
        await user.reload();
        
        // Update Firestore
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          emailVerified: true,
          emailVerifiedAt: serverTimestamp()
        });
      }

      toast.success('Email verified successfully!');
      // Redirect to dashboard after short delay
      setTimeout(() => router.push('/dashboard'), 2000);
    } catch (error: any) {
      console.error('Verification error:', error);
      setError(error.message);
      setVerifying(false);
    }
  };

  const handleResendVerification = async () => {
    if (!email) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to resend verification');
      }

      toast.success('New verification email sent! Please check your inbox.');
    } catch (error) {
      console.error('Error resending verification:', error);
      toast.error('Failed to send verification email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {verifying ? "Verifying Email" : error ? "Action Failed" : "Email Verified!"}
          </CardTitle>
          <CardDescription className="text-center">
            {verifying ? (
              "Please wait while we verify your email..."
            ) : error ? (
              "This link has expired or already been used."
            ) : (
              "Your email has been successfully verified. Redirecting to login..."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {error && email && (
            <>
              <Button 
                onClick={handleResendVerification}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Resend Verification Link'
                )}
              </Button>
              
              <div className="w-full mt-6 text-sm">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h3 className="font-medium text-yellow-500 mb-2">
                    Important: After requesting a new link
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">•</span>
                      Check your email inbox
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">•</span>
                      Look in your spam/junk folder
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">•</span>
                      Allow a few minutes for delivery
                    </li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-yellow-500/10 text-xs text-muted-foreground">
                    Still having trouble? Contact our support team for assistance.
                  </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 