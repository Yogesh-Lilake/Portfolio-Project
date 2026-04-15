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

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-10 lg:px-20 text-center"
    >
      <h3
        ref={titleRef}
        className="text-3xl sm:text-4xl font-bold mb-8 text-accent"
      >
        Let’s Build Something Great
      </h3>

      <p
        ref={textRef}
        className="text-gray-300 mb-10 max-w-[46rem] mx-auto text-base sm:text-lg"
      >
        I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
      </p>

      <Link to="/contact">
        <button
          ref={btnRef}
          data-animate="cta"
          className="
            bg-accent text-darkbg px-6 py-3 rounded-full font-semibold
            transition-all duration-300
            transform hover:-translate-y-1 hover:scale-105
            shadow-md hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)]
          "
        >
          Get In Touch
        </button>
      </Link>
    </section>
  );
}