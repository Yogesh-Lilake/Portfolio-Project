/**
 * ==========================================================
 * PROJECT CARD (REUSABLE DOMAIN COMPONENT)
 * ==========================================================
 *
 * PURPOSE:
 * - Displays a single project preview inside grid/list views
 * - Acts as the primary navigation entry to Project Details
 *
 * LAYER:
 * - UI / PRESENTATIONAL COMPONENT
 *
 * DATA CONTRACT:
 * @param {Object} project
 * @param {string} project.id
 * @param {string} project.slug
 * @param {string} project.title
 * @param {string} project.description
 * @param {string} project.image (normalized by service)
 * @param {Array<{name: string, color: string}>} project.tech
 *
 * DATA SOURCE GUARANTEE:
 * - project object MUST come from service layer (project.service.js)
 * - image is already normalized (fallback handled upstream)
 *
 * RESPONSIBILITIES:
 * - Render project preview (image + title + description + tech)
 * - Handle UI interactions (hover effects)
 * - Navigate to project details via react-router
 *
 * IMAGE STRATEGY:
 * - Uses `onError` fallback as LAST safety layer
 * - Primary fallback responsibility is handled in service layer
 *
 * WHY THIS DESIGN:
 * - Keeps card reusable across multiple pages (grid, featured, etc.)
 * - Prevents UI breakage from invalid/missing images
 * - Decouples navigation logic from parent components
 *
 * IMPORTANT RULES:
 *  Do NOT fetch data here
 *  Do NOT normalize data here
 *  Do NOT hardcode UI text (use config)
 *
 * This component assumes:
 * - Clean, validated data
 * - UI-only responsibility
 */
import { Link } from "react-router-dom";
import { useRef } from "react";
import defaultProjectImage from "@/assets/projects/default-project.png";
import { projectsUIConfig } from "../config/projects.ui.config";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="group bg-[#1E293B] rounded-2xl overflow-hidden 
      shadow-lg transition-all duration-300 
      hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover 
          transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // fallback for broken image URLs
            e.currentTarget.src = defaultProjectImage;
          }}
        />

        {/* OVERLAY CTA */}
        <div
          className="absolute inset-0 bg-black/50 opacity-0 
          group-hover:opacity-100 transition duration-300 flex items-center justify-center"
        >
          <Link
            to={`${project.slug}`}
            className="transform translate-y-4 group-hover:translate-y-0 
            transition duration-300 bg-accent text-darkbg px-5 py-2 rounded-full font-semibold hover:bg-red-600"
          >
            {projectsUIConfig.cta.viewProject}
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>

        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech?.map((tech, i) => (
            <span
              key={i}
              className={`${tech.color} px-3 py-1 rounded-full text-xs font-semibold`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
