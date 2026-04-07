import { useEffect } from "react";
import "@/styles/home.css";

import LottieModule from "lottie-react";
import Hero from "@/assets/lottie/hero.json";
import Hand from "@/assets/lottie/waving-hand.json";

import Project from "@/assets/projects/project.png";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Lottie = LottieModule.default;

export default function Home() {
  useEffect(() => {
    // ===== Reveal Animations =====
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    // ===== Parallax =====
    if (window.innerWidth > 768) {
      const handleScroll = () => {
        const y = window.scrollY * 0.3;
        const bg = document.querySelector(".parallax-bg");
        if (bg) bg.style.backgroundPosition = `center ${y}px`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // ===== Skills Data =====
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
        {/* Lottie Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="scale-90 sm:scale-100">
            <Lottie animationData={Hero} loop />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-accent reveal">
  
            {/* TEXT */}
            <span className="text-center leading-tight">
              Hi, I'm Yogesh
            </span>

            {/* HAND */}
            <span className="max-[400px]:hidden w-8 sm:w-14 md:w-20">
              <Lottie animationData={Hand} loop />
            </span>

          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 reveal">
            Full Stack Developer | Android Developer | Problem Solver
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 reveal">
            I build modern, responsive, and high-performance web applications
            using React, Tailwind CSS, and clean UI principles.
          </p>

          <div className="flex flex-wrap justify-center gap-4 reveal">
            <a href="/projects">
              <button className="bg-accent text-darkbg px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
                View Projects
              </button>
            </a>

            <button className="border border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-darkbg transition">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-4 sm:px-10 lg:px-20 text-center bg-[#111827] reveal-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-accent">
          About Me
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
          I’m a passionate{" "}
          <span className="text-white font-semibold">
            Full Stack Developer
          </span>{" "}
          with experience in{" "}
          <span className="text-accent">
            PHP, MySQL, JavaScript, Tailwind, and Android Development
          </span>
          . I love solving complex problems, designing scalable systems, and
          building clean user experiences. With strong foundations in{" "}
          <span className="font-semibold">
            DSA, Java, and API integration
          </span>
          , I bring both engineering precision and creative flair to every
          project.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-20 px-4 sm:px-10 lg:px-20 text-center reveal-right">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-accent">
            Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-4 bg-[#1E293B] rounded-xl hover:bg-accent hover:text-darkbg transition transform hover:scale-105 flex flex-col items-center gap-2"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 group-hover:rotate-12 transition">
                  {skill.icon}
                </div>

                <h4 className="font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 px-4 sm:px-10 lg:px-20 bg-[#111827] reveal-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-accent">
          Featured Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-[#1E293B] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={Project}
                alt="project"
                className="aspect-video w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Project {item}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  A modern web application built with React and Tailwind.
                </p>

                <a href="/projects" >
                  <button className="text-accent hover:underline font-semibold">
                    View →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/projects" >
            <button className="border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-darkbg transition">
              See All Projects
            </button>
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-4 sm:px-10 lg:px-20 text-center reveal-right">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-accent">
          Let’s Build Something Great
        </h3>

        <p className="text-gray-300 mb-10 max-w-[46rem] mx-auto text-base sm:text-lg">
          I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Let’s connect and bring your ideas to life.
        </p>

        <a href="/contact">
          <button className="bg-accent text-darkbg px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
            Get In Touch
          </button>
        </a>
      </section>
    </>
  );
}