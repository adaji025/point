"use client";

import React from "react";

const Partners = () => {
  return (
    <div className="bg-white shadow">
      <div className="mt-20 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16  py-10">
        <h2 className="text-[24px] md:text-[30px] font-bold text-[#A6A7AF] cursor-pointer text-center">
          TRUSTED BY 30,000+ MERCHANTS
        </h2>
        <div className="mt-10 grid grid-cols-3 md:grid-cols-5 place-items-center gap-10">
          <img src="/svgs/diagon.svg" alt="" />
          <img src="/svgs/addidas.svg" alt="" />
          <img src="/svgs/9mobile.svg" alt="" />
          <img src="/svgs/glo.svg" alt="" />
          <img src="/svgs/ikeja-electric.svg" alt="" />
          <img src="/svgs/visa.svg" alt="" />
          <img src="/svgs/mastercard.svg" alt="" />
          <img src="/svgs/paypal.svg" alt="" />
          <img src="/svgs/jumia.svg" alt="" />
          <img src="/svgs/marketsquare.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
