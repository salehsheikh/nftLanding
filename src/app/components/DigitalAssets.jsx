'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Image from 'next/image';

const DigitalAssets = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual submission logic
    console.log('Submitted:', text);
    setText('');
  };

  return (
    <div className="relative">
         <div className="absolute bottom-68 left-0 h-full w-[240px] hidden md:block -z-1">
                <Image
                  src="/sellerright.png"
                  alt="Decorative Lines"
                  layout="fill"
                  className="object-contain scale-y-150"
                />
              </div>
              {/* Right-Aligned SVG Background */}
                    <div className="absolute top-[428px] right-0 h-full w-[400px] hidden md:block ">
                      <Image
                        src="/nftsides.svg"
                        alt="Decorative Lines"
                        layout="fill"
                        className="object-contain scale-y-160 "
                      />
                    </div>
    <div className='mx-auto mt-12 max-w-7xl'>
          <div className="text-center mb-12 max-w-4xl mx-auto px-4 uppercase">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Apex_Mk2'] text-gray-900 leading-tight tracking-tight">
          Turn your Imagination
          <br className="hidden md:block" />
          Into Digital Assets
        </h1>
      </div>

    <div className="relative min-h-screen mt-24 flex items-center justify-center px-4">
      {/* SVG Background */}
    
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/assetscards.svg" 
          alt="Background SVG"
          layout="fill"
          className="pointer-events-none select-none contain"
        />
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-transparent backdrop-blur-xs rounded-xl p-3 md:p-4 "
      >
        <div className="flex bg-[#ffffff] flex-col md:flex-row items-center gap-4  shadow-lg rounded-lg p-1.5">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Fantasy creature holding a sword..."
            className="w-full px-4 py-3 text-gray-300 bg-transparent border-none outline-none placeholder-gray-500 text-sm md:text-base flex-grow"
            required
          />
          <button
            type="submit"
            className="w-full cursor-pointer md:w-auto bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-4 md:py-3 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <span className="font-semibold ">Generate</span>
            <PaperAirplaneIcon className="w-5 h-5 rotate-[310deg]" />

          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default DigitalAssets;



