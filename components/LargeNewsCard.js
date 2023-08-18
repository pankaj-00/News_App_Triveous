import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

const LargeNewsCard = ({ image, publishedAt, title, source }) => {
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
