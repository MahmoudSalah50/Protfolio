"use client";

import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/SocialIcons";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Zap,
  Cpu,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({
  project,
  onClose,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0e0f14] shadow-2xl p-6 sm:p-8 z-10 space-y-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="orange">{project.category}</Badge>
                <span className="text-xs font-mono text-zinc-400">
                  Engineering Case Study
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-300 mt-1">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study dialog"
              className="p-2 rounded-xl bg-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-xs text-zinc-400 font-mono mb-0.5">
                  {metric.label}
                </div>
                <div className="text-lg font-bold text-white font-mono">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Core Problem & Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold uppercase">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Strategic Goal</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.caseStudy.goal}
              </p>
            </div>
          </div>

          {/* Architecture Strategy */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase font-mono">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>Architectural Approach</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-orange-400 font-mono font-bold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Engineered Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-zinc-400 font-bold block">
                Engineering Hurdles
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.caseStudy.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-zinc-400 font-bold block">
                Implemented Solutions
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.caseStudy.solution.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Deliverables & Technical Outcomes */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-semibold uppercase">
              <Zap className="w-4 h-4 text-white" />
              <span>Key Architectural Outcomes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.performanceGains.map((gain, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs"
                >
                  <span className="text-zinc-400 font-medium">{gain.label}:</span>
                  <span className="text-white font-mono font-bold">
                    {gain.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights Note */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-zinc-300 leading-relaxed font-mono">
              <strong className="text-white">Engineering Takeaway: </strong>
              {project.caseStudy.architectureHighlights}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.06] text-[11px] font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-zinc-200 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:brightness-110 text-xs font-medium text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  <span>Live Production Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
