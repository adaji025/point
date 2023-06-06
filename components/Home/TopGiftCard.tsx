"use client"

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Card = () => {
  return (
    <div className="w-[280px] sm:max-w-[300px] min-h-[300px]">
      <img src="/images/uber.jpg" alt="" className="w-full h-[200px] hover:scale-105 transition-all duration-300" />
      <div className="mt-2 grid">
        <span className=" font-semibold  text-[24px]">Uber</span>
        <span className="text-lg mt-[-5px] font-medium text-black/60">60 UC - $50</span>
      </div>
    </div>
  );
};

const TopGiftCard = () => {
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
          <div className="h-[42px] w-[42px] rounded-full bg-black/20 flex justify-center items-center">
            <FiChevronLeft />
          </div>
          <div className="h-[42px] w-[42px] rounded-full bg-black/20 flex justify-center items-center">
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
          modules={[]}
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
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopGiftCard;
