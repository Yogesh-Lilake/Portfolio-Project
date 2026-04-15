/**
 * Hero Animation Engine
 * =========================
 *
 * PURPOSE:
 * Central controller for all hero animations
 *
 * WHAT THIS SOLVES:
 * - Prevents animation logic inside components
 * - Enables reuse across pages
 * - Provides cleanup-safe animations
 *
 * FEATURES:
 * 1. Entrance animation (timeline)
 * 2. Continuous hand animation
 * 3. Scroll-based parallax
 * 4. Magnetic buttons
 *
 * PERFORMANCE:
 * - Uses gsap.context (auto cleanup)
 * - Respects prefers-reduced-motion
 * - SSR safe
 */

import { gsap, initMagneticButtons } from "@/animations";

export const runHeroAnimation = (elements) => {
  if (typeof window === "undefined") return () => {};

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    const {
      section,
      title,
      subtitle,
      description,
      buttonsContainer,
      hand,
      background,
    } = elements;

    const tl = gsap.timeline();

    // =============================
    // Entrance Animation
    // =============================
    if (title) {
      tl.fromTo(
        title.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        }
      );
    }

    if (subtitle) {
      tl.fromTo(
        subtitle,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      );
    }

    if (description) {
      tl.fromTo(
        description,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      );
    }

    if (buttonsContainer) {
      tl.fromTo(
        buttonsContainer.children,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }

    // =============================
    // Hand Wave
    // =============================
    if (hand) {
      gsap.to(hand, {
        rotate: 18,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut",
        transformOrigin: "70% 70%",
      });
    }

    // =============================
    // Scroll Parallax
    // =============================
    if (background && section) {
      gsap.to(background, {
        y: 100,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: section, // stable trigger
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // =============================
    // Magnetic Buttons
    // =============================
    let cleanupMagnetic = () => {};

    if (buttonsContainer) {
      const buttons = buttonsContainer.querySelectorAll("button");
      cleanupMagnetic = initMagneticButtons([...buttons]);
    }

    return () => {
      cleanupMagnetic();
    };
  });

  return () => ctx.revert();
};