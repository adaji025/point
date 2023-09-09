"use client";

import React from "react";
import Shimmer from "./Shimmer";

const CardSkeleton = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden max-w-[268px] w-full rounded-sm">
        <div className="bg-gray-300 w-[268px] h-[163px]"></div>
        <div className="flex justify-between gap-10 mt-5">
          <div>
            <div className="bg-gray-300 w-[150px] h-6"></div>
            <div className="bg-gray-300 w-[200px] h-6 mt-2"></div>
          </div>
          <div className="text-grabg-gray-200 bg-gray-200 h-6 w-6"></div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default CardSkeleton;
