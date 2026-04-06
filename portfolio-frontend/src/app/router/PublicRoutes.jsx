import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Projects from "@/pages/public/Projects";
import ProjectDetails from "@/pages/public/ProjectDetails";
import Contact from "@/pages/public/Contact";
import NotFound from "@/pages/public/NotFound";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}