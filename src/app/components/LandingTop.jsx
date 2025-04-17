'use client';

import Image from 'next/image';

const LandingTop = () => {
  return (
    <div className='relative'>
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] bg-[#FD0000] rounded-full blur-[250px] -z-10"></div>

    <section className="relative w-full h-screen mt-10">
      <Image
        src="/landpic.webp" 
        alt="Overlay Image"
        layout="fill"
        className="object-cover scale-70 "
      />
      <Image
        src="/handexp.webp"
        alt="First Image"
        layout="fill"
        className="object-cover mt-21 scale-y-110 scale-x-99 "
        priority
      />
    </section>
    </div>
  );
};

export default LandingTop;
