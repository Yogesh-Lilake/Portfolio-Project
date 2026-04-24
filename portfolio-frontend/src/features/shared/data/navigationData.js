/**
 * This file contains the navigation data for the portfolio website, 
 * including the brand information, navigation links, and call-to-action (CTA) details. 
 * The data is structured in a way that allows for easy integration into the navigation component of the application.
 */

import logo from "@/assets/images/logo.png";

export const navigationData = {
  brand: {
    name: "Yogesh Lilake",
    logo: logo,
  },

  links: [
    { label: "Home", path: "/", status: "active" },
    { label: "About", path: "/about", status: "active" },
    { label: "Projects", path: "/projects", status: "active" },
    { label: "Notes", path: "/notes", status: "coming-soon" },
    { label: "Contact", path: "/contact", status: "active" },
  ],

  cta: {
    label: "Hire Me",
    path: "/contact",
  },
};