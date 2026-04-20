/**
 * GENERIC VISIBILITY ENGINE
 * ============================================
 *
 * PURPOSE:
 * - Central filtering logic for all data-driven UI
 * - Works across:
 *    - socialData
 *    - contactData
 *    - navigationData (future)
 *
 * FEATURES:
 * - Visibility filtering (pages, roles, enabled)
 * - Optional sorting (priority)
 * - UI limiting (UX control)
 *
 * DESIGN:
 * - Generic (not tied to any domain)
 * - Safe (handles missing fields)
 *
 * PARAMETERS:
 * @param {Array} items
 * @param {String} page
 * @param {String} role
 * @param {Number} limit
 *
 * RETURNS:
 * - Filtered + sorted + sliced array
 *
 * IMPORTANT:
 * - If visibility is missing -> item is considered visible
 */

export const getVisibleItems = ({
  items,
  page,
  role = "guest",
  limit,
}) => {
  let result = items.filter((item) => {
    const v = item.visibility;

    // ✅ Safe checks (no breaking if roles/pages missing)
    return (
      (v?.enabled ?? true) &&
      (!v?.pages || v.pages.includes(page)) &&
      (!v?.roles || v.roles.includes(role))
    );
  });

  // ✅ Sort only if priority exists
  if (items[0]?.priority !== undefined) {
    result = result.sort((a, b) => a.priority - b.priority);
  }

  // ✅ Apply limit (UX control)
  if (limit) {
    result = result.slice(0, limit);
  }

  return result;
};