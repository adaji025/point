import { ProductTypes } from "@/types/productTypes";
import { StarIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";

type ItemType = {
  item: ProductTypes;
  loading: boolean;
};

export const AirtimeCard = ({ item, loading }: ItemType) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true));

  return (
    <>
      {loading && <CardSkeleton />}

      <Link
        href={{
          pathname: `/top-giftcards/${item._id}`,
          query: item._id,
        }}
        className="w-full min-h-[320px] p-2"
      >
        <img
          src={item.image === "" ? "/images/plain-2.png" : item.image}
          alt={item.name}
          className="hover:scale-95 transition-all duration-300 border border-gray-100"
        />
        {/* <Image fill src={item.image} alt={item.name} /> */}
        <div className="flex justify-between">
          <div className="mt-2 grid">
            <span className=" font-bold  text-[18px] capitalize">
              {item.name}
            </span>
            <span
              className={`text-lg font-medium  ${
                mounted && resolvedTheme === "dark"
                  ? "text-light-theme"
                  : "text-dark-theme"
              }`}
            >
              {item?.amount_range?.min} NGN - {item.amount_range?.max} NGN
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">4.6</span>
            <StarIcon />
          </div>
        </div>
      </Link>
    </>
  );
};
