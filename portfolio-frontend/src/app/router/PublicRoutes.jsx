/**
 * PublicRoutes (Public Domain Routing Orchestrator)
 * ==========================================================
 *
 * OVERVIEW:
 * - Entry point for all public-facing routes (portfolio website)
 * - Uses a system-driven routing architecture (config + controller)
 * - Delegates rendering logic to StatusRoute instead of direct page mapping
 *
 * ARCHITECTURE ROLE:
 * - Domain-level router for "public" application scope
 * - Mounted inside AppRouter as the primary route tree
 * - Bridges route configuration (routeConfig) with rendering engine (StatusRoute)
 *
 * ROUTING MODEL (IMPORTANT):
 * - Routes are NOT hardcoded
 * - Routes are defined in `routeConfig`
 * - Rendering behavior is controlled by `StatusRoute`
 *
 * ROUTING FLOW:
 * 1. Browser matches path
 * 2. routeConfig provides:
 *      - path
 *      - component
 *      - status (active / coming-soon / maintenance)
 * 3. StatusRoute decides what to render:
 *      - active -> actual page component
 *      - coming-soon -> ComingSoon page
 *      - maintenance -> maintenance UI
 *      - fallback -> NotFound
 *
 * LAYOUT SYSTEM:
 * - All routes are wrapped inside `MainLayout`
 * - Ensures consistent UI across pages:
 *    Navbar + ScrollProgress + Footer
 *
 * RESPONSIBILITIES:
 * - Map routeConfig into React Router <Route> elements
 * - Attach MainLayout to all public routes
 * - Provide fallback route (NotFound)
 *
 * KEY DESIGN PRINCIPLE:
 * - PublicRoutes does NOT decide page behavior
 * - It only connects:
 *      config -> controller -> layout
 *
 * SCALABILITY:
 * - Add new route -> only update routeConfig
 * - Add new state -> extend StatusRoute (no changes here)
 * - Supports:
 *    - Lazy loading
 *    - Feature flags
 *    - CMS-driven routing (future)
 *
 * DO NOT:
 * - Do NOT hardcode routes here
 * - Do NOT add business logic here
 * - Do NOT conditionally render pages here
 * - Do NOT bypass StatusRoute
 *
 * RELATED FILES:
 * - /app/router/AppRouter.jsx
 * - /app/router/routeConfig.jsx
 * - /app/router/StatusRoute.jsx
 * - /layouts/MainLayout.jsx
 * - /features/shared/ComingSoon.jsx
 * - /features/shared/NotFound.jsx
 */

import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import StatusRoute from "./StatusRoute";
import { routeConfig } from "./routeConfig";

import NotFound from "@/features/shared/NotFound";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Dynamic Routes */}
        {routeConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <StatusRoute
                element={route.element}
                status={route.status}
              />
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}