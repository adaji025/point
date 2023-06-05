"use client"; 
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CountrySelector from "../Util/selector";
import { COUNTRIES } from "../Util/lib/countries";
import { SelectMenuOption } from "../Util/lib/types";
import Link from 'next/link';
import Image from 'next/image';

import Logo from "../../assets/images/logo/logocolor.png"

const navigation = {
  categories: [
    {
      name: 'Gift Cards',
      featured: [
        { name: 'MTN', href: '#' },
        { name: 'GLO', href: '#' },
        { name: 'AIRTEL', href: '#' },
      ],
      country: [
        { name: 'DSTV', href: '#' },
        { name: 'MTN Data', href: '#' },
        { name: 'GLO', href: '#' },
        { name: 'AIRTEL', href: '#' },
      ],
      categories: [
        { name: 'Topups', href: '#' },
        { name: 'Gaming', href: '#' },
        { name: 'Bills', href: '#' },
        { name: 'Electricity', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'AEDC', href: '#' },
        { name: 'MTN', href: '#' },
        { name: 'AIRTEL', href: '#' },

      ],
    },
    {
      name: 'Games',
      featured: [
        { name: 'BET9JA', href: '#' },
        { name: 'SPORTYBET', href: '#' },
      ],
      collection: [
        { name: 'DSTV', href: '#' },
        { name: 'AEDC', href: '#' },
      ],
      categories: [
        { name: 'MTN Data', href: '#' },
        { name: 'GLO Data', href: '#' },
      ],
      brands: [
        { name: 'MTN', href: '#' },
        { name: 'GLO', href: '#' },
        { name: 'AIRTEL', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Phone Refill', href: '#' },
    { name: 'Travel', href: '#' },
  ],
}



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('NG');

  return (
    <div className="bg-white">
      {/* Mobile menu */}
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
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
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
                      <Tab.Panel key={category.name} className="space-y-12 px-4 pb-6 pt-10">
                        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                            <div>
                              <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
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
                              <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                Categories
                              </p>
                              <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
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
                              <p id="mobile-collection-heading" className="font-medium text-gray-900">
                                Collection
                              </p>
                              <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
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
                              <p id="mobile-brand-heading" className="font-medium text-gray-900">
                                Brands
                              </p>
                              <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
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
                      <a href={page.href} className="-m-2 block p-2 font-bold text-gray-900">
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
                          id={'countries'}
                          open={isOpen}
                          onToggle={() => setIsOpen(!isOpen)}
                          onChange={val => setCountry(val)}
                          // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
                          selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption}
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

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-[#114f45]">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Country selector */}

              <div style={{ marginTop: "-20px" }} className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end ">
                <div className="group relative  rounded-full border-transparent bg-none ">

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select a country
                    </label>
                    <CountrySelector
                      id={'countries'}
                      open={isOpen}
                      onToggle={() => setIsOpen(!isOpen)}
                      onChange={val => setCountry(val)}
                      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
                      selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption}
                    />
                  </div>

                  

                </div>

              </div>

              <Link href="#" className="flex font-bold text-sm items-center text-white hover:text-[#eecb25]">
  <QuestionMarkCircleIcon className="h-6 w-6 mr-1" />
  <span className="ml-1">Help</span>
</Link>

            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <Link href="/">
                      <Image className='w-24' src={Logo} alt="points" />
                    </Link>
                  </div>

                  <div className="w-full lg:ml-5 max-w-lg lg:max-w-xs hidden sm:block">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-gray-400 focus-within:text-[#2a7671]">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        className="block w-full rounded-full border-0 bg-[#e5e8e8] py-1.5 pl-10 pr-3 text-gray-900  focus:ring-offset-1 focus:ring-offset-black sm:text-sm sm:leading-6"
                        placeholder="Search for gift cards or bills"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>


                  <div className="hidden h-full lg:flex">
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
                                        ? 'border-[#114f45] text-[#114f45]'
                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-bold transition-colors duration-200 ease-out'
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
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

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
                                                    <a href={item.href} className="hover:text-gray-800">
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                            <div>
                                              <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                                Categories
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-categories-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.categories.map((item) => (
                                                  <li key={item.name} className="flex">
                                                    <a href={item.href} className="hover:text-gray-800 font-bold">
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                            <div>
                                              <p id="desktop-collection-heading" className="font-medium text-gray-900">
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
                                              <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                                Trending
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-brand-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.brands.map((item) => (
                                                  <li key={item.name} className="flex">
                                                    <a href={item.href} className="hover:text-gray-800 font-bold">
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

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>

                    {/* Logo (lg-) */}
                    <Link href="/" className="lg:hidden">
                      <Image className='ml-3 w-24' src={Logo} alt="points" />
                    </Link>


                  </div>



                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      {/* Search */}
                      <div className="lg:hidden block">
                        <a href="#" className=" ml-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>


                      <div className="flow-root ml-5">

                        <Popover.Group>
                          <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                              <ShoppingCartIcon
                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                              <span className="sr-only">items in cart, view bag</span>
                              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                                    Looks like you haven't added anything to your cart yet</p>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </Popover>
                        </Popover.Group>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}
