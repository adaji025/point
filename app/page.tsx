import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Faq from "@/components/Faq/Faq";
import Script from "next/script";
import Hero from "@/components/Home/Hero";
import TopGiftCard from "@/components/Home/TopGiftCard";
import Game from "@/components/Home/Game";
import Collection from "@/components/Home/Collection";
import TopProduct from "@/components/Home/TopProduct";
import Partners from "@/components/Home/Partners";
import CallToAction from "@/components/Home/CallToAction";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <>
          <Script
            src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"
            strategy="worker"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
    
  document.addEventListener("alpine:init", () => {
    Alpine.data("imageSlider", () => ({
      currentIndex: 1,
      previous() {
        if (this.currentIndex > 1) {
          this.currentIndex = this.currentIndex - 1;
        }
      },
      forward() {
        if (this.currentIndex < this.images.length) {
          this.currentIndex = this.currentIndex + 1;
        }
      },
    }));
  });
  `,
            }}
          />
        </>
        <Navbar/>
        <Hero />
        <TopGiftCard />
        <TopProduct />
        <Game />
        <Partners />
        <CallToAction />
        <Collection />
        <Faq />
        <Footer/>
      </main>
    </div>
  );
}
