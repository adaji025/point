"use client"
import { useState } from 'react'
import { TrashIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from "next/image";

import Bitcoin from '../../assets/images/crypto/bitcoin-svgrepo-com.svg';
import Ether from '../../assets/images/crypto/ethereum-eth-logo-diamond-purple.svg';
import Usdc from '../../assets/images/crypto/usd-coin-usdc-logo.svg';
import Usdt from '../../assets/images/crypto/tether-usdt-logo.svg';

const products = [
    {
        id: 1,
        title: 'MTN Airtime',
        href: '#',
        price: '8000.00 NGN',
        imageSrc: 'https://images.africanfinancials.com/63be93ed-ng-mtn-logo-200x200.png',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function PaymentMethod() {

    return (


        <div>
            <div className="mx-auto px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Order summary */}
                    <div className="max-w-2xl lg:max-w-none">
                        <div className="mt-10 lg:mt-0">
                            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <h2 className="text-2xl font-bold ml-5 mt-5 mb-5 text-gray-900">Order summary</h2>

                                {/* ...order summary content... */}
                                <ul role="list" className="divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <li key={product.id} className="flex px-4 py-6 sm:px-6">
                                            <div className="flex-shrink-0">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="w-20 rounded-md" />
                                            </div>

                                            <div className="ml-6 flex flex-1 flex-col">
                                                <div className="flex">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-sm">
                                                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
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
                                                    <p className=" text-sm font-medium text-gray-500">{product.price}</p>

                                                    <div className="ml-4">
                                                        <label htmlFor="quantity" className="sr-only">
                                                            Quantity
                                                        </label>
                                                        <select
                                                            className="rounded-full border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                        >
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
                                        <dd className="text-base font-medium text-gray-900">$75.52</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-6xl">
  <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
    <h3 className="sr-only">Items in your cart</h3>

    <h2 className="text-2xl font-bold ml-5 mt-5 mb-2 text-gray-900">Select payment method</h2>

    <div className="space-y-6 px-4 py-6 sm:px-6">
      <ul className="rounded-lg">
      <li className="p-4 flex items-center justify-between hover:bg-[#dadfe0] w-full">
  <Link href="/checkout/qs35ttrfkyk6ghd6557gddrhy546864d" className="flex items-center w-full">
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center mr-4">
        <Image src={Bitcoin} className="h-8 w-8" alt="btc" />
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Bitcoin</div>
      </div>
    </div>
    <div className="text-gray-500 ml-auto">0.00095596 BTC</div>
  </Link>
</li>


<li className="p-4 flex items-center justify-between hover:bg-[#dadfe0] w-full">
  <Link href="/checkout/qs35ttrfkyk6ghd6557gddrhy546864d" className="flex items-center w-full">
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center mr-4">
        
        <Image src={Ether} className="h-8 w-8" alt='ether' />
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Ether</div>
      </div>
    </div>
    <div className="text-gray-500 ml-auto">0.00095596 ETH</div>
  </Link>
</li>

<li className="p-4 flex items-center justify-between hover:bg-[#dadfe0] w-full ">
  <Link href="/checkout/qs35ttrfkyk6ghd6557gddrhy546864d" className="flex items-center w-full">
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center mr-4">
        
        <Image src={Usdc} className="h-8 w-8" alt='usdc' />
      </div>
      <div className="flex flex-col">
        <div className="font-bold">USDC ERC20</div>
      </div>
    </div>
    <div className="text-gray-500 ml-auto">20.24 USDC</div>
  </Link>
</li>

<li className="p-4 flex items-center justify-between  hover:bg-[#dadfe0] w-full">
  <Link href="/checkout/qs35ttrfkyk6ghd6557gddrhy546864d" className="flex items-center w-full">
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center mr-4">
        
      <Image src={Usdt} className="h-8 w-8" alt='usdt' />
      </div>
      <div className="flex flex-col">
        <div className="font-bold">USDT ERC20</div>
      </div>
    </div>
    <div className="text-gray-500 ml-auto">25.24 USDT</div>
  </Link>
</li>
       
        {/* Add more list items here */}
      </ul>
    </div>
  </div>
</div>



                </div>
            </div>
        </div>
    )
}
