"use client"

import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PhoneTopup from "@/components/TopCategories/PhoneTopup";
import UtilityBills from "@/components/TopCategories/UtilityBills";

SwiperCore.use([Navigation]);

export const metadata = {
  title: "Points - Top Catigories",
};



const TopCategory = () => {
  

 

  return (
    <>
      <PhoneTopup />
      <UtilityBills />
    </>
  );
};

export default TopCategory;
