/**
 * ============================================
 * ABOUT PAGE — HERO DATA CONFIG
 * ============================================
 *
 * PURPOSE:
 * - Central source of truth for Hero content
 *
 * WHY THIS IS IMPORTANT:
 * - Decouples content from UI
 * - Enables:
 *    → CMS integration
 *    → A/B testing
 *    → Localization (i18n)
 *
 * SCALABILITY BENEFITS:
 * - Add fields without touching UI logic
 * - Same structure reusable across pages
 *
 * CONTRACT (IMPORTANT):
 * - title: string (main heading)
 * - highlight: string (accent word)
 * - subtitle: string (supporting text)
 * - animation: string (Lottie URL)
 * - backgroundOpacity: number (0–1)
 *
 * ============================================
 */

import AboutMeAnimation from "@/assets/lottie/about-me.lottie";

export const aboutHeroData = {
  title: "About",
  highlight: "Me",
  subtitle: "Full Stack Developer passionate about scalable systems",
  
  // Background Lottie animation URL
  animation: AboutMeAnimation,

  // Controls visual weight of background animation
  backgroundOpacity: 0.15,
};