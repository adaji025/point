"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import EstimateDropdown from "./EstimateDropdown";
import Cart from "../Checkout/Cart";
import { useData } from "@/context/DataContext";
import { useTheme } from "next-themes";
import Card from "../Home/Card";
import { useParams } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}




export default function ProductDetails() {
  const [cartModal, setCartModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme()
  const params = useParams()

  console.log(params)

  const { addToCart } = useData();

  const handleAddToCart = () => {
    // Logic for adding item to cart
    console.log(`Item ${products} added to cart`);
  };

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };
  
  useEffect(() => setMounted(true))


  const products = [
    {
      slug: "dstv",
      name: "DSTV",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/dstv.png",
    },
    {
      slug: "spotify",
      name: "spotify",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/spotify.png",
    },
    {
      slug: "spectranet",
      name: "spectranet",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/google-play.png",
    },
    {
      slug: "hulu",
      name: "MTN",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/mtn.png",
    },
    {
      slug: "hulu",
      name: "hulu",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/hulu.png",
    },
    {
      slug: "fanatics",
      name: "fanatics",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/fanatics.png",
    },
    {
      slug: "spectranet",
      name: "spectranet",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/spectranet.png",
    },
    {
      slug: "",
      name: "visa",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/visa.png",
    },
  ];

  return (
    <>
      {cartModal && <Cart {...{cartModal, setCartModal}} />}
      <div className={`pt-20 ${mounted && resolvedTheme === "dark" ? "bg-black" : "bg-gray-100"}`}>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3 sticky top-0">
            <div className={`justify-center items-center h-full mb-6 rounded-lg p-6 shadow-md flex ${mounted && resolvedTheme === "dark" ? "bg-black/50" : "bg-white"}`}>
              <img
                src="https://images.africanfinancials.com/63be93ed-ng-mtn-logo-200x200.png"
                alt="product-image"
                className="py-6 px-8 rounded-lg w-[400px] h-[400px]"
              />
            </div>
          </div>
          <div className="mt-6 h-full rounded-lg p-6 md:mt-0 md:w-2/3">
            <div className="mb-2 flex justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === "dark" ? "" : "text-gray-900"}`}>MTN Refill</h2>
                <p className={`mt-1 text-1xl ${mounted && resolvedTheme === "dark" ? "" : "text-gray-700"}`}>
                  MTN formerly M-Cell, is one of Nigeria's premier mobile
                  service providers. With Bitrefill's MTN refill, you can top-up
                  mobile minutes and data from MTN with Bitcoin, Ethereum, Dash,
                  Dogecoin, and Litecoin.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-5 justify-between items-center w-full">
              <div className="w-2/3">
                <label
                  htmlFor="email"
                  className="block font-bold leading-6 text-gray-500"
                >
                  Enter amount
                </label>
                <div className="mt-2 bg-white shadow-inner rounded-lg w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="w-full outline-none border-0 shadow p-3 rounded-lg focus:ring-offset-1 focus:ring-offset-black placeholder:font-bold"
                    placeholder="N 5 - 5000"
                  />
                </div>
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="location"
                  className="block sm:text-sm md:text-xs lg:text-sm mb-3 font-bold leading-6 text-gray-500"
                >
                  Estimated Price
                </label>
                <EstimateDropdown />
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <div className="w-full ">
                <label
                  htmlFor="number"
                  className="block text-sm font-bold leading-6 text-gray-500"
                >
                  Enter your phone number
                </label>
                <div className="mt-2">
                  <input
                    style={{ outline: 0 }}
                    type="text"
                    name="phonenumber"
                    id="number"
                    className="w-full !outline-none bg-white border-0 shadow p-3 rounded-lg focus:ring-offset-1 focus:ring-offset-black"
                    placeholder="08100135069"
                  />
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col gap-5 lg:flex-row mt-10">
              <div className="w-full lg:w-[60%]">
                <button
                  type="submit"
                  className="text-sm flex w-full font-bold flex-1 items-center justify-center rounded-full border border-transparent bg-[#114f45] px-8 py-3 text-white hover:bg-[#F1F1F1] hover:text-[#114f45] hover:border-[#114f45] focus:outline-none focus:ring-2 focus:ring-[#114f45] focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full sm:mr-4 transition-all duration-300"
                  onClick={() => {
                    goToTop()
                    setCartModal(!cartModal)
                  }}
                >
                  <ShoppingCartIcon
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  Add to cart
                </button>
              </div>

              <div className="w-full lg:w-[40%]">
                <button
                  type="button"
                  className="text-sm w-full bg-[#F1F1F1]  font-bold flex items-center justify-center rounded-full px-3 py-3 text-[#114f45] border border-[#114f45] hover:bg-[#114f45] hover:text-white transition-all duration-300"
                >
                  <ShoppingBagIcon
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  Purchase as Gift
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-[1400px] py-16 px-6 sm:py-24 md:px-8 lg:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-500">
              More products on Points
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((item, idx) => (
                <Card key={idx} {...{ item }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
