"use client"
import React, { useEffect, useRef, useState } from 'react';
import HeroCard from './HeroCard';
 import {PlayIcon } from "@heroicons/react/24/outline";
 

const cards = [
    {
      name: "John Doe",
      email: "john@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/trend1.png",
      price: 19.99
    },
    {
      name: "Jusmab",
      email: "jusmab@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card2.png",
      price: 29.99
    },
    {
      name: "center",
      email: "huzaifa@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card1.png",
      price: 39.99
    },
    {
      name: "Sheikh",
      email: "sheikh@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/trend4.png",
      price: 49.99
    },
    {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/trend5.png",
        price: 49.99
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/trend6.png",
        price: 49.99
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/trend7.png",
        price: 49.99
      },
      {
        name: "Sheikh",
        email: "sheikh@example.com",
        profileImage: "/profile.png",
        tshirtImage: "/trend8.png",
        price: 49.99
      },
  
  ];
const TrendingNfts = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggle = () => setShowDropdown(prev => !prev);
  useEffect(()=>
  {
    const handleClickOutside=(event)=>{
      if( dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setShowDropdown(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

 
  return (
    <div className='relative'>
      <div className="absolute top-[30px] left-0 w-[300px] h-[300px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
      </div>
 <div className= "px-4 py-16 mx-auto container md:mt-12 mt-0 " >
      {/* Text Section */}
      <div className="text-center mb-12  ">
        <div className="flex justify-between items-center   mt-6   gap-12">
  {/* Center Paragraph */}
  <p className="text-2xl md:text-4xl lg:text-6xl  text-[#000] tracking-[2.5px] uppercase font-[Apex_Mk2]">
            Trending Nft's
          </p>
          <div className="flex gap-4 shrink-0"  ref={dropdownRef}>
  {/* Left Play Button */}
  <button
  onClick={handleToggle}
  className="border border-[#FD0000] cursor-pointer px-[25px] py-[14px] rounded-md text-center">
    <span className="flex items-center gap-2 text-[#FD0000] font-roboto text-lg capitalize">
      Last 30 minutes
      <PlayIcon className="w-6 h-6 rotate-90" />
    </span>
  </button>
  {showDropdown && (
                <ul className="absolute right-auto mt-16 w-54 bg-[#F9F9F9] border border-[#FD0000] shadow-lg rounded-md z-10">
                  {["Last 30 minutes", "Last 1 hour", "Last 24 hours", "Last 7 days"].map((option, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 text-lg font-roboto text-[#2B2B2B] hover:bg-[#F9E0E0] text-start cursor-pointer"
                      onClick={() => {
                        setShowDropdown(false);
                      
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
</div>
</div>


      </div>

      {/* Card Grid */}
      <div className=" mt-4">
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

export default TrendingNfts;
