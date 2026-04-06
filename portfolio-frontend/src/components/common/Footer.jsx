import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  // Scroll animation (orb parallax)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY * 0.2;
      document.querySelectorAll(".orb").forEach((orb, i) => {
        orb.style.transform = `translateY(${scrollY * (i + 1) * 0.2}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="text-color font-medium mt-24 border-t border-[#ffffff08] relative">

      {/* Background Effects */}
      <div className="footer-bg"></div>
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="orb"></div>
      <div className="footer-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 
                      grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-start">

        {/* BRAND */}
        <div className="space-y-3 animate-[fade-up_0.6s_ease-out]">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide brand-hover">
            Yogesh Lilake
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Building modern, responsive and high-performance web applications 
            with clean UI and smooth user experience.
          </p>

          <div className="text-gray-500 text-sm space-y-1 pt-2">
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaLocationDot className="text-red-500" />
              Mumbai, India
            </p>

            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <MdEmail className="text-red-500" />
              yogesh@email.com
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-2 animate-[fade-up_0.8s_ease-out]">
          <h3 className="text-white font-semibold mb-3 text-lg w-fit pb-1 border-b border-[rgba(211,47,47,0.4)]">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-1">
            <a href="/" className="hover:text-accent">Home</a>
            <a href="/about" className="hover:text-accent">About</a>
            <a href="/projects" className="hover:text-accent">Projects</a>
            <a href="/notes" className="hover:text-accent">Notes</a>
            <a href="/contact" className="hover:text-accent">Contact</a>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="animate-[fade-up_1s_ease-out]">
          <h3 className="text-white font-semibold mb-3 text-lg w-fit pb-1 border-b border-[rgba(211,47,47,0.4)]">
            Connect
          </h3>

          <div className="flex flex-wrap gap-5 mt-3">
            <a href="#" className="text-gray-400 text-2xl social-icon">
              <FaGithub size={22} className="text-gray-400 hover:text-red-500" />
            </a>
            <a href="#" className="text-gray-400 text-2xl social-icon">
              <FaLinkedin size={22} className="text-gray-400 hover:text-red-500" />
            </a>
            <a href="#" className="text-gray-400 text-2xl social-icon">
              <FaTwitter size={22} className="text-gray-400 hover:text-red-500" />
            </a>
            <a href="#" className="text-gray-400 text-2xl social-icon">
              <FaInstagram size={22} className="text-gray-400 hover:text-red-500" />
            </a>
          </div>
          {/* SMALL TEXT */}
          <p className="text-gray-500 text-sm pt-3 max-w-xs">
            Follow me for updates on projects, coding tips and development journey.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#222] relative z-10"></div>

      {/* Bottom Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 
                      flex flex-col md:flex-row justify-between items-center text-sm 
                      sm:text-base text-gray-400 text-center gap-2">

        <p className="animate-[fade-up_1.2s_ease-out]">
          © {year} Yogesh Portfolio. All Rights Reserved.
        </p>

        <p className="animate-[fade-up_1.4s_ease-out]">
          Designed & Developed by{" "}
          <span className="name-glow text-accent">
            Yogesh Lilake
          </span>
        </p>
      </div>
    </footer>
  );
}