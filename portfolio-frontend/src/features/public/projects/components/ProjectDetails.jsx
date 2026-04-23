/**
 * ==========================================================
 * PROJECT DETAILS PAGE (FEATURE ORCHESTRATOR)
 * ==========================================================
 *
 * PURPOSE:
 * - Displays full project case study based on URL slug
 *
 * DATA FLOW:
 * Route (slug) -> useProjectDetails -> project.service -> UI
 *
 * RESPONSIBILITIES:
 * - Fetch project data via hook
 * - Render all project sections dynamically
 * - Attach animation refs for GSAP
 * - Handle fallback states (not found, missing image)
 *
 * ARCHITECTURE:
 * - Config-driven sections (projectSections.config.js)
 * - UI text controlled via projects.ui.config.js
 * - Data normalized via service layer
 *
 * WHY THIS DESIGN:
 * - UI remains stable even if backend/API changes
 * - New sections can be added WITHOUT modifying JSX
 * - Prevents tight coupling between UI and data structure
 *
 * ANIMATION SYSTEM:
 * - Uses GSAP with scroll-triggered animations
 * - sectionsRef collects DOM nodes dynamically
 *
 * IMPORTANT RULES:
 *  Do NOT access raw projectsData directly
 *  Do NOT add business logic here
 *  Do NOT hardcode UI text
 *
 * Always use:
 * - hooks (data)
 * - config (UI text)
 * - service (normalization)
 *
 * EDGE CASES HANDLED:
 * - Missing project -> Not Found UI
 * - Missing image -> fallback image
 * - Empty sections -> auto-hidden
 */

import { useEffect, useRef } from "react";
import defaultProjectImage from "@/assets/projects/default-project.png";
import { runProjectDetailsAnimation } from "../animations/project.details.animation";

import { useProjectDetails } from "../hooks/useProjectDetails";
import { projectSections } from "../config/projectSections.config";
import { projectsUIConfig } from "../config/projects.ui.config";

import ProjectSection from "./ProjectSection";

export default function ProjectDetails() {
  const { project } = useProjectDetails();

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const cleanup = runProjectDetailsAnimation({
      container: containerRef.current,
      image: imageRef.current,
      sections: sectionsRef.current,
    });

    return cleanup;
  }, [project]);

  if (!project) {
    return (
      <div className="text-center py-20 text-white">
        {projectsUIConfig.notFound.message}
      </div>
    );
  }

  // Prevent duplicate refs
  sectionsRef.current = [];
  let index = 0;

  return (
    <div
      ref={containerRef}
      className="bg-darkbg text-white min-h-screen px-4 py-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div ref={(el) => (sectionsRef.current[index++] = el)}>
          <h1 className="text-4xl font-bold text-accent mb-2">
            {project.title}
          </h1>
          <p className="text-gray-400 mb-6">{project.tagline}</p>
        </div>

        {/* IMAGE */}
        <div ref={imageRef} className="rounded-xl overflow-hidden mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = defaultProjectImage;
            }}
          />
        </div>

        {/* CONFIG DRIVEN SECTIONS */}
        {projectSections.map(({ key, title }) => {
          if (!project[key]) return null;

          return (
            <ProjectSection
              key={key}
              title={title}
              refCallback={(el) => (sectionsRef.current[index++] = el)}
            >
              {project[key]}
            </ProjectSection>
          );
        })}

        {/* FEATURES */}
        {project.features?.length > 0 && (
          <section
            ref={(el) => (sectionsRef.current[index++] = el)}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {/* TECH STACK */}
        <section
          ref={(el) => (sectionsRef.current[index++] = el)}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className={`${tech.color} px-3 py-1 rounded-full text-xs font-semibold`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        {project.gallery?.length > 0 && (
          <section
            ref={(el) => (sectionsRef.current[index++] = el)}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <img key={i} src={img} alt="project" className="rounded-lg" />
              ))}
            </div>
          </section>
        )}

        {/* LINKS */}
        <div
          ref={(el) => (sectionsRef.current[index++] = el)}
          className="flex gap-4 mt-8"
        >
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-4 py-2 rounded hover:scale-105 transition"
            >
              {projectsUIConfig.cta.liveDemo}
            </a>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-4 py-2 rounded hover:scale-105 transition"
            >
              {projectsUIConfig.cta.github}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
