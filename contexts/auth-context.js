"use client";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();
const provider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let initialUser = null;
  if (typeof window !== "undefined" && window.localStorage) {
    initialUser = window.localStorage.getItem("user");
  }
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [loading, setLoading] = useState(true);

  function googleSignIn() {
    return signInWithPopup(auth, provider);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("user", user);
      }
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, googleSignIn, logOut };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
