"use client";
import {useState, useEffect} from "react"
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider, useTheme } from "next-themes";
import DataProvider from "@/context/DataContext";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Points - Buy gift cards, pay utility bills with crypto",
  description: "Get card through crypto.",
  icons: {
    icon: "/point-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true));
  return (
    <html lang="en">
      <body
        className={`${mounted && resolvedTheme === "light" ? "bg-white" : "bg-red-500"} ${
          inter.className
        }`}
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
}
