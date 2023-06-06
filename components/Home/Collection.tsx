import Link from "next/link";
import React from "react";

type CardProps = {
  item: {
    title: string;
    image: string;
    link: string;
  };
};

const Card = ({ item }: CardProps) => {
  return (
    <div className="max-w-[400px] h-[300px] xl:h-[450px] relative cursor-pointer hover:scale-105 transition-all duration-300 mx-auto">
      <img src={item.image} className="w-full h-full object-cover" alt="" />
      <div className="font-bold text-2xl text-white text-center bg-black/50 p-4 absolute top-10 w-full">
        {item.title}
      </div>
    </div>
  );
};

const collectionData = [
  {
    title: "Game",
    image: "/images/game.jpg",
    link: "",
  },
  {
    title: "Travels",
    image: "/images/entertainment.jpg",
    link: "",
  },
  {
    title: "Entertainment",
    image: "/images/travels.jpg",
    link: "",
  },
];

const Collection = () => {
  return (
    <div className="mt-20 max-w-[1400px] mx-auto px-4 lg:px-8">
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
