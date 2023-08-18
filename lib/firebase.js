import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "auth-dev-ab0c8.firebaseapp.com",
  projectId: "auth-dev-ab0c8",
  storageBucket: "auth-dev-ab0c8.appspot.com",
  messagingSenderId: "611133620069",
  appId: "1:611133620069:web:13fa024476417cef672b8c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
