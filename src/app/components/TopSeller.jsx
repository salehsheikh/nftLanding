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
          <div className="px-4 container mx-auto mt-20">
   <div className="text-center mb-12 ">
        <div className="flex justify-between items-center   mt-6  flex-wrap gap-12">
  <p className="text-2xl md:text-4xl lg:text-6xl text-[#000] tracking-[2.5px] uppercase font-[Apex_Mk2] ">
            Top seller
          </p>
          <div className="flex gap-4 shrink-0">
  <p className="text-[#FD0000] text-[22px]  font-medium capitalize cursor-pointer font-roboto">View all</p>
</div>
</div>


      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
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
