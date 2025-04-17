'use client';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const BootsNfts = () => {
  return (
    <div className='relative'>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
      </div>
    <div className="max-w-7xl mx-auto  px-4 py-16 boost-bg md:py-24">
      <div className=" p-8 rounded-2xl ">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 md:space-y-8 ">
            <h3 className="text-3xl md:text-6xl uppercase font-['Apex_Mk2'] text-gray-900 leading-tight">
              Boost Your NFTs: Enhance Visibility & Value
            </h3>
            <p className="text-lg md:text-xl text-gray-600 font-roboto leading-relaxed">
            The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 cursor-pointer rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
            <span className="font-semibold text-lg">Boost </span>
              <RocketLaunchIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:w-1/2 aspect-square min-h-[300px]">
            <Image
              src="/boost.svg"
              alt="NFT boost visualization graphic"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BootsNfts;