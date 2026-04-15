/**
 * Stagger Children Animation (Primitive)
 * ==========================================================
 *
 * PURPOSE:
 * - Animate multiple child elements with stagger effect
 *
 * SUPPORTS:
 * - Parent element (auto children detection)
 * - NodeList / array of elements
 *
 * USAGE:
 * staggerChildren(containerRef.current)
 */

import { gsap } from "../core/gsapConfig";

export const staggerChildren = (target, vars = {}) => {
  // Support both cases
  const elements = target?.length ? Array.from(target) : target?.children;

  if (!elements || elements.length === 0) return;

  return gsap.fromTo(
    elements,
    { y: 40, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.12,
      ...vars,
    }
  );
};