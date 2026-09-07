"use client";

import Image from "next/image";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import {
  ArrowRight,
  Download,
  ShoppingBag,
  ExternalLink,
  MapPin,
  Sparkles,
  Zap,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const dynamicPhrases = [
  "High-Converting E-Commerce Storefronts",
  "Next.js App Router & React 19 Architecture",
  "Bespoke Salla Theme Engine & Twig",
  "Shopify Liquid Storefront Engineering",
  "Zid Commerce Platform Solutions",
  "Responsive Modern Web Interfaces",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center overflow-hidden tech-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Typography & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Animated Ticker, Intro & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-zinc-300">
                {profileData.status}
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-zinc-400 font-semibold block">
                  Mahmoud Salah
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                  Frontend <br />
                  <span className="text-gradient">Developer</span>
                </h1>
              </div>

              {/* Kinetic Animated Phrase Ticker */}
              <div className="flex items-center justify-center lg:justify-start gap-2 h-11 overflow-hidden">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
                  Specializing in:
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phraseIndex}
                    initial={{ y: 22, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -22, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black font-mono text-xs sm:text-sm font-bold shadow-lg shadow-white/10"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-black shrink-0" />
                    <span className="truncate">{dynamicPhrases[phraseIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
                Engineering modern, interactive web applications and conversion-tuned e-commerce storefronts using React, Next.js, and TypeScript — with deep platform mastery across Salla, Shopify, and Zid.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="/cv.pdf"
                download="Mahmoud_Salah_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-sm font-bold shadow-xl shadow-white/10 transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/20 text-sm font-medium transition-all active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Featured Project</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <Button
                size="md"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="rounded-full"
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Meta & Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mansoura, Egypt</span>
              </span>

              <span className="text-zinc-700">•</span>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-700">•</span>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait of Mahmoud Salah with Floating Interactive Orbit Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Aura Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-white/15 via-transparent to-white/5 opacity-40 blur-2xl pointer-events-none"
            />

            {/* Floating Badge 1: Top Left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 z-20 glass-panel px-3.5 py-2 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-2.5 backdrop-blur-xl"
            >
              <div className="w-7 h-7 rounded-xl bg-white text-black flex items-center justify-center font-bold text-xs shadow-md">
                ⚡
              </div>
              <div>
                <div className="text-[11px] font-bold text-white leading-tight">
                  Clean Architecture
                </div>
                <div className="text-[9px] font-mono text-zinc-400">
                  Strict TypeScript &amp; RSC
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Top Right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 -right-4 sm:-right-6 z-20 glass-panel px-3.5 py-2 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-2.5 backdrop-blur-xl"
            >
              <div className="w-7 h-7 rounded-xl bg-zinc-800 text-white flex items-center justify-center font-bold text-xs border border-white/10 shadow-md">
                🛍️
              </div>
              <div>
                <div className="text-[11px] font-bold text-white leading-tight">
                  Salla, Shopify &amp; Zid
                </div>
                <div className="text-[9px] font-mono text-zinc-400">
                  E-Commerce Specialist
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 3: Bottom Right */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-2 sm:-right-4 z-20 glass-panel px-3.5 py-2 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-2.5 backdrop-blur-xl"
            >
              <div className="w-7 h-7 rounded-xl bg-white text-black flex items-center justify-center font-bold text-xs shadow-md">
                ⚛️
              </div>
              <div>
                <div className="text-[11px] font-bold text-white leading-tight">
                  Next.js App Router
                </div>
                <div className="text-[9px] font-mono text-zinc-400">
                  React 19 &amp; TypeScript
                </div>
              </div>
            </motion.div>

            <div className="relative group max-w-sm w-full z-10">
              {/* Luxury Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 p-2.5 shadow-2xl">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/mahmoud.jpg"
                    alt="Mahmoud Salah - Frontend Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Identity Chip */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 glass-panel px-4 py-2.5 rounded-xl border border-white/20 flex items-center justify-between backdrop-blur-md">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">
                        Mahmoud Salah
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        Frontend Developer
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-white text-black font-semibold">
                      <Code2 className="w-3 h-3" /> Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
