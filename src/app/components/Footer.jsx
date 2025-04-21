import Image from "next/image";
import LogoGrid from "./LogoGrid";

const Footer = () => {
    const logos = [
       "/fblogo.png",
       "/tellogo.png",
       "/linkdenlogo.png",
       "/discord.png",
        "/inst.png",
        "/tiktok.png",
         "/redit.png",
        "/github.png",
       
      ];
  return (
    <div className="relative overflow-hidden">
    <div className="absolute bottom-0 left-0 h-full w-[240px] hidden md:block -z-1 ">
                    <Image
                      src="/sellerright.png"
                      alt="Decorative Lines"
                      layout="fill"
                      className="object-contain scale-y-150"
                    />
                  </div>
                  <div className="absolute top-0 right-0 h-full w-[400px] hidden md:block -z-1  ">
                    <Image
                      src="/sellerright.png"
                      alt="Decorative Lines"
                      layout="fill"
                      className="object-contain scale-110"
                    />
                  </div>
    <footer className="bg-[linear-gradient(276deg,_#FD0000_-0.05%,_#FF9292_201.36%)] rounded-2xl max-w-[1320px] mx-4 md:mx-12 xl:mx-auto    min-h-89 my-6 text-white py-10 px-6">
      <div className="  grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_1fr] gap-16 items-start ">

        {/* Full-height image */}
        <div className="relative left-0 w-full h-full scale-x-110 scale-y-160 mt-8  ">
          <Image
            src="/footerwave.png"
            alt="Footer Image"
            layout="fill"
            className="object-cover rounded-md  text-[#fff]  "
          />
        </div>

        {/* Logo Column */}
        <div className="flex flex-col items-start md:-translate-x-40 justify-start cursor-pointer">
          <Image
            src="/flogo.png"
            alt="Logo"
            width={195}
            height={130}
          />
        </div>

        {/* Text + 8 logos - Wider column */}
        <div className="flex flex-col gap-8 md:col-span-2 lg:col-auto md:-translate-x-10">
          <p className="text-xl leading-9 max-w-[600px] font-roboto">
            NFT ALGO is the world’s leading NFTs marketplace
            where you can discover, sell and bid NFTs and get rich.
          </p>
          <LogoGrid logos={logos} />
        </div>

        {/* About List */}
        <div className="text-center lg:text-left font-roboto text-[#fff] font-bold">
         
          <ul className="  gap-3">
          <li className="text-2xl font-semibold text-white leading-[35px] ">About</li>
            <li className="text-[20px] text-xl leading-[50px] cursor-pointer font-medium">About Nft</li>
            <li className="text-[20px] text-xl leading-[50px] cursor-pointer font-medium">Live Auctions</li>
            <li className="text-[20px] text-xl leading-[50px] cursor-pointer font-medium">Collection</li>
            <li className="text-[20px] text-xl leading-[50px] cursor-pointer font-medium">Activity</li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;