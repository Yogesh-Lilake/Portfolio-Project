/**
 * Skills Data
 * =========================
 *
 * PURPOSE:
 * Central source of truth for all skills
 *
 * WHAT THIS SOLVES:
 * - Keeps UI fully dynamic
 * - Easy to scale (add categories, levels)
 * - Can be replaced by API later
 *
 * FUTURE READY:
 * - Add "level" for progress bars
 * - Add "category" for filtering
 */

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    className: "text-orange-500",
    category: "frontend",
    level: 90,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    className: "text-blue-500",
    category: "frontend",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    className: "text-yellow-500",
    category: "frontend",
    level: 88,
  },
  {
    name: "React",
    icon: FaReact,
    className: "text-cyan-500",
    category: "frontend",
    level: 85,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    className: "text-sky-500",
    category: "frontend",
    level: 90,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    className: "text-orange-500",
    category: "tools",
    level: 80,
  },
];