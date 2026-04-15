/**
 * Projects Data
 * =========================
 *
 * PURPOSE:
 * Central data source for projects
 *
 * WHAT THIS SOLVES:
 * - Enables API integration
 * - Keeps UI dynamic
 * - Easy to scale
 */

import ProjectImg from "@/assets/projects/project.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern portfolio built with React and GSAP.",
    image: ProjectImg,
    link: "/ProjectDetails/1",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "Full stack e-commerce platform.",
    image: ProjectImg,
    link: "/ProjectDetails/2",
  },
];