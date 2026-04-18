/**
 * ============================================
 * ABOUT PAGE — EDUCATION SECTION
 * ============================================
 *
 * PURPOSE:
 * - Displays educational background in a vertical list
 *
 * ARCHITECTURE:
 * - Data-driven via `aboutEducationData.js`
 * - Animation handled separately via `education.animation.js`
 *
 * WHY THIS STRUCTURE:
 * - Keeps UI independent from data
 * - Enables easy expansion (certifications, courses)
 *
 * SCALABILITY BENEFITS:
 * - Supports dynamic lists
 * - Can evolve into:
 *    → timeline view
 *    → grouped education
 *
 * ACCESSIBILITY:
 * - Uses semantic list structure
 * - Proper section labeling
 *
 * ============================================
 */

import { useEffect, useRef } from "react";
import { aboutEducationData } from "../data/aboutEducationData";
import { runEducationAnimation } from "../animations/education.animation";

export default function Education() {
  const sectionRef = useRef(null);

  // Stable ref array (avoids index bugs on rerender)
  const cardsRef = useRef([]);

  useEffect(() => {
    // Run animation and ensure cleanup (important for SPA navigation)
    const cleanup = runEducationAnimation({
      section: sectionRef.current,
      cards: cardsRef.current
    });

    return cleanup;
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 bg-[#0F172A]"
      aria-labelledby="education-title"
    >

      {/* Section Title */}
      <h3
        id="education-title" 
        className="text-3xl text-accent text-center mb-10"
      >
        {aboutEducationData.title}
      </h3>

      {/* Education List */}
      <ul className="max-w-3xl mx-auto space-y-6">
        {aboutEducationData.items.map((edu, i) => (
          <li
            key={edu.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[#1E293B] p-6 rounded-xl transition duration-300
                       hover:bg-[#2c3e50]
                       hover:shadow-lg hover:shadow-red-500/50
                       hover:-translate-y-1 hover:scale-105"
          >
            <h4 className="text-accent font-semibold">
              {edu.degree}
            </h4>

            <p className="text-gray-300">
              {edu.institute}
            </p>

            <p className="text-gray-400 text-sm">
              {edu.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}