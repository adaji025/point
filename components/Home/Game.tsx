"use client";

import React, {useState, useEffect} from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTheme } from "next-themes";

SwiperCore.use([Navigation]);

type CardProps = {
  item: {
    slug: string;
    name: string;
    priceStart: number;
    priceEnd: number;
    rating: string;
    image: string;
  };
};

const Card = ({ item }: CardProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  useEffect(() => setMounted(true)) 
  return (
    <Link
      href={{
        pathname: `/games/${item.slug}`,
      }}
      className="w-full min-h-[300px] rounded-[16px] p-2 cursor-pointer"
    >
      <img
        src={item.image}
        alt=""
        className="w-full h-[400px] object-cover hover:scale-95 transition-all duration-300 rounded-[16px]"
      />
      <div className="flex justify-between">
        <div className="mt-2 grid">
          <span className="font-bold  text-[22px] capitalize">{item.name}</span>
          <div
            className={`text-lg mt-[-5px] font-medium  ${
              mounted && resolvedTheme === "dark"
                ? "text-light-theme"
                : "text-dark-theme"
            }`}
          >
            {item.priceStart} NGN - {item.priceEnd} NGN
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-bold">4.6</span>
          <StarIcon className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};

const Game = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const games = [
    {
      slug: "minecraft",
      name: "minecraft",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/minecraft.png",
    },
    {
      slug: "steam",
      name: "steam",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/steam.png",
    },
    {
      slug: "dead-space",
      name: "dead space",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/dead-space.png",
    },
    {
      slug: "fortnite",
      name: "fortnite",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/fortnite.png",
    },
    {
      slug: "minecraft",
      name: "minecraft",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/minecraft.png",
    },
    {
      slug: "steam",
      name: "steam",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/steam.png",
    },
    {
      slug: "dead-space",
      name: "dead space",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/dead-space.png",
    },
    {
      slug: "fortnite",
      name: "fortnite",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/fortnite.png",
    },
  ];

  return (
    <div className="mt-20 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-5">
        <div>
          <Link href="/top-categories">
            <h2 className="text-[32px] font-extrabold cursor-pointer">
              Top Products in Nigeria
            </h2>
          </Link>
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
      <div className="mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
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
            },
            400: {
              slidesPerView: 1.2,
            },
            450: {
              slidesPerView: 1.5,
            },
            500: {
              slidesPerView: 1.7,
            },
            640: {
              slidesPerView: 2.2,
            },
            750: {
              slidesPerView: 2.5,
            },
            800: {
              slidesPerView: 2.7,
            },
            900: {
              slidesPerView: 3.2,
            },
            1240: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {games.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card {...{ item }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Game;
