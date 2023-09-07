"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTheme } from "next-themes";
import { ProductTypes } from "@/types/productTypes";
import { getProducts } from "@/services/products";

SwiperCore.use([Navigation]);

export const metadata = {
  title: "Points - Top Catigories",
};

type ItemType = {
  item: ProductTypes;
};

const Card = ({ item }: ItemType) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true));

  return (
    <Link
      href={{
        pathname: `/top-giftcards/${item._id}`,
        query: item._id,
      }}
      className="w-full min-h-[320px] rounded-[10px] p-2"
    >
      <img
        src={item.image}
        alt=""
        className="w-full hover:scale-105 transition-all duration-300 rounded-[10px]"
      />
      <div className="flex justify-between">
        <div className="mt-2 grid">
          <span className=" font-bold  text-[22px] capitalize">
            {item.name}
          </span>
          <span
            className={`text-lg mt-[-5px] font-medium  ${
              mounted && resolvedTheme === "dark"
                ? "text-light-theme"
                : "text-dark-theme"
            }`}
          >
            {item?.amount_range?.min} NGN - {item.amount_range?.max} NGN
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

const PhoneTopup = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [category] = useState<string>("airtime")
  const [countryCode] = useState<string>("NG")
  const [limit] = useState<number>(10)
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    handleGetProducts();
  }, []);
  
  const handleGetProducts = () => {
    getProducts(category, countryCode, limit)
      .then((res: any) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-5">
        <div>
          <h2 className="text-[32px] font-extrabold cursor-pointer">
            Top up Your Phone
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
          {products.map((item) => (
            <SwiperSlide key={item._id}>
              <Card {...{ item }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhoneTopup;
