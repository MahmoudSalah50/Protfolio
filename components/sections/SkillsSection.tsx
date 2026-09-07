"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import {
  SkillAnimatedIcon,
  FrontendDomainIcon,
  EcommerceDomainIcon,
  StateDomainIcon,
  MotionDomainIcon,
} from "@/components/ui/AnimatedSkillIcons";
import { Sparkles, ArrowRight, Layers } from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "E-Commerce" | "State & APIs" | "UI & Motion";
  badge: string;
  description: string;
  tags: string[];
}

const skillsList: SkillItem[] = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    badge: "Core UI",
    description: "Component-driven architecture, custom hooks, concurrent rendering, and clean unidirectional data flow.",
    tags: ["React 19", "Hooks", "Component Architecture"],
  },
  {
    name: "Next.js",
    category: "Frontend",
    badge: "App Router",
    description: "React Server Components (RSC), dynamic edge routing, server-side rendering (SSR), and static generation.",
    tags: ["App Router", "RSC", "SSR", "Edge Caching"],
  },
  {
    name: "TypeScript",
    category: "Frontend",
    badge: "Type Safety",
    description: "Strict static typing, discriminated unions, generic type constraints, and compile-time contract enforcement.",
    tags: ["Strict Mode", "Generics", "API Contracts"],
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    badge: "Runtime Engine",
    description: "Modern ECMAScript specifications, async microtasks, browser APIs, and high-efficiency algorithmic routines.",
    tags: ["Async/Await", "Promises", "DOM APIs"],
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    badge: "Standards",
    description: "Accessible WCAG 2.1 AA markup, modern CSS Grid, Flexbox, custom properties, and container queries.",
    tags: ["Semantic HTML", "CSS Grid", "Flexbox"],
  },

  // E-Commerce
  {
    name: "Salla Theme Engine",
    category: "E-Commerce",
    badge: "Salla CLI & Twig",
    description: "Custom theme engineering using Salla CLI, Twig engine, Twilight UI components, and native Arabic RTL UX.",
    tags: ["Salla CLI", "Twilight UI", "Arabic RTL"],
  },
  {
    name: "Shopify Storefronts",
    category: "E-Commerce",
    badge: "Liquid Sections",
    description: "Custom Liquid templates, Section Rendering API, Theme App Extensions, and Metafield schemas.",
    tags: ["Liquid Engine", "Section API", "Ajax Cart"],
  },
  {
    name: "Zid Commerce Platform",
    category: "E-Commerce",
    badge: "Custom Themes",
    description: "Custom storefront theme layouts, checkout flow enhancements, catalog styling, and tailored store experiences.",
    tags: ["Zid Storefronts", "Theme Layouts", "Catalog UX"],
  },
  {
    name: "Twig & Liquid Engines",
    category: "E-Commerce",
    badge: "Templating",
    description: "Modular template inheritance, custom macros, dynamic filters, block overrides, and schema-driven settings.",
    tags: ["Inheritance", "Macros", "Filters"],
  },

  // State & APIs
  {
    name: "Zustand",
    category: "State & APIs",
    badge: "Atomic State",
    description: "Minimalist client state store with zero boilerplate and automatic localStorage persistence synchronization.",
    tags: ["Atomic Store", "Local Storage", "Micro-State"],
  },
  {
    name: "TanStack Query",
    category: "State & APIs",
    badge: "Server Cache",
    description: "Intelligent background data synchronization, automated cache invalidation, and optimistic UI mutations.",
    tags: ["Cache Invalidation", "Optimistic UI", "Refetching"],
  },
  {
    name: "Redux Toolkit",
    category: "State & APIs",
    badge: "Global State",
    description: "Predictable state containers, normalized slices, and structured data mutations for large-scale portals.",
    tags: ["Slices", "Reducers", "Normalized Data"],
  },
  {
    name: "Axios & REST APIs",
    category: "State & APIs",
    badge: "Network Client",
    description: "Centralized client interceptors, JWT token refresh flows, error boundary handling, and clean API gateways.",
    tags: ["Interceptors", "JWT Refresh", "REST"],
  },
  {
    name: "Zod & React Hook Form",
    category: "State & APIs",
    badge: "Validation",
    description: "Uncontrolled form ergonomics with strict schema validation at compile and runtime.",
    tags: ["Schema Validation", "Type Inference", "Forms"],
  },

  // UI & Motion
  {
    name: "Tailwind CSS v4",
    category: "UI & Motion",
    badge: "Utility Styling",
    description: "Utility-first design systems, custom theme configuration, dark mode tokens, and zero CSS runtime overhead.",
    tags: ["Tailwind v4", "Design Tokens", "Dark Mode"],
  },
  {
    name: "Framer Motion",
    category: "UI & Motion",
    badge: "Physics Motion",
    description: "Hardware-accelerated layout transitions, spring physics, scroll-triggered reveals, and gesture controls.",
    tags: ["Layout Motion", "Spring Physics", "Transitions"],
  },
  {
    name: "Responsive & RTL Architecture",
    category: "UI & Motion",
    badge: "Bi-directional",
    description: "Pixel-perfect bi-directional support for Arabic (RTL) and English (LTR) with mobile-first fluidity.",
    tags: ["Arabic RTL", "Mobile-First", "Container Queries"],
  },
  {
    name: "Git & Clean Workflow",
    category: "UI & Motion",
    badge: "Version Control",
    description: "Trunk-based development, semantic commits, code reviews, and automated CI deployment to modern edge platforms.",
    tags: ["GitHub", "Trunk-Based", "CI/CD"],
  },
];

const categories = [
  "All Skills",
  "Frontend",
  "E-Commerce",
  "State & APIs",
  "UI & Motion",
] as const;

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All Skills");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);

  const filteredSkills =
    selectedCategory === "All Skills"
      ? skillsList
      : skillsList.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Technical Arsenal"
          badgeVariant="white"
          title="Skills &"
          titleAccent="Technical Mastery"
          watermark="02"
          description="A comprehensive overview of my core engineering capabilities: modern React & Next.js architectures, specialized storefronts across Salla, Shopify, and Zid, and interactive UI systems."
        />

        {/* 4 Executive Domain Cards with animated SVG pods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {/* 1. Frontend Core */}
          <div
            onMouseEnter={() => setHoveredDomain(0)}
            onMouseLeave={() => setHoveredDomain(null)}
            className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <FrontendDomainIcon isHovered={hoveredDomain === 0} />
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                  01
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  Frontend Core
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">
                  React 19, Next.js App Router, TypeScript, and modern component systems.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
              <span>Next.js • React</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:scale-125 transition-transform" />
            </div>
          </div>

          {/* 2. E-Commerce Platforms */}
          <div
            onMouseEnter={() => setHoveredDomain(1)}
            onMouseLeave={() => setHoveredDomain(null)}
            className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <EcommerceDomainIcon isHovered={hoveredDomain === 1} />
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                  02
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  E-Commerce Platforms
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">
                  Salla (Twig), Shopify (Liquid), and Zid bespoke themes and checkouts.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
              <span>Salla • Shopify • Zid</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:scale-125 transition-transform" />
            </div>
          </div>

          {/* 3. State & Networking */}
          <div
            onMouseEnter={() => setHoveredDomain(2)}
            onMouseLeave={() => setHoveredDomain(null)}
            className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <StateDomainIcon isHovered={hoveredDomain === 2} />
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                  03
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  State &amp; Networking
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">
                  Zustand, TanStack Query, Redux Toolkit, Axios, and Zod validation.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
              <span>Zustand • TanStack</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:scale-125 transition-transform" />
            </div>
          </div>

          {/* 4. UI & Micro-Motion */}
          <div
            onMouseEnter={() => setHoveredDomain(3)}
            onMouseLeave={() => setHoveredDomain(null)}
            className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <MotionDomainIcon isHovered={hoveredDomain === 3} />
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                  04
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  UI &amp; Micro-Motion
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">
                  Tailwind CSS v4, Framer Motion, and bi-directional RTL/LTR design.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
              <span>Framer • Tailwind v4</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:scale-125 transition-transform" />
            </div>
          </div>
        </div>

        {/* Category Navigation Bar with animated sliding pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono transition-colors focus:outline-none ${
                  isActive ? "text-black font-bold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 rounded-full bg-white shadow-lg shadow-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full bg-white/[0.03] border border-white/10 -z-10" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Skills Cards Grid with Animated SVG Icons */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const isHovered = hoveredSkill === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group space-y-4 shadow-lg bg-zinc-950/70 hover:bg-zinc-950/90 relative overflow-hidden"
                >
                  {/* Subtle hover gradient illumination */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/[0.03] group-hover:bg-white/[0.08] rounded-full blur-2xl pointer-events-none transition-all" />

                  <div className="space-y-3.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Animated Tech Icon Pod */}
                        <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-white/30 group-hover:bg-white/[0.1] flex items-center justify-center shrink-0 transition-all shadow-inner relative overflow-hidden">
                          <SkillAnimatedIcon
                            name={skill.name}
                            isHovered={isHovered}
                            className="w-5 h-5 text-white"
                          />
                        </div>

                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {/* Status badge with animated green dot */}
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-zinc-300 border border-white/10 flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 animate-pulse" />
                        {skill.badge}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5 relative z-10">
                    {skill.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-zinc-400 group-hover:text-zinc-300 group-hover:border-white/10 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
