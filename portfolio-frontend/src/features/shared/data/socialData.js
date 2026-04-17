/**
 * SOCIAL DATA CONFIG (SHARED)
 * =============================
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
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: FaInstagram,
    },
  ],

  ui: {
    iconSize: 22,
    showLabels: false,
  },
};