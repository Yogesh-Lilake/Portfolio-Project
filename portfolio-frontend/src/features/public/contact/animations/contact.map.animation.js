/**
 * ============================================
 * CONTACT MAP — ANIMATION CONTROLLER
 * ============================================
 *
 * FEATURES:
 * - GSAP context (auto cleanup)
 * - Scroll-trigger optimized
 * - Reduced motion safe
 * - Premium easing
 *
 * ============================================
 */

import { gsap } from "@/animations";

export const runContactMapAnimation = ({ section, iframe }) => {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    // Container animation
    tl.fromTo(
      section,
      { opacity: 0, y: 60, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    // Subtle iframe fade-in (premium feel)
    if (iframe) {
      tl.fromTo(iframe, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.4");
    }
  });

  return () => ctx.revert();
};
