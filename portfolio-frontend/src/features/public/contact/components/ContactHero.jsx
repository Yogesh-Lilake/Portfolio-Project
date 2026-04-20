/**
 * ==========================================================
 * CONTACT HERO (PRESENTATIONAL + ANIMATION ENTRY)
 * ==========================================================
 *
 * PURPOSE:
 * - First visual section of Contact page
 * - Communicates intent & encourages interaction
 *
 * RESPONSIBILITIES:
 * - Render heading + subheading
 * - Display animated visual (Lottie)
 * - Trigger entrance animations
 *
 * DATA SOURCE:
 * - contactHeroData → content + assets
 *
 * ANIMATION:
 * - Controlled via runContactHeroAnimation()
 * - Uses GSAP with scroll trigger
 * - Respects reduced motion preferences
 *
 * PERFORMANCE:
 * - Lightweight SVG-based Lottie rendering
 *
 * ACCESSIBILITY:
 * - Semantic heading structure
 * - Readable typography scaling
 *
 * DO NOT:
 * - Do NOT hardcode content
 * - Do NOT include business logic
 *
 * ==========================================================
 */

import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { contactHeroData } from "@/features/public/contact/data/contactHeroData";
import { runContactHeroAnimation } from "../animations/contact.hero.animation";

export default function ContactHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const cleanup = runContactHeroAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
      visual: visualRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-center py-20 sm:py-24 lg:py-32 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1
          ref={titleRef}
          className="font-bold leading-tight tracking-tight 
          text-[clamp(2rem,5vw,3.5rem)] mb-6"
        >
          {contactHeroData.heading}
        </h1>

        <p
          ref={subtitleRef}
          className="text-gray-400 
          text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto"
        >
          {contactHeroData.subheading}
        </p>

        <div className="mt-10 flex justify-center">
          <div ref={visualRef} className="w-[clamp(180px,30vw,320px)]">
            <DotLottieReact
              src={contactHeroData.image}
              loop
              autoplay
              renderer="svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
