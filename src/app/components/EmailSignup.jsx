"use client"
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Email submitted:', email);
  };

  return (
    <div className='relative'>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
      </div>
    <div className="max-w-4xl mx-auto px-4  mt-24 py-8">
      {/* First Row - Text */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-oxanium font-bold text-[#2B2B2B] ">
        Ready for Next NFT Drop?
        </h2>
      </div>

      {/* Second Row - Email Input */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto ">
        <div className="flex flex-row items-center gap-4 border border-[#FD0000] rounded-[15px] py-2.5 px-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="info@gmail.com"
            className="w-full px-4 py-3 font-roboto text-red-500 bg-transparent border-none outline-none placeholder-[#FE0101] opacity-[0.7] text-sm md:text-2xl flex-grow "
            required
          />
          <button
            type="submit"
            className="w-[88px] h-[76px]  text-white rounded-[15px] px-4 py-4 md:py-5 md:px-[27px] cursor-pointer flex items-center justify-center"
            style={{
              background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
            }}>
            <PaperAirplaneIcon className="w-8 h-8 rotate-311 shrink-0" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EmailSignup;