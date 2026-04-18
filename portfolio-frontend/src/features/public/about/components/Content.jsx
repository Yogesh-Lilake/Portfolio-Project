/**
 * ============================================
 * ABOUT PAGE — CONTENT SECTION
 * ============================================
 *
 * PURPOSE:
 * - Displays introduction content with text + image + CTA
 *
 * ARCHITECTURE:
 * - Data-driven via `aboutContentData.js`
 * - Animation handled externally (content.animation.js)
 *
 * WHY THIS STRUCTURE:
 * - Prevents UI + animation coupling
 * - Allows easy content updates without touching UI
 *
 * SCALABILITY BENEFITS:
 * - Easily extend with:
 *    → more paragraphs
 *    → badges / stats
 *    → multiple CTAs
 *
 * PERFORMANCE:
 * - Animation runs once on scroll
 * - Uses refs instead of DOM queries
 *
 * ============================================
 */

import { useEffect, useRef } from "react";
import { aboutContentData } from "../data/aboutContentData";
import { runContentAnimation } from "../animations/content.animation";

export default function Content() {
  const sectionRef = useRef(null);

  // Grouped refs -> Prevents Ref chaos & easier to scale later
  const textRefs = useRef([]);

  const imageRef = useRef(null);
  const ctaTextRef = useRef(null);

  useEffect(() => {
    // Run animation and ensure cleanup (important for SPA navigation)
    const cleanup = runContentAnimation({
      section: sectionRef.current,
      texts: textRefs.current,
      image: imageRef.current,
      button: ctaTextRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
    >
      {/* Text Content */}
      <div className="flex-1">
        <h2
          ref={(el) => (textRefs.current[0] = el)}
          className="text-4xl font-bold text-red-500 mb-4"
        >
          {aboutContentData.greeting}
        </h2>

        <p
          ref={(el) => (textRefs.current[1] = el)}
          className="text-gray-300 mb-4"
        >
          {aboutContentData.description1}
        </p>

        <p
          ref={(el) => (textRefs.current[2] = el)}
          className="text-gray-300 mb-6"
        >
          {aboutContentData.description2}
        </p>

        {/* CTA Button */}
        <button
          ref={ctaTextRef}
          className="bg-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
          aria-label="Download CV"
        >
          {aboutContentData.ctaText}
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          ref={imageRef}
          src={aboutContentData.image}
          alt="profile"
          loading="lazy"
          className="w-72 rounded-2xl border-4 border-red-500/40"
        />
      </div>
    </section>
  );
}
