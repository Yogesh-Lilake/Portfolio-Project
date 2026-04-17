/**
 * About Section (Identity + Narrative Layer)
 * ==========================================================
 *
 * OVERVIEW:
 * - Provides detailed introduction about the developer
 * - Builds trust and credibility
 *
 * UX GOAL:
 * - Convert curiosity -> confidence
 * - Highlight skills, mindset, and expertise
 *
 * ANIMATION SYSTEM:
 * - Controlled via `runAboutAnimation`
 * - Subtle animations (low motion)
 *
 * RESPONSIBILITIES:
 * - Display structured introduction
 * - Highlight key skills inline
 *
 * DESIGN PRINCIPLES:
 * - Readability first
 * - Minimal motion
 * - Focus on content clarity
 *
 * PERFORMANCE:
 * - Lightweight animations
 * - Runs only when section enters viewport
 *
 * SCALABILITY:
 * - Can be extended with:
 *    - Timeline (experience)
 *    - Stats / achievements
 *    - Testimonials
 *
 * DO NOT:
 * - Do NOT overload with animations
 * - Do NOT add heavy visuals
 *
 * RELATED:
 * - /features/public/home/animations/aboutAnimation.js
 */

import { useEffect, useRef } from "react";
import { runAboutAnimation } from "@/features/public/home/animations/aboutAnimation";
import { homeAboutData } from "@/features/public/home/data/homeAboutData";
import { getTextAlignClass, getMaxWidthClass } from "@/shared/utils/uiClasses";

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cleanup = runAboutAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      text: textRef.current,
    });

    return cleanup;
  }, []);

  const alignClass = getTextAlignClass(homeAboutData.ui.textAlign);
  const widthClass = getMaxWidthClass(homeAboutData.ui.maxWidth);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-10 lg:px-20"
      style={{ background: homeAboutData.ui.background }}
    >
      <h2
        ref={titleRef}
        className={`text-3xl sm:text-4xl font-bold mb-8 text-accent ${alignClass}`}
      >
        {homeAboutData.title}
      </h2>

      {/* Content */}
      <p
        ref={textRef}
        className={`${widthClass} mx-auto text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl ${alignClass}`}
      >
        {homeAboutData.content.map((item, index) => {
          if (!item.highlight) {
            return <span key={index}>{item.text}</span>;
          }

          const highlightClass =
            item.highlight === "primary"
              ? "text-white font-semibold"
              : "text-accent";

          return (
            <span
              key={index}
              data-animate="highlight"
              className={highlightClass}
            >
              {item.text}
            </span>
          );
        })}
      </p>
    </section>
  );
}