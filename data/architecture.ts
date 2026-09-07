import { ArchitectureLayer } from "@/types";

export const architectureLayers: ArchitectureLayer[] = [
  {
    level: 1,
    name: "Visual & Design Tokens",
    subtitle: "Atomic tokens, typography, colors, and layout foundations",
    components: ["Tailwind Theme Config", "CSS Custom Variables", "Typography Scales", "Fluid Spacing"],
    role: "Ensures visual consistency across all viewports and powers dark/light mode token switching without style recalculation overhead.",
    bestPractices: [
      "Zero ad-hoc magic numbers; all units derived from design tokens",
      "CSS logical properties for RTL/LTR internationalization",
      "Strict contrast ratios exceeding WCAG 2.1 AA benchmarks",
    ],
  },
  {
    level: 2,
    name: "Reusable UI Primitives",
    subtitle: "Headless, accessible, stateless UI component building blocks",
    components: ["Buttons & Badges", "Modal & Drawers", "Form Controls", "Spotlight Cards"],
    role: "Encapsulates accessibility, keyboard interaction, and base variants so feature code remains focused on business logic.",
    bestPractices: [
      "Polymorphic props with strong TypeScript discrimination",
      "WAI-ARIA compliance with automated focus traps and screen-reader labels",
      "Hardware-accelerated CSS transforms for silky 60fps micro-interactions",
    ],
  },
  {
    level: 3,
    name: "Feature Modules & Domain Slices",
    subtitle: "Self-contained business features and composition screens",
    components: ["Product Detail Page", "Cart Drawer", "Checkout Form", "Analytics View"],
    role: "Organizes code by business domain rather than technical type, making features independently testable and relocatable.",
    bestPractices: [
      "Server Components used by default for data fetching and layout scaffolding",
      "Client Components restricted to interactive leaf nodes (buttons, inputs, filters)",
      "Strict feature boundaries with clear public index exports",
    ],
  },
  {
    level: 4,
    name: "State Management & Synchronization",
    subtitle: "Isolated client state vs. declarative server cache",
    components: ["Zustand Store", "TanStack Query Cache", "URL State (Search Params)", "Local Storage Sync"],
    role: "Guarantees predictable unidirectional data flow while preventing state desynchronization and unnecessary re-renders.",
    bestPractices: [
      "Zustand for client-only state (cart drawer, modal visibility, UI theme)",
      "TanStack Query for server-cache, stale-while-revalidate, and optimistic updates",
      "URL search parameters as single source of truth for shareable filters and pagination",
    ],
  },
  {
    level: 5,
    name: "API & Data Integration Boundary",
    subtitle: "Type-safe HTTP requests, validation contracts, and error boundaries",
    components: ["Axios Interceptors", "Zod Runtime Validation", "REST Endpoints", "GraphQL Clients"],
    role: "Protects application runtime from corrupted or unexpected remote payloads by validating schemas at the network boundary.",
    bestPractices: [
      "Zod schema parsing on all external network responses",
      "Unified HTTP error interceptor with toast notifications and automatic retries",
      "Strict TypeScript inference from backend schema definitions",
    ],
  },
  {
    level: 6,
    name: "Platform & Infrastructure Engine",
    subtitle: "Edge CDN, Next.js Server Runtime, Salla & Shopify APIs",
    components: ["Next.js Server Runtime", "Salla REST / Twilight", "Shopify Storefront API", "Vercel Edge Network"],
    role: "Serves cached static pages instantly from the edge while orchestrating secure server-to-server communications.",
    bestPractices: [
      "Sub-second TTFB through edge distribution and stale-while-revalidate caching",
      "Incremental Static Regeneration (ISR) for high-traffic catalog pages",
      "Strict environment variable separation and credential protection",
    ],
  },
];

export const engineeringPrinciples = [
  {
    title: "Clean Architecture & Modularization",
    description: "Every file has a single responsibility. Business logic is detached from UI components, enabling fast refactoring and painless maintenance.",
    icon: "Layers",
  },
  {
    title: "Server-First Rendering Hierarchy",
    description: "Leverage React Server Components (RSC) to reduce client JavaScript payloads. Only hydrate interactive elements that require client state.",
    icon: "Cpu",
  },
  {
    title: "Type Safety & Contract Guardrails",
    description: "Strict TypeScript across all modules paired with runtime Zod schemas eliminates runtime crashes and guarantees reliable DX across teams.",
    icon: "ShieldCheck",
  },
  {
    title: "Performance by Design",
    description: "Core Web Vitals aren't an afterthought. Zero layout shifts, optimized AVIF/WebP images, critical CSS extraction, and sub-100ms INP.",
    icon: "Zap",
  },
];
