/**
 * ============================================
 * CONTENT SECTION ANIMATION CONTROLLER
 * ============================================
 *
 * PURPOSE:
 * - Handles animation lifecycle for About Content section
 *
 * WHY SEPARATED:
 * - Keeps UI clean
 * - Allows animation system to evolve independently
 *
 * SCALABILITY:
 * - Supports dynamic number of text elements
 * - Easy to extend timeline (icons, stats, etc.)
 *
 * PERFORMANCE:
 * - GSAP context ensures cleanup
 * - Respects reduced motion preference
 *
 * ============================================
 */

import { gsap, fadeUp, initMagneticButtons } from "@/animations";

export const runContentAnimation = ({ section, texts = [], image, button }) => {
  // SSR Safety (Next.js / future migration safe)
  if (typeof window === "undefined") return () => {};

  // Accessibility: disable animations for users who prefer reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) return () => {};

  let cleanupMagnetic = () => {};

  // GSAP scoped context (critical for cleanup in React)
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    /**
     * TEXT ANIMATION FLOW
     * - Automatically adapts to number of elements
     */
    texts.forEach((el, i) => {
      if (!el) return;

      tl.add(fadeUp(el), i === 0 ? undefined : "-=0.25");
    });

    /**
     * BUTTON INTERACTION
     * - Magnetic effect for premium UX feel
     */
    if (button) {
      cleanupMagnetic = initMagneticButtons([button]);
    }

    /**
     * IMAGE ANIMATION (separate trigger)
     * - Improves perceived performance
     */
    if (image) {
      gsap.fromTo(
        image,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 85%",
          },
        }
      );
    }
  });

  // Cleanup on unmount (prevents memory leaks)
  return () => {
    cleanupMagnetic();
    ctx.revert();
  };
};
