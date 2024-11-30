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
    const adminLoggedIn = (await cookieStore).get('adminLoggedIn')?.value;
    
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

    console.log('Found user document:', userDoc.data());

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
        console.log('Deleted receipts subcollection');
      }

      // Delete user document
      await userRef.delete();
      console.log('Successfully deleted user document from Firestore');
    } catch (error) {
      console.error('Error deleting from Firestore:', error);
      throw error;
    }

    // Delete from Firebase Auth
    console.log('Deleting from Firebase Auth...');
    try {
      await getAuth().deleteUser(userId);
      console.log('Successfully deleted from Firebase Auth');
    } catch (error: any) {
      // Continue if user not found in Auth
      if (error.code !== 'auth/user-not-found') {
        console.error('Error deleting from Firebase Auth:', error);
      }
    }

    // Delete from Emby
    console.log('Deleting from Emby...');
    try {
      await EmbyService.deleteUser(embyUserId);
      console.log('Successfully deleted from Emby');
    } catch (error) {
      // Log but continue if Emby deletion fails
      console.error('Error deleting from Emby:', error);
    }

    console.log('User deletion completed');
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