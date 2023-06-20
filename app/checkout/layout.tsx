import CheckoutNavbar from "@/components/Navbar/CheckoutNavbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <CheckoutNavbar />
      {children}
    </div>
  );
};

export default Layout;
