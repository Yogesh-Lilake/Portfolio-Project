/**
 * ============================================
 * EXPERIENCE SECTION ANIMATION CONTROLLER
 * ============================================
 *
 * PURPOSE:
 * - Handles animation lifecycle for experience section
 *
 * WHY SEPARATED:
 * - Keeps UI clean
 * - Allows animation upgrades without UI changes
 *
 * SCALABILITY:
 * - Works with dynamic number of cards
 * - Easily extendable for:
 *    → timeline animation
 *    → grouped animation
 *
 * PERFORMANCE:
 * - Uses GSAP context for cleanup
 * - Respects reduced motion
 *
 * ============================================
 */

import { gsap, fadeUp, staggerChildren } from "@/animations";

export const runExperienceAnimation = ({ section, title, cards }) => {

  // SSR Safety (Next.js / future migration safe)
  if (typeof window === "undefined") return () => {};

  // Accessibility: disable animations for users who prefer reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return () => {};

  // GSAP scoped context (critical for cleanup in React)
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    /**
     * TITLE ANIMATION
     */
    if (title) {
      tl.add(fadeUp(title));
    }

    /**
     * CARD STAGGER ANIMATION
     * - Automatically adapts to card count
     */
    if (cards.length) {
      tl.add(
        staggerChildren(cards, {
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        }),
        "-=0.3"
      );
    }
  });

  // Cleanup on unmount (prevents memory leaks)
  return () => ctx.revert();
};