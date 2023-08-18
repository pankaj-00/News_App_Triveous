"use client";
import React, { useContext, useState, useEffect } from "react";

const ArticlesContext = React.createContext();

export function useArticles() {
  return useContext(ArticlesContext);
}

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const fetchNewsHeadlines = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchNewsHeadlines();
  }, []);

  const value = { articles };
  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}
