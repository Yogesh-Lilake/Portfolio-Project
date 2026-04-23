/**
 * ==========================================================
 * PROJECTS PAGE (ORCHESTRATOR)
 * ==========================================================
 *
 * PURPOSE:
 * - Entry point for the Projects feature
 * - Composes high-level sections (Hero + Grid)
 *
 * RESPONSIBILITY:
 * - NO business logic
 * - NO data fetching
 * - ONLY layout composition
 *
 * WHY:
 * - Keeps page scalable and easy to refactor
 * - Allows independent development of sections
 *
 * STRUCTURE:
 * Projects
 *  ├── ProjectsHero (branding + intro)
 *  └── ProjectsGrid (data-driven content)
 */

import ProjectsHero from "./components/ProjectsHero";
import ProjectsGrid from "./components/ProjectsGrid";

export default function Projects() {
  return (
    <div className="bg-darkbg text-white">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
}