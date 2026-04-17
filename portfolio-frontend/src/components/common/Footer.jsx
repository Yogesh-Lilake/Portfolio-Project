/**
 * Footer Component (Global Information + Navigation)
 * ==========================================================
 *
 * OVERVIEW:
 * - Represents the bottom section of the application
 * - Provides branding, navigation, and social connectivity
 *
 * RESPONSIBILITIES:
 * - Display brand identity
 * - Provide quick navigation links
 * - Show contact information
 * - Link to social platforms
 *
 * ARCHITECTURE ROLE:
 * - Layout-level component
 * - Mounted inside MainLayout
 *
 * DEPENDENCIES:
 * - navigation.js → quick links
 * - socialLinks.js → social media links
 * - footer.css → styling and animations
 * - react-icons → icons
 *
 * STRUCTURE:
 * - Brand section (intro + contact)
 * - Quick Links (navigation reuse)
 * - Social Links (external platforms)
 * - Bottom bar (copyright)
 *
 * DESIGN FEATURES:
 * - Animated gradient background
 * - Floating glowing orbs
 * - Icon hover animations
 * - Subtle motion system
 *
 * UX:
 * - Encourages user engagement (social links)
 * - Provides quick navigation fallback
 *
 * SCALABILITY:
 * - Easily extendable:
 *    - Newsletter signup
 *    - Dynamic content (CMS/API)
 *    - Multi-language support
 *
 * ACCESSIBILITY:
 * - aria-label for social links
 * - semantic structure
 *
 * DO NOT:
 * - Do NOT hardcode navigation links
 * - Do NOT add heavy logic
 *
 * RELATED FILES:
 * - /layouts/MainLayout.jsx    -> mounts Footer
 * - /features/shared/data/navigationData.js   -> provides navigation config
 * - /features/shared/data/socialData.js  -> provides social media links 
 */

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { navigationData } from "@/features/shared/data/navigationData";
import { footerData } from "@/features/shared/data/footerData";
import { socialData } from "@/features/shared/data/socialData";
import { FaRegCopyright } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-color font-medium mt-24 border-t border-[#ffffff08] relative">
      {/* Background Effects */}
      {footerData.ui.showBackgroundEffects && (
        <>
          <div className="footer-bg"></div>

          {footerData.ui.showOrbs && (
            <>
              <div className="orb"></div>
              <div className="orb"></div>
              <div className="orb"></div>
            </>
          )}
          
          {footerData.ui.showGlowLine && <div className="footer-glow"></div>}
        </>
      )}
      

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 
                      grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-start"
      >
        {/* BRAND */}
        <div className="space-y-3 animate-[fade-up_0.6s_ease-out]">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide brand-hover">
            {footerData.brand.name}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {footerData.brand.description}
          </p>

          <div className="text-gray-500 text-sm space-y-1 pt-2">
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaLocationDot className="text-red-500" />
              {footerData.brand.contact.location}
            </p>

            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <MdEmail className="text-red-500" />
              {footerData.brand.contact.email}
            </p>
          </div>
        </div>

        {/* ========= DYNAMIC SECTIONS ========= */}
        {footerData.sections.map((section) => {
          if (section.type === "navigation") {
            return (
              <div
                key={section.id}
                className="space-y-2 animate-[fade-up_0.8s_ease-out]"
              >
                <h3 className="text-white font-semibold mb-3 text-lg w-fit pb-1 border-b border-[rgba(211,47,47,0.4)]">
                  {section.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-1">
                  {navigationData.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          if (section.type === "social") {
            return (
              <div
                key={section.id}
                className="animate-[fade-up_1s_ease-out]"
              >
                <h3 className="text-white font-semibold mb-3 text-lg w-fit pb-1 border-b border-[rgba(211,47,47,0.4)]">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-5 mt-3">
                  {socialData.items.map((social) => {
                    const Icon = social.icon;

                    return (
                      <Link
                        key={social.name}
                        to={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="social-icon text-gray-400 text-2xl"
                      >
                        <Icon size={socialData.ui.iconSize} />
                      </Link>
                    );
                  })}
                </div>

                {section.description && (
                  <p className="text-gray-500 text-sm pt-3 max-w-xs">
                    {section.description}
                  </p>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-[#222] relative z-10"></div>

      {/* Bottom Section */}
      {footerData.bottomBar.show && (
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 
                     flex flex-col md:flex-row justify-between items-center 
                     text-sm sm:text-base text-gray-400 text-center gap-2"
        >
          <p className="animate-[fade-up_1.2s_ease-out]">
            <FaRegCopyright className="inline mr-1" /> {footerData.bottomBar.copyright.replace("{year}", year)}
          </p>

          <p className="animate-[fade-up_1.4s_ease-out]">
            {footerData.bottomBar.credits.text}{" "}
            <span className="name-glow text-accent">
              {footerData.bottomBar.credits.name}
            </span>
          </p>
        </div>
      )}
    </footer>
  );
}