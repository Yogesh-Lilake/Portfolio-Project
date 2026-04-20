/**
 * ==========================================================
 * GLOBAL TOAST CONFIGURATION
 * ==========================================================
 *
 * PURPOSE:
 * - Centralized styling & behavior for toast notifications
 *
 * LIBRARY:
 * - react-hot-toast
 *
 * FEATURES:
 * - Consistent UI across app
 * - Success & error variants
 * - Custom styling
 *
 * DESIGN:
 * - Single source of truth
 * - Prevents inline styling duplication
 *
 * EXTENSIBILITY:
 * - Add variants (warning, info)
 * - Add theming support
 *
 * ==========================================================
 */

export const toastConfig = {
  position: "top-right",
  reverseOrder: false,

  toastOptions: {
    duration: 3000,
    style: {
      background: "#1e293b",
      color: "#fff",
      border: "1px solid #334155",
    },

    success: {
      style: {
        border: "1px solid #22c55e",
      },
    },

    error: {
      style: {
        border: "1px solid #ef4444",
      },
    },
  },
};