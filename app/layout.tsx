import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import DataProvider from "@/context/DataContext";

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
  return (
    <html lang="en">
      <body className={`bg-black/5 ${inter.className}`}>
        <NextTopLoader color="#2A7671" />
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
