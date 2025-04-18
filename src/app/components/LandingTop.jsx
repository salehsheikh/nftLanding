'use client';

import Image from 'next/image';

const LandingTop = () => {
  return (
    <div className='relative'>
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] bg-[#FD0000] rounded-full blur-[250px] -z-10"></div>
      <div className="absolute top-[90%] z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] bg-[#FD0000] rounded-full blur-[250px] "></div>

    <section className="relative  mx-auto w-full h-screen mt-10  ">
      <Image
        src="/landpic.webp" 
        alt="Overlay Image"
        layout="fill"
        className="object-fit  container  mx-auto z-10"
      />
      <Image
        src="/hands.png"
        alt="First Image"
        layout="fill"
        className="object-cover relative  mt-78 z-0"
        priority
      />
    </section>
    </div>
  );
};

export default LandingTop;
