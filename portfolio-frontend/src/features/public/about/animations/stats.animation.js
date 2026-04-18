/**
 * ============================================
 * STATS SECTION ANIMATION CONTROLLER
 * ============================================
 *
 * PURPOSE:
 * - Animates numeric counters with smooth increment
 *
 * WHY THIS EXISTS:
 * - Separates animation from UI
 * - Allows flexible formatting (suffix, decimals, etc.)
 *
 * SCALABILITY:
 * - Supports dynamic stat items
 * - Supports different value formats
 *
 * PERFORMANCE:
 * - Runs once per scroll (no re-trigger)
 * - Uses GSAP context for cleanup
 *
 * ============================================
 */

import { gsap } from "@/animations";

export const runStatsAnimation = ({ section, stats = [] }) => {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    stats.forEach(({ el, value, suffix = "" }, i) => {
      if (!el) return;

      const obj = { val: 0 };

      /**
       * COUNTER ANIMATION
       */
      gsap.to(obj, {
        val: value,
        duration: 1.2,
        ease: "power2.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.innerText = Math.floor(obj.val) + suffix;
        },
      });

      /**
       * POP SCALE EFFECT
       */
      gsap.fromTo(
        el,
        { scale: 0.85 },
        {
          scale: 1,
          duration: 0.4,
          ease: "back.out(2)",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  });

  return () => ctx.revert();
};