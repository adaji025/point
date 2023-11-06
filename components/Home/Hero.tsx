"use client";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={`min-h-[70vh] flex items-center ${styles.hero}`}>
      <div className="max-w-[1400px] w-full mx-auto text-white px-6 lg:px-16">
        <div className="max-w-[650px]">
          <h2 className="text-[52px] lg:text-[70px] font-bold">
            Search. Shop. Pay.
          </h2>
          <p className="text-[18px] md:text-[22px]">
            Play Games and do more with your Points in the real World!
          </p>
          <div className="mt-7 flex gap-5 items-center">
            <button className="text-white px-6 py-3 rounded-full bg-black text-sm hover:scale-105 duration-500 transition-all">
              App Store
            </button>
            <button className="text-white px-6 py-3 rounded-full bg-black text-sm hover:scale-105 duration-500 transition-all">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
