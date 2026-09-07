import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    period: "Production Engineering",
    role: "Frontend Developer",
    type: "Full-Time",
    location: "Mansoura, Egypt",
    overview:
      "Engineering modern React and Next.js web applications, scalable design systems, and custom e-commerce storefronts across Salla (Twig), Shopify (Liquid), and Zid. Focused on intuitive UI/UX design, clean architecture, and robust TypeScript code.",
    responsibilities: [
      "Building modern frontend architectures using Next.js App Router, React 19, and Tailwind CSS.",
      "Developing bespoke Salla themes utilizing Salla CLI, Twig engine, and Twilight UI components.",
      "Customizing Shopify storefronts using modern Liquid sections, AJAX cart drawers, and Metafield schemas.",
      "Developing custom layouts and theme integrations for Zid e-commerce platform.",
      "Implementing state management with Zustand and server-state caching via TanStack Query.",
      "Crafting smooth micro-interactions, spring animations, and tactile UI feedback with Framer Motion.",
      "Ensuring accessibility (WCAG 2.1 AA) and seamless bi-directional RTL/LTR support for Arab & international users.",
    ],
    achievements: [
      "Engineered high-converting e-commerce storefronts resulting in instant page transitions and reduced cart abandonment.",
      "Cut client-side JavaScript bundles by over 50% by leveraging React Server Components (RSC) and dynamic imports.",
      "Built standardized, reusable UI component libraries for faster and more reliable feature rollouts.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Salla", "Shopify", "Zid"],
  },
  {
    period: "Modern Web & E-Commerce",
    role: "Frontend Developer",
    type: "Frontend Engineering",
    location: "Mansoura, Egypt",
    overview:
      "Developed responsive web applications, interactive portals, and custom e-commerce templates using modern JavaScript, React, and modular SCSS.",
    responsibilities: [
      "Developing custom storefront layouts and theme templates on Salla and Shopify.",
      "Writing clean, modular Twig and Liquid templates with reusable partials.",
      "Building interactive React modules, forms with validation, and integrating RESTful APIs via Axios.",
      "Translating Figma and Adobe XD prototypes into pixel-perfect, responsive web pages.",
      "Auditing and fixing cross-browser styling issues and responsive layout shifts.",
    ],
    achievements: [
      "Successfully launched multiple client storefronts with high customer satisfaction and rapid loading times.",
      "Developed responsive, accessible checkout flows and slide-out cart drawers.",
    ],
    technologies: ["React.js", "TypeScript", "Salla", "Twig", "Shopify Liquid", "SCSS", "REST APIs", "Git"],
  },
  {
    period: "Foundational Web Development",
    role: "Frontend Web Developer",
    type: "Web Development",
    location: "Mansoura, Egypt",
    overview:
      "Crafted responsive websites, landing pages, and interactive UI components with modern HTML5, CSS3, and JavaScript.",
    responsibilities: [
      "Building mobile-first layouts using CSS Grid, Flexbox, and CSS custom properties.",
      "Creating dynamic client-side interactions and animations with vanilla JavaScript and CSS.",
      "Collaborating on Git workflows and deploying updates to hosting platforms.",
      "Optimizing images, fonts, and assets for fast loading across 3G/4G networks.",
    ],
    achievements: [
      "Delivered 20+ responsive web projects for businesses across diverse sectors.",
      "Mastered modern JavaScript ES6+, laying the groundwork for advanced React and Next.js engineering.",
    ],
    technologies: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3 / Sass", "Bootstrap", "REST APIs", "Git"],
  },
];
