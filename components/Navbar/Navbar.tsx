"use client";
import React, { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import CountrySelector from "../Util/selector";
import { COUNTRIES } from "../Util/lib/countries";
import { SelectMenuOption } from "../Util/lib/types";
import Link from "next/link";

import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import GiftCardDropdown from "./GiftCardDropdown";
import Modal from "../Modal/Modal";
import SelectLanguage from "../SelectLanguage/SelectLanguage";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = React.useState("NG");

  return (
    <>
      <MobileMenu {...{ isOpen, setIsOpen, setOpen, open }} />

      {modalOpen && (
        <Modal title="Country & Language">
          <CountrySelector
            id={"countries"}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={(val) => setCountry(val)}
            // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
            selectedValue={
              COUNTRIES.find(
                (option) => option.value === country
              ) as SelectMenuOption
            }
          />
          <SelectLanguage />
        </Modal>
      )}

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
              <img
                className="w-24 md:w-[unset] xl:w-[220px]"
                src="/svgs/point.svg"
                alt="points"
              />
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
          <div className="hidden md:flex gap-8">
            <div className="flex h-full justify-center gap-8">
              <Link
                href="/top-categories"
                className="flex items-center text-base font-semibold text-gray-700 hover:text-gray-800"
              >
                Phone Refill
              </Link>
              <GiftCardDropdown />
              <Link
                href="/top-categories"
                className="flex items-center text-base font-semibold text-gray-700 hover:text-gray-800"
              >
                Travel
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="xl:hidden block">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </div>

            <Cart />

            <div className="w-[40px] h-[40px] rounded-full bg-[#1E1E1E] grid place-items-center">
              <img src="/svgs/head-set.svg" alt="" />
            </div>
            <div
              className="hidden lg:block cursor-pointer"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <img
                alt={`${country}`}
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
                className={
                  "inline h-[40px] w-[40px] rounded-full object-cover border"
                }
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
