import admin from 'firebase-admin';

// Check if there's already an instance, to avoid initializing more than once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure new lines are correctly replaced
    }),
  });
}

const db = admin.firestore();

export default db;
