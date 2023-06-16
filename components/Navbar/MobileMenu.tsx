import React, { Fragment } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import CountrySelector from "../Util/selector";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { COUNTRIES } from "../Util/lib/countries";
import { SelectMenuOption } from "../Util/lib/types";

type Props = {
  isOpen: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navigation = {
  categories: [
    {
      name: "Gift Cards",
      featured: [
        { name: "MTN", href: "#" },
        { name: "GLO", href: "#" },
        { name: "AIRTEL", href: "#" },
      ],
      country: [
        { name: "DSTV", href: "#" },
        { name: "MTN Data", href: "#" },
        { name: "GLO", href: "#" },
        { name: "AIRTEL", href: "#" },
      ],
      categories: [
        { name: "Topups", href: "#" },
        { name: "Gaming", href: "#" },
        { name: "Bills", href: "#" },
        { name: "Electricity", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "AEDC", href: "#" },
        { name: "MTN", href: "#" },
        { name: "AIRTEL", href: "#" },
      ],
    },
    {
      name: "Games",
      featured: [
        { name: "BET9JA", href: "#" },
        { name: "SPORTYBET", href: "#" },
      ],
      collection: [
        { name: "DSTV", href: "#" },
        { name: "AEDC", href: "#" },
      ],
      categories: [
        { name: "MTN Data", href: "#" },
        { name: "GLO Data", href: "#" },
      ],
      brands: [
        { name: "MTN", href: "#" },
        { name: "GLO", href: "#" },
        { name: "AIRTEL", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Phone Refill", href: "#" },
    { name: "Travel", href: "#" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MobileMenu = ({ isOpen, setOpen, setIsOpen, open }: Props) => {
  const [country, setCountry] = React.useState("NG");
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-indigo-600 text-indigo-600"
                              : "border-transparent text-gray-900",
                            "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category, categoryIdx) => (
                    <Tab.Panel
                      key={category.name}
                      className="space-y-12 px-4 pb-6 pt-10"
                    >
                      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                          <div>
                            <p
                              id={`mobile-featured-heading-${categoryIdx}`}
                              className="font-medium text-gray-900"
                            >
                              Featured
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                              className="mt-6 space-y-6"
                            >
                              {category.featured.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p
                              id="mobile-categories-heading"
                              className="font-medium text-gray-900"
                            >
                              Categories
                            </p>
                            <ul
                              role="list"
                              aria-labelledby="mobile-categories-heading"
                              className="mt-6 space-y-6"
                            >
                              {category.categories.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                          <div>
                            <p
                              id="mobile-collection-heading"
                              className="font-medium text-gray-900"
                            >
                              Collection
                            </p>
                            <ul
                              role="list"
                              aria-labelledby="mobile-collection-heading"
                              className="mt-6 space-y-6"
                            >
                              {category.categories.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p
                              id="mobile-brand-heading"
                              className="font-medium text-gray-900"
                            >
                              Brands
                            </p>
                            <ul
                              role="list"
                              aria-labelledby="mobile-brand-heading"
                              className="mt-6 space-y-6"
                            >
                              {category.brands.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 block p-2 font-bold text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}

                <div className="space-y-6 lg:flex lg:flex-1 lg:items-center lg:justify-end ">
                  <div className="group relative text-black rounded-full border-transparent bg-none ">
                    <div>
                      <label className="hidden text-sm font-medium text-gray-700">
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
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
