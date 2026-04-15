/**
 * AppRouter (Root Routing Orchestrator)
 * ==========================================================
 *
 * OVERVIEW:
 * - Entry point for all application routing
 * - Defines high-level route boundaries between public and admin domains
 *
 * ARCHITECTURE ROLE:
 * - Root router of the application
 * - Separates routing into domain-specific modules:
 *    - PublicRoutes -> user-facing website
 *    - AdminRoutes -> admin dashboard (protected)
 *
 * ROUTE STRUCTURE:
 * - /*        -> PublicRoutes (default application)
 * - /admin/*  -> AdminRoutes (admin domain)
 *
 * RESPONSIBILITIES:
 * - Initialize BrowserRouter
 * - Delegate routing to domain-level routers
 * - Maintain clean separation of concerns
 *
 * DESIGN PRINCIPLES:
 * - Keep root router minimal and declarative
 * - Delegate complexity to feature/domain routers
 * - Avoid mixing public and admin logic here
 *
 * SCALABILITY:
 * - Easily extendable for:
 *    - Additional domains (e.g., /api, /auth, /dashboard)
 *    - Micro-frontend architecture
 *    - Lazy-loaded route modules
 *
 * ROUTING FLOW:
 * 1. BrowserRouter initializes routing context
 * 2. Path is matched:
 *    - "/" -> handled by PublicRoutes
 *    - "/admin" -> handled by AdminRoutes
 * 3. Nested routes are resolved inside respective modules
 *
 * DO NOT:
 * - Do NOT add page-level routes here
 * - Do NOT add authentication logic here
 * - Do NOT add layout logic here
 *
 * RELATED FILES:
 * - /app/router/PublicRoutes.jsx
 * - /app/router/AdminRoutes.jsx
 * - /app/router/ProtectedRoute.jsx
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./AdminRoutes";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/*" element={<PublicRoutes />} />
                {/* Admin Routes */}
                <Route path="/admin/*" element={<PrivateRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}