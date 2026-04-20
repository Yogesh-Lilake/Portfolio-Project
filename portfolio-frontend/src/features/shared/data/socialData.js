/**
 * SOCIAL DATA (SHARED DOMAIN DATA)
 * ============================================
 *
 * PURPOSE:
 * - Defines all external social links
 *
 * DESIGN:
 * - Data-driven
 * - UI-agnostic
 *
 * VISIBILITY SYSTEM:
 * - pages   -> where it appears
 * - roles   -> user roles allowed
 * - enabled -> feature toggle
 *
 * PRIORITY:
 * - Controls order of rendering
 *
 * SCALABILITY:
 * - Add/remove platforms without touching UI
 * - Ready for CMS/API integration
 */


import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const socialData = {
  title: "Connect",

  items: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: FaGithub,
      visibility: {
        pages: ["footer", "contact"],
        enabled: true,
        roles: ["guest"],
      },
      priority: 1,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
      visibility: {
        pages: ["footer", "contact"],
        enabled: true,
        roles: ["guest"],
      },
      priority: 2,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: FaTwitter,
      visibility: {
        pages: ["footer", "contact"],
        enabled: true, // feature toggle
        roles: ["guest"],
      },
      priority: 3,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: FaInstagram,
      visibility: {
        pages: ["footer"],
        enabled: true,
        roles: ["guest"],
      },
      priority: 4,
    },
  ],
};