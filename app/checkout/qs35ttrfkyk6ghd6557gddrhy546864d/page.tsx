import CheckoutNavbar from "@/components/Navbar/CheckoutNavbar";
import PaymentInvoice from "@/components/PaymentMethod/Invoice";


export const metadata = {
  title: "Invoice - Points",
};


export default function InvoicePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
            <CheckoutNavbar/>
         <PaymentInvoice/>
        </main>
      </div>
    </>


  )
}
