'use client';
import React, { useRef } from 'react';
import HeroCard from './HeroCard';
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cards = [
  {
    name: "Stella nova",
    email: "@Stell Nova",
    profileImage: "/profile.png",
    tshirtImage: "/feat1.png",
    price: 19.99
  },
  {
    name: "Jusmab",
    email: "jusmab@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat2.png",
    price: 29.99
  },
  {
    name: "center",
    email: "huzaifa@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat3.png",
    price: 39.99
  },
  {
    name: "Sheikh",
    email: "sheikh@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat4.png",
    price: 49.99
  },
  {
    name: "John Doe",
    email: "john@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat5.png",
    price: 19.99
  },
  {
    name: "Jusmab",
    email: "jusmab@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat6.png",
    price: 29.99
  },
  {
    name: "center",
    email: "huzaifa@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat7.png",
    price: 39.99
  },
  {
    name: "Sheikh",
    email: "sheikh@example.com",
    profileImage: "/profile.png",
    tshirtImage: "/feat8.png",
    price: 49.99
  },
];

const FeaturedCollection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Decorative SVG */}
      <div className="absolute top-96 right-0 h-full w-[400px] hidden md:block">
        <Image
          src="/nftsides.svg"
          alt="Decorative Lines"
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="px-4 py-12 mx-auto container overflow-y-visible">
        {/* Title and Buttons */}
        <div className="mb-12">
          <div className="flex">
            <p className="text-2xl md:text-4xl font-['Apex_Mk2'] lg:text-6xl text-[#000] tracking-[2.5px] uppercase">
              Featured collection
            </p>
          </div>

          <div className="flex justify-between items-start mt-6 flex-wrap gap-12">
            <p className="text-base md:text-lg font-roboto text-[#808080]">
              Explore our exclusive featured collection, showcasing innovative campaigns and creative
              <br />
              storytelling from top brands around the world.
            </p>

            <div className="hidden md:flex gap-6">
              <button
                ref={prevRef}
                className="p-3 rounded-md -rotate-[135deg] "
                style={{
                  background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
                }}
              >
                <span className="block rotate-[135deg] cursor-pointer">
                  <PlayIcon className="text-white w-5 h-5 rotate-180" />
                </span>
              </button>

              <button
                ref={nextRef}
                className="p-3 rounded-md -rotate-[135deg] cursor-pointer "
                style={{
                  background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
                }}
              >
                <span className="block rotate-[135deg]">
                  <PlayIcon className="text-white w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, ]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          speed={2000}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <HeroCard
                name={card.name}
                email={card.email}
                profileImage={card.profileImage}
                tshirtImage={card.tshirtImage}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCollection;
