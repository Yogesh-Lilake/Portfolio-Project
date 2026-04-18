/**
 * ============================================
 * HERO SECTION ANIMATION CONTROLLER
 * ============================================
 *
 * PURPOSE:
 * - Centralized animation logic for About Hero section
 *
 * WHY THIS FILE EXISTS:
 * - Separates animation from UI (clean architecture)
 * - Allows animation reuse and independent iteration
 *
 * SCALABILITY BENEFITS:
 * - Easily extend timeline (CTA, badges, images)
 * - Can swap GSAP → Framer Motion without touching UI
 *
 * PERFORMANCE STRATEGY:
 * - Uses GSAP context → auto cleanup
 * - Respects reduced motion (accessibility)
 *
 * RETURN:
 * - Cleanup function to prevent memory leaks
 *
 * ============================================
 */

import { gsap, fadeUp } from "@/animations";

export const runHeroAnimation = ({ section, title, subtitle }) => {

    // SSR Safety (Next.js / future migration safe)
    if (typeof window === "undefined") return () => {};

    // Accessibility: disable animations for users who prefer reduced motion
    const preferReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (preferReducedMotion) return () => {};

    // GSAP scoped context (critical for cleanup in React)
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
            },
        });

        /**
         * Animation Flow:
         * - Title enters first
         * - Subtitle overlaps slightly for smooth feel
         */
        if (title) tl.add(fadeUp(title));
        if (subtitle) tl.add(fadeUp(subtitle), "-=0.3");
    });

    // Cleanup on unmount (prevents memory leaks)
    return () => ctx.revert();
}