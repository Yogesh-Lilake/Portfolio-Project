/**
 * ==========================================================
 * PROJECTS GRID (DATA → UI ORCHESTRATION LAYER)
 * ==========================================================
 *
 * PURPOSE:
 * - Renders paginated collection of projects
 * - Bridges data layer (hooks/services) with UI layer (components)
 *
 * LAYER:
 * - FEATURE COMPOSITION (SMART COMPONENT)
 *
 * DATA FLOW:
 * useProjectsPagination (Hook)
 *        |
 * project.service (Normalization)
 *        |
 * ProjectsGrid (Rendering)
 *        |
 * ProjectCard (Presentation)
 *
 * RESPONSIBILITIES:
 * - Retrieve paginated project data via hook
 * - Render ProjectCard list
 * - Handle empty state rendering
 * - Control pagination component
 * - Attach animation refs for GSAP
 *
 * ANIMATION SYSTEM:
 * - Uses runProjectsGridAnimation
 * - cardsRef dynamically collects DOM nodes
 * - Re-runs animation on pagination change
 *
 * WHY THIS DESIGN:
 * - Keeps UI independent from raw data source
 * - Enables seamless migration (static → API)
 * - Avoids prop drilling from parent pages
 *
 * SCALABILITY BENEFITS:
 * - Pagination logic isolated in hook
 * - UI text controlled via config
 * - Cards reusable across features
 *
 * EMPTY STATE STRATEGY:
 * - Fully config-driven (projectsUIConfig)
 * - Supports localization / CMS in future
 *
 * IMPORTANT RULES:
 *  Do NOT access projectsData directly
 *  Do NOT mutate data here
 *  Do NOT embed business logic
 *
 * Always rely on:
 * - hooks for state/data
 * - service for normalization
 * - config for UI text
 */

import { useEffect, useRef } from "react";
import { useProjectsPagination } from "../hooks/useProjectsPagination";

import ProjectCard from "./ProjectCard";
import ProjectsPagination from "./ProjectsPagination";
import { projectsUIConfig } from "../config/projects.ui.config";

import { runProjectsGridAnimation } from "../animations/projects.grid.animation";

export default function ProjectsGrid() {
  const { paginatedProjects, page, totalPages, setPage } =
    useProjectsPagination();

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cleanup = runProjectsGridAnimation({
      section: sectionRef.current,
      cards: cardsRef.current,
    });

    return cleanup;
  }, [paginatedProjects]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="3xl:max-w-[1600px] mx-auto max-w-screen-2xl grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {paginatedProjects.length === 0 ? (
          <EmptyState {...projectsUIConfig.emptyState} />
        ) : (
          paginatedProjects.map((project, i) => (
            <div key={project.id} ref={(el) => (cardsRef.current[i] = el)}>
              <ProjectCard project={project} />
            </div>
          ))
        )}
      </div>

      {/* Pagination controller */}
      <ProjectsPagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </section>
  );
}

/**
 * EMPTY STATE COMPONENT
 *
 * WHY:
 * - Decoupled from UI text (comes from config)
 * - Supports localization / CMS easily
 */
function EmptyState({ title, description }) {
  return (
    <div className="col-span-full bg-[#0f1724] p-10 rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
