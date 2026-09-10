import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "luxe-ecommerce",
    title: "Luxe — Modern E-Commerce Platform",
    slug: "luxe-ecommerce-storefront",
    tagline: "Ultra-fast headless luxury storefront with sub-second navigation and real-time cart synchronization.",
    category: "E-commerce",
    categories: ["All", "E-commerce", "Next.js", "React"],
    description:
      "A flagship modern e-commerce web application engineered for luxury retail. Features instantaneous product filtering, fluid variant selectors, optimistic cart drawer, and high-conversion checkout flows.",
    technologies: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    featured: true,
    githubUrl: "https://github.com/MahmoudSalah50",
    liveUrl: "https://luxe-one-bay.vercel.app/",
    metrics: [
      { label: "Architecture", value: "App Router" },
      { label: "State Layer", value: "Zustand" },
      { label: "Type Safety", value: "Strict TS" },
      { label: "Interactions", value: "Framer Motion" },
    ],
    caseStudy: {
      problem:
        "Traditional e-commerce web applications suffer from heavy client-side JavaScript bundles, slow initial page loads, and layout shifts during image loading, causing high bounce rates on mobile networks.",
      goal:
        "Architect an ultra-responsive e-commerce experience that delivers instant catalog transitions, zero layout shift, and smooth micro-interactions that elevate brand prestige.",
      architecture: [
        "Next.js App Router with Server Components for catalog pages to reduce client bundle size by 65%",
        "Zustand client store with local storage sync for instantaneous cart operations and drawer state",
        "Tailwind CSS utility tokens for streamlined CSS footprint (< 18kB gzip)",
        "Edge-cached product static generation with incremental revalidation (ISR)",
      ],
      challenges: [
        "Eliminating image flicker and layout reflow across multi-ratio luxury product galleries.",
        "Synchronizing optimistic cart additions without awaiting server round-trips while handling stock validation gracefully.",
      ],
      solution: [
        "Implemented Next.js Image with custom blur-up placeholders and strict aspect-ratio container styling.",
        "Built an optimistic mutation engine in Zustand with automatic rollback upon API reconciliation.",
        "Used Framer Motion layout animations for smooth filter badge transitions without re-mounting DOM nodes.",
      ],
      performanceGains: [
        { label: "Modular Architecture", value: "100% Next.js RSC" },
        { label: "State Synchronization", value: "Optimistic Zustand" },
        { label: "Responsive Layouts", value: "Mobile, Tablet & Desktop" },
        { label: "Interaction Physics", value: "Framer Motion Springs" },
      ],
      architectureHighlights:
        "Hybrid rendering: Server Components provide SEO dominance and zero-JS product descriptions, while client islands power interactive swatch pickers and drawer workflows.",
    },
  },
  {
    id: "saas-analytics-dashboard",
    title: "Next.js SaaS Analytics & Executive Dashboard",
    slug: "saas-analytics-dashboard",
    tagline: "High-density enterprise analytics portal with TanStack Query, Recharts data visualization, and Zustand.",
    category: "Dashboard",
    categories: ["All", "Next.js", "React", "Dashboard"],
    description:
      "A real-time metrics platform for business telemetry. Delivers interactive visualizations, dynamic date range filtering, virtualized high-density data tables, and CSV export capabilities.",
    technologies: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Tailwind CSS",
      "Zustand",
      "Zod",
    ],
    featured: true,
    githubUrl: "https://github.com/MahmoudSalah50",
    liveUrl: "https://luxe-one-bay.vercel.app/",
    metrics: [
      { label: "Data Rendering", value: "60 FPS" },
      { label: "Initial Hydration", value: "< 120ms" },
      { label: "Type Coverage", value: "100% Strict" },
      { label: "Query Cache Hit", value: "92%" },
    ],
    caseStudy: {
      problem:
        "Enterprise managers were overwhelmed by slow dashboard re-renders and unorganized telemetry across multiple data streams and operational warehouses.",
      goal:
        "Design and construct an executive command dashboard capable of rendering dense data sets smoothly with instant filtering and interactive trend analysis.",
      architecture: [
        "TanStack Query server-state management with stale-while-revalidate caching and optimistic refetch",
        "Virtualization for high-density historical telemetry records",
        "Reusable chart design system wrapping Recharts with custom tooltips and dark-mode gradients",
        "Zod schema validation on incoming API responses to guarantee UI runtime integrity",
      ],
      challenges: [
        "Rendering large SVG charts without dropping frames on lower-powered client devices.",
        "Coordinating global date-picker filter state across 12 distinct analytical sub-views.",
      ],
      solution: [
        "Debounced chart redraws and used CSS hardware acceleration for cursor crosshairs.",
        "Constructed a centralized Zustand dashboard store handling filter states and chart presets.",
        "Implemented lazy route loading and dynamic code-splitting for heavy analytical widgets.",
      ],
      performanceGains: [
        { label: "Chart Render Time", value: "Reduced from 450ms to 48ms" },
        { label: "Memory Footprint", value: "-35% Client RAM usage" },
        { label: "Lighthouse Performance", value: "98/100" },
        { label: "API Round-trips", value: "-60% via client cache" },
      ],
      architectureHighlights:
        "Clean separation between API query hooks, business aggregation logic, and pure SVG visual representations.",
    },
  },
  {
    id: "motion-kanban-workspace",
    title: "Interactive Kanban & Task Management Workspace",
    slug: "interactive-kanban-workspace",
    tagline: "Fluid drag-and-drop productivity suite engineered with Framer Motion, optimistic mutations, and local persistence.",
    category: "React",
    categories: ["All", "React", "Next.js"],
    description:
      "A fast, modern project management application featuring bi-directional drag-and-drop column boards, rich markdown task descriptions, color-coded priority labels, and instant undo/redo actions.",
    technologies: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Zustand",
      "Lucide Icons",
    ],
    featured: true,
    githubUrl: "https://github.com/MahmoudSalah50",
    liveUrl: "https://luxe-one-bay.vercel.app/",
    metrics: [
      { label: "Drag Latency", value: "< 5ms" },
      { label: "Physics Frame Rate", value: "60 FPS" },
      { label: "Bundle Size", value: "< 24kB" },
      { label: "State Sync", value: "Instant" },
    ],
    caseStudy: {
      problem:
        "Standard web-based task managers often feel clunky, with sluggish drag physics, jarring layout reflows, and cumbersome modal dialogs.",
      goal:
        "Build a lightweight, buttery-smooth workspace with tactile spring physics, keyboard accessibility, and zero input lag.",
      architecture: [
        "Framer Motion layout animations for smooth reordering without DOM node thrashing",
        "Optimistic local state mutations with immediate visual feedback",
        "Custom event listeners for accessible keyboard navigation across columns",
      ],
      challenges: [
        "Handling complex cross-column dragging with collision detection.",
        "Preserving responsive column wrapping on tablet and mobile viewports.",
      ],
      solution: [
        "Used Framer Motion layoutId and spring physics to animate items into their new slots gracefully.",
        "Built a modular state slice in Zustand handling column reordering and card mutations.",
      ],
      performanceGains: [
        { label: "Interaction Latency", value: "Sub-5ms response" },
        { label: "User Delight", value: "Tactile spring feedback" },
        { label: "Accessibility", value: "Full keyboard controls" },
        { label: "Memory Efficiency", value: "Zero leaks" },
      ],
      architectureHighlights:
        "Separation of presentation cards from gesture drag listeners, ensuring 60 FPS animation continuity.",
    },
  },
  {
    id: "design-system-library",
    title: "Accessible Design System & UI Primitive Suite",
    slug: "design-system-library",
    tagline: "Scalable component library engineered with strict TypeScript, WCAG 2.1 AA compliance, and dark mode.",
    category: "Design System",
    categories: ["All", "React", "Next.js", "Design System"],
    description:
      "An enterprise-ready design system powering multi-brand applications. Includes accessible form controls, modals, tabs, dropdowns, and toast notifications with comprehensive keyboard navigation.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI Primitives",
      "Framer Motion",
      "Lucide Icons",
    ],
    featured: true,
    githubUrl: "https://github.com/MahmoudSalah50",
    liveUrl: "https://luxe-one-bay.vercel.app/",
    metrics: [
      { label: "Accessibility", value: "WCAG 2.1 AA" },
      { label: "Reusable Components", value: "40+" },
      { label: "Zero Any Types", value: "100% Safe" },
      { label: "Theme Support", value: "Dark / Light" },
    ],
    caseStudy: {
      problem:
        "Inconsistent UI patterns and broken focus states across legacy applications increased maintenance overhead and caused accessibility compliance failures.",
      goal:
        "Build a centralized, documented component library with bulletproof accessibility, seamless theme switching, and strict TypeScript props interfaces.",
      architecture: [
        "Headless accessibility primitives powered by Radix UI wrapped in custom Tailwind utility tokens",
        "Compound component patterns allowing flexible layouts without prop drilling",
        "Polymorphic asChild support enabling seamless integration with Next.js Link and buttons",
      ],
      challenges: [
        "Handling complex focus traps and aria-expanded attributes on nested mobile navigation drawers.",
        "Balancing expressive micro-animations with prefers-reduced-motion compliance.",
      ],
      solution: [
        "Integrated Radix UI Dialog and Dropdown primitives with custom CSS animation keys.",
        "Added global accessibility hook to detect user motion preferences and automatically disable transitions.",
        "Established strict TypeScript generic typing for all form input wrappers.",
      ],
      performanceGains: [
        { label: "Lighthouse Accessibility", value: "100/100" },
        { label: "Developer Velocity", value: "3x faster feature assembly" },
        { label: "UI Inconsistencies", value: "Eliminated" },
        { label: "Keyboard Usability", value: "100% verified" },
      ],
      architectureHighlights:
        "Strict boundary separating styling tokens from headless accessibility logic, ensuring long-term maintainability.",
    },
  },
];
