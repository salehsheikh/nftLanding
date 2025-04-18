"use client"
import Image from 'next/image';
import { useState } from 'react';
import BidModal from './modals/BidModal';

const AuctionCard = ({ 

  name, 
  email, 
  profileImage, 
  tshirtImage, 
  time
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      {/* Card Container */}
      <div className="min-w-[308px] mx-auto rounded-2xl shadow-md overflow-hidden relative   group transition-all duration-200 hover:opacity-80 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/card.png')" }}>

        {/* Profile Info */}
        <div className="flex justify-start gap-4 items-center p-6 pb-4">
               <div className="relative w-13.5 h-13.5 shrink-0">
                 <Image
                   src={profileImage}
                   alt="Profile"
                   layout="fill"
                   className="rounded-full object-cover"
                 />
               </div>
               <div className="space-y-1">
                 <h3 className="font-[Apex-Mk2]  text-[#2B2B2B] text-lg ">{name}</h3>
                 <p className="text-[#6B6B6B] font-roboto text-xs">{email}</p>
               </div>
             </div>

        {/* T-shirt Area */}
        <div className="relative aspect-square rounded px-4 pb-4">
          <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-gray-100">
            <Image
              src={tshirtImage}
              alt="T-Shirt Design"
              layout="fill"
              className="object-cover"
            />

            {/* Animated Button Group */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3">

              {/* Place a Bid Button – hidden by default, fades in & slides up */}
              <button
              onClick={()=>setIsModalOpen(true)}
                className=" text-white px-4 py-2 rounded-lg shadow-lg 
                opacity-0 translate-y-12 
                group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-[1000ms]"
                style={{
                  background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
                }}
              >
                Place a Bid
              </button>

              {/* Time Button – slides slightly down on hover */}
              <button
                className="bg-white text-black px-4 py-2 rounded-lg shadow-md opacity-90 
                -translate-y-12 group-hover:translate-y-4 
                transition-all duration-[1000ms]"
              >
                {time}
              </button>

            </div>
          </div>
        </div>
      </div>
      <BidModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default AuctionCard;
