"use client"

import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

export const metadata = {
  title: "Points - Top Catigories",
};

type CardProps = {
  item: {
    slug: string
    name: string;
    priceStart: number;
    priceEnd: number;
    rating: string;
    image: string;
  };
};

const Card = ({ item }: CardProps) => {
  return (
    <Link href={{
      pathname: `/top-giftcards/${item.slug}`,
      query: item
    }} className="w-full min-h-[320px] rounded-[10px] p-2">
      <img
        src={item.image}
        alt=""
        className="w-full h-[200px] hover:scale-105 transition-all duration-300 rounded-[10px]"
      />
      <div className="flex justify-between">
        <div className="mt-2 grid">
          <span className=" font-bold  text-[22px] capitalize">
            {item.name}
          </span>
          <span className="text-lg mt-[-5px] font-medium text-[#231F20]">
            {item.priceStart} NGN - {item.priceEnd} NGN
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-bold">4.6</span>
          <StarIcon />
        </div>
      </div>
    </Link>
  );
};

const UtilityBills = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const topGiftCard = [
    {
      slug: "hulu",
      name: "hulu",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/hulu.png",
    },
    {
      slug: "fanatics",
      name: "fanatics",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/fanatics.png",
    },
    {
      slug: "google-play",
      name: "google play",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/google-play.png",
    },
    {
      slug: "mtn",
      name: "MTN",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/mtn.png",
    },
    {
      slug: "hulu",
      name: "hulu",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/hulu.png",
    },
    {
      slug: "fanatics",
      name: "fanatics",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/fanatics.png",
    },
    {
      slug: "google-play",
      name: "google play",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/google-play.png",
    },
    {
      slug: "mtn",
      name: "MTN",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/mtn.png",
    },
  ];
  return (
    <div className="overflow-hidden mt-20">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-5">
        <div>
          <h2 className="text-[32px] font-extrabold cursor-pointer">
            Utility Bills
          </h2>
        </div>
        <div className="flex items-center justify-end gap-3">
          <span className="font-semibold text-xl">See all</span>
          <div className="flex gap-3">
            <div
              className="h-[42px] w-[42px] rounded-full bg-[#313633] text-white flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105"
              ref={navigationPrevRef}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </div>
            <div
              className="h-[42px] w-[42px] rounded-full bg-[#313633] text-white flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105"
              ref={navigationNextRef}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
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
              spaceBetween: 18,
            },
          }}
          className="mySwiper"
        >
          {topGiftCard.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card {...{ item }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default UtilityBills
