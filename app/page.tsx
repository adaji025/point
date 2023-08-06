"use client"

import {useState, useEffect} from "react"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Home/Hero";
import TopGiftCard from "@/components/Home/TopGiftCard";
import Game from "@/components/Home/Game";
import Collection from "@/components/Home/Collection";
import TopProduct from "@/components/Home/TopProduct";
import Partners from "@/components/Home/Partners";
import CallToAction from "@/components/Home/CallToAction";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
  
    useEffect(() => setMounted(true));
  return (
    <div className={`flex flex-col min-h-screen overflow-hidden ${mounted && resolvedTheme === "dark" ? "bg-black" : "bg-white"}`}>
      <main className="grow">
        <Hero  />
        <TopGiftCard />
        <TopProduct />
        <Game />
        <Partners />
        <CallToAction />
        <Collection />
        <Faq />
      </main>
    </div>
  );
}
