"use client";
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../assets/images/logo/logocolor.png"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CheckoutNavbar() {


  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <div className="flex items-center">
                      <Link href="/recharge" className="block">
                        <ChevronLeftIcon className="h-6 w-6 font-bold mr-4 hover:bg-[#dadfe0] rounded-full" />
                      </Link>
                      <Link href="/recharge" className="block">
                        <Image className="w-24" src={Logo} alt="points" />
                      </Link>
                    </div>
                  </div>
                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    {/* Logo (lg-) */}
                    <Link href="/recharge" className="block">
                      <ChevronLeftIcon className="h-6 w-6 font-bold mr-4 hover:bg-[#dadfe0] rounded-full" />
                    </Link>
                    <Link href="/" className="lg:hidden">
                      <Image className='ml-3 w-24' src={Logo} alt="points" />
                    </Link>
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
