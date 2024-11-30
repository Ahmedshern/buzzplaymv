import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const adminLoggedIn = (await cookieStore).get('adminLoggedIn')?.value;
    
    if (!adminLoggedIn || adminLoggedIn !== 'true') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('Fetching all users from Firestore...');

    // Get all users from the 'users' collection
    const usersRef = adminDb.collection('users');
    const usersSnapshot = await usersRef.get();
    
    console.log(`Found ${usersSnapshot.size} users in database`);

    if (usersSnapshot.empty) {
      console.log('No users found in database');
      return NextResponse.json({ users: [] });
    }

    const usersData = await Promise.all(
      usersSnapshot.docs.map(async (doc) => {
        const userData = doc.data();
        console.log('Processing user:', { id: doc.id, email: userData.email });

        try {
          // Fetch receipts for this user
          const receiptsRef = usersRef.doc(doc.id).collection('receipts');
          const receiptsSnapshot = await receiptsRef
            .orderBy('uploadDate', 'desc')
            .get();

          const receipts = receiptsSnapshot.docs.map(receiptDoc => {
            const receiptData = receiptDoc.data();
            return {
              id: receiptDoc.id,
              url: receiptData.url || '',
              date: receiptData.date || '',
              amount: receiptData.amount || '',
              planName: receiptData.planName || '',
              status: receiptData.status || 'pending',
              uploadDate: receiptData.uploadDate || receiptData.date || ''
            };
          });

          console.log(`Fetched ${receipts.length} receipts for user ${doc.id}`);

          // Return formatted user data
          return {
            id: doc.id,
            email: userData.email || '',
            embyUserId: userData.embyUserId || '',
            subscriptionStatus: userData.subscriptionStatus || 'inactive',
            subscriptionEnd: userData.subscriptionEnd || null,
            plan: userData.plan || '',
            paymentReceipts: receipts,
            createdAt: userData.createdAt || null,
            lastLoginAt: userData.lastLoginAt || null,
            emailVerified: userData.emailVerified || false
          };
        } catch (error) {
          console.error(`Error processing user ${doc.id}:`, error);
          // Return basic user data if there's an error processing receipts
          return {
            id: doc.id,
            email: userData.email || '',
            embyUserId: userData.embyUserId || '',
            subscriptionStatus: userData.subscriptionStatus || 'inactive',
            subscriptionEnd: userData.subscriptionEnd || null,
            plan: userData.plan || '',
            paymentReceipts: [],
            createdAt: userData.createdAt || null,
            lastLoginAt: userData.lastLoginAt || null,
            emailVerified: userData.emailVerified || false
          };
        }
      })
    );

    console.log(`Successfully processed ${usersData.length} users`);
    return NextResponse.json({ users: usersData });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
} 