/**
 * ============================================
 * ABOUT PAGE — CONTENT DATA CONFIG
 * ============================================
 *
 * PURPOSE:
 * - Centralized content source for About section
 *
 * WHY THIS EXISTS:
 * - Decouples UI from content
 * - Enables:
 *    → CMS integration
 *    → localization
 *    → A/B testing
 *
 * DATA CONTRACT:
 * - greeting: string
 * - description1: string
 * - description2: string
 * - ctaText: string
 * - image: string (URL)
 *
 * FUTURE EXTENSIONS:
 * - add `ctaLink`
 * - add `stats[]`
 * - add `socialLinks[]`
 *
 * ============================================
 */

import ProfileImage from "@/assets/images/profile.jpg";

export const aboutContentData = {
  greeting: "Hi, I'm Yogesh!",

  description1:
    "I'm a Full Stack Developer with a passion for building scalable and efficient web applications. With experience in both frontend and backend technologies, I enjoy creating seamless user experiences and robust server-side solutions.",

  description2:
    "When I'm not coding, I love exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community.",

  ctaText: "Download CV",

  image: ProfileImage,
};