/**
 * Navbar Component (Global Navigation System)
 * ==========================================================
 *
 * OVERVIEW:
 * - This component represents the primary navigation layer of the application.
 * - It is globally mounted inside `MainLayout.jsx` and persists across all routes.
 *
 * RESPONSIBILITIES:
 * - Route navigation (via react-router)
 * - Branding (logo + identity)
 * - Primary CTA (Hire Me)
 * - Responsive navigation (desktop + mobile)
 * - Scroll-based UI behavior (sticky, hide-on-scroll)
 *
 * ARCHITECTURE ROLE:
 * - Acts as a "Layout-level Component"
 * - Used inside: `/layouts/MainLayout.jsx`
 * - Consumes config from: `/constants/navigation.js`
 *
 * DEPENDENCIES:
 * - react-router-dom → routing (NavLink, Link, useLocation)
 * - react-icons → UI icons
 * - navigation.js → centralized navigation config
 * - navbar.css → component-specific styling
 * - slide-Down-animations.css → animation system
 *
 * STATE MANAGEMENT:
 * - menuOpen → controls mobile menu visibility
 * - activeHeader → applies background + blur on scroll
 * - hideHeader → hides navbar when scrolling down
 *
 * SCROLL ENGINE (Performance Optimized):
 * - Uses requestAnimationFrame (RAF) to throttle scroll updates
 * - Prevents unnecessary re-renders
 * - Uses `passive: true` for better scroll performance
 *
 * UX FEATURES:
 * - Sticky header with blur effect
 * - Auto-hide on downward scroll
 * - Active route highlighting
 * - Animated underline on hover
 * - Mobile dropdown with animation
 * - CTA button with hover/scale interaction
 *
 * ACCESSIBILITY:
 * - aria-label + aria-expanded for menu button
 * - Semantic navigation structure
 *
 * SCALABILITY:
 * - Navigation items are NOT hardcoded (comes from NAV_LINKS)
 * - Easily extendable for:
 *    - Role-based navigation
 *    - Dynamic API-driven menus
 *
 * KNOWN EXTENSIONS (Future):
 * - Add auth-aware navigation (login/logout)
 * - Add notification system
 *
 *
 * RELATED FILES:
 * - /layouts/MainLayout.jsx            -> mounts Navbar
 * - /features/shared/data/navigationData.js           -> navigation config
 * - /components/common/Footer.jsx      -> shares navigation links
 * - /styles/slide-Down-animations.css  -> animation system
 *
 */

import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navigationData } from "@/features/shared/data/navigationData"; 
import "@/styles/slide-Down-animations.css";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const lastScroll = useRef(0);
  const menuRef = useRef(null);
  const location = useLocation();

  // ==============================
  // Scroll Behavior
  // ==============================
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Throttle scroll updates using requestAnimationFrame for better performance
      if (ticking) return;

      // Use requestAnimationFrame to batch DOM updates and prevent jank on scroll
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        setActiveHeader(currentScroll > 60);
        setHideHeader(
          currentScroll > lastScroll.current && currentScroll > 200
        );

        lastScroll.current = currentScroll;
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==============================
  // Close menu on route change
  // ==============================
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // ==============================
  // Close on outside click
  // ==============================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500
      ${activeHeader ? "bg-black/80 backdrop-blur border-b border-white/10 shadow-lg" : ""}
      ${hideHeader ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={navigationData.brand.logo}
            alt="Yogesh Lilake Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full object-cover shadow-md"
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide gradient-text whitespace-nowrap">
            {navigationData.brand.name}
          </span>
        </Link>

        {/* NAV (DESKTOP) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-4 lg:gap-6 xl:gap-8">
          {navigationData.links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `group relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300
                ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CTA */}
          <Link
            to={navigationData.cta.path}
            className="hidden md:inline-block bg-gradient-to-r from-red-600 via-red-400 to-orange-400 px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base rounded-md text-black font-semibold btn-glow hover:scale-110 active:scale-95 transition-all duration-300"
          >
            {navigationData.cta.label}
          </Link>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#0b0b0b] border-t border-white/10 px-6 py-4 animate-slideDown"
        >
          <nav className="flex flex-col gap-4">
            {navigationData.links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-red-400"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to={navigationData.cta.path}
            className="mt-6 block w-full text-center bg-gradient-to-r from-red-600 via-red-400 to-orange-400 px-6 py-3 rounded-md text-black font-semibold hover:scale-105 transition"
          >
            {navigationData.cta.label}
          </Link>
        </div>
      )}
    </header>
  );
}