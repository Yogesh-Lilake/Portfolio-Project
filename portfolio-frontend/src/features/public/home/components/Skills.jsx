/**
 * Skills Section (Capability Visualization Layer)
 * ==========================================================
 *
 * OVERVIEW:
 * - Displays technical skill set in a visual grid
 *
 * UX GOAL:
 * - Enable fast scanning of skills
 * - Reduce cognitive load
 *
 * DATA SOURCE:
 * - Driven by `/constants/skills.js`
 *
 * ANIMATION SYSTEM:
 * - Controlled via `runSkillsAnimation`
 * - Grid-based stagger animations
 *
 * RESPONSIBILITIES:
 * - Render skill cards dynamically
 * - Display icons + labels
 *
 * DESIGN PRINCIPLES:
 * - Visual recognition > text reading
 * - Interactive hover states
 *
 * PERFORMANCE:
 * - Optimized grid rendering
 * - Animation runs once
 *
 * SCALABILITY:
 * - Easily extendable:
 *    - Add/remove skills via config
 *    - Group skills (frontend/backend)
 *
 * DO NOT:
 * - Do NOT hardcode skills
 *
 * RELATED:
 * - /constants/skills.js
 * - /features/public/home/animations/skillsAnimation.js
 */

import { useEffect, useRef } from "react";
import { homeSkillsData } from "@/features/public/home/data/homeSkillsData";
import { runSkillsAnimation } from "@/features/public/home/animations/skillsAnimation";
import { getGridColsClass } from "@/shared/utils/uiClasses";

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cleanup = runSkillsAnimation({
      section: sectionRef.current,
      cardsContainer: cardsRef.current,
    });

    return cleanup;
  }, []);

  const gridClass = `
    grid 
    grid-cols-${homeSkillsData.ui.columns.base}
    sm:grid-cols-${homeSkillsData.ui.columns.sm}
    md:grid-cols-${homeSkillsData.ui.columns.md}
    lg:grid-cols-${homeSkillsData.ui.columns.lg}
    xl:grid-cols-${homeSkillsData.ui.columns.xl}
    gap-5 sm:gap-6
  `;

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-10 lg:px-20 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-accent">
          {homeSkillsData.title}
        </h3>
      </div>

      <div
        ref={cardsRef}
        className={`${gridClass}`}
      >
        {homeSkillsData.items.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              data-animate="card"
              className="
                group/card p-4 bg-[#1E293B] rounded-xl 
                flex flex-col items-center gap-2

                transition-all duration-300 transform

                /* Default state */
                scale-100 opacity-100

                /* When hovering ANY card -> shrink others */
                group-hover:scale-90 group-hover:opacity-60

                /* When THIS card is hovered -> grow */
                hover:!scale-110 hover:!opacity-100 hover:z-10

                shadow-md hover:shadow-[0_10px_30px_rgba(255,0,0,0.35)]
                hover:bg-accent hover:text-darkbg
              "
            >
              <Icon
                className={`
                  text-3xl sm:text-4xl md:text-5xl mb-3
                  transition-all duration-300
                  group-hover:rotate-12 group-hover:scale-110
                  ${skill.className || ""}
                `}
              />

              <h4 className="font-semibold">{skill.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}