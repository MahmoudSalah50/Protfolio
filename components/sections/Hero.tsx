"use client";

import { useState } from "react";
import Image from "next/image";
import mahmoudImg from "@/public/mahmoud.jpg";
import { profileData } from "@/data/profile";
import { useThemeContext } from "@/components/providers/ThemeContext";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import {
  Download,
  ArrowRight,
  MapPin,
  Sparkles,
  Copy,
  Check,
  Code2,
  ShieldCheck,
  Layers,
  Zap,
  MessageCircle,
  Terminal,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { playClick, playSuccess } = useThemeContext();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.emails[0]);
    setCopied(true);
    playSuccess?.();
    setTimeout(() => setCopied(false), 2400);
  };

  const techBadges = [
    "Next.js App Router",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Framer Motion",
  ];

  const heroStats = [
    {
      label: "Frontend Projects",
      value: "25+",
      icon: Code2,
      accent: "text-cyan-400",
      borderGlow: "hover:border-cyan-500/40",
      gradient: "from-cyan-500/10 to-transparent",
    },
    {
      label: "Code Architecture",
      value: "Strict TS",
      icon: ShieldCheck,
      accent: "text-emerald-400",
      borderGlow: "hover:border-emerald-500/40",
      gradient: "from-emerald-500/10 to-transparent",
    },
    {
      label: "Core Stack",
      value: "Next.js & React 19",
      icon: Layers,
      accent: "text-purple-400",
      borderGlow: "hover:border-purple-500/40",
      gradient: "from-purple-500/10 to-transparent",
    },
    {
      label: "Performance Focus",
      value: "Sub-Second UX",
      icon: Zap,
      accent: "text-amber-400",
      borderGlow: "hover:border-amber-500/40",
      gradient: "from-amber-500/10 to-transparent",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden tech-grid-pattern"
    >
      {/* Dynamic Ambient Background Aura Spheres */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1150px] h-[680px] bg-gradient-to-tr from-white via-cyan-500/20 to-emerald-500/20 rounded-full blur-[180px] pointer-events-none -z-10"
      />

      {/* Floating Ambient Tech Particles (Background Atmosphere) */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-36 left-8 sm:left-24 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[11px] font-mono text-zinc-400 pointer-events-none -z-10 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>&lt; Next.js 16 /&gt;</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        className="absolute top-48 right-12 sm:right-28 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[11px] font-mono text-zinc-400 pointer-events-none -z-10 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>{"{ Strict TypeScript }"}</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-1/4 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[11px] font-mono text-zinc-400 pointer-events-none -z-10 shadow-lg"
      >
        <Sparkles className="w-3 h-3 text-purple-400" />
        <span>✦ 60FPS Fluid Motion</span>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Bio, Tech Chips, and High-Impact CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill with Live Radar Pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-400" />
              </span>
              <span className="text-xs font-mono text-zinc-300 font-medium tracking-wide">
                {profileData.status}
              </span>
            </div>

            {/* Main Title & Dynamic Gradient Accent */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-zinc-400 font-semibold">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mahmoud Salah</span>
                <span className="text-zinc-600">•</span>
                <span className="text-emerald-400">Frontend Developer</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-heading">
                Crafting Scalable <br />
                <span className="bg-gradient-to-r from-white via-emerald-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                  Web Applications
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
                Frontend Developer specializing in building high-performance,
                accessible digital products with{" "}
                <span className="text-white font-medium">Next.js App Router</span>,{" "}
                <span className="text-white font-medium">React 19</span>, and{" "}
                <span className="text-white font-medium">TypeScript</span>. Focused
                on clean architecture, sub-second latency, and fluid micro-motion.
              </p>
            </div>

            {/* Clean Tech Stack Badges with Interactive Spring Hover */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {techBadges.map((badge) => (
                <motion.span
                  key={badge}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-400/40 hover:bg-emerald-500/[0.08] transition-all cursor-default shadow-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* High-Impact Action CTAs with Light Sweep & Arrow Motion */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="/cv.pdf"
                download="Mahmoud_Salah_CV.pdf"
                onClick={playSuccess}
                className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-100 text-sm font-bold shadow-xl shadow-white/15 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download CV (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                onClick={playClick}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/20 text-sm font-medium transition-all cursor-pointer shadow-lg"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Direct Quick WhatsApp Action */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/20150740490"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium transition-all cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </div>

            {/* Metadata Bar & Interactive One-Click Copy Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mansoura, Egypt</span>
              </span>

              <span className="text-zinc-700 hidden sm:inline">•</span>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">
                      Email Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <span className="text-zinc-700 hidden sm:inline">•</span>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-700 hidden sm:inline">•</span>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 100% Pure Portrait inside Kinetic Floating Glowing Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Multi-Layer Aura Behind Portrait */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.75, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -inset-4 sm:-inset-8 rounded-[44px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-purple-500/15 blur-3xl pointer-events-none"
            />

            {/* Smooth Floating Kinetic Portrait Container with Pure Image - ZERO badges or overlays on it */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-0.5, 0.5, -0.5] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.025 }}
              className="relative max-w-sm sm:max-w-md w-full z-10 p-2 sm:p-2.5 rounded-[2.4rem] bg-gradient-to-b from-white/25 via-white/5 to-white/15 border border-white/25 shadow-[0_30px_70px_rgba(0,0,0,0.95)] group cursor-pointer"
            >
              <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-zinc-950 border border-white/10">
                <Image
                  src={mahmoudImg}
                  alt="Mahmoud Salah"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimalist 4-Card Stats Grid Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {heroStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 ${stat.borderGlow} hover:shadow-xl transition-all text-left shadow-lg bg-zinc-950/70 group cursor-default relative overflow-hidden`}
              >
                {/* Subtle Hover Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <div className="flex items-center justify-between mb-2.5 relative z-10">
                  <span className="text-xs text-zinc-400 font-mono tracking-tight">
                    {stat.label}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 group-hover:bg-white/[0.1] transition-colors">
                    <Icon className={`w-3.5 h-3.5 ${stat.accent}`} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-white transition-colors relative z-10">
                  {stat.value}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
