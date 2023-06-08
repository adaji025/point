import Faq from "@/components/Faq/Faq";
import HowItWorks from "@/components/buy/HowItWorks";
import Featured from "@/components/buy/dropdown/Featured";
import OnlineStore from "@/components/buy/dropdown/OnlineStore";
import Rating from "@/components/buy/dropdown/Rating";
import Reward from "@/components/buy/dropdown/Reward";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const Card = () => {
  return (
    <div className="w-full  min-h-[300px]">
      <img
        src="/images/uber.jpg"
        alt=""
        className="w-full h-[200px] hover:scale-105 transition-all duration-300 shadow-sm"
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
          <StarIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="w-full">
      <span className="font-bold text-[24px] sm:text-[52px] block">
        Games
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
        {[...Array(11)].map((item, idx) => (
          <Card />
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

export default Game;
