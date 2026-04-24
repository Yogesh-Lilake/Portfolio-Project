/**
 * routeConfig (Routing Source of Truth)
 * ==========================================================
 *
 * OVERVIEW:
 * - Centralized configuration for all public routes
 * - Defines WHAT routes exist and their current state
 *
 * ARCHITECTURE ROLE:
 * - Acts as the "data layer" for routing
 * - Decouples route definition from rendering logic
 *
 * STRUCTURE:
 * Each route object contains:
 * - path -> URL path
 * - element -> React component (page)
 * - status -> route state
 *
 * STATUS TYPES:
 * - "active"        -> Render actual page
 * - "coming-soon"   -> Render ComingSoon page
 * - "maintenance"   -> Render maintenance UI
 *
 * EXAMPLE:
 * { path: "/notes", element: null, status: "coming-soon" }
 *
 * ROUTING FLOW:
 * routeConfig -> consumed by PublicRoutes -> passed to StatusRoute
 *
 * KEY PRINCIPLE:
 * - This file defines route STATE, not behavior
 * - Behavior is handled by StatusRoute
 *
 * BENEFITS:
 * - Single source of truth for all routes
 * - Easy to enable/disable features without touching UI
 * - Supports feature flags and staged rollouts
 *
 * SCALABILITY:
 * - Easily extendable for:
 *    - Role-based access (user/admin)
 *    - A/B testing routes
 *    - CMS-driven pages
 *
 * DO NOT:
 * - Do NOT add JSX rendering logic here
 * - Do NOT import layout components here
 * - Do NOT handle routing decisions here
 *
 * RELATED FILES:
 * - /app/router/PublicRoutes.jsx
 * - /app/router/StatusRoute.jsx
 */

import Home from "@/features/public/home/Home";
import About from "@/features/public/about/About";
import Projects from "@/features/public/projects/Projects";
import ProjectDetails from "@/features/public/projects/components/ProjectDetails";
import Contact from "@/features/public/contact/Contact";

export const routeConfig = [
  { path: "/", element: Home, status: "active" },
  { path: "/about", element: About, status: "active" },
  { path: "/projects", element: Projects, status: "active" },
  { path: "/projects/:slug", element: ProjectDetails, status: "active" },
  { path: "/contact", element: Contact, status: "active" },

  // Not built yet
  { path: "/notes", element: null, status: "coming-soon" },
];