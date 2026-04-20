/**
 * CONTACT DATA (SHARED DOMAIN DATA)
 * ============================================
 *
 * PURPOSE:
 * - Central source for all contact-related information
 *
 * DOMAIN:
 * - Email
 * - Location
 * - (Future: phone, WhatsApp, etc.)
 *
 * DESIGN:
 * - Pure data (no UI logic)
 * - Reusable across components
 *
 * VISIBILITY:
 * - Controlled via `visibility` object
 * - Supports:
 *    - pages
 *    - roles (optional)
 *    - feature toggles
 *
 * IMPORTANT:
 * - Icons are included for flexibility
 * - Rendering is controlled by UI config
 */
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const contactData = {
  items: [
    {
        type: "email",
        label: "Email", 
        value: "yogeshlilake02@gmail.com",
        href: "mailto:yogeshlilake02@gmail.com",
        icon: MdEmail,
        visibility: {
            pages: ["footer", "contact"],
            enabled: true,
        }
    },
    {
        type: "location",
        label: "Location",
        value: "Mumbai, Maharashtra, India",
        icon: FaLocationDot,
        visibility: {
            pages: ["footer", "contact"],
            enabled: true,
        }
    },
  ],
};