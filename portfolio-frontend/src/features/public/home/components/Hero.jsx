/**
 * Hero Section (Primary Visual Entry Point)
 * ==========================================================
 *
 * OVERVIEW:
 * - First impression section of the portfolio
 * - Communicates identity, role, and value proposition
 *
 * UX GOAL:
 * - Capture attention within 3–5 seconds
 * - Establish personal branding
 * - Drive initial user engagement (CTA)
 *
 * ANIMATION SYSTEM:
 * - Controlled via `runHeroAnimation`
 * - Uses refs (no querySelector)
 * - Fully separated from UI
 *
 * RESPONSIBILITIES:
 * - Display headline, subtitle, description
 * - Render CTA buttons
 * - Render Lottie-based visual identity
 *
 * DESIGN PRINCIPLES:
 * - High visual impact
 * - Motion-led storytelling
 * - Balanced performance vs aesthetics
 *
 * PERFORMANCE:
 * - Animation runs once on mount
 * - Lottie uses lightweight SVG renderer
 *
 * ACCESSIBILITY:
 * - Only UI parts (Not data or animation) are focusable
 * - Text-first fallback (animation not required)
 *
 * SCALABILITY:
 * - Easily extendable:
 *    - Dynamic text typing
 *    - A/B tested headlines
 *    - Personalized content
 *
 * DO NOT:
 * - Do NOT add animation logic here
 * - Do NOT manipulate DOM manually
 *
 * RELATED:
 * - /features/public/home/animations/heroAnimation.js
 * - /features/public/home/data/homeHeroData.js
 */

import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { runHeroAnimation } from "@/features/public/home/animations/heroAnimation";
import { homeHeroDate } from "@/features/public/home/data/homeHeroData";


export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const handRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const cleanup = runHeroAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
      description: descRef.current,
      buttonsContainer: buttonsRef.current,
      hand: handRef.current,
      background: bgRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Animation*/}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: homeHeroDate.ui.backgroundOpacity }}
      >
        <DotLottieReact
          src={homeHeroDate.animations.background}
          loop
          autoplay
          className="w-full h-full"
          renderer="svg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          ref={titleRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-accent"
        >
          <span>
            {homeHeroDate.greeting} {homeHeroDate.name}
          </span>

          {homeHeroDate.ui.showHand && (
            <span
              ref={handRef}
              className="max-[640px]:hidden inline-block align-middle"
              style={{ width: "1.2em", height: "1.2em" }}
            >
              <DotLottieReact
                src={homeHeroDate.animations.hand}
                loop
                autoplay
                className="w-full h-full"
                renderer="svg"
              />
            </span>
          )}
        </h1>

        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6"
        >
          {homeHeroDate.subtitle}
        </p>

        <p ref={descRef} className="text-gray-400 max-w-2xl mx-auto mb-10">
          {homeHeroDate.description}
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
          {homeHeroDate.buttons.map((btn, index) => {
            if (btn.link) {
              return (
                <Link key={index} to={btn.link}>
                  <button
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-md ${
                      btn.type === "primary"
                        ? "bg-accent text-darkbg hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)]"
                        : "border border-accent text-accent hover:bg-accent hover:text-darkbg hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)]"
                    }`}
                  >
                    {btn.label}
                  </button>
                </Link>
              );
            }

            return (
              <button
                key={index}
                className="border border-accent text-accent px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-accent hover:text-darkbg shadow-md hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)]"
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
