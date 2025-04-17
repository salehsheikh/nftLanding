"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/explore", label: "Explorer" },
  ];

  return (
    <div className="relative overflow-hidden">
    <div className="absolute bottom-0 left-0 h-full w-[140px] 2xl:w-96 hidden md:block z-10 ">
                        <Image
                          src="/sellerright.png"
                          alt="Decorative Lines"
                          layout="fill"
                          className="object-contain scale-y-150"
                        />
                      </div>
    <nav className=" w-full bg-[#FFF9F9]  z-50 mx-5 lg:mx-7 xl:mx-auto ">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-[#DE0308]"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 md:ml-0 ml-4 overflow-hidden cursor-pointer">
            <img
              src="/logo.png"
              alt="NFT Marketplace"
              className="h-16 w-16" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-[#DE0308] text-lg border-b-1 border-[#DE0308]"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="px-4 2xl:px-6 py-3 md:text-lg 2xl:text-[22px] font-roboto text-white rounded-sm bg-gradient-to-r from-[#FF9292] to-[#FD0000]  cursor-pointer">
              Connect Wallet
            </button>
            <button className="px-4 2xl:px-6 py-2 md:text-lg 2xl:text-[22px] font-roboto text-[#FE0101] bg-transparent rounded-sm border-2 border-[#FE0101] cursor-pointer">
              Create NFT
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden   relative top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
            {/* Mobile Links */}
            <div className="flex  justify-center items-center flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-1 text-sm font-medium ${
                    pathname === link.path
                      ? "text-[#DE0308] border-l-2 border-[#DE0308]"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="mt-6 flex  justify-center items-center flex-col space-y-4">
              <button className="w-full sm:w-1/2 px-6 py-3 text-[18px] font-roboto text-white rounded-sm bg-gradient-to-r from-[#FF9292] to-[#FD0000] cursor-pointer">
                Connect Wallet
              </button>
              <button className="w-full sm:w-1/2 px-6 py-2 text-[18px] font-roboto text-[#FE0101] bg-transparent rounded-sm border-2 border-[#FE0101] cursor-pointer">
                Create NFT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;