import React from 'react';
import { Roboto } from 'next/font/google';
import HeroCard from './HeroCard';
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const cards = [
  {
    name: "John Doe",
    email: "john@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat1.png",
    price: 19.99
  },
  {
    name: "Jusmab",
    email: "jusmab@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat2.png",
    price: 29.99
  },
  {
    name: "center",
    email: "huzaifa@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat3.png",
    price: 39.99
  },
  {
    name: "Sheikh",
    email: "sheikh@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat4.png",
    price: 49.99
  },
];

const FeaturedCollection = () => {
  return (
    <div className="relative mt-16">
      {/* Right-Aligned SVG Background */}
      <div className="absolute top-96 right-0 h-full w-[400px] hidden md:block ">
        <Image
          src="/nftsides.svg"
          alt="Decorative Lines"
          layout="fill"
          className="object-contain "
        />
      </div>

      <div className={`${roboto.className} px-4 py-12 `}>
        {/* Text Section */}
        <div className="text-center mb-12 mx-auto max-w-7xl  ">
          <div className="flex   ">
            <p className="text-2xl md:text-4xl lg:text-6xl text-[#2B2B2B] uppercase">
              Featured collection
            </p>
          </div>

          <div className="flex justify-between items-start   mt-6 px-4 flex-wrap gap-12">
            {/* Center Paragraph */}
            <p className="text-base md:text-lg text-[#808080]">
              Explore our exclusive featured collection, showcasing innovative campaigns and creative
              <br />
              storytelling from top brands around the world.
            </p>

            {/* Buttons on the Right */}
            <div className='hidden md:flex gap-4 shrink-0'>
              <button className="bg-gradient-to-r from-[#FF9292] to-[#FD0000] p-3 rounded-md -rotate-[135deg]">
                <span className="block rotate-[135deg]">
                  <PlayIcon className="text-white w-5 h-5 rotate-180" />
                </span>
              </button>

              <button className="bg-gradient-to-r from-[#FF9292] to-[#FD0000] p-3 rounded-md -rotate-[135deg]">
                <span className="block rotate-[135deg]">
                  <PlayIcon className="text-white w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <HeroCard
                key={index}
                name={card.name}
                email={card.email}
                profileImage={card.profileImage}
                tshirtImage={card.tshirtImage}
                price={card.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
