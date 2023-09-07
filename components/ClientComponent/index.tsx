"use client";

import React, { useState, useEffect, FC, ReactElement } from "react";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartProvider } from "@/context/CartProvider";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactElement;
};

const ClientComponent: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextTopLoader color="#2A7671" />
        <ThemeProvider attribute="class">
            <CartProvider>
              <Navbar />
              {children}
              <Footer />
            </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ClientComponent;
