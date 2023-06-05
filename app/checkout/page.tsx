import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
      <Head>
        <title> Shopping Cart - Points</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <Footer/>
      </main>
    </div>

  )
}
