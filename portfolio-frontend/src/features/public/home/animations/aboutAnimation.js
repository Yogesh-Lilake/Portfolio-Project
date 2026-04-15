/**
 * About Animation Engine
 * =========================
 *
 * PURPOSE:
 * Handles all animations for About section
 *
 * WHAT THIS SOLVES:
 * - Keeps animation logic outside components
 * - Ensures consistency across sections
 * - Prevents memory leaks using gsap.context
 *
 * DESIGN RULE:
 * - About = reading zone → animations must be subtle
 *
 * FEATURES:
 * 1. Scroll reveal (title + text)
 * 2. Highlight emphasis animation
 * 3. Subtle parallax (low intensity)
 *
 * PERFORMANCE:
 * - Respects prefers-reduced-motion
 * - SSR safe
 * - Uses stable selectors (data attributes)
 */

import { gsap, fadeUp } from "@/animations";

export const runAboutAnimation = (elements) => {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    const { section, title, text } = elements;

    // ==============================
    // Scroll Reveal
    // ==============================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });

    if (title) tl.add(fadeUp(title));
    if (text) tl.add(fadeUp(text), "-=0.4");

    // ==============================
    // Highlight Animation (SAFE)
    // ==============================
    const highlights = text?.querySelectorAll(
      '[data-animate="highlight"]'
    );

    if (highlights?.length) {
      gsap.fromTo(
        highlights,
        { opacity: 0.5, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );
    }

    // ==============================
    // Subtle Parallax (CONTROLLED)
    // ==============================
    if (text) {
      gsap.to(text, {
        y: 20, // reduced for readability
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