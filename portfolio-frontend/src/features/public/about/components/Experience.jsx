/**
 * ============================================
 * ABOUT PAGE — EXPERIENCE SECTION
 * ============================================
 *
 * PURPOSE:
 * - Displays professional experience in card/grid format
 *
 * ARCHITECTURE:
 * - Data-driven via `aboutExperienceData.js`
 * - Animation controlled externally via `experience.animation.js`
 *
 * WHY THIS STRUCTURE:
 * - Prevents UI tightly coupling with data
 * - Allows easy expansion (timeline, filters, categories)
 *
 * SCALABILITY BENEFITS:
 * - Supports dynamic lists (add/remove/reorder)
 * - Can evolve into:
 *    -> timeline view
 *    -> grouped experience (company-wise)
 *
 * ACCESSIBILITY:
 * - Uses semantic structure for better screen reader support
 *
 * ============================================
 */

import { useEffect, useRef } from "react";
import { aboutExperienceData } from "../data/aboutExperienceData";
import { runExperienceAnimation } from "../animations/experience.animation";

export default function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Stable ref array (avoids index bugs on rerender)
  const cardsRef = useRef([]);

  useEffect(() => {
    // Run animation and ensure cleanup (important for SPA navigation)
    const cleanup = runExperienceAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      cards: cardsRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6"
      aria-labelledby="experience-title"
    >
      {/* Section Title */}
      <h3 
        ref={titleRef}  
        className="text-3xl text-accent text-center mb-10"
      >
        {aboutExperienceData.title}
      </h3>

      {/* Experience List */}
      <ul className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {aboutExperienceData.items.map((exp, i) => (
          <li
            key={exp.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[#1E293B] p-6 rounded-xl transition duration-300
                       hover:bg-[#2c3e50]
                       hover:shadow-lg hover:shadow-red-500/50
                       hover:-translate-y-1 hover:scale-105"
          >
            <h4 className="text-xl text-accent mb-2">
              {exp.title}
            </h4>

            <p className="text-gray-300">
              {exp.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}