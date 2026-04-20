/** * ============================================
 * CONTACT FORM — ANIMATION CONTROLLER
 * ============================================
 *
 * FEATURES:
 * - Ref-based (no querySelector)
 * - GSAP context (auto cleanup)
 * - Scroll-triggered (performance)
 * - Reduced motion safe
 *
 * ============================================ */
import { gsap, fadeUp } from "@/animations";

export const runContactFormAnimation = ({ section, title, fields, button }) => {
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

    // Title if (title)
    tl.add(fadeUp(title));

    // Fields stagger
    if (fields?.length) {
      tl.fromTo(
        fields,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.2",
      );
    }

    // Button
    if (button) {
      tl.fromTo(
        button,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2",
      );
    }
  });
  return () => ctx.revert();
};
