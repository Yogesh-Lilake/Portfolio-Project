/**
 * NotFound Page Data (Config Driven)
 * ==========================================================
 *
 * PURPOSE:
 * - Centralized configuration for 404 page
 * - Enables dynamic updates without touching UI
 */

import ErrorAnimation from "@/assets/lottie/Error-404.lottie";

export const notFoundData = {
  animation: ErrorAnimation || null,
  title: "404",
  heading: "Oops! You took a wrong turn.",
  description:
    "The page you’re looking for doesn’t exist or may have been moved.",

  actions: [
    {
      label: "Go Home",
      to: "/",
      variant: "primary",
    },
    {
      label: "View Projects",
      to: "/projects",
      variant: "secondary",
    },
    {
      label: "Contact Me",
      to: "/contact",
      variant: "secondary",
    },
  ],

  suggestions: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ],
};