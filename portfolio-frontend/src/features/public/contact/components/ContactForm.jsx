/**
 * ==========================================================
 * CONTACT FORM (UI LAYER — CONTROLLED COMPONENT)
 * ==========================================================
 *
 * PURPOSE:
 * - Collect user input (name, email, message)
 * - Delegate logic to custom hook
 *
 * ARCHITECTURE:
 * - UI Layer ONLY
 * - Business logic handled by useContactForm()
 *
 * RESPONSIBILITIES:
 * - Render form fields dynamically
 * - Bind inputs to state
 * - Handle submission UI
 *
 * DATA SOURCE:
 * - contactFormData -> schema-driven form config
 *
 * LOGIC LAYER:
 * - useContactForm():
 *    - state management
 *    - validation
 *    - submission
 *
 * ANIMATION:
 * - runContactFormAnimation()
 * - Ref-based (no DOM queries)
 *
 * ACCESSIBILITY:
 * - label ↔ input association via htmlFor + id
 * - supports keyboard navigation
 *
 * SCALABILITY:
 * - Add fields without changing JSX
 * - Supports CMS-driven forms
 *
 * DO NOT:
 * - Do NOT handle API calls here
 * - Do NOT add validation logic here
 *
 * ==========================================================
 */

import { useEffect, useRef } from "react";
import { contactFormData } from "../data/contactFormData";
import { runContactFormAnimation } from "../animations/contact.form.animation";
import { useContactForm } from "../hooks/useContactForm";

export default function ContactForm() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const fieldRefs = useRef([]);
  const buttonRef = useRef(null);

  // Reset refs each render
  fieldRefs.current = [];

  // USE HOOK (Logic `useContactForm`)
  const { formData, loading, handleChange, handleSubmit } = useContactForm(
    contactFormData.fields,
    contactFormData.messages,
  );

  useEffect(() => {
    const cleanup = runContactFormAnimation({
      section: sectionRef.current,
      title: titleRef.current,
      fields: fieldRefs.current,
      button: buttonRef.current,
    });

    return cleanup;
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-slate-800 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-700 shadow-xl"
    >
      <h2
        ref={titleRef}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-red-500"
      >
        {contactFormData.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {contactFormData.fields.map((field) => {
          const base =
            "w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.3)] outline-none transition";

          const inputId = `contact-${field.name}`;

          return (
            <div key={field.name}>
              <label
                htmlFor={inputId}
                className="block text-sm mb-2 text-gray-300"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={inputId}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={field.rows || 4}
                  placeholder={field.placeholder}
                  className={`${base} resize-none`}
                />
              ) : (
                <input
                  id={inputId}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  className={base}
                />
              )}
            </div>
          );
        })}

        {/* Button */}
        <button
          ref={buttonRef}
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 py-3.5 rounded-lg font-semibold transition hover:scale-[1.02]"
        >
          {loading
            ? `${contactFormData.submitButton.loadingText}`
            : `${contactFormData.submitButton.text} ${contactFormData.submitButton.icon}
        `}
        </button>
      </form>
    </div>
  );
}
