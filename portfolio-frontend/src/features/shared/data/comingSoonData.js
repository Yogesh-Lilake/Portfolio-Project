/**
 * Coming Soon Page Data (Config Driven)
 * ==========================================================
 *
 * PURPOSE:
 * - Centralized configuration for ComingSoon page
 * - Enables dynamic updates without touching UI
 *
 * NOTES:
 * - Use PUBLIC path for animation (avoid build-time crashes)
 */

import UnderConstruction  from "@/assets/lottie/Under-Maintenance.lottie";

export const comingSoonData = {
  animation: UnderConstruction,

  getHeading: (pageName) => `${pageName} Coming Soon`,

  description:
    "We're currently working on this section. It will be available soon — stay tuned.",

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
  ],
};