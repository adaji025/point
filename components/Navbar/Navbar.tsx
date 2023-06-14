"use client";
import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import CountrySelector from "../Util/selector";
import { COUNTRIES } from "../Util/lib/countries";
import { SelectMenuOption } from "../Util/lib/types";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/images/logo/logocolor.png";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import GiftCardDropdown from "./GiftCardDropdown";
import TopNavigation from "./TopNavigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileMenu {...{ isOpen, setIsOpen, setOpen, open }} />

      <div className="bg-white relative">
        <nav
          className="mx-auto max-w-[1400px] h-[100px] flex justify-between px-4 md:px-8 lg:px-16"
          aria-label="Top"
        >
          <div className="flex gap-1 items-center">
            {/* Hamburger Icon */}
            <div className="flex  items-center md:hidden">
              <button
                type="button"
                className="bg-white text-gray-400"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <Link href="/">
              <img className="w-16 sm:w-[unset]" src='/svgs/point.svg' alt="points" />
            </Link>

            <div className="w-full lg:ml-5 max-w-lg lg:max-w-xs hidden xl:block">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-[#2a7671]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  className="block w-full rounded-full border-0 bg-[#e5e8e8] py-1.5 pl-10 pr-3 text-gray-900  focus:ring-offset-1 focus:ring-offset-black sm:text-sm sm:leading-6"
                  placeholder="Search for gift cards or bills"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div>

          <GiftCardDropdown />

          <div className="flex items-center lg:ml-8">
            {/* Search */}
            <div className="xl:hidden block">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </div>

            <Cart />
          </div>
        </nav>
      </div>
    </>
  );
}
