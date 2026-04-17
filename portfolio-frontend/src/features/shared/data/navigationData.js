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
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Notes", path: "/notes" },
    { label: "Contact", path: "/contact" },
  ],

  cta: {
    label: "Hire Me",
    path: "/contact",
  },
};