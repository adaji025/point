"use client";

import { TrashIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "MTN Airtime",
    href: "#",
    price: "8000.00 NGN",
    imageSrc:
      "https://images.africanfinancials.com/63be93ed-ng-mtn-logo-200x200.png",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];



export default function Checkout() {
  return (
    <div className="mx-auto px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Checkout</h2>

      <form
        action="/checkout/payment-method"
        className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
      >
        {/* Order summary */}
        <div className="max-w-2xl lg:max-w-none">
          <div className="mt-10 lg:mt-0">
            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <h2 className="text-2xl font-bold ml-5 mt-5 mb-5 text-gray-900">
                Order summary
              </h2>

              {/* ...order summary content... */}
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex px-4 py-6 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.title}
                            </a>
                          </h4>
                        </div>

                        <div className="ml-4 flow-root flex-shrink-0">
                          <button
                            type="button"
                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className=" text-sm font-medium text-gray-500">
                          {product.price}
                        </p>

                        <div className="ml-4">
                          <label htmlFor="quantity" className="sr-only">
                            Quantity
                          </label>
                          <select className="rounded-full border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="space-y-6 border-gray-200 px-4 py-6 sm:px-6">
                {/* ...total estimate content... */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total estimate</dt>
                  <dd className="text-base font-medium text-gray-900">
                    $75.52
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="max-w-6xl">
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <h3 className="sr-only">Items in your cart</h3>

            <h2 className="text-2xl font-bold ml-5 my-5 text-gray-900">
              Contact Details
            </h2>

            {/* ...contact details content... */}
            <div className="space-y-6 border-gray-200 px-4 py-6 sm:px-6">
              <div className="mt-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-300 text-[#2a7671]  focus:ring-[#2a7671]"
                />
                <div className="ml-2">
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-gray-900"
                  >
                    Add me to the newsletter to receive news about new products
                    and features
                  </label>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-300 text-[#2a7671]  focus:ring-[#2a7671] "
                />
                <div className="ml-2">
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-gray-900"
                  >
                    I have read and agree with the Points{" "}
                    <Link className="underline" href="/">
                      {" "}
                      Terms & Conditions
                    </Link>{" "}
                    and the
                    <Link className="underline" href="/">
                      {" "}
                      Privacy Policy.
                    </Link>
                  </label>
                </div>
              </div>
            </div>

            <div className=" border-gray-200 px-4 py-6 sm:px-6">
              <button
                type="submit"
                className="w-64 rounded-full border border-transparent bg-[#2a7671] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2a7671]/90 focus:outline-none focus:ring-2 focus:ring-[#eecb25] focus:ring-offset-2 focus:ring-offset-gray-50 hover:scale-105"
              >
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
