/**
 * ==========================================================
 * USE PROJECT DETAILS (DATA ACCESS HOOK)
 * ==========================================================
 *
 * PURPOSE:
 * - Fetch single project based on route slug
 *
 * LAYER:
 * - HOOK (DATA ACCESS)
 *
 * USED IN:
 * - ProjectDetails.jsx
 *
 * DATA FLOW:
 * route (slug) -> service -> normalized project -> UI
 *
 * WHY THIS EXISTS:
 * - Encapsulates routing + data fetching logic
 * - Keeps UI components clean
 *
 * BENEFITS:
 * - Easy to replace with API call later
 * - Reusable across features
 *
 * IMPORTANT RULES:
 *  Do NOT access projectsData directly here
 *  Do NOT return raw data
 *
 * Always go through service layer
 */

import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../services/project.service";

export function useProjectDetails() {
  const { slug } = useParams();

  const project = getProjectBySlug(slug);

  return { project };
}