import React from "react";
import Image from "next/image";
import {  CheckIcon } from "@heroicons/react/24/outline";

const TopCollectionCard = ({ images = [] ,imageSrc,art,createdby}) => {
  const firstRow = images.slice(0, 2);
  const secondRow = images.slice(2, 6);

  return (
    <div className="bg-white rounded-xl  p-3 w-[300px] sm:w-full  ">
      <div className="bg-[#E7E7E7] p-2 rounded-lg space-y-3">
        {/* First Row: 2 Images */}
        <div className="flex gap-4 justify-center">
          {firstRow.map((img, idx) => (
            <div key={idx} className="relative w-45 h-24 rounded overflow-hidden">
              <Image
                src={img}
                alt={`Sold Image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Row: 4 Images */}
        <div className="flex gap-3 flex-wrap justify-center">
          {secondRow.map((img, idx) => (
            <div key={idx} className="relative w-21 h-18 rounded overflow-hidden">
              <Image
                src={img}
                alt={`Sold Image ${idx + 3}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
      <div className="relative w-16 h-16 mt-3">
        <Image
          src={imageSrc}
          alt="profile"
          fill
          className="rounded-md object-cover"
        />
        {/* Tick Icon */}
       <div className="absolute top-0 right-0  rounded-full p-1 w-4 h-4 bg-[#7872FF] ">
                 <CheckIcon className="text-white s " />
               </div>
      </div>
       {/* Text Content */}
       <div className="flex flex-col">
        <h4 className="text-2xl  font-roboto font-bold text-[#2B2B2B]">{art}</h4>
        <p className="text-sm text-[#808080] font-roboto">{createdby}</p>
      </div>
      </div>
    </div>
  );
};

export default TopCollectionCard;
