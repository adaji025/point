import CheckoutNavbar from "@/components/Navbar/CheckoutNavbar";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";


export const metadata = {
  title: "Shopping Cart - Points",
};


export default function PaymentPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <CheckoutNavbar/>
          <PaymentMethod/>
        </main>
      </div>
    </>


  )
}
