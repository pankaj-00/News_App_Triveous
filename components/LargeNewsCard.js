import Image from "next/image";
import React from "react";
import moment from "moment";

const LargeNewsCard = ({ image, publishedAt, title, source }) => {
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
        <span className="text-[24px] font-semibold text-center md:text-start cursor-pointer">
          {title}
        </span>
      </div>
    </div>
  );
};

export default LargeNewsCard;
