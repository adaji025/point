// "use client"

import Faq from "@/components/Faq/Faq";
import HowItWorks from "@/components/buy/HowItWorks";
import Featured from "@/components/buy/dropdown/Featured";
import OnlineStore from "@/components/buy/dropdown/OnlineStore";
import Rating from "@/components/buy/dropdown/Rating";
import Reward from "@/components/buy/dropdown/Reward";
import SortedBy from "@/components/buy/dropdown/SortedBy";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";


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


const Entertainment = () => {
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
    <div className="w-full">
      <span className="font-bold text-[24px] sm:text-[52px] block relative">
        Entertainment
      </span>
      <div className="mt-5 flex justify-between items-center relative">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center sm:gap-5 text-sm sm:text-base pb-5">
            <OnlineStore />
            <Rating />
            <Reward />
          </div>
          <div className="lg:flex items-center gap-2 hidden">
            <span>Sort by:</span>
            <Featured />
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
        {topGiftCard.map((item, idx) => (
          <Card {...{item}} key={idx} />
        ))}
      </div>
      <div className="max-w-[500px] mx-auto mt-20">
        <div className="text-center font-medium">Showing 8 out of 8</div>
        <div className="w-full h-2 bg-red rounded my-3 max-w-[300px] mx-auto"></div>
        <div className="text-center text-sm ">
          Didn't find what you were looking for?{" "}
          <span className="underline cursor-pointer">Request a product</span>
        </div>
      </div>

      <HowItWorks />
      <Faq />
    </div>
  );
};

export default Entertainment;
