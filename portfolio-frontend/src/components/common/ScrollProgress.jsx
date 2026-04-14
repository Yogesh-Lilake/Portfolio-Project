/**
 * ScrollProgress (Top Scroll Indicator)
 * ==========================================================
 *
 * OVERVIEW:
 * - Displays a horizontal progress bar indicating page scroll position
 * - Mounted globally via MainLayout
 *
 * RESPONSIBILITIES:
 * - Track scroll position
 * - Visually represent scroll progress
 *
 * PERFORMANCE STRATEGY:
 * - Uses requestAnimationFrame (RAF) for smooth updates
 * - Avoids React state (no re-renders on scroll)
 * - Uses `transform: scaleX()` instead of width
 *   → GPU accelerated (no layout thrashing)
 *
 * WHY NOT STATE:
 * - State updates on scroll cause performance issues
 * - Direct DOM manipulation via ref is intentional here
 *
 * IMPLEMENTATION DETAILS:
 * - origin-left ensures progress grows from left
 * - will-change: transform enables GPU optimization
 *
 * UX:
 * - Subtle glow effect
 * - Smooth animation synced with scroll
 *
 * SCALABILITY:
 * - Can be extended to:
 *    - Section-based progress
 *    - Reading progress tracker
 *    - Route-based reset logic
 *
 * DO NOT:
 * - Do NOT convert this to useState
 * - Do NOT use width animation
 *
 * RELATED:
 * - /layouts/MainLayout.jsx -> mounts ScrollProgress 
 */

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const progress = scrollTop / height;

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }

        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 w-full h-[3px] z-[9999] origin-left"
      style={{
        transform: "scaleX(0)",
        background: "linear-gradient(90deg, #ef4444, #ff7676)",
        boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
        willChange: "transform",
      }}
    />
  );
}