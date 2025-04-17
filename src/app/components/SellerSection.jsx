import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
        <div className="absolute -top-1 -right-1 bg-transparent rounded-full p-1 shadow-md">
          <CheckCircleIcon className="text-[#7872FF] w-6 h-6" />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h4 className="text-2xl font-semibold text-[#2B2B2B]">{name}</h4>
        <p className="text-sm text-[#808080]">{paragraph}</p>
      </div>
    </div>
  );
};

export default SellerSection;
