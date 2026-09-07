export interface PlatformFeature {
  title: string;
  description: string;
  badge: string;
  bulletPoints: string[];
}

export const sallaExpertise = {
  platform: "Salla Theme Development",
  headline: "Specialized GCC E-Commerce Engineering with Salla & Twig",
  description:
    "Salla powers the largest e-commerce stores in Saudi Arabia and the MENA region. I specialize in building custom, enterprise-grade Salla themes from scratch using the Salla CLI, Twig templating engine, Twilight components, and native Arabic RTL typography.",
  badges: ["Salla Partner Level", "Twig Engine", "Twilight UI", "Salla CLI", "RTL / LTR", "Custom Hooks"],
  capabilities: [
    {
      title: "Custom Salla Themes & Twig Architecture",
      description: "Writing maintainable, modular Twig templates with template inheritance, reusable macros, and clean component isolation.",
      badge: "Twig & Architecture",
      bulletPoints: [
        "Componentized Twig directory architecture (`partials/`, `components/`, `layouts/`)",
        "Salla CLI local development workflow with hot module reload",
        "Custom theme settings schema for merchant control via Salla dashboard",
      ],
    },
    {
      title: "Twilight Components & Event Bridge",
      description: "Leveraging Salla's Twilight UI web components while bridging custom JavaScript events for seamless interactive drawers and cart badges.",
      badge: "Twilight UI",
      bulletPoints: [
        "Deep integration with `<salla-cart-summary>`, `<salla-product-card>`, and `<salla-modal>`",
        "Custom event listeners on `cart::add-item`, `cart::update`, and `checkout::init`",
        "Zero script conflicts and asynchronous asset loading",
      ],
    },
    {
      title: "RTL / LTR Bi-Directional Engineering",
      description: "Arabic-first design standards that respect RTL reading order, typography line-heights, and mirror micro-interactions smoothly.",
      badge: "RTL Localization",
      bulletPoints: [
        "CSS logical properties (`padding-inline`, `margin-block`, `inset-inline`)",
        "Arabic typographic harmony using Tajawal, Cairo, and IBM Plex Sans Arabic",
        "Seamless language switcher with state persistence",
      ],
    },
    {
      title: "Checkout & Cart Optimization",
      description: "Minimizing checkout drop-offs through optimized product option pickers, sticky buy buttons, and instant cart drawer feedback.",
      badge: "Conversion Rate (CRO)",
      bulletPoints: [
        "Interactive product option trees (sizes, colors, custom text inputs)",
        "Sticky mobile bottom bar with instant add-to-cart trigger",
        "Free shipping progress bars and tiered discount incentives",
      ],
    },
  ],
};

export const shopifyExpertise = {
  platform: "Shopify & Liquid Development",
  headline: "High-Conversion Storefronts & Liquid Architecture",
  description:
    "Shopify is the global standard for direct-to-consumer (DTC) brands. I engineer performant Shopify themes with modular Liquid sections, the Section Rendering API, and lightweight JavaScript for maximum conversion.",
  badges: ["Shopify Liquid", "Section Rendering API", "Theme App Extensions", "Ajax Cart API", "Metafields"],
  capabilities: [
    {
      title: "Liquid Architecture & Custom Sections",
      description: "Creating flexible, merchant-customizable sections with robust Liquid schemas, dynamic blocks, and presets.",
      badge: "Liquid Modularization",
      bulletPoints: [
        "JSON-based section schemas for visual Theme Editor customization",
        "Custom product page layouts with modular accordions and size guides",
        "Liquid filters and object pipelines for deterministic HTML generation",
      ],
    },
    {
      title: "Ajax Cart API & Slide-Out Drawers",
      description: "Building zero-refresh cart experiences with dynamic line-item updates, cross-sells, and real-time inventory checks.",
      badge: "Ajax Cart API",
      bulletPoints: [
        "Optimistic cart state updates with graceful error recovery",
        "In-cart product recommendations and progress-to-free-shipping calculators",
        "Accessible slide-out drawer with focus trapping and ESC-key dismiss",
      ],
    },
    {
      title: "Section Rendering API",
      description: "Updating isolated portions of the DOM on variant selection or filter clicks without reloading the page or downloading huge JSON bundles.",
      badge: "Section Rendering",
      bulletPoints: [
        "Dynamic variant price and availability updates without full page reloads",
        "Faceted collection filtering with browser history pushState integration",
        "Near-instantaneous catalog browsing experience",
      ],
    },
    {
      title: "Metafields & Headless Ready Integrations",
      description: "Extending Shopify's data model with structured metafields to display technical specs, custom badges, and interactive media.",
      badge: "Metafields & APIs",
      bulletPoints: [
        "Standardized metafield schemas for multi-attribute product catalogs",
        "Storefront API integration for hybrid or headless storefront transitions",
        "Theme App Extension compatibility for third-party reviews and rewards",
      ],
    },
  ],
};
