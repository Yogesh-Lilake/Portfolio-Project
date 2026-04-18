/**
 * ============================================
 * ABOUT PAGE — EXPERIENCE DATA CONFIG
 * ============================================
 *
 * PURPOSE:
 * - Central source of truth for experience section
 *
 * WHY THIS EXISTS:
 * - Decouples UI from content
 * - Enables:
 *    → CMS integration
 *    → filtering/grouping
 *    → localization
 *
 * DATA CONTRACT:
 * - title: string
 * - items: Array<{
 *      id: string (required, unique)
 *      title: string
 *      desc: string
 *   }>
 *
 * FUTURE EXTENSIONS:
 * - company
 * - duration
 * - techStack[]
 * - links[]
 *
 * ============================================
 */

export const aboutExperienceData = {
  title: "My Experience",

  items: [
    {
      id: "freelance",
      title: "Freelance Developer",
      desc: "Built full-stack apps using React & PHP.",
    },
    {
      id: "android",
      title: "Android Developer",
      desc: "Developed Android apps with API integration.",
    },
    {
      id: "learner",
      title: "Continuous Learner",
      desc: "Exploring system design & cloud.",
    },
  ],
};