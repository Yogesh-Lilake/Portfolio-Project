/**
 * NotFound (404 Recovery Surface)
 * ==========================================================
 *
 * OVERVIEW:
 * - Handles all unmatched or invalid routes in the application
 * - Serves as a recovery interface rather than a dead-end error page
 *
 * PURPOSE:
 * - Inform users that the requested page does not exist
 * - Provide immediate recovery paths to keep users engaged
 *
 * ARCHITECTURE ROLE:
 * - Terminal fallback UI in routing system
 * - Rendered by:
 *    - PublicRoutes (path="*")
 *    - StatusRoute (invalid config fallback)
 *
 * DATA SOURCE:
 * - Consumes config from `notFoundData.js`
 * - Fully content-driven (no hardcoded UI text)
 *
 * UX PRINCIPLES:
 * - Do NOT trap users in an error state
 * - Provide clear next actions (Home, Projects, Contact)
 * - Maintain brand tone (friendly, not technical)
 *
 * ANIMATION STRATEGY:
 * - Animation is optional (progressive enhancement)
 * - Uses runtime-safe rendering:
 *    - If animation loads → show it
 *    - If fails → silently fallback to text UI
 *
 * FAILURE HANDLING:
 * - Handles animation errors via local state (animationError)
 * - Prevents UI breakage from missing/corrupt assets
 *
 * RESPONSIBILITIES:
 * - Render 404 messaging
 * - Render recovery actions
 * - Render optional navigation suggestions
 *
 * NON-RESPONSIBILITIES:
 * - Do NOT determine route state
 * - Do NOT handle routing logic
 * - Do NOT fetch data
 *
 * SCALABILITY:
 * - Easily extendable for:
 *    - Search input (recover by query)
 *    - AI-based suggestions
 *    - Recently visited pages
 *    - Analytics tracking (broken routes)
 *
 * ACCESSIBILITY:
 * - Clear semantic structure
 * - Actionable links for keyboard navigation
 *
 * RELATED FILES:
 * - /features/shared/data/notFoundData.js
 * - /app/router/PublicRoutes.jsx
 * - /app/router/StatusRoute.jsx
 *
 * DESIGN PRINCIPLE:
 * - "Error pages should guide, not block"
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { notFoundData } from "./data/notFoundData";

export default function NotFound() {
  const { animation, heading, description, actions, suggestions } = notFoundData;

  const [animationError, setAnimationError] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-2xl w-full">

        {/* SAFE ANIMATION RENDER */}
        {animation && !animationError && (
          <div className="w-full h-64 mb-6">
            <DotLottieReact
              src={animation}
              loop
              autoplay
              renderer="svg"
              className="w-full h-full"
              onError={() => setAnimationError(true)} // fallback trigger
            />
          </div>
        )}

        {/* Message */}
        <h2 className="text-2xl font-semibold mb-2">
          {heading}
        </h2>

        <p className="text-muted-foreground mb-8">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.to}
              className={`px-6 py-3 rounded-lg transition ${
                action.variant === "primary"
                  ? "bg-primary text-white hover:opacity-90"
                  : "border border-border hover:bg-muted"
              }`}
            >
              {action.label}
            </Link>
          ))}
        </div>

        {/* Suggestions */}
        <div className="text-sm text-muted-foreground">
          <p>Or try one of these:</p>

          <div className="flex flex-wrap justify-center gap-4 mt-3">
            {suggestions.map((item, index) => (
              <Link key={index} to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}