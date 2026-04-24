/**
 * ComingSoon (Feature Placeholder Surface)
 * ==========================================================
 *
 * OVERVIEW:
 * - Represents routes that are intentionally defined but not yet implemented
 * - Provides a clear, intentional UX for "in-progress" features
 *
 * PURPOSE:
 * - Prevent confusion between:
 *    - 404 (does not exist)
 *    - Coming Soon (planned but not ready)
 * - Maintain user trust and product clarity
 *
 * ARCHITECTURE ROLE:
 * - Rendered by StatusRoute when:
 *    status === "coming-soon"
 *
 * DATA SOURCE:
 * - Consumes:
 *    - navigationData → to detect current page context
 *    - comingSoonData → for UI content/config
 *
 * CONTEXT-AWARE BEHAVIOR:
 * - Dynamically identifies current route
 * - Displays page-specific heading:
 *    e.g., "Notes Coming Soon"
 *
 * ANIMATION STRATEGY:
 * - Optional enhancement (not critical)
 * - Safe rendering with fallback:
 *    - Success → show animation
 *    - Failure → render text-only UI
 *
 * UX PRINCIPLES:
 * - Do NOT block user navigation
 * - Communicate progress, not error
 * - Keep tone optimistic and intentional
 *
 * RESPONSIBILITIES:
 * - Display feature status (coming soon)
 * - Provide navigation actions (Home, Projects, etc.)
 * - Maintain consistent layout and branding
 *
 * NON-RESPONSIBILITIES:
 * - Do NOT define route behavior
 * - Do NOT manage feature flags
 * - Do NOT fetch remote data
 *
 * ROUTING CONTEXT:
 * - Navigation remains fully clickable
 * - Routing system determines page state
 * - This component ONLY reflects that state
 *
 * SCALABILITY:
 * - Supports future enhancements:
 *    - Per-page custom messaging
 *    - Notify-me (email capture)
 *    - Feature release tracking
 *    - A/B testing placeholders
 *
 * ACCESSIBILITY:
 * - Clear messaging hierarchy
 * - Actionable navigation links
 *
 * RELATED FILES:
 * - /features/shared/data/comingSoonData.js
 * - /features/shared/data/navigationData.js
 * - /app/router/StatusRoute.jsx
 *
 * DESIGN PRINCIPLE:
 * - "Planned features should feel intentional, not broken"
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationData } from "./data/navigationData";
import { comingSoonData } from "./data/comingSoonData";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ComingSoon() {
  const location = useLocation();

  const currentLink = navigationData.links.find(
    (link) => link.path === location.pathname
  );

  const pageName = currentLink?.label || "This page";

  const { animation, getHeading, description, actions } = comingSoonData;

  const [animationError, setAnimationError] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-xl w-full">

        {/* Safe Animation */}
        {animation && !animationError && (
          <div className="w-full h-64 mb-6">
            <DotLottieReact
              src={animation}
              loop
              autoplay
              renderer="svg"
              className="w-full h-full"
              onError={() => setAnimationError(true)}
            />
          </div>
        )}

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">
          {getHeading(pageName)}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8">
          {description}
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.to}
              className={`px-6 py-3 rounded-lg ${
                action.variant === "primary"
                  ? "bg-primary text-white"
                  : "border border-border"
              }`}
            >
              {action.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}