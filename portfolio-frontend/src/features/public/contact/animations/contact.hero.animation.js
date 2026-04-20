/**
 * ============================================
 * CONTACT HERO — ANIMATION CONTROLLER
 * ============================================
 *
 * PURPOSE:
 * - Handles animation lifecycle for Contact Hero
 *
 * IMPROVEMENTS OVER OLD VERSION:
 * - Uses GSAP context (auto cleanup)
 * - Uses refs (no querySelector)
 * - Respects reduced motion
 * - Scroll-trigger based (better UX)
 *
 * ============================================
 */

import { gsap, fadeUp } from "@/animations";

export const runContactHeroAnimation = ({
  section,
  title,
  subtitle,
  visual,
}) => {
  // SSR safety
  if (typeof window === "undefined") return () => {};

  // Accessibility
  const preferReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
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
     * Animation flow:
     * Title → Subtitle → Visual
     */
    if (title) tl.add(fadeUp(title));
    if (subtitle) tl.add(fadeUp(subtitle), "-=0.3");

    if (visual) {
      tl.fromTo(
        visual,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
  });

  return () => ctx.revert();
};