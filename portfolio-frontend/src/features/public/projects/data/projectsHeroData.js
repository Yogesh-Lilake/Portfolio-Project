/**
 * ==========================================================
 * PROJECTS HERO DATA (STATIC CONTENT CONFIG)
 * ==========================================================
 *
 * PURPOSE:
 * - Provides content for Projects Hero section
 *
 * LAYER:
 * - CONFIG (UI CONTENT)
 *
 * USED IN:
 * - ProjectsHero.jsx
 *
 * WHY THIS EXISTS:
 * - Avoid hardcoding text inside component
 * - Enables CMS integration in future
 *
 * FIELDS:
 * - title
 * - highlight (styled part of title)
 * - subtitle
 * - animation (optional visual asset)
 *
 * IMPORTANT:
 *  No logic here
 *  No dynamic data
 *
 * Pure content configuration
 */

import HeroProjectAnimation from "@/assets/lottie/projects.lottie";

export const projectsHeroData = {
  title: "Featured",
  highlight: "Projects",
  subtitle:
    "A showcase of my web and mobile projects — combining creativity, scalability, and clean code.",
  animation: HeroProjectAnimation,
};