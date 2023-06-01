"use client";
import { Fragment, useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

<style jsx>{`
  @media (max-width: 640px) {
    .text-me {
      margin-top: -200px;
    }
  }

  @layer utilities {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }


`}</style>


const products = [
    {
    id: 1,
    name: 'Mtn',
    href: '/recharge',
    price: '50 NGN - 50000 NGN',
    availability: 'White and Black',
    imageSrc: 'https://images.africanfinancials.com/63be93ed-ng-mtn-logo-200x200.png',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Airtel',
    href: '#',
    price: '50 NGN - 50000 NGN',
    availability: 'Washed Black',
    imageSrc: 'https://www.businesslist.com.ng/img/ng/e/1604481877-59-airtel-nigeria-customer-care.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Glo',
    href: '#',
    price: '50 NGN - 50000 NGN',
    availability: 'Washed Black',
    imageSrc: 'https://netstorage-legit.akamaized.net/images/a3d8cbb3f3a7b1d6.jpg?imwidth=720',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },

  {
    id: 4,
    name: '9mobile',
    href: '#',
    price: '50 NGN - 50000 NGN',
    availability: 'Washed Black',
    imageSrc: 'https://9mobile.com.ng/wp-content/uploads/2023/02/9xtra-all-channels-600x601.png',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  // More products...
  ]
  

export default function ProductDetails() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-gray-100 pt-20">
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3 sticky top-0">
  <div className="justify-center h-full mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <img src="https://images.africanfinancials.com/63be93ed-ng-mtn-logo-200x200.png" alt="product-image" className="max-w-md py-6 px-8 rounded-lg" />
  </div>
</div>
                <div className="mt-6 h-full rounded-lg p-6 md:mt-0 md:w-2/3 overflow-y-auto">
                    <div className="mb-2 flex justify-between">
                        <div className="mt-5 sm:mt-0">
                            <h2 className="text-2xl font-bold text-gray-900">MTN Refill</h2>
                            <p className="mt-1 text-1xl text-gray-700">MTN formerly M-Cell, is one of Nigeria's premier mobile service providers. With Bitrefill's MTN refill, you can top-up mobile minutes and data from MTN with Bitcoin, Ethereum, Dash, Dogecoin, and Litecoin.</p>
                        </div>
                    </div>
                    <div className="flex mt-5 justify-between">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="email" className="block placeholder:text-2xl  text-1xl font-bold leading-6 text-gray-900">
                                Enter amount
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                    placeholder="N 5 - 5000"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:ml-4">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                Estimated Price
                            </label>
                            <select
                                id="location"
                                name="location"
                                className="mt-2 block w-full py-1.5 pl-3 pr-10 border-none text-gray-900 sm:text-sm sm:leading-6"
                                defaultValue="Canada"
                            >
                                <option>USD $4.99</option>
                                <option>EURO $4.99</option>
                                <option>BTC $4.99</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex mt-4 justify-between">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter your phone number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="phonenumber"
                                    id="number"
                                    className="block w-full placeholder:text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="08100135069"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="mt-10 flex flex-col sm:flex-row">
  <div className="flex flex-col sm:flex-row">
    <button
      type="submit"
      className="flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent bg-[#114f45] px-8 py-3 text-base font-medium text-white hover:bg-[#edc701] focus:outline-none focus:ring-2 focus:ring-[#114f45] focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full sm:mr-4"
    >
      <ShoppingCartIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Add to cart
    </button>

    <button
      type="button"
      className="mt-4 sm:mt-0 bg-[#114f45] flex items-center justify-center rounded-full px-3 py-3 text-white hover:bg-[#edc701]"
    >
      <ShoppingBagIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Purchase as Gift
    </button>
  </div>
</div>

                  
                 
                </div>
            </div>
         

 

            <div>
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">More products on Points</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full object-cover object-center lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="font-bold text-black">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>

            <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

 

        </div>

    )
}
