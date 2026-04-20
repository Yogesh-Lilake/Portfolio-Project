/**
 * CONTACT UI CONFIGURATION
 * ============================================
 *
 * PURPOSE:
 * - Controls how contact data is rendered per page
 * - Keeps presentation separate from data
 *
 * DESIGN PRINCIPLE:
 * - Data (contactData) -> WHAT to show
 * - UI Config -> HOW to show
 *
 * PROPERTIES:
 * - iconSize   -> size of icon (px)
 * - showLabel  -> show/hide label text (Email, Location)
 * - limit      -> max items rendered (UX control)
 *
 * SCALABILITY:
 * - Supports page-specific overrides
 * - Extendable for theme, layout variations
 */

export const contactUIConfig = {
  footer: {
    iconSize: 20,
    showLabel: false,
    limit: 2,
  },
  contact: {
    iconSize: 22,
    showLabel: false,
    limit: 2,
  },
};