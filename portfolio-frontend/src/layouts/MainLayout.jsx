import { Outlet } from "react-router-dom";
import ScrollProgress from "../components/common/ScrollProgress";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#b0b0b] text-white">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}