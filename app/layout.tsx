import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <Head>
        <title> </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
