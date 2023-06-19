import React from "react";
import styles from "../../styles/Home.module.css";


const Hero = () => {
  return (
    <div className={`min-h-[70vh] flex items-center ${styles.hero}`}>
      <div className="max-w-[1400px] w-full mx-auto text-white px-6 lg:px-16">
        <div className="max-w-[650px]">
          <h2 className="text-[52px] lg:text-[70px] font-bold">Search. Shop. Pay.</h2>
          <p className="text-[18px] md:text-[22px]">
            Join over 3 million people and Experience a revolutionary way to
            shop with Crypto on POINTS.
          </p>
        </div>       
      </div>
    </div>
  );
};

export default Hero;
