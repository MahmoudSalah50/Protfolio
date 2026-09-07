"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { sallaExpertise, shopifyExpertise } from "@/data/ecommerce";
import {
  ShoppingBag,
  Store,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function EcommerceSpecialization() {
  const [activeTab, setActiveTab] = useState<"salla" | "shopify">("salla");

  const currentPlatform = activeTab === "salla" ? sallaExpertise : shopifyExpertise;

  return (
    <section id="ecommerce" className="py-24 relative overflow-hidden bg-zinc-950/60">
      {/* Subtle monochrome ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="E-Commerce Expertise"
          badgeVariant="white"
          title="Specialized Storefront Development"
          titleAccent="Salla & Shopify"
          watermark="04"
          description="Beyond building web apps, I craft bespoke storefronts, custom theme engines, and high-conversion checkout flows across Salla (Twig) and Shopify (Liquid)."
        />

        {/* Platform Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("salla")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all ${
                activeTab === "salla"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Salla Theme Engine (Twig)</span>
            </button>

            <button
              onClick={() => setActiveTab("shopify")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all ${
                activeTab === "shopify"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shopify Storefronts (Liquid)</span>
            </button>
          </div>
        </div>

        {/* Main Platform Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Overview Banner Card */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden bg-zinc-950/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="white" size="md">
                      {currentPlatform.platform}
                    </Badge>
                    <span className="text-xs font-mono text-zinc-400">
                      Bespoke Theme Development
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentPlatform.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl font-light">
                    {currentPlatform.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentPlatform.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 rounded-2xl bg-black/60 border border-white/[0.08] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-white/[0.08]">
                    <span>PLATFORM TARGET</span>
                    <span className="text-white font-bold uppercase">
                      {activeTab === "salla" ? "MENA / Saudi (RTL)" : "Global DTC (Multi-curr)"}
                    </span>
                  </div>

                  <div className="space-y-2 text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Templating:</span>
                      <span className="text-white font-semibold">
                        {activeTab === "salla" ? "Twig 3.x + Macros" : "Liquid 5.x + JSON"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Component Framework:</span>
                      <span className="text-white font-semibold">
                        {activeTab === "salla" ? "Twilight Web Components" : "Section Rendering API"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Layout Direction:</span>
                      <span className="text-white font-semibold">
                        {activeTab === "salla" ? "Native RTL & LTR" : "Fluid LTR / Multi-lang"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Checkout Optimization:</span>
                      <span className="text-emerald-400 font-semibold">
                        Instant Slide-Out Drawer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Deep Capabilities Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPlatform.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="p-7 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/90 backdrop-blur-xl shadow-lg hover:border-white/20 transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="white" size="sm">
                      {cap.badge}
                    </Badge>
                    <span className="text-xs font-mono text-zinc-500">0{i + 1}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {cap.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {cap.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {cap.bulletPoints.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
