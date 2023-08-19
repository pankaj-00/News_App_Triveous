"use client";
import React, { useContext, useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./auth-context";

const ArticlesContext = React.createContext();

export function useArticles() {
  return useContext(ArticlesContext);
}

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const fetchNewsHeadlines = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.log(error.message);
    }
  };

  const { currentUser } = useAuth();

  const fetchLikedItems = async () => {
    try {
      const likedCollectionRef = collection(
        db,
        "likedArticles",
        currentUser.email,
        "data"
      );
      const q = query(likedCollectionRef);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        likedItems.push(doc.data().title.toLowerCase());
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNewsHeadlines();
    if (currentUser) fetchLikedItems();
  }, []);

  const value = { articles, likedItems };
  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}
