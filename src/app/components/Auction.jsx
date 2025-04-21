import React from 'react';
 import {ChevronDoubleRightIcon} from "@heroicons/react/24/outline";
import AuctionCard from './AuctionCard';

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
 <div className= "px-4 py-24 mx-auto container mt-12 ">
      {/* Text Section */}
      <div className="text-start px-4 mb-6 mt-28 ">
     
  <p className="text-2xl md:text-4xl lg:text-6xl  uppercase font-[Apex_Mk2] font-normal text-[#000] tracking-[2.5px]">
           auction
          </p>
 </div>

      {/* Card Grid */}
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
         <div className="flex  justify-center  mt-12 shrink-0">
          <button className="text-white rounded-sm   cursor-pointer px-8 py-4 "
          style={{
            background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
          }}>
            <span className="flex gap-2.5 capitalize ">
              Explore more
              <ChevronDoubleRightIcon className="w-6 h-6 rotate-310" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction;
