/**
 * ==========================================================
 * PROJECTS GRID ANIMATION CONTROLLER
 * ==========================================================
 *
 * PURPOSE:
 * - Animates project cards on scroll
 *
 * USED IN:
 * - ProjectsGrid.jsx
 *
 * EFFECT:
 * - Fade + staggered card entrance
 *
 * WHY:
 * - Improves visual hierarchy
 * - Enhances perceived performance
 *
 * IMPORTANT:
 * - Triggered on pagination change
 */

import { gsap } from "@/animations";

export const runProjectsGridAnimation = ({ section, cards }) => {
  if (typeof window === "undefined") return () => {};

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) return () => {};

  const ctx = gsap.context(() => {
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      },
    );
  });

  return () => ctx.revert();
};
