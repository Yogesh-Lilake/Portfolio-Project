/**
 * ==========================================================
 * USE PROJECTS PAGINATION (STATE + DATA HOOK)
 * ==========================================================
 *
 * PURPOSE:
 * - Handles pagination logic for projects listing
 *
 * LAYER:
 * - HOOK (STATE + DATA DERIVATION)
 *
 * USED IN:
 * - ProjectsGrid.jsx
 *
 * RESPONSIBILITIES:
 * - Manage current page state
 * - Slice project data into pages
 * - Provide paginated results
 *
 * DATA SOURCE:
 * - getAllProjects() (service layer)
 *
 * WHY THIS EXISTS:
 * - Separates pagination logic from UI
 * - Makes grid component simpler
 *
 * PERFORMANCE:
 * - useMemo prevents recalculation of full dataset
 *
 * IMPORTANT RULES:
 *  Do NOT render UI here
 *  Do NOT mutate original data
 *
 * Pure logic + state management
 */

import { useState, useMemo } from "react";
import { getAllProjects } from "../services/project.service";

export function useProjectsPagination() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const allProjects = useMemo(() => getAllProjects(), []);

  const totalProjects = allProjects.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);

  const paginatedProjects = allProjects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return {
    page,
    setPage,
    totalPages,
    paginatedProjects,
  };
}