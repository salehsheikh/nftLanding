'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';

const BidModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-[415px] w-full relative shadow-xl">
        
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#2B2B2B] hover:text-red-500 transition">
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-center text-[26px] md:text-[28px] font-semibold text-[#2B2B2B] font-[Apex_Mk2] mb-6 mt-2 uppercase">
          Place Your Bid
        </h2>

        {/* Divider */}
        <div className="mb-6 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 353 2" fill="none">
            <path
              d="M0 1L353 1.00003"
              stroke="url(#paint0_linear_815_5107)"
              strokeWidth="1.4"
            />
            <defs>
              <linearGradient id="paint0_linear_815_5107" x1="0" y1="1.5" x2="353" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FE0101" stopOpacity="0" />
                <stop offset="0.495" stopColor="#FE0101" />
                <stop offset="1" stopColor="#FE0101" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Input Field */}
        <div className="space-y-2">
          <label htmlFor="bid" className="text-lg  text-[#2B2B2B] font-roboto">
            Enter  bid amount
          </label>
          <input
            type="text"
            id="bid"
            placeholder="Minimum bid 3.52 FRY"
            className="w-full px-4 py-3  mt-2 border font-roboto placeholder-[#808080] border-[#FD0000] rounded-lg focus:outline-none   text-[#2B2B2B]"
          />
        </div>
        <div className='flex justify-between pt-6 text-[#2B2B2B] font-roboto text-lg'>
            <p>
            Service fee
            </p>
            <p className='font-medium uppercase '>
            0.1 FRY
            </p>
        </div>
        <div className='mt-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="353" height="2" viewBox="0 0 353 2" fill="none">
  <path d="M0 1L353 1.00003" stroke="url(#paint0_linear_815_5112)" strokeWidth="1.4"/>
  <defs>
    <linearGradient id="paint0_linear_815_5112" x1="-4.37114e-08" y1="1.5" x2="353" y2="1.50003" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE0101" stop-opacity="0"/>
      <stop offset="0.495" stop-color="#FE0101"/>
      <stop offset="1" stop-color="#FE0101" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
        </div>
        <div className='flex justify-between pt-6 text-[#2B2B2B] font-roboto text-lg'>
            <p>
            Marketplace fee
            </p>
            <p className='font-medium uppercase '>
            0.5 FRY
            </p>
        </div>
        <div className='mt-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="353" height="2" viewBox="0 0 353 2" fill="none">
  <path d="M0 1L353 1.00003" stroke="url(#paint0_linear_815_5112)" strokeWidth="1.4"/>
  <defs>
    <linearGradient id="paint0_linear_815_5112" x1="-4.37114e-08" y1="1.5" x2="353" y2="1.50003" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE0101" stop-opacity="0"/>
      <stop offset="0.495" stop-color="#FE0101"/>
      <stop offset="1" stop-color="#FE0101" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
        </div>
        <div className='flex justify-between pt-6 text-[#2B2B2B] font-roboto text-lg'>
            <p>
            Total bid amount
            </p>
            <p className='font-medium uppercase text-2xl '>
            4.12 FRY
            </p>
        </div>

       <div className='flex justify-between gap-2.5'>
       <button onClick={onClose}
          className="mt-6 w-full py-4 px-8 text-[#2B2B2B] font-roboto text-lg rounded-lg bg-white border-2 border-[#F4F3F3] "
           >
          Cancel
        </button>
        <button
        onClick={onClose}
          className="mt-6 w-full py-4 px-8 text-white font-roboto text-lg rounded-lg "
          style={{
            background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
          }} >
          Place Bid
        </button>
       
      </div>
    </div>
    </div>
  );
};

export default BidModal;
