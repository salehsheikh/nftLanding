import React from 'react';
import { Roboto } from 'next/font/google'

import SoldCard from './SoldCard';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const cards = [
    {
      name: "John Doe",
      email: "john@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card2.png",
      price: 19.99
    },
    {
      name: "Jusmab",
      email: "jusmab@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/sold3.png",
      price: 29.99
    },
    {
      name: "center",
      email: "huzaifa@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/sold2.png",
      price: 39.99
    },
    {
      name: "Sheikh",
      email: "sheikh@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/sold4.png",
      price: 49.99
    },
    {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/feat4.png",
        price: 49.99
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/sold6.png",
        price: 49.99
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/sold7.png",
        price: 49.99
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/sold8.png",
        price: 49.99
      },
  
  
  ];
const Sold = () => {
  return (
    <div className='relative'>
             <div className="absolute bottom-70
              right-0 w-[310px] h-[310px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
             </div>
 <div className="px-4 py-8 mt-12 font-roboto mx-auto max-w-7xl ">
     <div className="mx-auto px-4 mb-12 ">
     
     <p className="text-2xl md:text-4xl lg:text-6xl text-[#2B2B2B] uppercase ">
              Recently Sold
             </p>
    </div>
      {/* Card Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <SoldCard
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
  );
};

export default Sold;
