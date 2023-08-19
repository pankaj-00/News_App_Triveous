import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "news-app-e66be.firebaseapp.com",
  projectId: "news-app-e66be",
  storageBucket: "news-app-e66be.appspot.com",
  messagingSenderId: "664135386818",
  appId: "1:664135386818:web:82cf92b9ac55201377dd5b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
