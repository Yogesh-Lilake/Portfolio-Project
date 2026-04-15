/**
 * GSAP Global Config
 * =========================
 *
 * PURPOSE:
 * Centralized animation configuration
 *
 * WHAT THIS SOLVES:
 * - Avoids duplicate plugin registration
 * - Keeps animation style consistent
 * - Reduces boilerplate across project
 * - Acts as single source of truth for animation engine
 *
 * WHY IMPORTANT:
 * - Central config ensures maintainability
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

// Global defaults
gsap.defaults({
  duration: 0.8,
  ease: "power3.out",
});

export { gsap, ScrollTrigger };