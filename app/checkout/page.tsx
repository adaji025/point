import Checkout from "@/components/Checkout/Checkout";
import CheckoutNavbar from "@/components/Navbar/CheckoutNavbar";


export const metadata = {
  title: "Shopping Cart - Points",
};


export default function CheckoutPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <CheckoutNavbar/>
          <Checkout />
        </main>
      </div>
    </>


  )
}
