import { CoreWebVital } from "@/types";

export const coreWebVitals: CoreWebVital[] = [
  {
    metric: "LCP",
    name: "Largest Contentful Paint",
    value: "0.85s",
    target: "< 2.5s (Good)",
    description: "Measures visual loading speed. Achieved through Next/Image optimization, priority preloading, and edge static caching.",
    score: 99,
    color: "emerald",
  },
  {
    metric: "CLS",
    name: "Cumulative Layout Shift",
    value: "0.00",
    target: "< 0.1 (Good)",
    description: "Measures visual stability. Achieved by reserving aspect-ratio boxes, zero late font jumps, and layout-preserving placeholders.",
    score: 100,
    color: "emerald",
  },
  {
    metric: "INP",
    name: "Interaction to Next Paint",
    value: "38ms",
    target: "< 200ms (Good)",
    description: "Measures interface responsiveness. Achieved by offloading heavy work, debouncing interactions, and maintaining zero main-thread lockups.",
    score: 98,
    color: "emerald",
  },
  {
    metric: "TTFB",
    name: "Time to First Byte",
    value: "80ms",
    target: "< 800ms (Good)",
    description: "Measures server and edge response time. Edge network caching and lightweight server execution deliver instantaneous document delivery.",
    score: 99,
    color: "cyan",
  },
];

export const performanceStrategies = [
  {
    title: "React Server Components (RSC)",
    subtitle: "Zero Client Bundle Overhead",
    description: "Heavy dependencies (markdown parsers, date formatters, static content) are evaluated strictly on the server, sending pure HTML to the browser.",
    impact: "-65% Client JS",
  },
  {
    title: "Next.js Next/Image Pipeline",
    subtitle: "Automated AVIF & Responsive Srcset",
    description: "Images are dynamically resized, transcoded into ultra-compact modern AVIF/WebP formats, and served with blur-up shimmer placeholders.",
    impact: "-70% Image Weight",
  },
  {
    title: "Route & Component Code-Splitting",
    subtitle: "Dynamic Imports on Demand",
    description: "Heavy interactive components (modals, charts, drawer sheets) are loaded dynamically only when user intent is detected, keeping the main thread light.",
    impact: "Initial Load < 85KB",
  },
  {
    title: "Stale-While-Revalidate Edge Caching",
    subtitle: "Instantaneous Global Delivery",
    description: "Catalog and marketing pages are cached at edge nodes globally, serving instant warm responses while revalidating fresh content asynchronously.",
    impact: "< 100ms Worldwide TTFB",
  },
  {
    title: "Zero-CLS CSS Architecture",
    subtitle: "Layout Reservation & WebFont Hygiene",
    description: "Strict aspect-ratio wrappers and `next/font` zero-layout-shift font preloading ensure zero content jumping during the critical rendering path.",
    impact: "CLS = 0.00 Fixed",
  },
  {
    title: "Uncontrolled Forms with Zod",
    subtitle: "60 FPS Typing & Instant Validation",
    description: "React Hook Form manages form state via ref subscriptions rather than root component state re-renders, preventing input lag on complex forms.",
    impact: "Zero Input Stutter",
  },
];
