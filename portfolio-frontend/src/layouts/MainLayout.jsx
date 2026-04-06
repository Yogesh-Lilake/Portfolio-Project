import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-white">
      <Navbar />

      <main className="flex-1 mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}