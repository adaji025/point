import CheckoutNavbar from "@/components/Navbar/CheckoutNavbar";
import PaymentInvoice from "@/components/PaymentMethod/Invoice";

export const metadata = {
  title: "Invoice - Points",
};

export default function InvoicePage() {
  return (
    <>
      <PaymentInvoice />
    </>
  );
}
