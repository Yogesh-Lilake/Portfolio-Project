/**
 * Animation System Public API
 * ==========================================================
 *
 * PURPOSE:
 * - Central export layer for all animations
 *
 * BENEFITS:
 * - Clean imports across project
 * - Encapsulates internal folder structure
 *
 * USAGE:
 * import { fadeUp, initMagneticButtons } from "@/animations";
 */

// Core Config (GSAP setup)
export { gsap, ScrollTrigger } from "./core/gsapConfig";

// Primitives
export { fadeUp } from "./primitives/fadeUp";
export { staggerChildren } from "./primitives/staggerChildren";

// Interactions
export { initMagneticButtons } from "./interactions/magneticButton";