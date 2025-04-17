import Image from "next/image";
import SellerSection from "./SellerSection";
const TopSellers=[
    {
        imageSrc:"/seller1.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller2.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller3.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller4.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller5.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller6.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller7.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
    {
        imageSrc:"/seller8.png",
        name:"Jacob Jones",
        paragraph:"245.5 FRY"
    },
]

const TopSeller = () => {
  return (
    <div className="relative ">
       <div className="absolute top-[30px] right-0 w-[310px] h-[310px] rounded-full bg-[#FD0000] blur-[250px] hidden md:block -z-10">   
       </div>
     <div className="absolute top-96 right-1 h-full w-[400px] hidden md:block ">
            <Image
              src="/sellerright.png"
              alt="Decorative Lines"
              layout="fill"
              className="object-contain  "
            />
          </div>
          <div className="absolute top-48 left-0  h-full w-[250px] hidden md:block -z-4 opacity-50">
            <Image
              src="/nftsides.svg"
              alt="Decorative Lines"
              layout="fill"
              className="object-contain scale-y-180 "
            />
          </div>
   <div className="text-center mb-12 py-12 mx-auto">
        <div className="flex justify-between items-center  max-w-7xl mx-auto mt-6 px-4 flex-wrap gap-12">
  {/* Center Paragraph */}
  <p className="text-2xl md:text-4xl lg:text-6xl text-[#2B2B2B] uppercase ">
            Top seller
          </p>
          <div className="flex gap-4 shrink-0">
  {/* Left Play Button */}
  <p className="text-[#FD0000] text-xl cursor-pointer">View all</p>
</div>
</div>


      </div>
    <div className=" max-w-7xl py-3 mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {TopSellers.map((seller, index) => (
            <SellerSection
              key={index}
              name={seller.name}
              paragraph={seller.paragraph}
              imageSrc={seller.imageSrc}
            />
          ))}
        </div>
      </div>
      </div>
  );
};

export default TopSeller;
