import { StarIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useState, useEffect, FC } from 'react'

type CardProps = {
    item: {
      slug: string;
      name: string;
      priceStart: number;
      priceEnd: number;
      rating: string;
      image: string;
    };
  };
  

const Card: FC<CardProps> = ({item}) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
  
    useEffect(() => setMounted(true));
    return (
      <Link
        href={{
          pathname: `/top-giftcards/${item.slug}`,
          query: item,
        }}
        className="w-full min-h-[320px] rounded-[10px] p-2"
      >
        <img
          src={item.image}
          alt=""
          className="w-full hover:scale-95 transition-all duration-300 rounded-[10px]"
        />
        <div className="flex justify-between">
          <div className="mt-2 grid">
            <span className=" font-bold  text-[22px] capitalize">
              {item.name}
            </span>
            <span
              className={`text-lg mt-[-5px] font-medium  ${
                mounted && resolvedTheme === "dark"
                  ? "text-light-theme"
                  : "text-dark-theme"
              }`}
            >
              {item.priceStart} NGN - {item.priceEnd} NGN
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">4.6</span>
            <StarIcon />
          </div>
        </div>
      </Link>
    );
}

export default Card
