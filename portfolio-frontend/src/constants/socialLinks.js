/**
 * Social Links Configuration
 * =========================
 *
 * PURPOSE:
 * Central source for all social links
 *
 * WHAT THIS SOLVES:
 * - Reusability
 * - Easy updates
 * - API ready
 */

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/yourusername",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/yourusername",
  },
];