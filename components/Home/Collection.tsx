import Link from "next/link";
import React from "react";

type CardProps = {
  item: {
    image: string;
    link: string;
  };
};

const Card = ({ item }: CardProps) => {

  return (
    <Link href={item.link}>
      <div className="relative cursor-pointer hover:scale-105 transition-all duration-300 mx-auto">
        <img src={item.image} className="w-full h-full object-cover rounded-[20px]" alt="" />
        
      </div>
    </Link>
  );
};

const collectionData = [
  {
    title: "Travels",
    image: "/images/travels.png",
    link: "/buy/entertainment",
  },
  {
    title: "Utility Bills",
    image: "/images/utility-bills.png",
    link: "/buy/game",
  },
  {
    title: "Airtime to Cash",
    image: "/images/airtime-to-cash.png",
    link: "/buy/travels",
  },
 
];

const Collection = () => {
  return (
    <div className="mt-20 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
      <Link href="/top-categories">
        <h2 className="text-[32px] font-semibold cursor-pointer">
          Explore More Collections
        </h2>
      </Link>
      <div className="mt-5 flex flex-col sm:flex-row justify-center gap-10 sm:justify-between">
        {collectionData.map((item, idx) => (
          <Card key={idx} {...{ item }} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
