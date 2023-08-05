import ClientComponent from "@/components/ClientComponent";
import "../styles/globals.css";

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
  return <ClientComponent>{children}</ClientComponent>;
}
