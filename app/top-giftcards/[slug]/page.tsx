"use client";

import React from "react";
import { useRouter } from "next/router";
import ProductDetails from "@/components/Product/ProductDetails";

type ParamsProps = {
  params: number;
};

const TopGiftCardsPage: React.FC<ParamsProps> = ({ params }) => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default TopGiftCardsPage;
