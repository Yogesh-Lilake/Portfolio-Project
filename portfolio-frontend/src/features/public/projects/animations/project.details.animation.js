/**
 * ==========================================================
 * PROJECT DETAILS ANIMATION CONTROLLER
 * ==========================================================
 *
 * PURPOSE:
 * - Handles all animations for Project Details page
 *
 * LAYER:
 * - ANIMATION CONTROLLER
 *
 * USED IN:
 * - ProjectDetails.jsx
 *
 * RESPONSIBILITIES:
 * - Page fade-in
 * - Image reveal
 * - Section scroll animations
 *
 * WHY THIS EXISTS:
 * - Keeps animation logic separate from UI
 * - Improves maintainability
 *
 * ACCESSIBILITY:
 * - Respects prefers-reduced-motion
 *
 * IMPORTANT:
 *  Do NOT manipulate data here
 *  Do NOT access React state
 *
 *  Only DOM animations
 */

import { gsap } from "@/animations";

export const runProjectDetailsAnimation = ({ container, sections, image }) => {
  if (typeof window === "undefined") return () => {};

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) return () => {};

  const ctx = gsap.context(() => {
    // Page fade
    if (container) {
      gsap.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }

    // Image reveal
    if (image) {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
          },
        },
      );
    }

    // Section animations
    sections.forEach((section) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        },
      );
    });
  });

  return () => ctx.revert();
};
