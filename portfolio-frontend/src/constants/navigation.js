/**
 * Navigation Configuration
 * =========================
 *
 * PURPOSE:
 * Central source of truth for navigation links
 *
 * WHAT THIS SOLVES:
 * - Reusability across navbar, footer, sidebar
 * - Easy updates (single place)
 * - Future API integration ready
 *
 * SCALABILITY:
 * - Can extend with roles, icons, permissions
 */

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Notes", path: "/notes" },
  { label: "Contact", path: "/contact" },
];