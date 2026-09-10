"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { servicesData } from "@/data/services";
import {
  Code2,
  ShoppingBag,
  Palette,
  Zap,
  GitFork,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const serviceIcons: Record<string, typeof Code2> = {
  LayoutCode: Code2,
  ShoppingBag: ShoppingBag,
  Palette: Palette,
  Zap: Zap,
  GitFork: GitFork,
};

export function ServicesSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="What I Deliver"
          badgeVariant="white"
          title="Engineering & Development"
          titleAccent="Services"
          watermark="06"
          description="From complex React & Next.js web applications to accessible design systems, I deliver clean modular architecture, fluid micro-interactions, and sub-second performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-white/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-inner shadow-white/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="white" size="sm">
                      {service.tag}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Core Deliverables
                    </span>
                    {service.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white text-zinc-200 hover:text-black text-xs font-semibold transition-all duration-200"
                  >
                    <span>Get In Touch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
