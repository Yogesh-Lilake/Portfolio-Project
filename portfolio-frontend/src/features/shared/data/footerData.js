/**
 * FOOTER DATA CONFIG (PRODUCTION-READY)
 * ============================================
 *
 * PURPOSE:
 * - Centralized footer configuration
 * - Fully data-driven rendering
 *
 * DESIGN:
 * - Separates content, structure, and UI flags
 *
 * FUTURE:
 * - CMS / API integration ready
 */

export const footerData = {
  brand: {
    name: "Yogesh Lilake",

    description:
      "Building modern, responsive and high-performance web applications with clean UI and smooth user experience.",
  },

  sections: [
    {
      id: "navigation",
      title: "Quick Links",
      type: "navigation",
      dataSource: "navigationData",
    },
    {
      id: "social",
      title: "Connect",
      type: "social",
      dataSource: "socialData",
      description:
        "Follow me for updates on projects, coding tips and development journey.",
    },
  ],

  bottomBar: {
    enabled: true,
    copyright: "{year} Yogesh Portfolio. All Rights Reserved.",
    credits: {
      text: "Designed & Developed by",
      name: "Yogesh Lilake",
    },
  },

  ui: {
    background: {
      enabled: true,
      orbs: true,
      glowLine: true,
    },
  },
};