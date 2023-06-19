import React from "react";

const CallToAction = () => {
  return (
    <div className="mt-20 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16 ">
      <div className="call-to-action rounded-[20px]">
        <div className="h-[300px] md:h-[600px] flex flex-col justify-center items-center rounded-[20px]">
          <h2 className="text-[24px] sm:text-[40px] md:text-[60px]  text-center font-extrabold">
            Download the app
          </h2>
          <p className="max-w-[668px] mx-auto text-center text-[18px] sm:text-[24px] font-medium">
            Join about 2 million people who get paid while shopping with POINTS
            app. Get Rewarded for shopping
          </p>
          <div className="mt-5 flex items-center justify-center gap-5">
            <button className="text-white px-8 py-3 rounded-full bg-black text-sm sm:text-base hover:scale-105 duration-500 transition-all">
              App Store
            </button>
            <button className="text-white px-8 py-3 rounded-full bg-black text-sm sm:text-base hover:scale-105 duration-500 transition-all">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
