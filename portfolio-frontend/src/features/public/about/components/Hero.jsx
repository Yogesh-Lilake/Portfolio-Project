/**
 * ============================================
 * ABOUT PAGE — HERO SECTION COMPONENT
 * ============================================
 *
 * PURPOSE:
 * - Renders the hero section of the About page
 * - Displays title, subtitle, and background animation
 *
 * ARCHITECTURE DECISIONS:
 * - Content is fully driven from `aboutHeroData.js`
 *   -> Enables non-dev updates and CMS integration
 *
 * - Animation is delegated to `hero.animation.js`
 *   -> Keeps UI clean and testable
 *
 * - Refs are used instead of query selectors
 *   -> Ensures React-safe DOM control and avoids brittle selectors
 *
 * SCALABILITY BENEFITS:
 * - Easy to extend (add CTA, badges, stats)
 * - Animation can evolve independently
 * - Data structure reusable across pages
 *
 * PERFORMANCE & ACCESSIBILITY:
 * - Respects `prefers-reduced-motion` -> Reduced motion accessibility
 * - Animation isolated to avoid re-renders
 *
 * ============================================
 */

import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { runHeroAnimation } from "../animations/hero.animation";
import { aboutHeroData } from "../data/aboutHeroData";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Run animation and ensure cleanup (important for SPA navigation)
    const cleanup = runHeroAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 text-center"
    >

      {/* Background Animation Layer */}
      <div className="absolute inset-0 pointer-events-none"
            style={{ opacity: aboutHeroData.backgroundOpacity }}
      >
        <DotLottieReact 
          src={aboutHeroData.animation} 
          loop 
          autoplay 
          renderer="svg"
        />
      </div>

      {/* Main Title */}
      <h1 
        ref={titleRef} 
        className="text-5xl font-extrabold text-accent relative z-10"
      >
        {aboutHeroData.title}{" "} 
        <span className="text-white">{aboutHeroData.highlight}</span>
      </h1>

      {/* Subtitle */}
      <p 
        ref={subtitleRef} 
        className="text-gray-300 mt-4 max-w-2xl mx-auto"
      >
        {aboutHeroData.subtitle}
      </p>
    </section>
  );
}