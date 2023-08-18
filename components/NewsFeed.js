"use client";
import { viewOptions } from "@/constants";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LargeNewsCard from "./LargeNewsCard";
import MediumNewsCard from "./MediumNewsCard";
import { useArticles } from "@/contexts/article-context";

const ToggleViewButton = ({
  Icon,
  label,
  changeViewHandler,
  selectedOption,
}) => {
  return (
    <div
      className={`md:flex hidden items-center justify-center gap-2 p-2 px-4 rounded-lg cursor-pointer ${
        selectedOption === label.toLowerCase() ? "bg-[#254af9]" : "bg-[#202136]"
      }`}
      onClick={() => changeViewHandler(label)}
    >
      <Icon className="text-white text-lg font-medium" />
      <span className="text-white text-lg font-medium">{label}</span>
    </div>
  );
};

const NewsFeed = () => {
  const [selectedOption, setSelectedOption] = useState("list");
  const changeViewHandler = (label) => {
    setSelectedOption(label.toLowerCase());
  };

  const { articles } = useArticles();
  return (
    <div className="flex flex-col w-full items-start gap-12">
      <div className="flex w-full justify-center gap-2 mb-10">
        {viewOptions.map((option) => (
          <ToggleViewButton
            Icon={option.icon}
            label={option.label}
            changeViewHandler={changeViewHandler}
            selectedOption={selectedOption}
          />
        ))}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        hasMore={true}
        className={`grid grid-cols-1 w-full gap-y-12 gap-x-16 flex-wrap ${
          selectedOption === "list"
            ? "md:grid-cols-2"
            : "md:grid-cols-4 md:gap-x-32"
        }`}
      >
        {articles?.map((article) =>
          selectedOption === "list" ? (
            <LargeNewsCard
              title={article.title}
              image={article.urlToImage}
              publishedAt={article.publishedAt}
              source={article.source.name}
            />
          ) : (
            <MediumNewsCard
              title={article.title}
              image={article.urlToImage}
              publishedAt={article.publishedAt}
              source={article.source.name}
            />
          )
        )}
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
