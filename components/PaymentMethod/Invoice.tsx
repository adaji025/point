"use client"
import { useState } from 'react'
import { TrashIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from "next/image";

import Bitcoin from '../../assets/images/crypto/bitcoin-svgrepo-com.svg';

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

export default function PaymentInvoice() {

    return (


        <div>
            <div className="mx-auto px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Order summary */}
                    <div className="lg:w-[35rem] lg:max-w-none">
                        <div className="mt-10 lg:mt-0">
                            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <h2 className="text-2xl font-bold ml-5 mt-5 mb-5 text-gray-900">Order details</h2>

                                {/* ...order summary content... */}


                                <ul role="list" className="divide-y divide-gray-200">
                                    <div className="px-4 py-6 sm:px-6">
                                        <div className="flex items-center justify-between mb-6">

                                            <div className="font-sm">Email address
                                                <p className="font-normal">samanibe@yahoo.com</p>
                                            </div>
                                            <button className="text-blue-500 underline">Change</button>
                                        </div>

                                        <div className="flex items-center justify-between mb-6">
                                            <div className="font-sm">Payment method
                                                <p className="font-normal">USDC ERC20</p>
                                            </div>

                                            <button className="text-blue-500 underline">Change</button>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="font-sm">Invoice ID</div>
                                            <p className="font-normal">5f36768b-4dc6-4c53-be39-81611810f35c</p>
                                        </div>
                                    </div>
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
                    <div className="max-w-8xl">
                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                            <h3 className="sr-only">Items in your cart</h3>


                            <div className="space-y-6 px-4 py-6 sm:px-6">
                                <ul className="rounded-lg">
                                    <div className="flex items-center">

                                        <div className="rounded-full w-8 h-8 flex items-center justify-center mr-4">
                                            <Image src={Bitcoin} className="h-8 w-8" alt='btc' />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-2xl font-bold  text-gray-900">Pay with Bitcoin</h2>
                                        </div>

                                    </div>

                                    <div className=" border-gray-200 px-4 py-6 sm:px-6">
                                        <button
                                            type="submit"
                                            className="w-64 justify-center items-center rounded-full border border-transparent bg-[#2a7671] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[#eecb25] focus:outline-none focus:ring-2 focus:ring-[#eecb25] focus:ring-offset-2 focus:ring-offset-gray-50"
                                        >
                                            Connect Wallet
                                        </button>
                                    </div>
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
