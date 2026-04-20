/**
 * ==========================================================
 * CONTACT INFO (DATA-DRIVEN DISPLAY LAYER)
 * ==========================================================
 *
 * PURPOSE:
 * - Display static contact details + social links
 *
 * ARCHITECTURE:
 * - Fully data-driven
 * - Uses shared data + filtering engine
 *
 * DATA SOURCES:
 * - contactData -> email, location, etc.
 * - socialData -> social platforms
 * - contactInfoData -> title + subtitle
 *
 * CONFIG LAYER:
 * - contactUIConfig -> controls contact rendering
 * - socialUIConfig -> controls social rendering
 *
 * LOGIC:
 * - getVisibleItems():
 *    - filters by page
 *    - applies limits
 *    - supports role-based visibility
 *
 * ANIMATION:
 * - runContactInfoAnimation()
 * - staggered entrance animations
 *
 * DESIGN PRINCIPLES:
 * - No hardcoded UI content
 * - Config-driven rendering
 *
 * DO NOT:
 * - Do NOT directly access raw data arrays
 * - Do NOT add filtering logic here
 *
 * ==========================================================
 */

import { useEffect, useRef } from "react";
import { contactInfoData } from "../data/contactInfoData";
import { contactData } from "@/features/shared/data/contactData";
import { socialData } from "@/features/shared/data/socialData";
import { runContactInfoAnimation } from "../animations/contact.info.animation";
import { contactUIConfig } from "@/shared/config/contactUIConfig";
import { socialUIConfig } from "@/shared/config/socialUIConfig";
import { getVisibleItems } from "@/shared/utils/filterItems";

export default function ContactInfo() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const itemRefs = useRef([]);
  const socialRefs = useRef([]);

  itemRefs.current = [];
  socialRefs.current = [];

  const contactsConfig = contactUIConfig.contact;

  // USE FILTERED CONTACTS (FIXED)
  const contacts = getVisibleItems({
    items: contactData.items,
    page: "contact",
    limit: contactsConfig.limit,
  });

  const socialsConfig = socialUIConfig.contact;

  // SOCIALS (already correct)
  const socials = getVisibleItems({
    items: socialData.items,
    page: "contact",
    role: "guest",
    limit: socialsConfig.limit,
  });

  useEffect(() => {
    const cleanup = runContactInfoAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
      items: itemRefs.current,
      socials: socialRefs.current,
    });
    return cleanup;
  }, []);

  return (
    <div
      ref={sectionRef}
      className="space-y-6 lg:space-y-8 text-gray-300 max-w-md"
    >
      <h3
        ref={titleRef}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white"
      >
        {contactInfoData.title}
      </h3>

      <p ref={subtitleRef} className="text-gray-400 leading-relaxed">
        {contactInfoData.subtitle}
      </p>

      {/* CONTACT ITEMS (FIXED: using filtered data) */}
      <div className="space-y-4">
        {contacts.map((item, i) => {
          const setRef = (el) => {
            if (el) itemRefs.current[i] = el;
          };

          const Icon = item.icon;

          return (
            <div
              key={item.type}
              ref={setRef}
              className="flex items-start gap-3"
            >
              {/* ICON */}
              <span className="text-red-500">
                <Icon size={contactsConfig.iconSize} />
              </span>

              {/* CONDITIONAL LABEL */}
              <div>
                {contactsConfig.showLabel && (
                  <p className="text-sm text-gray-400">{item.label}</p>
                )}

                {item.href ? (
                  <a href={item.href} className="hover:text-red-500 transition">
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SOCIALS */}
      <div className="flex gap-4 pt-4 text-xl">
        {socials.map((social, i) => {
          const setRef = (el) => {
            if (el) socialRefs.current[i] = el;
          };

          const Icon = social.icon;

          return (
            <a
              key={social.name}
              ref={setRef}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Icon size={socialsConfig.iconSize} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
