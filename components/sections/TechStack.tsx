"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { technologiesData } from "@/data/technologies";
import { TechCategory, Technology } from "@/types";
import {
  Code2,
  Paintbrush,
  Database,
  CheckSquare,
  Sparkles,
  ShoppingBag,
  Info,
  Layers,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories: { label: TechCategory; icon: typeof Code2 }[] = [
  { label: "Frontend", icon: Code2 },
  { label: "Styling", icon: Paintbrush },
  { label: "State & Data", icon: Database },
  { label: "Forms & Validation", icon: CheckSquare },
  { label: "Animation & Visualization", icon: Sparkles },
  { label: "E-commerce & Platforms", icon: ShoppingBag },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("Frontend");
  const [selectedTech, setSelectedTech] = useState<Technology>(technologiesData[0]);

  const filteredTechnologies = technologiesData.filter(
    (tech) => tech.category === activeCategory
  );

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Technology Toolkit"
          badgeVariant="white"
          title="Battle-Tested Tech Stack"
          titleAccent="& Modern Tools"
          watermark="02"
          description="Every library and framework in my toolkit is selected for maximum performance, clean developer ergonomics, type safety, and real customer conversion."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            const Icon = cat.icon;
            return (
              <button
                key={cat.label}
                onClick={() => {
                  setActiveCategory(cat.label);
                  const firstOfCat = technologiesData.find((t) => t.category === cat.label);
                  if (firstOfCat) setSelectedTech(firstOfCat);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md"
                    : "glass-panel text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid + Detail Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technology Badges Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredTechnologies.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white/[0.09] border-white/40 shadow-lg scale-[1.01]"
                      : "glass-panel hover:bg-white/[0.04] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-sm tracking-tight">
                      {tech.name}
                    </span>
                    <Badge variant="white" size="sm">
                      {tech.level}
                    </Badge>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3 font-light">
                    {tech.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                    <span>{tech.experience}</span>
                    <span className="text-white flex items-center gap-1 group-hover:underline">
                      Inspect <Info className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech.name}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/20 bg-zinc-950/95 shadow-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      {selectedTech.category} Ecosystem
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {selectedTech.name}
                    </h3>
                  </div>
                  <Badge variant="white" size="md">
                    {selectedTech.experience} Exp
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {selectedTech.description}
                </p>

                {/* Real-World Production Usage */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold uppercase">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Real-World Production Usage</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-light">
                    {selectedTech.realWorldUsage}
                  </p>
                </div>

                {/* Architectural Role */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-semibold uppercase">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Architectural Role</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {selectedTech.architecturalRole}
                  </p>
                </div>

                {/* Related Technologies */}
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Frequently Paired With
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.relatedTech.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
