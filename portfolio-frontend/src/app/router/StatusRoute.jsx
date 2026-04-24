/**
 * StatusRoute (Route Rendering Controller)
 * ==========================================================
 *
 * OVERVIEW:
 * - Central decision engine for route rendering
 * - Determines WHAT to render based on route status
 *
 * ARCHITECTURE ROLE:
 * - Acts as a "controller layer" between config and UI
 * - Interprets routeConfig and returns correct UI state
 *
 * INPUT:
 * - element -> page component
 * - status -> route state
 *
 * OUTPUT:
 * - React component based on status
 *
 * RENDERING RULES:
 * - status === "active"
 *      -> render actual page component
 *
 * - status === "coming-soon"
 *      -> render <ComingSoon />
 *
 * - status === "maintenance"
 *      -> render maintenance UI
 *
 * - fallback (invalid config)
 *      -> render <NotFound />
 *
 * KEY PRINCIPLE:
 * - Centralize all route state decisions in one place
 * - Prevent UI components from handling route logic
 *
 * BENEFITS:
 * - Clean separation of concerns
 * - Easy to introduce new states without touching routing layer
 * - Reduces duplication across routes
 *
 * EXTENSIBILITY:
 * - Add new states easily:
 *    - "beta"
 *    - "private"
 *    - "experimental"
 *
 * EXAMPLE:
 * if (status === "beta") return <BetaPage />;
 *
 * DO NOT:
 * - Do NOT add layout logic here
 * - Do NOT fetch data here
 * - Do NOT hardcode routes here
 *
 * RELATED FILES:
 * - /app/router/PublicRoutes.jsx
 * - /app/router/routeConfig.jsx
 * - /features/shared/ComingSoon.jsx
 * - /features/shared/NotFound.jsx
 */

import ComingSoon from "@/features/shared/ComingSoon";
import NotFound from "@/features/shared/NotFound";

export default function StatusRoute({ element: Component, status }) {
  if (status === "coming-soon") {
    return <ComingSoon />;
  }

  if (status === "maintenance") {
    return <div>Temporarily unavailable</div>;
  }

  if (status === "active" && Component) {
    return <Component />;
  }

  return <NotFound />;
}