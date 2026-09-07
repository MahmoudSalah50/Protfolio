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
      "A flagship modern e-commerce storefront engineered for luxury retail. Features instantaneous product filtering, fluid variant selectors, reactive slide-out cart drawer, and high-conversion checkout flows.",
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
        "Traditional e-commerce templates suffer from heavy client-side JavaScript bundles, slow initial page loads, and layout shifts during image loading, causing high bounce rates on mobile networks.",
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
    id: "salla-twig-theme",
    title: "Salla Enterprise Twig Theme Engine",
    slug: "salla-enterprise-twig-theme",
    tagline: "Custom bespoke Salla theme built on Twig, Twilight components, and localized RTL Arabic architecture.",
    category: "Salla",
    categories: ["All", "E-commerce", "Salla"],
    description:
      "A complete bespoke Salla v2 theme engineered for high-volume Middle Eastern merchants. Features native RTL typography, custom Twilight UI overrides, dynamic product add-ons, and sub-second TTFB.",
    technologies: [
      "Salla Theme Engine",
      "Twig",
      "Salla CLI",
      "JavaScript (ES6+)",
      "Sass / SCSS",
      "PostCSS",
      "Twilight UI",
    ],
    featured: true,
    githubUrl: "https://github.com/MahmoudSalah50",
    metrics: [
      { label: "Mobile Speed Index", value: "1.1s" },
      { label: "RTL Support", value: "100% Native" },
      { label: "Bundle Reduction", value: "-48%" },
      { label: "Core Web Vitals", value: "Pass" },
    ],
    caseStudy: {
      problem:
        "Standard marketplace Salla themes were bloated with redundant third-party scripts, lacked high-end micro-interactions, and had layout instability on Arabic right-to-left viewports.",
      goal:
        "Develop a lightweight, high-performance custom Salla theme tailored for GCC consumer habits with native Arabic typography, custom product option trees, and rapid checkout access.",
      architecture: [
        "Modular Twig template inheritance with atomic partials for headers, cards, and drawers",
        "Salla CLI local development environment with hot-reload and sandbox store simulation",
        "Twilight Web Component lifecycle management with native event dispatchers",
        "Bi-directional CSS styling using modern CSS logical properties (`margin-inline-start`, etc.)",
      ],
      challenges: [
        "Customizing Salla's default checkout and cart hooks without breaking merchant back-office updates.",
        "Ensuring crisp typography and alignment across both Arabic (Cairo/Tajawal) and English typography.",
      ],
      solution: [
        "Created an event-driven JavaScript bridge connecting Salla hooks with custom cart notification drawers.",
        "Refactored styling into a modular SCSS pipeline with strict BEM naming and custom variable scopes.",
        "Optimized webfont loading using `font-display: swap` and localized subset preconnects.",
      ],
      performanceGains: [
        { label: "First Contentful Paint", value: "0.9s" },
        { label: "Page Weight", value: "Reduced from 2.4MB to 680KB" },
        { label: "Checkout Drop-off", value: "Reduced by 18%" },
        { label: "Mobile Conversion", value: "+24% Uplift" },
      ],
      architectureHighlights:
        "Clean Twig macro ecosystem isolating complex pricing formulas and inventory countdown timers into reusable server-rendered fragments.",
    },
  },
  {
    id: "shopify-liquid-store",
    title: "Shopify Liquid High-Conversion Storefront",
    slug: "shopify-liquid-storefront",
    tagline: "Custom Shopify theme architecture with Section Rendering API, Ajax cart drawer, and dynamic metafields.",
    category: "Shopify",
    categories: ["All", "E-commerce", "Shopify"],
    description:
      "Engineered a scalable Shopify storefront utilizing modern Liquid architecture, theme app extensions, dynamic cart upsells, and custom section settings for merchant self-service.",
    technologies: [
      "Shopify Liquid",
      "JavaScript",
      "Tailwind CSS",
      "Ajax Cart API",
      "Section Rendering API",
      "Metafields",
    ],
    featured: true,
    githubUrl: "https://github.com/MahmoudSalah50",
    metrics: [
      { label: "Add-to-Cart Speed", value: "Instant" },
      { label: "Average Order Value", value: "+19%" },
      { label: "Desktop PageSpeed", value: "98/100" },
      { label: "Zero Jitter", value: "100%" },
    ],
    caseStudy: {
      problem:
        "Client needed high-end visual storytelling with customized product landing sections while preserving non-technical merchant editing in the Shopify Theme Customizer.",
      goal:
        "Build a custom Shopify theme featuring customizable Liquid sections, an instant AJAX cart drawer with intelligent upsell recommendations, and zero layout shift.",
      architecture: [
        "Shopify Section Rendering API for seamless dynamic updates without whole-page refreshes",
        "Native JavaScript web components for interactive product swatch and size guide modals",
        "Shopify Metafields integration to drive dynamic specification tables and badge overlays",
        "Asset minification and critical path inline CSS generation",
      ],
      challenges: [
        "Synchronizing multiple variant selections across complex bundle options without page reloads.",
        "Preventing app script pollution from degrading Shopify Core Web Vitals.",
      ],
      solution: [
        "Built a stateful variant manager listening to form change events and fetching partial section HTML.",
        "Implemented lazy script injection for analytics and non-essential third-party widgets.",
        "Utilized Shopify CDN automatic WebP/AVIF transformations with precise srcset rules.",
      ],
      performanceGains: [
        { label: "Time to Interactive", value: "1.4s" },
        { label: "Cart Drawer Load", value: "< 50ms" },
        { label: "Mobile Core Web Vitals", value: "Green across all metrics" },
        { label: "Bundle Size", value: "< 85KB JS total" },
      ],
      architectureHighlights:
        "Modular section schemas providing complete customization freedom to marketing teams while enforcing strict layout guards against design degradation.",
    },
  },
  {
    id: "saas-analytics-dashboard",
    title: "Next.js SaaS Analytics & Executive Dashboard",
    slug: "saas-analytics-dashboard",
    tagline: "High-density enterprise analytics portal with TanStack Query, Recharts data visualization, and Zustand.",
    category: "Next.js",
    categories: ["All", "Next.js", "React"],
    description:
      "A real-time metrics platform for cross-channel retail analytics. Delivers interactive Recharts visualizations, dynamic date range filtering, responsive data tables, and CSV export capabilities.",
    technologies: [
      "Next.js 15 App Router",
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
    metrics: [
      { label: "Data Rendering", value: "60 FPS" },
      { label: "Initial Hydration", value: "< 120ms" },
      { label: "Type Coverage", value: "100% Strict" },
      { label: "Query Cache Hit", value: "92%" },
    ],
    caseStudy: {
      problem:
        "Enterprise managers were overwhelmed by slow dashboard re-renders and unorganized telemetry across multiple sales channels and inventory warehouses.",
      goal:
        "Design and construct an executive command dashboard capable of rendering dense data sets smoothly with instant filtering and interactive trend analysis.",
      architecture: [
        "TanStack Query server-state management with stale-while-revalidate caching and optimistic refetch",
        "Virtualization for high-density historical sales records",
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
    id: "design-system-library",
    title: "Accessible Design System & UI Primitive Suite",
    slug: "design-system-library",
    tagline: "Scalable component library engineered with strict TypeScript, WCAG 2.1 AA compliance, and dark mode.",
    category: "React",
    categories: ["All", "React", "Next.js"],
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
    featured: false,
    githubUrl: "https://github.com/MahmoudSalah50",
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
        "Polymorphic `asChild` support enabling seamless integration with Next.js Link and buttons",
      ],
      challenges: [
        "Handling complex focus traps and aria-expanded attributes on nested mobile navigation drawers.",
        "Balancing expressive micro-animations with `prefers-reduced-motion` compliance.",
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
