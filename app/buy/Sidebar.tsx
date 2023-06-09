"use client"

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar: React.FC<Props> = ({ active, setActive }) => {
  const router = useRouter();

  const cats = [
    "Top Products",
    "All gift cards",
    "Apparel",
    "Automobile",
    "Ecommerce",
    "Electronics",
    "Entertainment",
    "Experiences",
    "Food",
    "Games",
    "Gifts",
    "Groceries",
    "Health and Beauty",
    "Home",
    "Music",
    "Other products",
    "Pet",
    "Retails",
    "Streaming",
    "Travels",
    "VolP",
    "Prepaid phones",
    "Data",
    "Bitcoin",
  ];

  const handleRouting = (cat: string) => {
    cat === "Top Products" ? router.push("/") : router.push("/");
  };
  return (
    <div className="mobile:w-[250px] lg:w-[300px]  h-hin grid gap-3 pl-5 ">
      {cats.map((cat, idx) => (
        <div
          key={idx}
          className={`text-lg font-semibold hover:underline cursor-pointer ${
            cat === active ? "text-red underline" : ""
          }`}
          onClick={() => {
            setActive(cat);
            handleRouting(cat);
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
