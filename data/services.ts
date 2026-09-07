import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "frontend-development",
    title: "Modern Frontend Development",
    tag: "Next.js & React Ecosystem",
    description:
      "End-to-end engineering of responsive, production-ready web applications using Next.js App Router, React 19, TypeScript, and state-of-the-art libraries.",
    deliverables: [
      "Server-side rendering (SSR) & Static generation (SSG/ISR)",
      "Type-safe TypeScript codebase with zero runtime bugs",
      "Dynamic data fetching & cache management via TanStack Query",
      "Smooth micro-interactions and transitions with Framer Motion",
    ],
    icon: "LayoutCode",
  },
  {
    id: "ecommerce-engineering",
    title: "E-Commerce Development (Salla & Shopify)",
    tag: "High-Conversion Storefronts",
    description:
      "Bespoke storefront engineering on Salla (Twig) and Shopify (Liquid). Optimized for high conversion, instant cart drawers, and frictionless mobile checkout.",
    deliverables: [
      "Custom Salla themes with Twig templates & Twilight UI integration",
      "Custom Shopify themes with Liquid sections & Section Rendering API",
      "Arabic RTL localization with typography harmony (Cairo, Tajawal)",
      "Optimistic cart drawers, variant pickers & checkout optimizations",
    ],
    icon: "ShoppingBag",
  },
  {
    id: "ui-engineering",
    title: "UI Engineering & Design Systems",
    tag: "Accessible & Scalable UI",
    description:
      "Crafting unified design systems, accessible UI primitive suites (WCAG 2.1 AA), responsive fluid layouts, and flawless dark/light themes that scale effortlessly.",
    deliverables: [
      "Design token architecture with Tailwind CSS & CSS custom properties",
      "Headless accessible components with Radix UI primitives",
      "Fluid responsive breakpoints for mobile, tablet, and ultra-wide screens",
      "Smooth dark/light mode switching with zero flash of unstyled content",
    ],
    icon: "Palette",
  },
  {
    id: "motion-interactive-ux",
    title: "Micro-Interactions & Motion Design",
    tag: "Fluid 60FPS Framer Motion & Lenis",
    description:
      "Crafting engaging, tactile web interactions with fluid Framer Motion animations, Lenis smooth scrolling, and dynamic micro-feedback.",
    deliverables: [
      "Layout-morphing animations and fluid page transitions using Framer Motion",
      "Inertia-based smooth scrolling physics integrated with Lenis",
      "Interactive micro-feedback for navigation, drawers, modals, and state switches",
      "GPU-accelerated transforms ensuring stutter-free 60FPS across all viewports",
    ],
    icon: "Sparkles",
  },
  {
    id: "frontend-architecture",
    title: "Frontend Architecture & Code Quality",
    tag: "Clean, Maintainable Code",
    description:
      "Structuring modular, maintainable frontends with clear separation of concerns, robust TypeScript contracts, and scalable directory architectures.",
    deliverables: [
      "Domain-driven folder structures & decoupled UI/logic layers",
      "Strict TypeScript typing, Zod schema validation & ESLint hygiene",
      "Clean API client abstractions with unified error handling",
      "Thorough documentation and reusable component guidelines",
    ],
    icon: "GitFork",
  },
];
