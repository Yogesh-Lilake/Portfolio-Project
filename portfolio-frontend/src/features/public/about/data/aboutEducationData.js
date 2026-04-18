/**
 * ============================================
 * ABOUT PAGE — EDUCATION DATA CONFIG
 * ============================================
 *
 * PURPOSE:
 * - Central source of truth for education section
 *
 * WHY THIS EXISTS:
 * - Decouples content from UI
 * - Enables:
 *    → CMS integration
 *    → localization
 *    → filtering/grouping
 *
 * DATA CONTRACT:
 * - title: string
 * - items: Array<{
 *      id: string (required, unique)
 *      degree: string
 *      institute: string
 *      period: string
 *   }>
 *
 * FUTURE EXTENSIONS:
 * - grade / CGPA
 * - location
 * - achievements[]
 * - certifications[]
 *
 * ============================================
 */

export const aboutEducationData = {
  title: "Education",

  items: [
    {
      id: "be-computer",
      degree: "BE Computer Engineering",
      institute: "Pune University",
      period: "2021 - 2025",
    },
    {
      id: "hsc",
      degree: "HSC",
      institute: "Maharashtra Board",
      period: "2020",
    },
    {
      id: "ssc",
      degree: "SSC",
      institute: "Maharashtra Board",
      period: "2018",
    },
  ],
};