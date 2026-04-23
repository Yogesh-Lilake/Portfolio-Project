/**
 * ==========================================================
 * PROJECTS UI CONFIG (PRESENTATION CONFIGURATION LAYER)
 * ==========================================================
 *
 * PURPOSE:
 * - Centralized source of UI text/content for Projects feature
 * - Removes hardcoded strings from components
 *
 * LAYER:
 * - CONFIG (UI / CONTENT)
 *
 * USED IN:
 * - ProjectCard.jsx        -> CTA text ("View Project")
 * - ProjectDetails.jsx     -> Not Found message, CTA labels
 * - ProjectsGrid.jsx       -> Empty state content
 *
 * WHY THIS EXISTS:
 * - Enables easy content updates without touching UI code
 * - Supports localization (i18n) in future
 * - Makes UI consistent across components
 *
 * SCALABILITY BENEFITS:
 * - Can be replaced with CMS/API-driven content
 * - Supports A/B testing or feature toggles
 *
 * STRUCTURE:
 * - emptyState -> Grid fallback UI
 * - notFound   -> Details page fallback
 * - cta        -> All button labels
 *
 * IMPORTANT RULES:
 *  Do NOT store business logic here
 *  Do NOT store dynamic data here
 *
 * Only static UI content
 */

export const projectsUIConfig = {
  emptyState: {
    title: "No projects found",
    description: "Try different filters or check back later.",
  },
  notFound: {
    message: "Project not found",
  },
  cta: {
    viewProject: "View Project",
    liveDemo: "Live Demo",
    github: "GitHub",
  },
};
