/**
 * ==========================================================
 * PROJECTS HERO ANIMATION CONTROLLER
 * ==========================================================
 *
 * PURPOSE:
 * - Controls animation sequence for hero section
 *
 * USED IN:
 * - ProjectsHero.jsx
 *
 * FLOW:
 * Title -> Subtitle
 *
 * WHY:
 * - Improves first impression
 * - Guides user attention
 *
 * ACCESSIBILITY:
 * - Disabled if reduced motion is enabled
 */

import { gsap, fadeUp } from "@/animations";

export const runProjectsHeroAnimation = ({ section, title, subtitle }) => {
  if (typeof window === "undefined") return () => {};

  const preferReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (preferReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    /**
     * FLOW:
     * Title -> Subtitle
     */

    if (title) tl.add(fadeUp(title));

    if (subtitle) tl.add(fadeUp(subtitle), "-=0.3");
  });

  return () => ctx.revert();
};
