/**
 * ============================================
 * CONTACT INFO — ANIMATION CONTROLLER
 * ============================================
 *
 * FEATURES:
 * - Ref-based animation (no querySelector)
 * - GSAP context (auto cleanup)
 * - Scroll-trigger optimized
 * - Reduced motion support
 *
 * ============================================
 */

import { gsap, fadeUp } from "@/animations";

export const runContactInfoAnimation = ({
  section,
  title,
  subtitle,
  items,
  socials,
}) => {
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

    // Title + subtitle
    if (title) tl.add(fadeUp(title));
    if (subtitle) tl.add(fadeUp(subtitle), "-=0.3");

    // Info items
    if (items?.length) {
      tl.fromTo(
        items,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.2",
      );
    }

    // Social icons
    if (socials?.length) {
      tl.fromTo(
        socials,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "-=0.2",
      );
    }
  });

  return () => ctx.revert();
};
