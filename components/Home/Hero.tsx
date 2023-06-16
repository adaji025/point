import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={`min-h-[70vh] flex items-center ${styles.hero}`}>
      <div className="max-w-[1400px] text-white px-6 lg:px-16">
        <div className="max-w-[650px]">
          <h2 className="text-[52px] lg:text-[70px] font-bold">Search. Shop. Pay.</h2>
          <p className="text-[18px] md:text-[22px]">
            Join over 3 million people and Experience a revolutionary way to
            shop with Crypto on POINTS.
          </p>
        </div>
        {/* <div className="mt-10 flex justify-center gap-5 ">
          <Link href="/top-categories">
            <button className="bg-white py-2 px-8 rounded-[20px] flex items-center justify-center gap-2 text-primary hover:scale-105 transition-all duration-300">
              <span className="font-semibold">Giftcards</span>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/top-categories">
            <button className="bg-white py-2 px-6 rounded-[20px] flex items-center justify-center gap-2 text-primary hover:scale-105 transition-all duration-300">
              <span className="font-semibold">Phone Refills</span>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
