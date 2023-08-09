import ClientComponent from "@/components/ClientComponent";
import "../styles/globals.css";

export const metadata = {
  title: "POINTS: Buy Gift Cards, Pay Utility Bills and much more on Points.",
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
