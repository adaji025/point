import React from "react";

const CardSkeleton = () => {
  return (
    <div className="overflow-hidden max-w-[268px] w-full">
      <div className="bg-gray-200 w-[268px] h-[163px]"></div>
      <div className="flex justify-between gap-10 mt-5">
        <div>
          <div className="bg-gray-200 text-grabg-gray-200 w-[150px] h-6"></div>
          <div className="bg-gray-200 text-grabg-gray-200 w-[200px] h-6 mt-2"></div>
        </div>
        <div className="text-grabg-gray-200 bg-gray-200 h-6 w-6"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
