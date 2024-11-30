import { NextRequest, NextResponse } from 'next/server';
import { EmbyService } from '@/lib/services/emby';
import { getAuth } from 'firebase-admin/auth';
import { adminDb } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const adminLoggedIn = cookieStore.get('adminLoggedIn')?.value;
    
    if (!adminLoggedIn || adminLoggedIn !== 'true') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { userId, embyUserId } = await request.json();
    console.log('Attempting to delete user:', { userId, embyUserId });

    if (!userId || !embyUserId) {
      return NextResponse.json(
        { error: 'Missing user IDs' },
        { status: 400 }
      );
    }

    // First verify the user exists in Firestore
    console.log('Checking user in Firestore:', userId);
    const userRef = adminDb.collection('users').doc(userId);
    const userDoc = await userRef.get();
    
    if (!userDoc.exists) {
      console.log('User document not found in Firestore');
      return NextResponse.json(
        { error: 'User not found in database' },
        { status: 404 }
      );
    }

    // Delete from Firestore first
    console.log('Deleting from Firestore...');
    try {
      // Delete receipts subcollection
      const receiptsSnapshot = await userRef.collection('receipts').get();
      
      if (!receiptsSnapshot.empty) {
        const batch = adminDb.batch();
        receiptsSnapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });
        await batch.commit();
      }

      // Delete user document
      await userRef.delete();
    } catch (error) {
      console.error('Error deleting from Firestore:', error);
      throw error;
    }

    // Delete from Firebase Auth
    try {
      await getAuth().deleteUser(userId);
    } catch (error: any) {
      // Continue if user not found in Auth
      if (error.code !== 'auth/user-not-found') {
        console.error('Error deleting from Firebase Auth:', error);
      }
    }

    // Delete from Emby
    try {
      await EmbyService.deleteUser(embyUserId);
    } catch (error) {
      // Log but continue if Emby deletion fails
      console.error('Error deleting from Emby:', error);
    }

    return NextResponse.json({ 
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error: any) {
    console.error('Error in delete user route:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete user' },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 });
} 