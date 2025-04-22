'use client';

import Image from 'next/image';

const LandingTop = () => {
  return (
    <div className='relative'>
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] bg-[#FD0000] rounded-full blur-[250px] "></div>
    <section className="relative  mx-auto w-full  h-screen mt-[85px]  ">
      <Image
        src="/landpic.webp" 
        alt="Overlay Image"
        layout="fill"
        className="object-fit  container max-w-7xl lg:max-w-[735px] 2xl:max-w-[921px] !max-h-[410px] mx-auto  "
      />
      <Image
        src="/hands.png"
        alt="First Image"
        layout="fill"
        className="object-contain relative  -mt-5 -z-10"
        priority
      />
    </section>
    </div>
  );
};

export default LandingTop;
