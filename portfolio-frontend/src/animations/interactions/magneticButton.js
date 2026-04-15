/**
 * Magnetic Button Interaction
 * ==========================================================
 *
 * PURPOSE:
 * - Creates cursor-follow magnetic effect
 *
 * PERFORMANCE:
 * - Uses gsap.quickTo for high-performance updates
 *
 * SAFETY:
 * - Disabled on touch devices
 *
 * USAGE:
 * const cleanup = initMagneticButtons(buttonRefs)
 * cleanup() on unmount
 */


import { gsap } from "../core/gsapConfig";

export const initMagneticButtons = (elements) => {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) return () => {};

  elements.forEach((el) => {
    const strength = 40;

    // ✅ Optimized setters
    const xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      xTo(x / strength);
      yTo(y / strength);
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleLeave);

    el._cleanup = () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  });

  return () => {
    elements.forEach((el) => el._cleanup && el._cleanup());
  };
};