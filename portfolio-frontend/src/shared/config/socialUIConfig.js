/**
 * SOCIAL UI CONFIGURATION
 * ============================================
 *
 * PURPOSE:
 * - Controls rendering of social icons per page
 *
 * DIFFERENCE FROM contactUI:
 * - No labels (icons only)
 * - Focus on spacing + size
 *
 * PROPERTIES:
 * - iconSize -> size of icon
 * - limit    -> max number of icons shown
 *
 * FUTURE:
 * - Can support variants (grid, list, compact)
 */

export const socialUIConfig = {
  footer: {
    iconSize: 24,
    limit: 4,
  },
  contact: {
    iconSize: 26,
    limit: 4,
  },
};