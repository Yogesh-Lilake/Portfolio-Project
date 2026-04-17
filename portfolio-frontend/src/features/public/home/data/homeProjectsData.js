/**
 * HOME PROJECTS DATA CONFIG
 * =============================
 *
 * PURPOSE:
 * - Decouple UI from content
 * - Enable CMS/API integration
 * - Support filtering, routing, scaling
 */

import projectImage from "@/assets/projects/project.png";

export const homeProjectsData = {
  title: "Featured Projects",

  items: [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Modern portfolio built with React, GSAP animations, and scalable architecture.",
      image: projectImage,
      link: "/projects/portfolio",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce app with authentication, cart, and payment integration.",
      image: projectImage,
      link: "/projects/ecommerce",
      featured: true,
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "Productivity app with drag-drop, API integration, and real-time updates.",
      image: projectImage,
      link: "/projects/task-manager",
      featured: true,
    },
  ],

  ui: {
    maxWidth: "xl",
    gridVariant: "default",
  },

  cta: {
    label: "See All Projects",
    link: "/projects",
  },
};