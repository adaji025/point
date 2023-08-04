"use client";

import React, {useState, useEffect} from "react";
import { useTheme } from "next-themes";

const Partners = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  useEffect(() => setMounted(true))
  return (
    <div className={`shadow ${mounted && resolvedTheme === "light" && "bg-white"}`}>
      <div className="mt-20 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16  py-10">
        <h2 className={`text-[24px] md:text-[30px] font-bold text-[#A6A7AF] cursor-pointer text-center`}>
          TRUSTED BY 30,000+ MERCHANTS
        </h2>
        <div className="mt-10 grid grid-cols-3 md:grid-cols-5 place-items-center gap-10">
          <img src={mounted && resolvedTheme === "light" ? "/svgs/diagon.svg" : "/svgs/diagon-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/addidas.svg" : "/svgs/addidas-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/9mobile.svg" : "/svgs/9mobile-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/glo.svg" : "/svgs/glo-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/ikeja-electric.svg" : "/svgs/ikeja-electric-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/visa.svg" : "/svgs/visa-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/mastercard.svg" : "/svgs/mastercard-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/paypal.svg" : "/svgs/paypal-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/jumia.svg" : "/svgs/jumia-white.svg"} alt="" />
          <img src={mounted && resolvedTheme === "light" ? "/svgs/marketsquare.svg" : "/svgs/marketsquare-white.svg"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
