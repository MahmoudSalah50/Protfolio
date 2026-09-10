"use client";

import React, { useState } from "react";
import { useThemeContext } from "@/components/providers/ThemeContext";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SolutionItem {
  id: string;
  number: string;
  title: string;
  category: string;
  colorBg: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
}

const solutions: SolutionItem[] = [
  {
    id: "frontend-arch",
    number: "01",
    title: "Next.js & React 19 Architecture",
    category: "Full Frontend Engineering",
    colorBg: "rgba(135, 57, 213, 0.15)", // violet tint
    summary:
      "Architecting resilient, lightning-fast web applications using Next.js App Router, React Server Components (RSC), and strict TypeScript. Minimal client payload, instant routing, and edge caching.",
    deliverables: [
      "React Server Components (RSC) with zero-JS initial payload",
      "Strict TypeScript compile-time type boundaries & API contracts",
      "Lightweight atomic state stores with Zustand & TanStack Query",
      "Sub-second First Contentful Paint (< 0.8s FCP)",
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Zustand", "TanStack Query"],
  },
  {
    id: "salla-twig",
    number: "02",
    title: "Salla Theme Engine & Twilight (Twig)",
    category: "MENA E-Commerce Specialist",
    colorBg: "rgba(16, 185, 129, 0.15)", // emerald tint
    summary:
      "Developing bespoke custom Salla v2 themes tailored for GCC merchants. Native Arabic RTL typography, custom Twilight web component overrides, and conversion-tuned slide-out drawers.",
    deliverables: [
      "Modular Twig template inheritance with atomic partials",
      "Local developer workflow via Salla CLI with sandbox store sync",
      "100% native bi-directional RTL & LTR Arabic typography alignment",
      "Optimistic cart drawer & dynamic variant tree selectors",
    ],
    technologies: ["Salla CLI", "Twig 3.x", "Twilight UI", "SCSS", "JavaScript ES6+"],
  },
  {
    id: "shopify-liquid",
    number: "03",
    title: "Shopify Liquid Storefront Engineering",
    category: "Global DTC & Enterprise Retail",
    colorBg: "rgba(48, 100, 208, 0.15)", // royal blue tint
    summary:
      "Crafting high-converting Shopify themes leveraging the Section Rendering API, dynamic metafield schemas, and seamless Ajax cart drawers with zero layout shift.",
    deliverables: [
      "Shopify Section Rendering API for instantaneous partial DOM updates",
      "Theme App Extensions & Metafield schema configuration",
      "Instant Ajax cart drawer with intelligent upsell recommendations",
      "Speed scores > 95/100 on Google PageSpeed Insights",
    ],
    technologies: ["Shopify Liquid", "Section API", "Ajax Cart", "Tailwind CSS", "Web Components"],
  },
  {
    id: "ui-motion",
    number: "04",
    title: "UI/UX & Physics Micro-Interactions",
    category: "Design Systems & Animation",
    colorBg: "rgba(39, 252, 242, 0.12)", // cyan tint
    summary:
      "Elevating digital interfaces from mundane to unforgettable. Engineered with Framer Motion spring physics, tactile hover states, and WCAG 2.1 AA accessibility standards.",
    deliverables: [
      "Hardware-accelerated layout transitions & gesture controls",
      "Responsive container queries and multi-breakpoint fluidity",
      "Tactile button magnets and 3D card tilt physics",
      "Design tokens and dark mode themes with Tailwind CSS v4",
    ],
    technologies: ["Framer Motion", "Tailwind v4", "Lucide", "Radix UI", "Canvas 2D"],
  },
];

export function SolutionsAccordion() {
  const [openId, setOpenId] = useState<string | null>(solutions[0].id);
  const { playClick } = useThemeContext();

  const toggleItem = (id: string) => {
    playClick();
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToContact = () => {
    playClick();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" className="relative z-20 py-20 md:py-32 bg-black/60 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-400 font-bold block mb-2">
              Capabilities &amp; Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Solutions I Deliver
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light">
            Comprehensive frontend engineering services for founders, agencies, and enterprise commerce leaders.
          </p>
        </div>
      </div>

      {/* Accordion Rows (Creativeans Style) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-3">
        {solutions.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: isOpen ? item.colorBg : "rgba(12, 12, 14, 0.7)",
              }}
            >
              {/* Header button row */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer select-none group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-white/40 group-hover:text-white transition-colors">
                    {item.number}
                  </span>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#27FCF2] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="size-10 sm:size-12 rounded-full border border-white/20 bg-white/[0.05] flex items-center justify-center text-white shrink-0 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                </div>
              </button>

              {/* Collapsible Content Drawer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-6 space-y-4">
                        <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                          {item.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-zinc-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                        <span className="text-xs font-mono uppercase text-[#27FCF2] font-bold block">
                          Key Deliverables
                        </span>
                        <div className="space-y-2">
                          {item.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                              <CheckCircle2 className="size-4 text-[#27FCF2] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 mt-4 border-t border-white/10">
                          <button
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all active:scale-95"
                          >
                            <span>Inquire for Project</span>
                            <ArrowUpRight className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
