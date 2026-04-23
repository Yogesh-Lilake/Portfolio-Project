/**
 * ==========================================================
 * PROJECT SERVICE (DATA NORMALIZATION LAYER)
 * ==========================================================
 *
 * PURPOSE:
 * - Converts raw project data into UI-safe format
 *
 * LAYER:
 * - SERVICE (DATA PROCESSING)
 *
 * USED IN:
 * - useProjectDetails.js
 * - useProjectsPagination.js
 *
 * CORE RESPONSIBILITIES:
 * - Validate image field
 * - Provide fallback image
 * - Ensure gallery consistency
 *
 * WHY THIS EXISTS:
 * - Prevents UI crashes
 * - Centralizes data validation
 *
 * ARCHITECTURE RULE:
 *  UI must NEVER consume raw projectsData
 *  Always go through service
 */


import { projectsData } from "../data/projectsData";
import defaultProjectImage from "@/assets/projects/default-project.png";

/**
 * Validate image (basic check)
 */
const isValidImage = (img) => {
  return typeof img === "string" && img.trim() !== "";
};

/**
 * Normalize project object
 */
const normalizeProject = (project) => {
  const validImage = isValidImage(project.image)
    ? project.image
    : defaultProjectImage;

  return {
    ...project,

    // Always safe image
    image: validImage,

    // Ensure gallery exists
    gallery:
      project.gallery && project.gallery.length > 0
        ? project.gallery
        : [validImage],
  };
};

/**
 * Get single project
 */
export const getProjectBySlug = (slug) => {
  const project = projectsData.find((p) => p.slug === slug);
  return project ? normalizeProject(project) : null;
};

/**
 * Get all projects
 */
export const getAllProjects = () => {
  return projectsData.map(normalizeProject);
};