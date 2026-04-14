/**
 * Home Page (Public Landing Page Orchestrator)
 * ==========================================================
 *
 * OVERVIEW:
 * - Entry page of the public website
 * - Composes all major sections of the portfolio
 *
 * ARCHITECTURE ROLE:
 * - Acts as a "composition layer"
 * - Assembles independent feature sections:
 *    Hero -> About -> Skills -> Projects -> Contact
 *
 * DESIGN PRINCIPLE:
 * - Each section is isolated (self-contained feature)
 * - No business logic here
 * - No animation logic here
 *
 * PERFORMANCE STRATEGY:
 * - Uses React.lazy for code splitting
 * - Loads sections on demand
 * - Suspense fallback improves perceived performance
 *
 * RESPONSIBILITIES:
 * - Orchestrate section order
 * - Provide loading fallback
 *
 * SCALABILITY:
 * - Easily extendable:
 *    - Add/remove/reorder sections
 *    - Lazy-load heavy sections
 *    - A/B test layouts
 *
 * DO NOT:
 * - Do NOT add animations here
 * - Do NOT add API logic here
 * - Do NOT tightly couple sections
 *
 * RELATED:
 * - /features/public/home/components/*
 * - /features/public/home/animations/*
 */

import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

export default function Home() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Suspense>
  );
}