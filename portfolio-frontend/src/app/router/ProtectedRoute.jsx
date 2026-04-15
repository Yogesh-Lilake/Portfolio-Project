/**
 * ProtectedRoute (Authentication Guard)
 * ==========================================================
 *
 * OVERVIEW:
 * - Higher-order component that protects routes from unauthorized access
 * - Ensures only authenticated users can access wrapped components
 *
 * PURPOSE:
 * - Acts as a gatekeeper for secure routes (admin/dashboard)
 *
 * HOW IT WORKS:
 * - Checks authentication state (localStorage in current implementation)
 * - If user is NOT authenticated:
 *    -> Redirects to "/admin/login"
 * - If authenticated:
 *    -> Renders child components
 *
 * RESPONSIBILITIES:
 * - Enforce route-level security
 * - Handle redirection logic
 * - Keep authentication checks centralized
 *
 * CURRENT AUTH STRATEGY:
 * - Uses localStorage key: "adminAuthenticated"
 *
 * LIMITATION (IMPORTANT):
 * - This is a basic client-side check
 * - Not secure for production-grade applications
 *
 * FUTURE IMPROVEMENTS:
 * - Replace with JWT/session-based authentication
 * - Integrate with backend API
 * - Add role-based access control (RBAC)
 * - Add token expiration handling
 *
 * USAGE:
 * <ProtectedRoute>
 *    <AdminLayout />
 * </ProtectedRoute>
 *
 * DESIGN PRINCIPLES:
 * - Keep logic minimal and reusable
 * - Avoid coupling with UI components
 *
 * DO NOT:
 * - Do NOT fetch API data here
 * - Do NOT handle login logic here
 * - Do NOT store sensitive data in localStorage (for production)
 *
 * RELATED FILES:
 * - /app/router/AdminRoutes.jsx
 * - /features/admin/pages/Login.jsx
 */

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}