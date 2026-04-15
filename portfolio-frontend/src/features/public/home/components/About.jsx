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

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-10 lg:px-20 text-center bg-[#111827]"
    >
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl font-bold mb-8 text-accent"
      >
        About Me
      </h2>

      <p
        ref={textRef}
        className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl"
      >
        I’m a passionate{" "}
        <span data-animate="highlight" className="text-white font-semibold">
          Full Stack Developer
        </span>{" "}
        with experience in{" "}
        <span data-animate="highlight" className="text-accent">
          PHP, MySQL, JavaScript, Tailwind, and Android Development
        </span>
        . I love solving complex problems, designing scalable systems, and
        building clean user experiences. With strong foundations in{" "}
        <span data-animate="highlight" className="font-semibold">
          DSA, Java, and API integration
        </span>
        , I bring both engineering precision and creative flair to every
        project.
      </p>
    </section>
  );
}