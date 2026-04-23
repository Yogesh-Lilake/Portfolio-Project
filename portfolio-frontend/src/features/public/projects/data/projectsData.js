/**
 * ==========================================================
 * PROJECTS DATA (STATIC DATA SOURCE / MOCK BACKEND)
 * ==========================================================
 *
 * PURPOSE:
 * - Provides project data for development and UI rendering
 * - Acts as temporary data source before API integration
 *
 * LAYER:
 * - DATA SOURCE (RAW / UNTRUSTED INPUT)
 *
 * USED IN:
 * - project.service.js -> normalization layer
 *
 * IMPORTANT FLOW:
 * projectsData -> service -> hooks -> UI
 *
 * WHY THIS EXISTS:
 * - Enables rapid development without backend dependency
 * - Simulates real-world API responses
 *
 * DATA CONTRACT:
 * - Each project should contain:
 *   id, slug, title, description, tech, etc.
 *
 * CRITICAL RULE:
 *  UI components must NEVER use this directly
 *  This data is NOT guaranteed to be safe
 *
 * Always use:
 * project.service.js -> for normalized data
 *
 * KNOWN LIMITATIONS:
 * - image can be empty or invalid
 * - links may be missing
 *
 * SERVICE LAYER RESPONSIBILITY:
 * - Add fallback image
 * - Ensure gallery validity
 * - Clean data before UI usage
 */

import projectImage from "@/assets/projects/project.png";

export const projectsData = [
  {
    id: 1,
    slug: "footwear-ecommerce",
    title: "Footwear E-Commerce Website",
    tagline: "Scalable full-stack commerce platform",

    description:
      "A full-stack e-commerce platform with secure payments, admin dashboard, and product management.",

    problem:
      "Small businesses struggle to manage online sales, payments, and inventory in one unified system.",

    solution:
      "Built a scalable PHP + MySQL platform with Razorpay integration, optimized queries, and modular admin system.",

    features: [
      "Secure authentication & authorization",
      "Razorpay payment integration",
      "Admin dashboard with analytics",
      "Product & inventory management",
      "Order tracking system",
    ],

    challenges:
      "Handling payment failures and maintaining transactional consistency was complex. Solved using retry mechanisms and backend validation.",

    image: "",

    gallery: [projectImage, projectImage],

    category: "web",

    tech: [
      { name: "PHP", color: "bg-indigo-600" },
      { name: "MySQL", color: "bg-blue-600" },
      { name: "Tailwind", color: "bg-cyan-500" },
      { name: "JavaScript", color: "bg-yellow-500 text-black" },
    ],

    links: {
      live: "http://localhost:5173/",
      github: "http://localhost:5173/projects/footwear-ecommerce",
    },

    featured: true,
    createdAt: "2025-01-10",
  },

  {
    id: 2,
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    tagline: "Modern scalable developer portfolio",

    description:
      "A responsive portfolio built using modular PHP MVC architecture.",

    problem:
      "Developers need a scalable and customizable platform to showcase projects effectively.",

    solution:
      "Designed a modular MVC system with reusable components and optimized rendering.",

    features: [
      "Dynamic project system",
      "Reusable UI components",
      "SEO-friendly structure",
      "Responsive design",
    ],

    challenges:
      "Maintaining clean separation between logic and UI required careful architectural decisions.",

    image: projectImage,
    gallery: [projectImage, projectImage],

    category: "web",

    tech: [
      { name: "HTML", color: "bg-orange-500" },
      { name: "Tailwind", color: "bg-cyan-500" },
      { name: "JavaScript", color: "bg-yellow-500 text-black" },
      { name: "PHP", color: "bg-indigo-600" },
    ],

    links: { live: "", github: "" },

    featured: true,
    createdAt: "2025-02-15",
  },

  {
    id: 3,
    slug: "android-expense-tracker",
    title: "Android Expense Tracker",
    tagline: "Smart personal finance management app",

    description:
      "Android app to track daily expenses with analytics dashboard.",

    problem:
      "Users lack simple tools to track daily spending habits effectively.",

    solution:
      "Built a lightweight Android app using SQLite with category-based tracking and insights.",

    features: [
      "Expense categorization",
      "Analytics dashboard",
      "Offline storage using SQLite",
    ],

    challenges:
      "Optimizing database queries for fast retrieval on low-end devices.",

    image: projectImage,
    gallery: [projectImage],

    category: "mobile",

    tech: [
      { name: "Java", color: "bg-red-600" },
      { name: "SQLite", color: "bg-blue-500" },
      { name: "Android Studio", color: "bg-green-600" },
    ],

    links: { live: "", github: "" },

    featured: false,
    createdAt: "2024-12-05",
  },

  {
  id: 4,
  slug: "saas-analytics-dashboard",
  title: "SaaS Analytics Dashboard",
  tagline: "Data-driven business insights platform",

  description:
    "A modern analytics dashboard for SaaS businesses with real-time metrics, charts, and performance insights.",

  problem:
    "Businesses struggle to visualize and interpret large datasets efficiently in real-time.",

  solution:
    "Built a scalable dashboard using React and charting libraries with optimized data fetching and caching.",

  features: [
    "Real-time data visualization",
    "Interactive charts & filters",
    "User authentication & roles",
    "Performance optimized API calls",
  ],

  challenges:
    "Handling large datasets without UI lag required implementing memoization and efficient state management.",

  image: projectImage,
  gallery: [projectImage, projectImage],

  category: "web",

  tech: [
    { name: "React", color: "bg-blue-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Chart.js", color: "bg-purple-500" },
  ],

  links: { live: "", github: "" },

  featured: false,
  createdAt: "2025-04-10",
},

{
  id: 5,
  slug: "realtime-collaboration-tool",
  title: "Realtime Collaboration Tool",
  tagline: "Live team collaboration platform",

  description:
    "A real-time collaboration app enabling teams to chat, share updates, and work together seamlessly.",

  problem:
    "Remote teams need reliable tools for real-time communication and collaboration.",

  solution:
    "Developed a WebSocket-based system using Socket.io for instant communication and updates.",

  features: [
    "Real-time messaging",
    "Online/offline user status",
    "Typing indicators",
    "Private & group chats",
  ],

  challenges:
    "Managing socket connections and ensuring scalability across multiple users required careful backend design.",

  image: projectImage,
  gallery: [projectImage, projectImage],

  category: "web",

  tech: [
    { name: "React", color: "bg-blue-400" },
    { name: "Socket.io", color: "bg-gray-700" },
    { name: "Express", color: "bg-gray-600" },
  ],

  links: { live: "", github: "" },

  featured: false,
  createdAt: "2025-04-18",
},

{
  id: 6,
  slug: "ai-content-generator",
  title: "AI Content Generator",
  tagline: "AI-powered text generation tool",

  description:
    "A web application that generates content using AI APIs with customizable prompts and outputs.",

  problem:
    "Content creation is time-consuming and requires automation for scalability.",

  solution:
    "Integrated AI APIs with a clean UI to generate, edit, and manage content efficiently.",

  features: [
    "AI-powered text generation",
    "Custom prompt system",
    "Content history management",
    "Export & copy features",
  ],

  challenges:
    "Handling API rate limits and optimizing response times for better user experience.",

  image: projectImage,
  gallery: [projectImage, projectImage],

  category: "web",

  tech: [
    { name: "React", color: "bg-blue-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "OpenAI API", color: "bg-black" },
  ],

  links: { live: "", github: "" },

  featured: true,
  createdAt: "2025-04-25",
}
]