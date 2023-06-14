import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import CountrySelector from "../Util/selector";
import { COUNTRIES } from "../Util/lib/countries";
import { SelectMenuOption } from "../Util/lib/types";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopNavigation = ({ isOpen, setIsOpen }: Props) => {
  const [country, setCountry] = React.useState("NG");
  return (
    <div className="bg-[#114f45]">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          style={{ marginTop: "-20px" }}
          className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end "
        >
          <div className="group relative  rounded-full border-transparent bg-none ">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select a country
              </label>
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
            </div>
          </div>
        </div>

        <Link
          href="#"
          className="flex font-bold text-sm items-center text-white hover:text-[#eecb25]"
        >
          <QuestionMarkCircleIcon className="h-6 w-6 mr-1" />
          <span className="ml-1">Help</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNavigation;
