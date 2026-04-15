/**
 * AdminRoutes (Protected + Public Admin Routing Layer)
 * ==========================================================
 *
 * OVERVIEW:
 * - Handles all routing related to the admin section of the application
 * - Separates public admin routes (e.g., login) from protected routes (dashboard)
 *
 * ARCHITECTURE ROLE:
 * - Acts as a domain-specific router for "admin"
 * - Mounted inside the main application router (AppRouter)
 *
 * ROUTE STRUCTURE:
 * - /admin/login        -> Public (no authentication required)
 * - /admin/*            -> Protected (requires authentication)
 *
 * SECURITY MODEL:
 * - Protected routes are wrapped with `ProtectedRoute`
 * - Prevents unauthorized access to admin pages
 *
 * RESPONSIBILITIES:
 * - Define admin route hierarchy
 * - Apply authentication guards
 * - Attach AdminLayout to protected routes
 *
 * LAYOUT SYSTEM:
 * - AdminLayout is only applied to authenticated routes
 * - Login page bypasses layout (clean auth UI)
 *
 * DEPENDENCIES:
 * - ProtectedRoute       -> handles authentication logic
 * - AdminLayout          -> layout wrapper for admin pages
 * - Login, Dashboard     -> admin feature pages
 * - NotFound             -> fallback for invalid admin routes
 *
 * ROUTING FLOW:
 * 1. User visits /admin/login    -> direct access
 * 2. User visits /admin          -> passes through ProtectedRoute
 * 3. If authenticated            -> render AdminLayout + Dashboard
 * 4. If not                      -> redirected (handled inside ProtectedRoute)
 *
 * SCALABILITY:
 * - Easily extendable for:
 *    - Role-based access (admin, super-admin)
 *    - Nested admin modules (users, settings, analytics)
 *    - Lazy-loaded admin pages
 *
 * DO NOT:
 * - Do NOT add business logic here
 * - Do NOT fetch data here
 * - Do NOT bypass ProtectedRoute for secure pages
 *
 * RELATED FILES:
 * - /app/router/AppRouter.jsx           -> mounts AdminRoutes
 * - /app/router/ProtectedRoute.jsx      -> auth guard
 * - /features/admin/layouts/AdminLayout.jsx
 * - /features/shared/NotFound.jsx
 */

import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/features/admin/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import Login from "@/features/admin/pages/Login";
import Dashboard from "@/features/admin/pages/Dashboard";

import NotFound from "@/features/shared/NotFound";


export default function AdminRoutes() {
  return (
    <Routes>
      {/* Public Admin */}
      <Route path="login" element={<Login />} />

      {/* Protected */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}