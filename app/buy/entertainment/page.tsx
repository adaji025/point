import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const Card = () => {
  return (
    <div className="w-full  min-h-[300px] pr-1">
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
          <StarIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

const Entertainment = () => {
  return (
    <div className="w-full">
      <span className="font-bold text-[24px] sm:text-[52px] block">
        Entertainment
      </span>
      <div className="mt-10 flex justify-between items-center">
        <div className="flex items-center gap-5 overflow-auto text-sm sm:text-base pb-5">
          <div className="flex lg:hidden items-center gap-1 rounded-[24px] bg-white shadow-sm border px-6 py-3">
            <div className="font-bold whitespace-nowrap">Sort by</div>
            <ChevronDownIcon className="w-5 h-5 mt-1" />
          </div>
          <div className="flex items-center gap-1 rounded-[24px] bg-white shadow-sm border px-6 py-3">
            <div className="font-bold whitespace-nowrap">Online/In-store</div>
            <ChevronDownIcon className="w-5 h-5 mt-1" />
          </div>
          <div className="flex items-center gap-1 rounded-[24px] bg-white shadow-sm border px-6 py-3">
            <div className="font-bold">Rating</div>
            <ChevronDownIcon className="w-5 h-5 mt-1" />
          </div>
          <div className="flex items-center gap-1 rounded-[24px] bg-white shadow-sm border px-6 py-3">
            <div className="font-bold">Rewards</div>
            <ChevronDownIcon className="w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="lg:flex items-center gap-2 hidden">
          <span>Sort by:</span>
          <div className="flex items-center justify-between gap-1 rounded-[24px] bg-white shadow-sm border px-3 py-3 w-[120px]">
            <div className="font-bold">Rewards</div>
            <ChevronDownIcon className="w-5 h-5 mt-1" />
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
      <div className="mt-10">
        <span className="font-bold text-[24px] sm:text-[42px] block">
          How gift cards work
        </span>
        <div className="mt-5 flex flex-wrap">
          
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
