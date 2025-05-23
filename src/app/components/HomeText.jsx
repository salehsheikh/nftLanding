import React from 'react'; 
const HomeText = () => {
  return (
<div className="  text-center px-4 mt-8 ">
<div className="flex justify-center">
        <p className="max-w-6xl font-['Apex_Mk2'] text-4xl md:text-6xl lg:text-8xl leading-normal lg:leading-25.5  text-[#2B2B2B] uppercase tracking-[3.84px]">
          Discover, create & sell artworks.
        </p>
      </div>
      <div className="gap-[15px] flex justify-center">
        <p className="text-lg font-roboto font-light md:text-lg max-w-2xl text-[#808080] ">
          Discover and trade unique digital art pieces on our NFT website,
          <br className='hidden lg:block' /> where creativity meets blockchain technology.
        </p>
      </div>
    </div>
  );
};

export default HomeText;
