"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo/logocolor.png";
import { useRouter } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CheckoutNavbar() {
  const router = useRouter();

  return (
    <nav aria-label="Top" className="border-b">
      <div className="cursor-pointer mx-auto max-w-[1400px] px-6 md:px-8 lg:px-16 py-10">
        <Image
          className="w-24 md:w-36 xl:w-[220px]"
          src={Logo}
          alt="points"
          onClick={() => router.back}
        />
      </div>
    </nav>
  );
}
