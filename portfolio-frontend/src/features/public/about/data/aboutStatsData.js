/**
 * ============================================
 * ABOUT PAGE — STATS DATA CONFIG
 * ============================================
 *
 * PURPOSE:
 * - Central source of truth for stats section
 *
 * WHY THIS EXISTS:
 * - Separates numeric logic from UI formatting
 * - Enables flexible display formats
 *
 * DATA CONTRACT:
 * - id: string (unique identifier)
 * - value: number (pure numeric)
 * - suffix: string (optional display suffix)
 * - label: string
 *
 * ============================================
 */

export const aboutStatsData = [
  {
    id: "projects",
    value: 25,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    id: "apps",
    value: 10,
    suffix: "+",
    label: "Apps Developed",
  },
  {
    id: "tech",
    value: 8,
    suffix: "+",
    label: "Technologies Mastered",
  },
  {
    id: "clients",
    value: 15,
    suffix: "+",
    label: "Happy Clients",
  },
];