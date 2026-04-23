/**
 * ==========================================================
 * PROJECTS PAGINATION CONTROLLER
 * ==========================================================
 *
 * PURPOSE:
 * - Controls pagination UI and interaction for ProjectsGrid
 *
 * INPUT CONTRACT:
 * @param {number} page        - Current active page
 * @param {number} totalPages  - Total number of pages
 * @param {function} onChange  - Callback to update page
 *
 * RESPONSIBILITIES:
 * - Render page buttons
 * - Handle page switching
 * - Prevent rapid multiple clicks
 *
 * UX ENHANCEMENT:
 * - Adds small delay (250ms) to simulate smooth transition
 * - Prevents UI jitter during fast clicks
 *
 * BEHAVIOR:
 * - If totalPages <= 1 -> component returns null
 *
 * WHY THIS EXISTS:
 * - Keeps pagination logic isolated
 * - Makes ProjectsGrid simpler
 * - Easy to replace with API pagination later
 *
 * IMPORTANT:
 * - Do NOT fetch data here
 * - Do NOT manage global state here
 * - Only UI + interaction control
 */

import { useState } from "react";

export default function ProjectsPagination({ page, totalPages, onChange }) {
  const [isAnimating, setIsAnimating] = useState(false);

  if (totalPages <= 1) return null;

  const handleChange = (p) => {
    if (p === page || isAnimating) return;

    setIsAnimating(true);

    // smooth delay (simulate transition)
    setTimeout(() => {
      onChange(p);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => handleChange(p)}
          className={`px-4 py-2 rounded transition-all duration-200 ${
            p === page
              ? "bg-accent text-darkbg scale-110"
              : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:scale-105"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
