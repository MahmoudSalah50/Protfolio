import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    period: "Production Engineering",
    role: "Frontend Developer",
    type: "Full-Time",
    location: "Mansoura, Egypt",
    overview:
      "Engineering high-performance React and Next.js web applications, responsive design systems, and modern digital platforms. Focused on intuitive UI/UX design, clean modular architecture, sub-second page loads, and robust TypeScript code.",
    responsibilities: [
      "Building modern frontend architectures using Next.js App Router, React 19, and Tailwind CSS.",
      "Developing accessible, type-safe UI component libraries with Radix primitives and Tailwind CSS.",
      "Architecting state management with Zustand and server-state caching via TanStack Query.",
      "Crafting smooth micro-interactions, spring animations, and tactile UI feedback with Framer Motion.",
      "Auditing and optimizing Core Web Vitals (LCP < 0.8s, CLS 0, INP < 50ms) for high-traffic applications.",
      "Ensuring accessibility (WCAG 2.1 AA) and seamless bi-directional RTL/LTR responsive layouts.",
    ],
    achievements: [
      "Engineered high-performance web applications resulting in instant transitions and high customer satisfaction.",
      "Cut client-side JavaScript bundles by over 50% by leveraging React Server Components (RSC) and dynamic imports.",
      "Built standardized, reusable UI component libraries for faster, more reliable feature rollouts.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Framer Motion", "Git"],
  },
  {
    period: "Modern Web Applications",
    role: "Frontend Developer",
    type: "Frontend Engineering",
    location: "Mansoura, Egypt",
    overview:
      "Developed responsive web applications, interactive dashboards, and client portals using modern JavaScript, React, and modular styling architectures.",
    responsibilities: [
      "Developing custom interactive web interfaces and responsive layouts from Figma designs.",
      "Building modular React components, forms with validation (React Hook Form + Zod), and REST API integrations.",
      "Implementing optimistic UI updates and real-time client state synchronization.",
      "Translating Figma prototypes into pixel-perfect, accessible web pages.",
      "Auditing and resolving cross-browser styling nuances and responsive layout shifts.",
    ],
    achievements: [
      "Successfully launched multiple client applications with 100% responsive fidelity and rapid load times.",
      "Developed responsive, accessible checkout flows, slide-out drawers, and interactive data filters.",
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Zod", "Git", "Framer Motion"],
  },
  {
    period: "Foundational Web Development",
    role: "Frontend Web Developer",
    type: "Web Development",
    location: "Mansoura, Egypt",
    overview:
      "Crafted responsive websites, landing pages, and interactive UI components with modern HTML5, CSS3, and modern JavaScript.",
    responsibilities: [
      "Building mobile-first layouts using CSS Grid, Flexbox, and CSS custom properties.",
      "Creating dynamic client-side interactions and animations with vanilla JavaScript and modern CSS.",
      "Collaborating on Git workflows and deploying updates to hosting platforms.",
      "Optimizing images, fonts, and assets for fast loading across 3G/4G mobile networks.",
    ],
    achievements: [
      "Delivered 20+ responsive web projects for businesses across diverse sectors.",
      "Mastered modern JavaScript ES6+, laying the groundwork for advanced React and Next.js engineering.",
    ],
    technologies: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3 / Sass", "Bootstrap", "REST APIs", "Git"],
  },
];
