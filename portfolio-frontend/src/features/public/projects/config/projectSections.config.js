/**
 * ==========================================================
 * PROJECT SECTIONS CONFIG (STRUCTURE DEFINITION LAYER)
 * ==========================================================
 *
 * PURPOSE:
 * - Defines dynamic sections for Project Details page
 * - Controls which fields are rendered and in what order
 *
 * LAYER:
 * - CONFIG (STRUCTURE / RENDER LOGIC CONTROL)
 *
 * USED IN:
 * - ProjectDetails.jsx -> dynamically renders sections
 *
 * HOW IT WORKS:
 * - Each object maps:
 *   key   -> project data field
 *   title -> UI section heading
 *
 * EXAMPLE:
 * { key: "description", title: "Overview" }
 * -> project.description -> "Overview" section
 *
 * WHY THIS EXISTS:
 * - Avoids hardcoding sections inside JSX
 * - Allows adding/removing sections WITHOUT changing UI code
 *
 * SCALABILITY:
 * - Add new section -> only update config
 * - Reorder sections -> just change array order
 *
 * IMPORTANT RULES:
 *  Do NOT include logic here
 *  Do NOT include UI styles here
 *
 * Only mapping between data -> UI
 */

export const projectSections = [
  { key: "description", title: "Overview" },
  { key: "problem", title: "Problem" },
  { key: "solution", title: "Solution" },
  { key: "challenges", title: "Challenges" },
];
