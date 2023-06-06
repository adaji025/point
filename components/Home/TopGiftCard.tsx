"use client";

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const Card = () => {
  return (
    <div className="w-[280px] sm:max-w-[300px] min-h-[300px]">
      <img
        src="/images/uber.jpg"
        alt=""
        className="w-full h-[200px] hover:scale-105 transition-all duration-300"
      />
      <div className="flex justify-between">
        <div className="mt-2 grid">
          <span className=" font-semibold  text-[24px]">Uber</span>
          <span className="text-lg mt-[-5px] font-medium text-black/60">
            60 UC - $50
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-bold">4.6</span>
          <BsStarFill />
        </div>
      </div>
    </div>
  );
};

const TopGiftCard = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="mt-20 max-w-[1400px] mx-auto px-4 lg:px-8">
      <Link href="/top-categories">
        <h2 className="text-[32px] font-semibold cursor-pointer">
          Top gift cards in Turkey
        </h2>
      </Link>
      <div className="text-lg text-dark/50 font-medium">
        The easiest way to shop with crypto
      </div>
      <div className="flex items-center justify-end gap-3">
        <span className="font-semibold text-xl">See all</span>
        <div className="flex gap-3">
          <div
            className="h-[42px] w-[42px] rounded-full bg-black/20 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105"
            ref={navigationPrevRef}
          >
            <FiChevronLeft />
          </div>
          <div
            className="h-[42px] w-[42px] rounded-full bg-black/20 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105"
            ref={navigationNextRef}
          >
            <FiChevronRight />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          navigation={{
            // Both prevEl & nextEl are null at render so this does not work
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current
    
              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
          modules={[Navigation]}
          breakpoints={{
            400: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3.6,
              spaceBetween: 40,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {[...Array(10)].map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopGiftCard;
