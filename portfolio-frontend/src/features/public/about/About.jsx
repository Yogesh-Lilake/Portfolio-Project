/**
 * ============================================
 * ABOUT PAGE — MAIN ORCHESTRATOR
 * ============================================
 *
 * PURPOSE:
 * - Composes all About page sections into a single layout
 *
 * ARCHITECTURE:
 * - Uses React.lazy for code-splitting
 * - Uses Suspense for async loading
 *
 * WHY THIS STRUCTURE:
 * - Improves performance (loads sections on demand)
 * - Keeps page modular and scalable
 *
 * SECTIONS INCLUDED:
 * - Hero        → Introduction banner
 * - Content     → Personal overview
 * - Skills      → Shared component (cross-page reuse)
 * - Experience  → Work experience
 * - Education   → Academic background
 * - Stats       → Key metrics
 *
 * SCALABILITY BENEFITS:
 * - Sections can be added/removed without affecting others
 * - Enables:
 *    → route-based splitting
 *    → A/B testing per section
 *    → CMS-driven page composition
 *
 * PERFORMANCE:
 * - Lazy loading reduces initial bundle size
 * - Suspense fallback ensures smooth UX
 *
 * FUTURE EXTENSIONS:
 * - Add ErrorBoundary for each section
 * - Add skeleton loaders instead of plain text
 * - Dynamic section rendering (config-driven pages)
 *
 * ============================================
 */

import { lazy, Suspense } from "react";

/**
 * Lazy-loaded sections
 * - Each section is split into separate chunk
 * - Improves initial load performance
 */
const AboutHero = lazy(() => import("./components/Hero"));
const AboutContent = lazy(() => import("./components/Content"));
const Skills = lazy(() => import("@/features/shared/skills/components/Skills"));
const AboutExperience = lazy(() => import("./components/Experience"));
const AboutEducation = lazy(() => import("./components/Education"));
const AboutStats = lazy(() => import("./components/Stats"));

/**
 * Loading fallback UI
 * - Replace with skeleton loader in production
 */
function PageLoader() {
  return (
    <div className="text-center py-20 text-gray-400">
      Loading About Page...
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={<PageLoader />}>
      {/* HERO SECTION */}
      <AboutHero />

      {/* INTRO CONTENT */}
      <AboutContent />

      {/* SHARED SKILLS (reused across pages) */}
      <Skills variant="alt" />

      {/* EXPERIENCE */}
      <AboutExperience />

      {/* EDUCATION */}
      <AboutEducation />

      {/* STATS */}
      <AboutStats />
    </Suspense>
  );
}