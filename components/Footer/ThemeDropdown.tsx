"use client";

import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

export default function ThemeDropdown() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true));

  return (
    <div className="text-right">
      <Menu
        as="div"
        className="relative inline-block text-left bg-[#171717] rounded-full"
      >
        <div>
          <Menu.Button className="inline-flex gap-2 items-center justify-between rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {mounted && resolvedTheme}
            <Chevron />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-1 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-[#171717] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#2A7671] text-white" : "text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => setTheme("dark")}
                  >
                    Dark
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#2A7671] text-white" : "text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => setTheme("light")}
                  >
                    Light
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const Chevron = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7501 6.49951L10.4396 7.82174C9.39456 8.87619 8.87202 9.40341 8.23512 9.48459C8.07908 9.50448 7.92117 9.50448 7.76512 9.48459C7.12823 9.40341 6.60569 8.87619 5.5606 7.82174L4.25012 6.49951M15.5001 7.99951C15.5001 12.1416 12.1423 15.4995 8.00012 15.4995C3.85799 15.4995 0.500122 12.1416 0.500122 7.99951C0.500122 3.85738 3.85799 0.499512 8.00012 0.499512C12.1423 0.499512 15.5001 3.85738 15.5001 7.99951Z"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};
