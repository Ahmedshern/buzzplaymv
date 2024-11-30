import { NextResponse } from 'next/server';
import { getAuth } from "firebase-admin/auth";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get user by email using Firebase Admin
    const userRecord = await getAuth().getUserByEmail(email);

    if (!userRecord) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create action code settings
    const actionCodeSettings = {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email?email=${email}`,
      handleCodeInApp: true
    };

    // Reset email verification status
    await getAuth().updateUser(userRecord.uid, {
      emailVerified: false
    });

    // Generate and send verification email
    const link = await getAuth().generateEmailVerificationLink(
      email, 
      actionCodeSettings
    );

    return NextResponse.json({ 
      success: true,
      message: "Verification email sent successfully"
    });
  } catch (error: any) {
    console.error('Error sending verification email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send verification email' },
      { status: 500 }
    );
  }
} 