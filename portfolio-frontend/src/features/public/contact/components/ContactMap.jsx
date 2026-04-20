/**
 * ==========================================================
 * CONTACT MAP (EMBEDDED LOCATION VIEW)
 * ==========================================================
 *
 * PURPOSE:
 * - Provide geographical context for contact location
 *
 * IMPLEMENTATION:
 * - Uses iframe-based Google Maps embed
 * - Lightweight and zero API cost
 *
 * DATA SOURCE:
 * - contactMapData -> map URL
 *
 * ANIMATION:
 * - runContactMapAnimation()
 * - Fade + scale entrance
 *
 * PERFORMANCE:
 * - lazy loading enabled
 * - avoids heavy JS SDK
 *
 * TRADE-OFF:
 * - Limited customization (iframe)
 * - For advanced features -> use Maps API
 *
 * DO NOT:
 * - Do NOT add business logic
 * - Do NOT block rendering
 *
 * ==========================================================
 */

import { useEffect, useRef } from "react";
import { contactMapData } from "../data/contactMapData";
import { runContactMapAnimation } from "../animations/contact.map.animation";

export default function ContactMap() {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const cleanup = runContactMapAnimation({
      section: sectionRef.current,
      iframe: iframeRef.current,
    });

    return cleanup;
  }, []);

  return (
    <div
      ref={sectionRef}
      className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700 aspect-[16/9]"
    >
      <iframe
        ref={iframeRef}
        src={contactMapData.map_embed_url}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        title="map"
      />
    </div>
  );
}
