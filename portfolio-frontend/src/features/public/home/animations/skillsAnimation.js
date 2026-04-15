/**
 * Skills Animation Engine
 * =========================
 *
 * PURPOSE:
 * Controls animations for Skills section
 *
 * WHAT THIS SOLVES:
 * - Prevents animation logic inside UI
 * - Ensures consistent motion system
 * - Improves maintainability
 *
 * DESIGN RULE:
 * - Skills = scanning section → fast, light animations
 *
 * FEATURES:
 * 1. Staggered card reveal
 * 2. Subtle parallax
 *
 * PERFORMANCE:
 * - SSR safe
 * - Respects reduced motion
 * - Avoids heavy animations on mobile
 */

import { gsap, staggerChildren } from "@/animations";

export const runSkillsAnimation = (elements) => {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    const { section, cardsContainer } = elements;

    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(
      '[data-animate="card"]'
    );

    // ==============================
    // Stagger Reveal
    // ==============================
    if (cards?.length) {

      // Set initial hidden state FIRST
      gsap.set(cards, {
        y: 40,
        opacity: 0,
      });

      staggerChildren(cards, {
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }

    // ==============================
    // Parallax (Desktop Only)
    // ==============================
    if (!isTouch && cardsContainer) {
      gsap.to(cardsContainer, {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });

  return () => ctx.revert();
};