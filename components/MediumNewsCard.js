import React from "react";
import moment from "moment";
import Link from "next/link";
import icons from "@/icons";
const { StarIcon } = icons;
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "@/contexts/auth-context";
import { handleLike } from "@/utils";

const MediumNewsCard = ({
  image,
  publishedAt,
  source,
  title,
  liked,
  setLiked,
  urlToFullArticle,
}) => {
  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/article/${title}`;
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col gap-3 md:items-start items-center">
      <img
        src={image ? image : "/NewsBackground.jpg"}
        alt={title}
        className="w-[400px] h-[300px] md:w-[300px] md:h-[200px] rounded-xl"
      />
      <div className="flex flex-col justify-between items-between gap-2">
        <div className="flex gap-3 items-center">
          <span className="text-[#B80000] md:text-lg md:font-normal text-2xl font-semibold">
            {source}
          </span>
          <div className="text-lg font-extrabold flex items-center h-fit">
            .
          </div>
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
          <span className="text-[24px] md:text-[16px] font-semibold md:w-[300px] md:h-fit cursor-pointer">
            {title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MediumNewsCard;
