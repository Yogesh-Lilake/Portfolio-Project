import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const lastScroll = useRef(0);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Notes", path: "/notes" },
    { label: "Contact", path: "/contact" },
  ];

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      setActiveHeader(currentScroll > 60);

      if (currentScroll > lastScroll.current && currentScroll > 200) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500 ease-out
      ${activeHeader ? "bg-black/80 backdrop-blur border-b border-white/10 shadow-lg" : ""}
      ${hideHeader ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-3 flex items-center justify-between">

        {/* LOGO (re-animates on route change) */}
        <div
          key={location.pathname}
          className="flex items-center gap-3 min-w-0 animate-fadeInLeft"
        >
          <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm sm:text-base md:text-lg">
            YL
          </div>

          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide gradient-text whitespace-nowrap">
            Yogesh Lilake
          </span>
        </div>

        {/* NAV (DESKTOP) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `group relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300
                ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
              }
            >
              {link.label}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300
                ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:inline-block bg-gradient-to-r from-red-600 via-red-400 to-orange-400 px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base rounded-md text-black font-semibold btn-glow hover:scale-110 active:scale-95 transition-all duration-300"
          >
            Hire Me
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden hover:text-red-400 text-2xl transition-all duration-300 hover:rotate-90"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setMenuOpen(true)}
          >
            {menuOpen ? (
              <HiOutlineX className="transition-all duration-300 scale-110" />
            ) : (
              <HiOutlineMenu className="transition-all duration-300 hover:scale-110" />
              )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#0b0b0b] border-t border-white/10 px-6 py-4 animate-slideDown"
          onMouseLeave={() =>
            window.innerWidth > 768 && setMenuOpen(false)
          }
        >
          <nav className="flex flex-col gap-4 text-base">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 0.08}s` }}
                className={({ isActive }) =>
                  `group relative animate-fadeUp pb-2 transition duration-300
                  ${
                    isActive
                      ? "text-red-400"
                      : "text-gray-300 hover:text-red-400"
                  }`
                }
              >
                {link.label}

                {/* Animated underline (mobile) */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* BIG CTA */}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block w-full text-center bg-gradient-to-r from-red-600 via-red-400 to-orange-400 px-6 py-3 rounded-md text-black font-semibold hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}