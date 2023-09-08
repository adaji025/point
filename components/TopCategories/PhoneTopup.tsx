"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ProductTypes } from "@/types/productTypes";
import { getProducts } from "@/services/products";
import { AirtimeCard } from "../PhoneTopUp/AirtimeCard";

SwiperCore.use([Navigation]);

export const metadata = {
  title: "Points - Top Catigories",
};





const PhoneTopup = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [category] = useState<string>("airtime")
  const [countryCode] = useState<string>("NG")
  const [loading, set] = useState<boolean>(false)
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
              <AirtimeCard {...{ item, loading }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhoneTopup;
