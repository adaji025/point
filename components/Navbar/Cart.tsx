import React, { Fragment } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import useCart from "@/hooks/UseCart";

const Cart = () => {
  const { totalItems } = useCart()
  
  console.log("total items: " + totalItems)
  return (
    <div className="flow-root">
      <Popover.Group>
        <Popover className="relative">
          <Popover.Button className="h-[40px] w-[90px] rounded-full flex items-center justify-center gap-2 text-sm font-semibold  text-white bg-[#E83E48]">
            <ShoppingCartIcon
              className="h-6 w-6"
              aria-hidden="true"
            />
            <span className="text-base font-medium ">
              {totalItems}
            </span>
            <span className="sr-only">items in cart, view bag</span>
            <ChevronDownIcon
              className="h-3 w-3 flex-none text-white"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-52 top-full z-30 mt-3 w-78 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="relative rounded-lg p-4 hover:bg-gray-50">
                <a className="block text-sm font-semibold leading-6 text-gray-900">
                  Your cart is empty
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Looks like you haven't added anything to your cart yet
                </p>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
    </div>
  );
};

export default Cart;
