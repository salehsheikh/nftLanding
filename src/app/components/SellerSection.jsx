import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";

const SellerSection = ({ imageSrc, name, paragraph }) => {
  return (
    <div className="flex items-center gap-4 relative">
      {/* Image Wrapper */}
      <div className="relative w-29 h-29">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-md object-cover"
        />
        {/* Tick Icon */}
        <div className="absolute top-0 right-0  rounded-full p-1 w-6 h-6 bg-[#7872FF] shadow-md">
          <CheckIcon className="text-white " />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold text-[#2B2B2B]">{name}</h4>
        <p className="text-sm  font-bold text-[#808080]">{paragraph}</p>
      </div>
    </div>
  );
};

export default SellerSection;
