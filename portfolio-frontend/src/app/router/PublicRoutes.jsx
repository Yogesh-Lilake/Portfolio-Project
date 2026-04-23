/**
 * PublicRoutes (Main Application Routing Layer)
 * ==========================================================
 *
 * OVERVIEW:
 * - Handles all publicly accessible routes of the application
 * - Represents the main user-facing website (portfolio)
 *
 * ARCHITECTURE ROLE:
 * - Domain router for "public" section
 * - Mounted inside AppRouter as primary route tree
 *
 * ROUTE STRUCTURE:
 * - /                -> Home
 * - /about           -> About page
 * - /projects        -> Projects listing
 * - /projects/:slug  -> Project details (dynamic route)
 * - /contact         -> Contact page
 *
 * LAYOUT SYSTEM:
 * - All routes are wrapped inside `MainLayout`
 * - Ensures consistent UI:
 *    Navbar + ScrollProgress + Footer
 *
 * RESPONSIBILITIES:
 * - Define public route hierarchy
 * - Attach layout to all pages
 * - Handle fallback routing (NotFound)
 *
 * DYNAMIC ROUTING:
 * - `/projects/:slug` supports dynamic project pages
 * - Enables SEO-friendly URLs
 *
 * DEPENDENCIES:
 * - MainLayout -> global layout wrapper
 * - Feature pages (Home, About, Projects, Contact)
 * - NotFound -> fallback for unknown routes
 *
 * ROUTING FLOW:
 * 1. Route matches path
 * 2. Wrapped with MainLayout
 * 3. Corresponding page rendered inside <Outlet />
 *
 * SCALABILITY:
 * - Supports:
 *    - Lazy loading (React.lazy)
 *    - Code splitting per page
 *    - SEO optimization
 *    - Future public modules (blog, notes, etc.)
 *
 * DO NOT:
 * - Do NOT add authentication logic here
 * - Do NOT mix admin routes here
 * - Do NOT add layout logic inside pages
 *
 * RELATED FILES:
 * - /app/router/AppRouter.jsx
 * - /layouts/MainLayout.jsx
 * - /features/shared/NotFound.jsx
 */

import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/features/public/home/Home";
import About from "@/features/public/about/About";
import Projects from "@/features/public/projects/Projects";
import ProjectDetails from "@/features/public/projects/components/ProjectDetails";
import Contact from "@/features/public/contact/Contact";
import NotFound from "@/features/shared/NotFound";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}