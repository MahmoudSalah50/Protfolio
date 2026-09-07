"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { coreWebVitals, performanceStrategies } from "@/data/performance";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PerformanceSection() {
  return (
    <section id="performance" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Subtle monochrome ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Core Web Vitals"
          badgeVariant="white"
          title="Performance"
          titleAccent="Matters"
          watermark="04"
          description="High speed directly impacts customer trust, SEO visibility, and e-commerce conversions. I engineer frontends for sub-second responses and zero layout shift."
        />

        {/* 4 Core Web Vitals Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {coreWebVitals.map((cwv, idx) => (
            <motion.div
              key={cwv.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-white">
                    {cwv.metric}
                  </span>
                  <Badge variant="emerald" size="sm">
                    {cwv.target}
                  </Badge>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1">
                  {cwv.value}
                </div>

                <div className="text-sm font-semibold text-zinc-200 mb-2">
                  {cwv.name}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {cwv.description}
                </p>
              </div>

              {/* Progress bar visual */}
              <div className="pt-5 mt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                  <span>Score Efficiency</span>
                  <span className="text-white font-bold">{cwv.score}/100</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: `${cwv.score}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 Performance Engineering Strategies */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Optimization Techniques
            </h3>
            <span className="text-xs font-mono text-zinc-400">
              Zero compromises on UX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceStrategies.map((strategy, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-xl shadow-lg hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white font-bold uppercase">
                      {strategy.subtitle}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 text-[11px] font-mono font-semibold">
                      {strategy.impact}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {strategy.title}
                  </h4>

                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {strategy.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Production standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
