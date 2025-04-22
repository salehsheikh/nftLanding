'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is an NFT?',
      answer:
        'An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.',
    },
    {
      question: 'How do I buy an NFT?',
      answer:
        'To buy an NFT, connect a crypto wallet, browse an NFT marketplace, and purchase the NFT using cryptocurrency.',
    },
    {
      question:'How do I sell an NFT?',
      answer:'To sell an NFT, connect your crypto wallet to an NFT marketplace, upload your digital asset, and create a listing by setting a price (fixed or auction). Once listed, buyers can view and purchase your NFT. Upon sale, the NFT is transferred to the buyer and you receive the payment in cryptocurrency'
    },
    {
      question: 'What cryptocurrencies do you accept?',
      answer:
' We accept a variety of popular cryptocurrencies for NFT transactions, including Ethereum (ETH), Polygon (MATIC), Binance Coin (BNB), and Solana (SOL). The accepted currencies may vary depending on the marketplace and blockchain network your NFT is listed on.'  
  }
 
    
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-[310px] h-[310px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10" />

      <div className="max-w-[1037px] mx-auto px-4 my-16">
        <h2 className="text-3xl xl:text-6xl text-[#2B2B2B] font-bold text-center mb-8 uppercase font-['Apex_Mk2'] tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-[#E7E7E7] bg-[#FFF9F9] shadow-sm px-5 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center gap-3 px-5 text-left  ${
                    isOpen ? 'bg-[#F9E0E0]  py-2.5 ' : 'bg-[#FFF9F9]'
                  } rounded-[20px] my-2 h-21.5 opacity-[0.1px]  `}
                >
                  {isOpen ? (
                    <MinusIcon className="w-7.5 h-7.5 text-black cursor-pointer" />
                  ) : (
                    <PlusIcon className="w-7.5 h-7.5 text-black cursor-pointer" />
                  )}
                  <span className="text-[#2B2B2B] font-semibold text-[22px]  font-roboto">
                    {item.question}
                  </span>
                </button>

                {isOpen && (
                  <div className="bg-transparent px-14 py-2.5 text-[#808080] text-sm md:text-lg leading-relaxed font-roboto rounded-b-xl">
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
