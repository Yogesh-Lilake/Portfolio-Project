/**
 * Contact Section (Conversion + Action Layer)
 * ==========================================================
 *
 * OVERVIEW:
 * - Final section of the homepage
 * - Encourages user interaction
 *
 * UX GOAL:
 * - Convert visitor -> lead
 * - Drive contact actions
 *
 * ANIMATION SYSTEM:
 * - Controlled via `runContactAnimation`
 * - Subtle CTA emphasis
 *
 * RESPONSIBILITIES:
 * - Display call-to-action message
 * - Provide navigation to contact page
 *
 * DESIGN PRINCIPLES:
 * - Minimal distractions
 * - Strong CTA visibility
 * - Clear messaging
 *
 * PERFORMANCE:
 * - Lightweight animations
 * - Runs only when visible
 *
 * SCALABILITY:
 * - Can extend with:
 *    - Contact form
 *    - Email integration
 *    - Social links
 *
 * DO NOT:
 * - Do NOT add complex logic here
 *
 * RELATED:
 * - /features/public/home/animations/contactAnimation.js
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { runContactAnimation } from "@/features/public/home/animations/contactAnimation";
import { homeContactData } from "@/features/public/home/data/homeContactData";
import { getTextAlignClass, getMaxWidthClass } from "@/shared/utils/uiClasses";

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const cleanup = runContactAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      text: textRef.current,
      button: btnRef.current,
    });

    return cleanup;
  }, []);

  const alignClass = getTextAlignClass(homeContactData.ui.align);
  const widthClass = getMaxWidthClass(homeContactData.ui.maxWidth);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 sm:px-10 lg:px-20 ${alignClass}`}
    >
      <h3
        ref={titleRef}
        className="text-3xl sm:text-4xl font-bold mb-8 text-accent"
      >
        {homeContactData.title}
      </h3>

      <p
        ref={textRef}
        className={`text-gray-300 mb-10 ${widthClass} mx-auto text-base sm:text-lg`}
      >
        {homeContactData.description}
      </p>

      <Link to={homeContactData.cta.link}>
        <button
          ref={btnRef}
          data-animate="cta"
          className={`
            px-6 py-3 rounded-full font-semibold
            transition-all duration-300
            transform hover:-translate-y-1 hover:scale-105
            shadow-md hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)]
            ${
              homeContactData.cta.type === "primary"
                ? "bg-accent text-darkbg"
                : "border border-accent text-accent hover:bg-accent hover:text-darkbg"
            }
          `}
        >
          {homeContactData.cta.label}
        </button>
      </Link>
    </section>
  );
}