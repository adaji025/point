import GiftCard from "@/components/Home/GiftCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <Navbar />
        <GiftCard/>
        <Footer/>
      </main>
    </div>

  )
}
