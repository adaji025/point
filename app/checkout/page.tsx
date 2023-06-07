import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title> Shopping Cart - Points</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <div className="w-screen"></div>
        </main>
      </div>
    </>
  );
}
