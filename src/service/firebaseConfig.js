// firebaseConfig.js
import admin from "firebase-admin";
import serviceAccount from "../../firebase-admin-sdk.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://YOUR_FIREBASE_PROJECT_ID.firebaseio.com", // Replace with your database URL
  });
}

export const db = admin.firestore();
