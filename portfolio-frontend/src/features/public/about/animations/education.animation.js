/**
 * ============================================
 * EDUCATION SECTION ANIMATION CONTROLLER
 * ============================================
 *
 * PURPOSE:
 * - Handles animation lifecycle for education section
 *
 * WHY SEPARATED:
 * - Keeps UI clean
 * - Allows animation upgrades without UI changes
 *
 * SCALABILITY:
 * - Works with dynamic number of cards
 * - Can evolve into timeline animations
 *
 * PERFORMANCE:
 * - Uses GSAP context for proper cleanup
 * - Respects reduced motion
 *
 * ============================================
 */

import { gsap } from "@/animations";

export const runEducationAnimation = ({ section, cards }) => {

  // SSR Safety (Next.js / future migration safe)
  if (typeof window === "undefined") return () => {};

  // Accessibility: disable animations for users who prefer reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return () => {};

  // GSAP scoped context (critical for cleanup in React)
  const ctx = gsap.context(() => {

    if (!cards.length) return;

    /**
     * STAGGERED CARD ANIMATION
     * - Automatically adapts to number of items
     */
    
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );
  });

  // Cleanup on unmount (prevents memory leaks)
  return () => ctx.revert();
};