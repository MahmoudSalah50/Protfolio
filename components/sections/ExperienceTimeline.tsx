"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { experienceData } from "@/data/experience";
import {
  Briefcase,
  CheckCircle2,
  Trophy,
  Calendar,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  const cardThemes = [
    {
      border: "border-white/15 hover:border-emerald-500/40",
      glow: "from-emerald-500/[0.04] to-transparent",
      accentText: "text-emerald-400",
      tagBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      dot: "bg-emerald-400",
    },
    {
      border: "border-white/15 hover:border-cyan-500/40",
      glow: "from-cyan-500/[0.04] to-transparent",
      accentText: "text-cyan-400",
      tagBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      dot: "bg-cyan-400",
    },
    {
      border: "border-white/15 hover:border-purple-500/40",
      glow: "from-purple-500/[0.04] to-transparent",
      accentText: "text-purple-400",
      tagBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      dot: "bg-purple-400",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-visible">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Career History"
          badgeVariant="white"
          title="Professional"
          titleAccent="Experience"
          watermark="05"
          description="A track record of engineering scalable frontend architectures, responsive design systems, and modern digital applications. Scroll to explore career phases."
        />

        {/* Stacking Cards Scroll Container */}
        <div className="relative space-y-12 sm:space-y-16 pb-20">
          {experienceData.map((item, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const phaseNumber = `0${idx + 1}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  // Sticky Stacking: Each card sticks with a staggered top offset
                  position: "sticky",
                  top: `calc(5.5rem + ${idx * 26}px)`,
                  zIndex: idx + 10,
                }}
                className={`w-full rounded-3xl bg-[#09090b]/95 backdrop-blur-2xl border ${theme.border} p-6 sm:p-8 lg:p-10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 group`}
              >
                {/* Subtle gradient glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.glow} pointer-events-none -z-10`}
                />

                {/* Top Card Bar: Phase Indicator, Period, & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      CAREER PHASE <span className={theme.accentText}>#{phaseNumber}</span>
                    </span>

                    <span className="text-zinc-600 hidden sm:inline">•</span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {idx === 0 && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Active Production
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role Title & Overview */}
                <div className="space-y-3 mb-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-4xl">
                    {item.overview}
                  </p>
                </div>

                {/* 2-Column Details: Responsibilities & Impact */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-white/[0.08]">
                  {/* Left Column: Key Responsibilities */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-white" />
                      Key Technical Responsibilities
                    </span>

                    <div className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Achievements & Tech Stack */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Key Highlights Card */}
                    <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3 shadow-inner">
                      <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase tracking-wider">
                        <Trophy className="w-4 h-4 text-amber-400" />
                        <span>Key Highlights &amp; Impact</span>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-200">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="text-white font-mono font-bold">•</span>
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Pills */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Technologies Deployed
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-zinc-300 hover:border-white/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
