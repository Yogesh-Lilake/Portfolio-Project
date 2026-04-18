/**
 * ============================================
 * ABOUT PAGE — STATS SECTION
 * ============================================
 *
 * PURPOSE:
 * - Displays key metrics with animated counters
 *
 * ARCHITECTURE:
 * - Data-driven via `aboutStatsData.js`
 * - Animation handled separately
 *
 * WHY THIS STRUCTURE:
 * - Separates logic (value) from presentation (suffix)
 * - Prevents UI-animation coupling
 *
 * SCALABILITY BENEFITS:
 * - Supports:
 *    → different formats (%, +, k, etc.)
 *    → dynamic data (API/CMS)
 *    → analytics tracking via ID
 *
 * PERFORMANCE:
 * - Animation runs once (optimized)
 *
 * ============================================
 */


import { useEffect, useRef } from "react";
import { aboutStatsData } from "../data/aboutStatsData";
import { runStatsAnimation } from "../animations/stats.animation.js";

export default function Stats() {
  const sectionRef = useRef(null);

  // Stable ref array (avoids index bugs on rerender)
  const statsRef = useRef([]);

  useEffect(() => {
    // Run animation and ensure cleanup (important for SPA navigation)
    const cleanup = runStatsAnimation({
      section: sectionRef.current,
      stats: aboutStatsData.map((stat, i) => ({
        el: statsRef.current[i],
        value: stat.value,
        suffix: stat.suffix,
      })),
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-red-700 to-rose-600 py-16 text-center"
      aria-labelledby="stats-title"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {aboutStatsData.map((stat, i) => (
          <div key={stat.id}>
            <p
              ref={(el) => (statsRef.current[i] = el)}
              className="text-4xl font-bold"
            >
              0
            </p>

            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
