/**
 * Contact Animation Engine
 * =========================
 *
 * PURPOSE:
 * Controls animations for Contact section
 *
 * WHAT THIS SOLVES:
 * - Keeps animation logic outside UI
 * - Improves maintainability
 * - Ensures consistent UX
 *
 * DESIGN RULE:
 * - Contact = conversion section
 * - Focus must stay on CTA button
 *
 * FEATURES:
 * 1. Scroll reveal
 * 2. CTA emphasis animation
 * 3. Subtle motion (no layout shift)
 * 4. Magnetic interaction (desktop only)
 *
 * PERFORMANCE:
 * - SSR safe
 * - Respects reduced motion
 * - Avoids heavy animations
 */

import { gsap, fadeUp ,initMagneticButtons } from "@/animations";

export const runContactAnimation = (elements) => {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    const { section, title, text, button } = elements;

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

    if (button) {
      tl.fromTo(
        button,
        {
          y: 30,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }

    // ==============================
    // CTA Pulse (Attention Grab)
    // ==============================
    if (button) {
      gsap.to(button, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }

    // ==============================
    // Magnetic Button (Desktop Only)
    // ==============================
    let cleanupMagnetic = () => {};

    if (!isTouch && button) {
      cleanupMagnetic = initMagneticButtons([button]);
    }

    return () => {
      cleanupMagnetic();
    };
  });

  return () => ctx.revert({ kill: true });
};