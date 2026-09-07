"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  ShoppingBag,
  Sparkles,
  Zap,
  CheckCircle2,
  Download,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const aboutPillars = [
  {
    number: "01",
    title: "Modern React & Next.js Architecture",
    tag: "Core Engineering",
    description:
      "Crafting performant, resilient web applications using Next.js App Router, React 19, and TypeScript. Specializing in React Server Components (RSC) to ship minimal client-side JavaScript while delivering rich interactive client islands.",
    deliverables: [
      "Next.js App Router (Server & Client Components)",
      "Strict TypeScript compile-time contract safety",
      "Atomic state management with Zustand",
      "Server-state caching with TanStack Query",
    ],
  },
  {
    number: "02",
    title: "E-Commerce Specialization",
    tag: "Salla • Shopify • Zid",
    description:
      "Bridging frontend software engineering with deep e-commerce platform mastery. Building bespoke custom themes, checkout extensions, and instant cart drawers across Salla (Twig), Shopify (Liquid), and Zid.",
    deliverables: [
      "Custom Salla themes with Salla CLI & Twig",
      "Shopify Liquid sections & Ajax cart drawers",
      "Zid platform storefront customizations",
      "High-converting mobile-first checkout flows",
    ],
  },
  {
    number: "03",
    title: "Responsive Design & Bi-directional UX",
    tag: "UI & Fluidity",
    description:
      "Crafting pixel-perfect, highly responsive interfaces tailored for all device viewports. Delivering seamless bi-directional support for international English (LTR) and Arabic (RTL) audiences with fluid micro-interactions.",
    deliverables: [
      "Pixel-perfect bi-directional RTL & LTR design",
      "Hardware-accelerated animations with Framer Motion",
      "Accessible WCAG 2.1 AA compliant UI elements",
      "Fluid touch-first mobile navigation ergonomics",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="About Me"
          badgeVariant="white"
          title="Crafting Fast, Elegant"
          titleAccent="Web Experiences"
          watermark="01"
          description="A Frontend Developer who bridges modern React & Next.js software engineering with proven e-commerce mastery across Salla, Shopify, and Zid."
        />

        {/* Narrative & Philosophy Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 bg-zinc-950/80 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-white" />
                Engineering Philosophy
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                I build digital products where aesthetics and clean architecture work in seamless harmony.
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Based in Mansoura, Egypt, I specialize in architecting modern web applications and high-conversion e-commerce storefronts. My work combines clean TypeScript code, scalable design tokens, and obsessive attention to micro-interactions, ensuring that every user journey feels effortless, fluid, and memorable.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-3">
              <a
                href="/cv.pdf"
                download="Mahmoud_Salah_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm shadow-xl hover:bg-zinc-200 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Curriculum Vitae</span>
              </a>

              <span className="text-[11px] font-mono text-zinc-500">
                PDF Format • Direct Download
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-white/40 group-hover:text-white transition-colors">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white tracking-tight">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-bold block">
                  Core Highlights
                </span>
                {pillar.deliverables.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2 text-xs text-zinc-300 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
