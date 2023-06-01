import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductDetails from "@/components/Product/ProductDetails";
export default function RechargePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
      <Head>
        <title> Recharge - Topup on Points</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <ProductDetails/>
        <Footer/>
      </main>
    </div>

  )
}
