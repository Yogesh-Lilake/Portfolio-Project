/**
 * HOME ABOUT DATA CONFIG
 * =============================
 *
 * PURPOSE:
 * - Decouple content from UI
 * - Enable flexible text formatting
 * - Future CMS compatibility
 */

export const homeAboutData = {
  title: "About Me",

  content: [
    { text: "I’m a passionate " },

    {
      text: "Full Stack Developer",
      highlight: "primary",
    },

    { text: " with experience in " },

    {
      text: "PHP, MySQL, JavaScript, Tailwind, and Android Development",
      highlight: "accent",
    },

    {
      text: ". I love solving complex problems, designing scalable systems, and building clean user experiences. With strong foundations in ",
    },

    {
      text: "DSA, Java, and API integration",
      highlight: "primary",
    },

    {
      text: ", I bring both engineering precision and creative flair to every project.",
    },
  ],

  ui: {
    background: "#111827",
    textAlign: "center",
    maxWidth: "3xl",
  },
};