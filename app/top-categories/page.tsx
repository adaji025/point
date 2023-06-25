import React from "react";
import GiftCard from "@/components/Home/GiftCard";

export const metadata = {
  title: "Points - Top Catigories",
};

const TopCategory = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <GiftCard />
        </main>
      </div>
    </>
  );
};

export default TopCategory;
