import React from 'react';
import TopCollectionCard from './TopCollectionCard';
import Image from 'next/image';

const TopCollections = [
  { 
    imageSrc: "/seller8.png",
    art:"WonderFull artwork",
    createdby:"Created by Jacob Jones",
    images: [
      "/top1.png",
      "/top2.png",
      "/top3.png",
      "/top4.png",
      "/top5.png",
      "/top6.png"
    ]
  },
  {
    imageSrc: "/seller4.png",
    art:"WonderFull artwork",
    createdby:"Created by Jacob Jones",
    images: [
      "/top7.png",
      "/top8.png",
      "/top9.png",
      "/top10.png",
      "/top11.png",
      "/top12.png"
    ]
  },
  {
    imageSrc: "/seller3.png",
    art:"WonderFull artwork",
    createdby:"Created by Jacob Jones",
    images: [
      "/top13.png",
      "/top14.png",
      "/top15.png",
      "/top16.png",
      "/top17.png",
      "/top18.png"
    ]
  }
];

const TopCollection = () => {
  return (
    <div className='relative'>
      <div className="absolute top-[30px] left-0 w-[300px] h-[300px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
      </div>
     <div className="absolute top-84 right-0 h-full w-[400px] hidden md:block -z-1">
                <Image
                  src="/nftsides.svg"
                  alt="Decorative Lines"
                  layout="fill"
                  className="object-contain "
                />
              </div>
              <div className='container mx-auto px-4'>
    <div className="text-center mb-12 py-12">
    <div className="flex justify-between items-center   mt-6 flex-wrap ">
{/* Center Paragraph */}
<p className="text-2xl md:text-4xl lg:text-6xl text-[#2B2B2B] uppercase font-[Apex-Mk2]">
        Top collections
      </p>
      <div className="flex gap-4 shrink-0">
{/* Left Play Button */}
<p className="text-[#FD0000] text-xl  font-roboto  cursor-pointer">View More Collections</p>
</div>
</div>


  </div>
 
    <div className="grid gap-3    md:grid-cols-2 lg:grid-cols-3 ">
      {TopCollections.map((collection, index) => (
        <TopCollectionCard
         key={index} 
         images={collection.images} 
         imageSrc={collection.imageSrc}
         art={collection.art}
         createdby={collection.createdby}
        />
      ))}
    </div>
    </div>
    </div>
  );
};

export default TopCollection;
