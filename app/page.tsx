import TopNavbar from "@/components/Navbar/TopNavbar";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <TopNavbar />
        <Navbar />
      </main>
    </div>

  )
}
