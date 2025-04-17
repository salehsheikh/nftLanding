import React from 'react';
import { Roboto } from 'next/font/google'
 import {ChevronDoubleRightIcon} from "@heroicons/react/24/outline";
import AuctionCard from './AuctionCard';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const cards = [
    {
      name: "John Doe",
      email: "john@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/Auction1.png",
      time: "3:06:59:18"
    },
    {
      name: "Jusmab",
      email: "jusmab@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/Auctio2.png",
      time: "3:06:59:18"
    },
    {
      name: "center",
      email: "huzaifa@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/Auction3.png",
      time: "3:06:59:18"
    },
    {
      name: "Sheikh",
      email: "sheikh@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/Auction4.png",
      time: "3:06:59:18"
    },
    {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/Auction5.png",
        time: "3:06:59:18"
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/Auction6.png",
        time: "3:06:59:18"
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/Auction7.png",
        time: "3:06:59:18"
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/Auction8.png",
        time: "3:06:59:18"
      },
  
  ];
const Auction = () => {
  return (
    <div className='relative overflow-hidden'>
       <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] bg-[#FD0000] rounded-full blur-[250px] -z-10"></div>
 <div className={`${roboto.className} px-4 py-24 mx-auto max-w-7xl `}>
      {/* Text Section */}
      <div className="text-start px-4 mb-12">
     
  <p className="text-2xl md:text-4xl lg:text-6xl text-[#2B2B2B] uppercase ">
           auction
          </p>
 </div>

      {/* Card Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <AuctionCard
              key={index}
              name={card.name}
              email={card.email}
              profileImage={card.profileImage}
              tshirtImage={card.tshirtImage}
             time={card.time}
            />
          ))}
        </div>
         <div className="flex  justify-center gap-4 mt-12 shrink-0">
          {/* Left Play Button */}
          <button className="text-white rounded-sm bg-gradient-to-r from-[#FF9292] to-[#FD0000]  cursor-pointer px-3 py-2 ">
            <span className="flex items-center gap-2 capitalize ">
              Explore more
              <ChevronDoubleRightIcon className="w-5 h-5 rotate-310" />
            </span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Auction;
