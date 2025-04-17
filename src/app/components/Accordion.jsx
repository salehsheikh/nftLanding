'use client';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';


const faqs = [
  {
    question: 'What is NFT ALGO?',
    answer: 'NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.',
  },
  {
    question: 'How do I buy NFTs?',
    answer: 'To buy NFTs, simply connect your wallet, browse collections, and place a bid or buy now using supported cryptocurrencies.',
  },
  {
    question: 'How can I sell my NFT?',
    answer: 'Go to your profile, select the NFT you want to sell, set the price, and list it on the marketplace.',
  },
  {
    question: 'Is there a fee for selling NFTs?',
    answer: 'Yes, we charge a small transaction fee to support the platform and provide a smooth experience for buyers and sellers.',
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative ">
    <div className="absolute top-0 right-0 w-[310px] h-[310px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
    </div>
    <div className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl xl:text-6xl text-[#2B2B2B]  text-center mb-8 uppercase font-['Apex_Mk2']">Frequently Asked Questions</h2>

      <div className="space-y-4 ">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border border-gray-300   rounded-lg transition-all ${
                isOpen ? 'bg-[#FD0000] '  : 'bg-[#FFF9F9] '
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-start gap-4 p-4 text-left focus:outline-none cursor-pointer"
              >
                <span >
                  {isOpen ? <MinusIcon  className='text-lg text-black w-5 h-5'/> : <PlusIcon className='text-lg text-black w-5 h-5'/>}
                </span>
                <span className="text-[#2B2B2B] text-xl  ">{item.question}</span>
                
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-[#808080] bg-white flex text-center rounded-md text-lg">
                  {item.answer}
                </div>
              )} 
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Accordion;
