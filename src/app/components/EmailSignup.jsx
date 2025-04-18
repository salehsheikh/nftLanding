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
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-oxanium  text-gray-900 uppercase">
          Ready for Next Drop ?
        </h2>
      </div>

      {/* Second Row - Email Input */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center gap-4 border-2 border-red-500 rounded-lg p-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="info@gmail.com"
            className="w-full px-4 py-3 text-red-500 bg-transparent border-none outline-none placeholder-red-500 text-sm md:text-base flex-grow "
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto text-white rounded-md px-4 py-4 md:py-5 md:px-[27px] cursor-pointer flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
            }}>
            <PaperAirplaneIcon className="w-8 h-8 rotate-310" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EmailSignup;