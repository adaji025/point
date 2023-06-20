import CheckoutNavbar from "@/components/Navbar/CheckoutNavbar";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";

export const metadata = {
  title: "Shopping Cart - Points",
};

export default function PaymentPage() {
  return (
    <>
      <PaymentMethod />
    </>
  );
}
