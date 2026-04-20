/**
 * CONTACT HERO DATA (CONTENT CONFIG)
 * ==================================
 *
 * PURPOSE:
 * - Defines hero section content
 *
 * STRUCTURE:
 * - heading
 * - subheading
 * - image (Lottie asset)
 *
 * DESIGN:
 * - Pure data (no logic)
 * - Easily replaceable via CMS/API
 *
 * ==========================================================
 */

import ContactHeroAnimation from "@/assets/lottie/web-connect.lottie";

export const contactHeroData = {
    heading: "Let’s Build Something Great Together",
    subheading:
      "Whether it's collaboration, freelance project, or just a chat — I'm always excited to connect.",
    image: ContactHeroAnimation,
}