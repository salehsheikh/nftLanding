import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";

const TopCollectionCard = ({ images = [], imageSrc, art, createdby }) => {
  const firstRow = images.slice(0, 2);
  const secondRow = images.slice(2, 6);

  return (
    <div className="bg-white rounded-[15px] border-[2.8px]  border-[#E7E7E7] p-3 w-full sm:max-w-full">
      <div className="bg-[#E7E7E7] p-2.5 rounded-[15px] space-y-3">
        {/* First Row: 2 Images */}
        <div className="grid grid-cols-2 gap-3">
          {firstRow.map((img, idx) => (
            <div key={idx} className="aspect-[3/2] rounded-[15px] relative overflow-hidden">
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
        <div className="grid grid-cols-4 gap-2 ">
          {secondRow.map((img, idx) => (
            <div key={idx} className="aspect-3/2 relative  overflow-hidden">
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

      {/* Profile & Info */}
      <div className="flex items-center gap-4 mt-4">
        <div className="relative w-[65px] h-[65px]">
          <Image
            src={imageSrc}
            alt="Profile"
            fill
            className="rounded-md object-cover"
          />
          <div className="absolute -top-1 right-0 bg-[#7872FF] rounded-full  w-4 h-4 flex items-center justify-center">
            <CheckIcon className="text-white w-[13px] h-[13px] shrink-0" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-[#2B2B2B] font-roboto uppercase">{art}</h4>
          <p className="text-sm text-[#808080] font-roboto">Created by {<span className="font-bold">{createdby}</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionCard;
