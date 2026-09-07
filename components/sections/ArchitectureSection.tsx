"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { architectureLayers, engineeringPrinciples } from "@/data/architecture";
import {
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(architectureLayers[0]);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="System Design"
          badgeVariant="white"
          title="Frontend Architecture"
          titleAccent="& Clean Structure"
          watermark="05"
          description="How I structure maintainable frontend applications: strict separation of concerns, contract-driven type boundaries, and scalable component hierarchies."
        />

        {/* 4 Core Principles Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {engineeringPrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all space-y-2.5"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                {idx === 0 && <Layers className="w-5 h-5" />}
                {idx === 1 && <Cpu className="w-5 h-5" />}
                {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                {idx === 3 && <Zap className="w-5 h-5" />}
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                {principle.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive 6-Layer Architecture Pipeline Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6 Layer Step Sequence */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1 px-1">
              <span>UNIDIRECTIONAL LAYER STACK</span>
              <span className="text-white">Click layer to inspect</span>
            </div>

            {architectureLayers.map((layer, index) => {
              const isSelected = activeLayer.level === layer.level;
              return (
                <div key={layer.level}>
                  <div
                    onClick={() => setActiveLayer(layer)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-white text-black border-white shadow-xl scale-[1.01]"
                        : "glass-panel hover:bg-white/[0.05] hover:border-white/20 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                          isSelected ? "bg-black text-white" : "bg-white/10 text-white"
                        }`}
                      >
                        0{layer.level}
                      </span>
                      <div>
                        <div className={`text-sm font-bold ${isSelected ? "text-black" : "text-white"}`}>
                          {layer.name}
                        </div>
                        <div className={`text-xs font-mono ${isSelected ? "text-zinc-700" : "text-zinc-400"}`}>
                          {layer.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                          isSelected ? "bg-black/10 text-black border-black/20" : "bg-white/10 text-white border-white/20"
                        }`}
                      >
                        Tier {layer.level}
                      </span>
                    </div>
                  </div>

                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-3.5 h-3.5 text-zinc-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Layer Inspector Detail View */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.level}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/20 bg-zinc-950/95 shadow-2xl space-y-6"
              >
                <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Architecture Tier 0{activeLayer.level}
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {activeLayer.name}
                    </h3>
                  </div>
                  <Badge variant="white" size="md">
                    Tier 0{activeLayer.level}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-bold block">
                    System Responsibility
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed font-light">
                    {activeLayer.role}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <span className="text-xs font-mono uppercase text-white font-bold block">
                    Core Building Blocks &amp; Primitives
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeLayer.components.map((comp) => (
                      <span
                        key={comp}
                        className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-200"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-bold block">
                    Enforced Best Practices
                  </span>
                  {activeLayer.bestPractices.map((bp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
