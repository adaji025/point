import React from "react";
import PhoneTopup from "@/components/TopCategories/PhoneTopup";
import UtilityBills from "@/components/TopCategories/UtilityBills";

export const metadata = {
  title: "Points - Top Catigories",
};



const TopCategory = () => {
  return (
    <>
      <PhoneTopup />
      <UtilityBills />
    </>
  );
};

export default TopCategory;
