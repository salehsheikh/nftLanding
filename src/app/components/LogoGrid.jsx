import React from 'react';
import Image from 'next/image';

const LogoGrid = ({ logos = [] }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-6 ">
      {logos.map((src, idx) => (
        <div key={idx} className=" rounded  flex justify-center items-center cursor-pointer">
          <Image
            src={src}
            alt={`Logo ${idx + 1}`}
            width={40}
            height={40}
            className="object-cover "
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
