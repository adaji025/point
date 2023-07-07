
"use client"
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  return (
    <div className={`min-h-[70vh] flex items-center ${styles.hero}`}>
      <div className="max-w-[1400px] w-full mx-auto text-white px-6 lg:px-16">
        <div className="max-w-[650px]">
          <h2 className="text-[52px] lg:text-[70px] font-bold">
            Search. Shop. Pay.
          </h2>
          <p className="text-[18px] md:text-[22px]">
          Experience a revolutionary way to shop with Crypto and More.
          </p>
          <div className="mt-5 flex gap-5 items-center">
            <button className="border flex items-center justify-center gap-2 w-[150px] py-2 px-3 rounded-full hover:scale-105 transition-all duration-200"
            onClick={() => router.push("/top-categories")}>
              <span className="whitespace-nowrap text-sm">Phone Refill</span>
              <ArrowLongRightIcon className="h-5 w-5" />
            </button>
            <button className="border flex items-center justify-center gap-2 w-[150px] py-2 px-3 rounded-full hover:scale-105 transition-all duration-200"
            onClick={() => router.push("/top-categories")}>
              <span className="whitespace-nowrap text-sm">Gift Cards</span>
              <ArrowLongRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
