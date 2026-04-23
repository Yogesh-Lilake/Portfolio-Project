/**
 * ==========================================================
 * PROJECT SECTION (REUSABLE CONTENT BLOCK)
 * ==========================================================
 *
 * PURPOSE:
 * - Generic section renderer for Project Details page
 * - Used for dynamic, config-driven sections (Overview, Problem, etc.)
 *
 * RESPONSIBILITY:
 * - Render section title + content
 * - Attach animation ref (for GSAP scroll animations)
 *
 * INPUT CONTRACT:
 * @param {string} title        - Section heading (e.g. "Overview")
 * @param {ReactNode} children  - Section content (text or JSX)
 * @param {function} refCallback - Ref collector for animation system
 *
 * BEHAVIOR:
 * - If `children` is falsy → component returns null (no empty UI blocks)
 *
 * WHY THIS EXISTS:
 * - Prevents duplication of section markup
 * - Enables config-driven rendering via projectSections.config.js
 * - Keeps ProjectDetails.jsx clean and scalable
 *
 * IMPORTANT:
 * - DO NOT add business logic here
 * - DO NOT fetch or transform data here
 * - This is strictly a PRESENTATIONAL component
 */

export default function ProjectSection({ title, children, refCallback }) {
  if (!children) return null;

  return (
    <section ref={refCallback} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-300">{children}</p>
    </section>
  );
}