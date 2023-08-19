"use client";
import React from "react";
import moment from "moment";
import Link from "next/link";
import icons from "@/icons";
import { handleLike } from "@/utils";
import { useAuth } from "@/contexts/auth-context";
const { StarIcon } = icons;

const LargeNewsCard = ({
  image,
  publishedAt,
  title,
  source,
  setLiked,
  liked,
  urlToFullArticle,
}) => {
  const { currentUser } = useAuth();
  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/article/${title}`;

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <img
        src={image ? image : "/NewsBackground.jpg"}
        alt={title}
        className="w-[400px] h-[300px] rounded-2xl"
      />
      <div className="flex flex-col md:justify-start md:items-start items-center gap-2">
        <div className="flex gap-3 items-center">
          <span className="text-[#B80000] text-2xl font-semibold">
            {source}
          </span>
          <span className="text-lg font-extrabold text-center">.</span>
          <span>{moment(new Date(publishedAt)).fromNow()}</span>
          {currentUser && (
            <StarIcon
              className={`cursor-pointer text-2xl ${
                liked.includes(title.toLowerCase())
                  ? "text-[#e2c54f]"
                  : "text-gray-600"
              }`}
              onClick={() =>
                handleLike(
                  title,
                  image,
                  publishedAt,
                  source,
                  liked,
                  setLiked,
                  urlToFullArticle,
                  currentUser
                )
              }
            />
          )}
        </div>
        <Link href={redirectUrl}>
          <span className="text-[24px] font-semibold text-center md:text-start cursor-pointer">
            {title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LargeNewsCard;
