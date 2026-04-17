/**
 * UI CLASS HELPERS
 * =========================
 *
 * PURPOSE:
 * - Centralize dynamic Tailwind class mapping
 * - Avoid invalid dynamic class strings
 * - Improve scalability & consistency
 */

/**
 * Gets the text alignment class based on the alignment value
 * @param {string} align - The alignment value
 * @returns {string} - The corresponding text alignment class
 */
export const getTextAlignClass = (align = "center") => {
  switch (align) {
    case "left":
      return "text-left";
    case "right":
      return "text-right";
    case "center":
    default:
      return "text-center";
  }
};

/**
 * Gets the max width class based on the size
 * @param {string} size - The size of the max width
 * @returns {string} - The corresponding max width class
 */
export const getMaxWidthClass = (size = "3xl") => {
  const map = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
  };

  return map[size] || "max-w-3xl";
};

/**
 * Gets the grid column class based on the number of columns
 * @param {number} cols - The number of columns
 * @returns {string} - The corresponding grid column class
 */
export const getGridColsClass = (cols) => {
  const map = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
  };

  return map[cols] || "grid-cols-2";
};