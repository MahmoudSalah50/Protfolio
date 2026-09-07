"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { GithubIcon } from "@/components/ui/SocialIcons";
import {
  ExternalLink,
  FileText,
  ShoppingBag,
  Zap,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  const luxeProject = projectsData.find((p) => p.id === "luxe-ecommerce") || projectsData[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"catalog" | "cart" | "motion">("catalog");
  const [simulatedCartCount, setSimulatedCartCount] = useState(0);
  const [addedEffect, setAddedEffect] = useState(false);

  const handleAddToCart = () => {
    setSimulatedCartCount((c) => c + 1);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 1400);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Monochrome ambient backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.03] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Selected Work"
          badgeVariant="white"
          title="Featured"
          titleAccent="Projects"
          watermark="03"
          description="Production web applications and high-conversion storefronts. Currently featuring the Luxe flagship e-commerce platform, with new client case studies being added."
        />

        {/* Large Luxe Spotlight Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl bg-zinc-950/90"
        >
          {/* Top Browser Bar Mockup */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-black/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">
                https://luxe-one-bay.vercel.app/
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="emerald" size="sm">
                Live Production
              </Badge>
              <Badge variant="white" size="sm">
                Next.js App Router
              </Badge>
            </div>
          </div>

          {/* Main Card Content */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Overview & CTAs */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    <ShoppingBag className="w-3.5 h-3.5 text-white" />
                    <span>Headless E-Commerce Architecture</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {luxeProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                    {luxeProject.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {luxeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={luxeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-sm font-bold shadow-xl shadow-white/10 transition-all active:scale-[0.98]"
                  >
                    <span>Visit Live Storefront</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {luxeProject.githubUrl && (
                    <a
                      href={luxeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/20 text-sm font-medium transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <Button
                    size="md"
                    variant="outline"
                    onClick={() => setModalOpen(true)}
                    icon={<FileText className="w-4 h-4" />}
                    className="rounded-full"
                  >
                    Full Case Study
                  </Button>
                </div>
              </div>

              {/* Right Column: Key Architecture Highlights & Live Interaction preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    Engineering Highlights
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {luxeProject.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all text-center sm:text-left"
                    >
                      <div className="text-[10px] font-mono text-zinc-400 mb-0.5">
                        {metric.label}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white font-mono">
                        {metric.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                  <Zap className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Modular component hierarchy built with Server Components and optimistic state mutations.</span>
                </div>

                {/* Live Optimistic UI Demo Widget */}
                <div className="p-4 rounded-xl bg-white/[0.05] border border-white/15 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">Live Optimistic UI Demo:</span>
                    <span className="px-2 py-0.5 rounded-full bg-white text-black font-bold">
                      Cart: {simulatedCartCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-white">Luxe Chrono Watch</div>
                      <div className="text-[10px] font-mono text-zinc-400">$380.00 • In Stock</div>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all active:scale-95 ${
                        addedEffect
                          ? "bg-emerald-400 text-black shadow-md shadow-emerald-400/20"
                          : "bg-white text-black hover:bg-zinc-200"
                      }`}
                    >
                      {addedEffect ? "✓ Added (< 15ms)" : "+ Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Architecture Highlights for Luxe */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Engineering Deep-Dive Features
                </h4>

                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-full border border-white/10">
                  <button
                    onClick={() => setActiveTab("catalog")}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeTab === "catalog"
                        ? "bg-white text-black font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Catalog Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab("cart")}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeTab === "cart"
                        ? "bg-white text-black font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Cart &amp; State
                  </button>
                  <button
                    onClick={() => setActiveTab("motion")}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeTab === "motion"
                        ? "bg-white text-black font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    UI &amp; Micro-Motion
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-sm text-zinc-300 leading-relaxed">
                {activeTab === "catalog" && (
                  <div className="space-y-2">
                    <p className="font-semibold text-white">
                      Server-Side Rendered Catalog with Instant Filters:
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Product descriptions and metadata render as zero-JS React Server Components (RSC) to minimize initial client payload, while client islands power smooth animated category filter chips and variant swatches.
                    </p>
                  </div>
                )}
                {activeTab === "cart" && (
                  <div className="space-y-2">
                    <p className="font-semibold text-white">
                      Optimistic Slide-Out Cart Drawer:
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Built with Zustand for lightweight state management with automatic localStorage synchronization. Items update in &lt; 20ms without waiting for slow server roundtrips, with graceful rollback on errors.
                    </p>
                  </div>
                )}
                {activeTab === "motion" && (
                  <div className="space-y-2">
                    <p className="font-semibold text-white">
                      Micro-Interactions &amp; Framer Motion Physics:
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Engineered with spring physics for layout transitions, drawer slide-overs, and interactive swatch selectors, delivering a tactile and responsive user experience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Projects Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                Additional Case Studies In Preparation
              </span>
            </div>
            <h4 className="text-lg font-bold text-white tracking-tight">
              More Client Storefronts &amp; Web Apps Coming Soon
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Currently documenting recent production themes across Salla (Twig), Shopify (Liquid), and Zid platforms. In the meantime, you can explore the live Luxe Storefront above.
            </p>
          </div>

          <a
            href="https://github.com/MahmoudSalah50"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white hover:text-black border border-white/10 text-xs font-mono font-semibold text-white transition-all shrink-0"
          >
            Browse GitHub Repositories ↗
          </a>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={modalOpen ? luxeProject : null}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
