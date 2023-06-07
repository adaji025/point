import React from "react";
import {ArrowRightIcon} from '@heroicons/react/24/outline'
import styles from "../../styles/Home.module.css";

const Hero = () => {
  return (
    <div
      className={`min-h-[70vh] flex justify-center items-center ${styles.hero}`}
    >
      <div className="max-w-[1400px] mx-auto text-white">
        <h2 className="text-center text-[70px] font-bold">
          LIVE ON CRYPTO
        </h2>
        <p className="text-[24px] font-semibold text-center max-w-[500px] mx-auto">
          Pay for your daily needs with Bitcoin, ETH and more cryptocurrencies
        </p>
        <div className="mt-10 flex justify-center gap-5 ">
          <button className="bg-white py-2 px-8 rounded-[20px] flex items-center justify-center gap-2 text-primary hover:scale-105 transition-all duration-300">
            <span className="font-semibold">Giftcards</span>
            <ArrowRightIcon className="h-5 w-5"  />
          </button>
          <button className="bg-white py-2 px-6 rounded-[20px] flex items-center justify-center gap-2 text-primary hover:scale-105 transition-all duration-300">
            <span className="font-semibold">Phone Refills</span>
            <ArrowRightIcon className="h-5 w-5" />  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
