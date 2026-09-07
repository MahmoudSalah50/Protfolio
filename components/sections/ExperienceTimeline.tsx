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
} from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Work History"
          badgeVariant="white"
          title="Professional"
          titleAccent="Experience"
          watermark="05"
          description="A track record of building production web applications, bespoke e-commerce storefronts, and engaging interactive experiences."
        />

        {/* Timeline Sequence */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 max-w-4xl mx-auto">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-white flex items-center justify-center shadow-md shadow-white/10 group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5 hover:border-white/30 transition-all">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {item.role}
                      </span>
                      {idx === 0 && (
                        <Badge variant="white" size="sm">
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1 text-zinc-200">
                        <Briefcase className="w-3.5 h-3.5" />
                        {item.type}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Overview narrative */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.overview}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-bold block">
                    Key Technical Responsibilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements row */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase">
                    <Trophy className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Key Highlights & Impact</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-200">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-white font-mono">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
