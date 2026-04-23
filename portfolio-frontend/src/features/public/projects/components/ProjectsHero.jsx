/**
 * ==========================================================
 * PROJECTS HERO (BRANDING + ENTRY SECTION)
 * ==========================================================
 *
 * PURPOSE:
 * - Provides visual and contextual introduction to Projects page
 * - Communicates page intent and branding
 *
 * LAYER:
 * - PRESENTATIONAL + ANIMATION ENTRY POINT
 *
 * DATA SOURCE:
 * - projectsHeroData (externalized static config)
 *
 * RESPONSIBILITIES:
 * - Render title, highlight, and subtitle
 * - Trigger hero animation (GSAP)
 *
 * ANIMATION:
 * - Controlled via runProjectsHeroAnimation
 * - Uses refs for fine-grained animation control
 *
 * WHY DATA IS EXTERNALIZED:
 * - Enables CMS-driven content updates
 * - Avoids hardcoding UI text inside component
 * - Supports localization and A/B testing
 *
 * DESIGN PRINCIPLES:
 * - No business logic
 * - No data fetching
 * - No conditional complexity
 *
 * PERFORMANCE:
 * - Animation runs once on mount
 * - Uses lightweight DOM refs (no re-renders triggered)
 *
 * IMPORTANT RULES:
 *  Do NOT fetch API data here
 *  Do NOT couple with project data
 *  Do NOT introduce state unless strictly UI-related
 *
 * This component should remain:
 * - Static
 * - Predictable
 * - Easily replaceable
 */

import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { projectsHeroData } from "../data/projectsHeroData";
import { runProjectsHeroAnimation } from "../animations/projects.hero.animation";

export default function ProjectsHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const { title, highlight, subtitle } = projectsHeroData;

  useEffect(() => {
    const cleanup = runProjectsHeroAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 px-4 text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-gradient-to-r from-accent via-purple-500 to-pink-500" />

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1
          ref={titleRef}
          className="font-extrabold text-accent 
          text-[clamp(2rem,4vw,3.5rem)] mb-4"
        >
          {title} <span className="text-white">{highlight}</span>
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
