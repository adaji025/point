import Head from "next/head";
import ProductDetails from "@/components/Product/ProductDetails";

export default function RechargePage() {
  return (
    <>
      <Head>
        <title> Recharge - Topup on Points</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <ProductDetails />
        </main>
      </div>
    </>
  );
}
