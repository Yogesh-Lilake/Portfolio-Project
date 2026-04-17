/**
 * FOOTER DATA CONFIG (GLOBAL SHARED)
 * =====================================
 *
 * PURPOSE:
 * - Centralized footer configuration
 * - Reusable across layouts
 * - CMS/API ready
 *
 * SCALABILITY:
 * - Add sections (newsletter, services, etc.)
 * - Replace with API without touching UI
 */

export const footerData = {
  brand: {
    name: "YogeshLilake",

    description:
      "Building modern, responsive and high-performance web applications with clean UI and smooth user experience.",

    contact: {
      location: "Mumbai, India",
      email: "yogesh@email.com",
    },
  },

  sections: [
    {
      id: "navigation",
      title: "Quick Links",
      type: "navigation", // uses navigationData
    },
    {
      id: "social",
      title: "Connect",
      type: "social", // uses socialData
      description:
        "Follow me for updates on projects, coding tips and development journey.",
    },
  ],

  bottomBar: {
    show: true,
    copyright:
      "{year} Yogesh Portfolio. All Rights Reserved.",

    credits: {
      text: "Designed & Developed by",
      name: "Yogesh Lilake",
    },
  },

  ui: {
    showBackgroundEffects: true,
    showOrbs: true,
    showGlowLine: true,
  },
};