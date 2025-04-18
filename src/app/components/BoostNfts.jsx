'use client';

import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const BootsNfts = () => {
  return (
    <div className="relative">
      {/* Blurred Red Circle BG */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10" />

      {/* Main Section */}
      <section className="container mx-auto px-4 py-6">
        <div className=" rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Text Section */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-5xl xl:text-6xl uppercase font-['Apex_Mk2'] text-gray-900 tracking-[1.92px]">
                Boost Your NFTs: Enhance Visibility And Value
              </h3>
              <p className="text-base md:text-lg xl:text-xl text-gray-600 font-roboto ">
                The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.
              </p>
              <button className="mt-32 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center gap-[10px] "  
              style={{
      background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
    }}>
                <span className="font-medium font-roboto text-lg">Boost</span>
                <RocketLaunchIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative w-full aspect-square min-h-[300px]">
              <Image
                src="/boost.svg"
                alt="NFT boost visualization graphic"
                fill
                className="object-contain -translate-y-22 2xl:-translate-y-12"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootsNfts;
