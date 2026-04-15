/**
 * fadeUp Animation (Primitive)
 * ==========================================================
 *
 * PURPOSE:
 * - Reusable fade + upward motion animation
 *
 * USAGE:
 * fadeUp(element, { delay: 0.2 })
 *
 * DESIGN:
 * - Lightweight, composable animation
 * - Accepts flexible GSAP options
 */

import { gsap } from "../core/gsapConfig";

export const fadeUp = (element, delay = {}) =>
    gsap.fromTo(
        element,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, ...delay}
    );