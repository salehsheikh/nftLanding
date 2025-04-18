'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
const wallets = [
  { name: 'Pera', image: '/navmod1.png' },
  { name: 'Defly', image: '/navmod2.png' },
  { name: 'Defi', image: '/navmod3.png' },
  { name: 'WalletConnect', image: '/navmod4.png' },
];

const NavModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-3xl p-6 max-w-[415px] w-full relative">
        
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-black">
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-[#2B2B2B] font-[Apex_Mk2] mb-6 mt-2">
          Connect your Wallet
        </h2>

        {/* Logo Image */}
        <div className="flex justify-center mb-2">
          <Image src="/modallogo.png" alt="Wallet Logo" width={106} height={80} />
        </div>

        {/* Logo Text */}
        <div className="text-center text-lg font-medium font-roboto text-[#FD0000] mb-4">
         Fry Networks
        </div>

        {/* Divider */}
        <div className='mb-4 flex  justify-center' >
          <svg xmlns="http://www.w3.org/2000/svg" width="353" height="2" viewBox="0 0 353 2" fill="none">
  <path d="M0 1L353 1.00003" stroke="url(#paint0_linear_815_5107)" strokeWidth="1.4"/>
  <defs>
    <linearGradient id="paint0_linear_815_5107" x1="-4.37114e-08" y1="1.5" x2="353" y2="1.50003" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE0101" stop-opacity="0"/>
      <stop offset="0.495" stop-color="#FE0101"/>
      <stop offset="1" stop-color="#FE0101" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
</div>

        {/* Wallet Options */}
        <div className="space-y-4 font-roboto text-xs">
      {wallets.map((wallet, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 px-4 py-3 rounded-[8px] border-[1.8px] border-[#FD0000] cursor-pointer hover:bg-[#FFF4F4] transition"
        >
          <Image src={wallet.image} alt={wallet.name} width={30} height={30} />
          <span className="text-[#2B2B2B] font-medium">{wallet.name}</span>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default NavModal;
