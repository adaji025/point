"use client";

import NextNProgress from "nextjs-progressbar";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
import "../styles/globals.css";

export const metadata = {
  title: "Points - Buy gift cards, pay utility bills with crypto",
  description: "Get card through crypto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`bg-black/5 ${inter.className}`}>
        <NextTopLoader color="#2A7671" height={5} />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
