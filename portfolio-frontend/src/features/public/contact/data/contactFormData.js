/**
 * CONTACT FORM DATA SCHEMA
 * ==================================
 *
 * PURPOSE:
 * - Defines structure of contact form
 *
 * FEATURES:
 * - Dynamic field rendering
 * - Validation metadata
 * - UI labels & placeholders
 *
 * DESIGN:
 * - Schema-driven form system
 *
 * EXTENSIBILITY:
 * - Add new fields without UI changes
 * - Integrate with backend schema
 *
 * ==========================================================
 */

export const contactFormData = {
  title: "Send Message",

  fields: [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      autoComplete: "email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Write your message...",
      required: true,
      rows: 5,
    },
  ],

  submitButton: {
    text: "Send Message",
    loadingText: "Sending...",
    icon: "✈️",
  },

  // FUTURE READY (OPTIONAL)
  messages: {
    success: "Message sent successfully",
    error: "Something went wrong. Try again.",
    required: "This field is required",
  },
};