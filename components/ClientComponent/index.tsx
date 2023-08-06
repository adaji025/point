"use client";

import React, { useState, useEffect, FC } from "react";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DataProvider from "@/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const ClientComponent: FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true));
  return (
    <html lang="en">
      <body
        className={`${
          mounted && resolvedTheme === "light" ? "bg-white" : "bg-black"
        } ${inter.className}`}
      >
        <NextTopLoader color="#2A7671" />
        <ThemeProvider attribute="class">
          <DataProvider>
            <Navbar />
            {children}
            <Footer />
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ClientComponent;
