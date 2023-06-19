import ProductDetails from "@/components/Product/ProductDetails";

export const metadata = {
  title: "Recharge - Topup on Points",
};

export default function RechargePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <ProductDetails />
        </main>
      </div>
    </>
  );
}
