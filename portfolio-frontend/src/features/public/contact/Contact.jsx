/**
 * ==========================================================
 * CONTACT PAGE (PUBLIC ROUTE — ORCHESTRATOR)
 * ==========================================================
 *
 * PURPOSE:
 * - Entry point for the Contact page
 * - Composes all contact-related UI sections
 *
 * ARCHITECTURE ROLE:
 * - Page-level orchestrator (NO business logic)
 * - Handles layout composition only
 *
 * LOADING STRATEGY:
 * - Uses React.lazy + Suspense
 * - Enables code-splitting for performance
 * - Reduces initial bundle size
 *
 * SECTIONS:
 * - ContactHero → page introduction
 * - ContactForm → user input / interaction
 * - ContactInfo → static contact + socials
 * - ContactMap → geographic context
 *
 * LAYOUT:
 * - Responsive grid system
 * - Desktop: split layout (form + info)
 * - Mobile: stacked layout
 *
 * DESIGN PRINCIPLES:
 * - Separation of concerns
 * - Component isolation
 * - Lazy loading for scalability
 *
 * DO NOT:
 * - Do NOT add API calls here
 * - Do NOT add business logic
 * - Do NOT mutate child behavior
 *
 * ==========================================================
 */

import { lazy, Suspense } from "react"; 

const ContactHero = lazy(() => import("./components/ContactHero")); 
const ContactForm = lazy(() => import("./components/ContactForm")); 
const ContactInfo = lazy(() => import("./components/ContactInfo")); 
const ContactMap = lazy(() => import("./components/ContactMap")); 

export default function Contact() { 
  return ( 
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}> 
      <ContactHero /> 
      
      {/* MAIN SECTION */} 
      <section className="bg-slate-900 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 rounded-t-[2rem]"> 
        <div className="max-w-7xl mx-auto"> 
          
          {/* GRID */} 
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 xl:gap-20 items-start"> 
            <ContactForm /> 
            <ContactInfo /> 
          </div> 
          
          {/* MAP */} 
          <div className="mt-16 lg:mt-24"> 
            <ContactMap /> 
          </div> 
        </div> 
      </section> 
    </Suspense> 
  ) 
}