import React, {Fragment} from "react";
import { Popover,  Transition } from "@headlessui/react";

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

const GiftCardDropdown = () => {
  return (
    <div className="hidden h-full md:flex">
      {/* Mega menus */}
      <Popover.Group className="ml-8">
        <div className="flex h-full justify-center space-x-8">
          {navigation.categories.map((category, categoryIdx) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button
                      className={classNames(
                        open
                          ? "border-[#114f45] text-[#114f45]"
                          : "border-transparent text-gray-700 hover:text-gray-800",
                        "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-bold transition-colors duration-200 ease-out"
                      )}
                    >
                      {category.name}
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                              <div>
                                <p
                                  id={`desktop-featured-heading-${categoryIdx}`}
                                  className="font-medium text-gray-900"
                                >
                                  Featured
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {category.featured.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p
                                  id="desktop-categories-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Categories
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="desktop-categories-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {category.categories.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800 font-bold"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                              <div>
                                <p
                                  id="desktop-collection-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Popular in Nigeria
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="desktop-collection-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  DSTV
                                </ul>
                              </div>

                              <div>
                                <p
                                  id="desktop-brand-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Trending
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="desktop-brand-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {category.brands.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800 font-bold"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}

          {navigation.pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm font-bold text-gray-700 hover:text-gray-800"
            >
              {page.name}
            </a>
          ))}
        </div>
      </Popover.Group>
    </div>
  );
};

export default GiftCardDropdown;
