"use client"

import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [active, setActive] = React.useState("Top Products");

  return (
    <div className="flex max-w-[1400px] mx-auto px-4 mt-10">
      <div className="hidden mobile:block mt-3">
        <Sidebar {...{ active, setActive }} />
      </div>
      <main className="w-full mobile:w-[calc(100%-250px)] lg:w-[calc(100%-300px)]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
