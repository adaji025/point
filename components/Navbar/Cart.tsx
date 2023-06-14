import React, { Fragment } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <div className="flow-root ml-5">
      <Popover.Group>
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            <ShoppingCartIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
            </span>
            <span className="sr-only">items in cart, view bag</span>
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
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
