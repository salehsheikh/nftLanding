'use client';

import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const BootsNfts = () => {
  return (
    <div className="relative">
      {/* Blurred Red Circle BG */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10" />

      {/* Main Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section (takes more space) */}
          <div className="md:flex-[1.9] space-y-[15px] mt-12">
            <h3 className="text-3xl md:text-5xl xl:text-6xl uppercase font-['Apex_Mk2'] text-[#2B2B2B] tracking-[1.92px]">
              Boost Your NFTs: Enhance Visibility And Value
            </h3>
            <p className="text-base md:text-lg text-[#6B6B6B] font-roboto tracking-wide leading-normal ">
              The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, <br /> featured sections, and on the homepage, maximizing exposure to potential buyers.
            </p>
            <button
              className="text-white px-8 py-4  cursor-pointer rounded-xl flex items-center gap-3 font-medium font-roboto text-lg border-[1.8px] border-[#FD0000] 2xl:mt-18 mt-10"
              style={{
                background: 'linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)',
              }}
            >
              <span>Boost</span>
              <RocketLaunchIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Image Section */}
          <div className="md:flex-1 w-auto relative aspect-square min-h-[620px]  2xl:min-h-[800px] ">
            <Image
              src="/boost.svg"
              alt="NFT boost visualization graphic"
              fill
              className="object-contain xl:-translate-y-12"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootsNfts;
