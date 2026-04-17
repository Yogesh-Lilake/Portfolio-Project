/**
 * HOME SKILLS DATA CONFIG
 * =============================
 *
 * PURPOSE:
 * - Centralized skills data
 * - Reusable across pages (Home + About)
 * - UI-driven configuration
 */

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaAndroid,
  FaGitAlt,
} from "react-icons/fa";

export const skillsData = {
  title: "Skills",

  items: [
    { name: "HTML", icon: FaHtml5, className: "text-orange-500", category: "frontend", level: 90 },
    { name: "CSS", icon: FaCss3Alt, className: "text-blue-500", category: "frontend", level: 85 },
    { name: "JavaScript", icon: FaJs, className: "text-yellow-500", category: "frontend", level: 88 },
    { name: "React", icon: FaReact, className: "text-cyan-500", category: "frontend", level: 85 },
    { name: "PHP", icon: FaPhp, className: "text-purple-500", category: "backend", level: 80 },
    { name: "Java", icon: FaJava, className: "text-red-500", category: "backend", level: 82 },
    { name: "Android", icon: FaAndroid, className: "text-green-500", category: "mobile", level: 78 },
    { name: "Git", icon: FaGitAlt, className: "text-orange-500", category: "tools", level: 90 },
  ],

  ui: {
    columns: {
      base: 2,
      sm: 3,
      md: 4,
      lg: 6,
      xl: 8,
    },
    cardStyle: "glass", // future-ready
  },
};