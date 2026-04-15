/**
 * Projects Section (Portfolio Showcase Layer)
 * ==========================================================
 *
 * OVERVIEW:
 * - Displays featured projects
 * - Highest conversion-impact section
 *
 * UX GOAL:
 * - Showcase real-world work
 * - Drive recruiter/client interest
 *
 * DATA SOURCE:
 * - `/constants/projects.js`
 *
 * ANIMATION SYSTEM:
 * - Controlled via `runProjectsAnimation`
 * - Card-based entrance animations
 *
 * RESPONSIBILITIES:
 * - Render project cards dynamically
 * - Provide navigation to project details
 * - Display CTA (See All Projects)
 *
 * DESIGN PRINCIPLES:
 * - Visual-first (image-driven)
 * - Interactive (hover effects)
 * - Clear CTA
 *
 * PERFORMANCE:
 * - Optimized image rendering
 * - Lazy animation triggers
 *
 * SCALABILITY:
 * - Supports:
 *    - CMS/API integration
 *    - Dynamic routing (/projects/:slug)
 *    - Pagination / filtering
 *
 * DO NOT:
 * - Do NOT hardcode project data
 *
 * RELATED:
 * - /constants/projects.js
 * - /features/public/home/animations/projectsAnimation.js
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { runProjectsAnimation } from "@/features/public/home/animations/projectsAnimation";
import { projects } from "@/constants/projects";

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const cleanup = runProjectsAnimation({
      section: sectionRef.current,
      cardsContainer: cardsRef.current,
      button: buttonRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-10 lg:px-20 bg-[#111827]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-accent">
        Featured Projects
      </h2>

      <div
        ref={cardsRef}
        className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            data-animate="card"
            className="group relative bg-[#1E293B] rounded-xl overflow-hidden shadow-lg will-change-transform"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
              <span className="text-white font-semibold text-lg">
                View Project
              </span>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <Link to={project.link}>
                <button className="text-accent hover:underline font-semibold">
                  View <FaArrowRight className="inline-block ml-1" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-28">
        <Link to="/projects">
          <button
            ref={buttonRef}
            className="border border-accent text-accent px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-accent hover:text-darkbg shadow-md hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)]"
          >
            See All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}