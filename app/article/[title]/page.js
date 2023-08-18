"use client";
import { useArticles } from "@/contexts/article-context";
import moment from "moment";
import Link from "next/link";

const page = ({ params }) => {
  const { articles } = useArticles();
  console.log(articles);
  const article = articles.filter(
    (article) => article.title === decodeURI(params.title)
  )[0];
  return (
    <div className="flex flex-col gap-4 items-center md:w-full mt-16">
      {/* <div className="flex w-[1000px] justify-start">
        <span className="text-[#B80000] text-3xl font-bold flex-1">
          {article?.source.name}
        </span>
        <span className="text-2xl font-bold">
          {moment(new Date(article?.publishedAt)).fromNow()}
        </span>
      </div> */}
      <div className="flex flex-col md:w-[1000px] w-full gap-4 items-center px-8">
        <img
          src={
            article?.urlToImage ? article?.urlToImage : "/NewsBackground.jpg"
          }
          alt={article?.title}
          className="w-[400px] h-[300px] md:w-[1000px] md:h-[400px] rounded-xl"
        />
        <span className="text-3xl font-bold text-center">{article?.title}</span>
        {article?.content && (
          <span className="text-xl font-normal text-center">
            {article?.content}
          </span>
        )}
        <Link
          href={article?.url ? article?.url : process.env.NEXT_PUBLIC_BASE_URL}
        >
          <div className="cursor-pointer w-[200px] text-center h-[50px] bg-[#b40404] rounded-xl flex items-center justify-center text-white text-lg font-bold">
            Read Full Article
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
