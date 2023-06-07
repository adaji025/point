"use client";

import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline'
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const Card = () => {
  return (
    <div className="w-[280px] sm:max-w-[300px] min-h-[200px] bg-[#ecefed] px-6 py-3">
      <p className="text-center">
        You really need to get updated bro! Don't you know you can live on
        #Bitcoin ? Ever heard of @bitrefill for example? #Btc fixes everything
      </p>
      <div className="flex justify-center items-center gap-2">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-[28px] w-[28px] rounded-full"
        />
        <span className="font-medium text-base">Adaji Mukhtar</span>
      </div>
    </div>
  );
};

const Testimony = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="mt-20 max-w-[1400px] mx-auto px-4 lg:px-8">
      <Link href="/top-categories">
        <h2 className="text-[32px] font-semibold cursor-pointer">
          We’re the most trusted crypto ecommerce worldwide
        </h2>
      </Link>

      <div className="flex items-center justify-end gap-3">
        <span className="font-semibold text-xl">See all</span>
        <div className="flex gap-3">
          <div
            className="h-[42px] w-[42px] rounded-full bg-black/20 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105"
            ref={navigationPrevRef}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </div>
          <div
            className="h-[42px] w-[42px] rounded-full bg-black/20 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105"
            ref={navigationNextRef}
          >
            <ChevronRightIcon className="h-5 w-5" />
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
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          modules={[Navigation]}
          breakpoints={{
            360: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3.2,
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

export default Testimony;
