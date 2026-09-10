"use client";

import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Sparkles,
  Zap,
  CheckCircle2,
  Download,
  Terminal,
  Clock,
  MapPin,
  Cpu,
  Layers,
  ShieldCheck,
  Flame,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const coreValues = [
  {
    id: "type-safety",
    title: "Zero Runtime Bugs",
    tag: "Type Safety",
    description: "Strict TypeScript compilation with zero 'any' escapes and Zod runtime schema validation at all API boundaries.",
    icon: ShieldCheck,
    accent: "text-emerald-400",
  },
  {
    id: "performance",
    title: "Sub-Second Latency",
    tag: "Next.js & RSC",
    description: "Leveraging React Server Components (RSC) to ship minimal client JavaScript while delivering instant initial TTFB.",
    icon: Zap,
    accent: "text-cyan-400",
  },
  {
    id: "motion",
    title: "Buttery 60FPS UI",
    tag: "Micro-Motion",
    description: "Tactile spring physics, layout transitions, and GPU-accelerated micro-interactions with Framer Motion.",
    icon: Flame,
    accent: "text-purple-400",
  },
  {
    id: "accessibility",
    title: "WCAG 2.1 AA Standards",
    tag: "Accessibility",
    description: "Accessible ARIA attributes, semantic HTML5, keyboard navigation focus traps, and bi-directional RTL support.",
    icon: Cpu,
    accent: "text-amber-400",
  },
];

export function About() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setLocalTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="About Me"
          badgeVariant="white"
          title="Engineering With"
          titleAccent="Passion & Precision"
          watermark="01"
          description="A Frontend Developer focused on modern React & Next.js engineering, clean code architecture, and high-performance interactive interfaces."
        />

        {/* Creative Bento Grid Row 1: Narrative Story + Live Code Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Bento Tile 1: Personal Background & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-7 sm:p-10 rounded-3xl border border-white/15 bg-zinc-950/80 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Frontend Engineering
                </span>

                {/* Live Cairo Clock Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Mansoura, EG:</span>
                  <span className="text-white font-bold">{localTime || "12:00 PM"}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                I build digital web products where clean architecture and fluid aesthetics work in seamless harmony.
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Based in <span className="text-white font-medium">Mansoura, Egypt</span>, I have spent 4+ years mastering the modern web ecosystem. I view frontend development not just as assembling UI components, but as crafting complete, deterministic client systems with sub-second performance, bulletproof type safety, and delightful user journeys.
              </p>
            </div>

            {/* Micro Details Row */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Available for Global Remote &amp; Full-Time</span>
              </div>

              <a
                href="/cv.pdf"
                download="Mahmoud_Salah_CV.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all shadow-md active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Bento Tile 2: Live TypeScript Config Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-[#09090c]/95 border border-white/15 p-5 sm:p-6 shadow-2xl flex flex-col justify-between font-mono text-xs"
          >
            {/* Terminal Header */}
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-zinc-400 pl-2">developer.config.ts</span>
                </div>
                <Badge variant="white" size="sm">
                  TypeScript 5.0
                </Badge>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1.5 text-[11px] sm:text-xs text-zinc-300 leading-relaxed font-mono overflow-x-auto">
                <div>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-white font-bold">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;Mahmoud Salah&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">title:</span>{" "}
                  <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">coreStack:</span> [
                  <span className="text-cyan-300">&quot;React 19&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;TS&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">stateEngine:</span>{" "}
                  <span className="text-amber-300">&quot;Zustand + TanStack&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">standards:</span> &#91;
                  <span className="text-emerald-300">&quot;Clean Code&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;WCAG 2.1&quot;</span>&#93;,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">openToWork:</span>{" "}
                  <span className="text-emerald-400 font-bold">true</span>,
                </div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Terminal Footer Indicator */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Compiles Clean (0 errors)
              </span>
              <span className="text-zinc-500">UTF-8 • LF</span>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Row 2: 4 Core Values & Engineering Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group bg-zinc-950/70 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-5 h-5 ${value.accent}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/5">
                      {value.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                    {value.title}
                  </h4>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
