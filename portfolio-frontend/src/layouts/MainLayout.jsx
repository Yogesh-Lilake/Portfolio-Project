/**
 * MainLayout (Application Shell)
 * ==========================================================
 *
 * OVERVIEW:
 * - Defines the global layout structure of the application
 * - Wraps all pages with shared UI components
 *
 * STRUCTURE:
 *   [ ScrollProgress ]
 *   [ Navbar ]
 *   [ Page Content (Outlet) ]
 *   [ Footer ]
 *
 * RESPONSIBILITIES:
 * - Provide consistent UI across all routes
 * - Maintain layout hierarchy
 * - Inject shared components
 *
 * ROUTING:
 * - Uses `Outlet` from react-router
 * - Renders matched child routes dynamically
 *
 * DEPENDENCIES:
 * - ScrollProgress → top scroll indicator
 * - Navbar → global navigation
 * - Footer → global footer
 *
 * DESIGN PRINCIPLES:
 * - Layout should be "dumb" (no business logic)
 * - Only structural responsibility
 *
 * SCALABILITY:
 * - Can support multiple layouts:
 *    - PublicLayout
 *    - AdminLayout
 * - Easy to plug role-based layouts later
 *
 * PERFORMANCE:
 * - No unnecessary re-renders
 * - Static layout wrapper
 *
 * DO NOT:
 * - Do NOT add page-specific logic here
 * - Do NOT fetch data here
 *
 * RELATED FILES:
 * - /app/router/AppRouter.jsx        -> uses MainLayout as wrapper
 * - /components/common/Navbar.jsx    -> mounted inside MainLayout
 * - /components/common/Footer.jsx    -> moubted inside MainLayout
 */

import { Outlet } from "react-router-dom";
import ScrollProgress from "@/components/common/ScrollProgress";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-white">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}