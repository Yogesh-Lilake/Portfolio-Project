/**
 * ==========================================================
 * FOOTER (APPLICATION SHELL COMPONENT)
 * ==========================================================
 *
 * PURPOSE:
 * - Global footer rendered across all public pages
 * - Displays branding, navigation, contact info, and social links
 *
 * ARCHITECTURE:
 * - Pure presentational component
 * - Fully data-driven (no hardcoded content)
 *
 * DATA SOURCES:
 * - footerData      -> structure & UI flags
 * - navigationData  -> internal navigation links
 * - contactData     -> email, location, etc.
 * - socialData      -> external platforms
 *
 * UI CONFIG:
 * - contactUIConfig -> controls contact rendering
 * - socialUIConfig  -> controls social rendering
 *
 * LOGIC LAYER:
 * - getVisibleItems() handles:
 *    - visibility rules (pages, roles)
 *    - sorting (priority)
 *    - limiting (UX control)
 *
 * DESIGN PRINCIPLES:
 * - Separation of concerns (data vs UI vs logic)
 * - Config-driven rendering
 * - Scalable section system
 *
 * ACCESSIBILITY:
 * - aria-label for external links
 * - semantic HTML structure
 *
 * DO NOT:
 * - Do NOT add business logic here
 * - Do NOT hardcode values
 *
 * ==========================================================
 */

import { Link } from "react-router-dom";
import { navigationData } from "@/features/shared/data/navigationData";
import { footerData } from "@/features/shared/data/footerData";
import { contactData } from "@/features/shared/data/contactData";
import { socialData } from "@/features/shared/data/socialData";
import { FaRegCopyright } from "react-icons/fa";
import { contactUIConfig } from "@/shared/config/contactUIConfig";
import { socialUIConfig } from "@/shared/config/socialUIConfig";
import { getVisibleItems } from "@/shared/utils/filterItems";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  // ================================
  // CONFIGS
  // ================================
  const contactsConfig = contactUIConfig.footer;
  const socialsConfig = socialUIConfig.footer;

  const contacts = getVisibleItems({
    items: contactData.items,
    page: "footer",
    limit: contactsConfig.limit,
  });

  const socials = getVisibleItems({
    items: socialData.items,
    page: "footer",
    role: "guest",
    limit: socialsConfig.limit,
  });

  return (
    <footer className="text-color font-medium mt-24 border-t border-[#ffffff08] relative">
      {/* Background Effects */}
      {footerData.ui.background.enabled && (
        <>
          <div className="footer-bg"></div>

          {footerData.ui.background.orbs && (
            <>
              <div className="orb"></div>
              <div className="orb"></div>
              <div className="orb"></div>
            </>
          )}

          {footerData.ui.background.glowLine && <div className="footer-glow"></div>}
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
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.type}
                  className="flex items-center gap-2 text-gray-500 text-sm"
                >
                  <Icon
                    size={contactsConfig.iconSize}
                    className="text-red-500"
                  />

                  {contactsConfig.showLabel && (
                    <p className="text-sm text-gray-400">{item.label}</p>
                  )}
                  {item.href ? (
                    <a href={item.href}>{item.value} </a>
                  ) : (
                    item.value
                  )}
                </div>
              );
            })}
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
              <div key={section.id} className="animate-[fade-up_1s_ease-out]">
                <h3 className="text-white font-semibold mb-3 text-lg w-fit pb-1 border-b border-[rgba(211,47,47,0.4)]">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-5 mt-3">
                  {socials.map((social) => {
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
                        <Icon size={socialsConfig.iconSize} />
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
      {footerData.bottomBar.enabled && (
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 
                     flex flex-col md:flex-row justify-between items-center 
                     text-sm sm:text-base text-gray-400 text-center gap-2"
        >
          <p className="animate-[fade-up_1.2s_ease-out]">
            <FaRegCopyright className="inline mr-1" />
            {footerData.bottomBar.copyright.replace("{year}", year)}
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