"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { useThemeContext } from "@/components/providers/ThemeContext";
import { Project } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/SocialIcons";
import {
  ExternalLink,
  FileText,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  Kanban,
  Layers,
  Pause,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { playClick } = useThemeContext();

  // Create a massive, seamless track repeating the 4 projects 3 times in half 1 (12 cards) and 3 times in half 2 (12 cards)
  // Total 24 cards = ~10,500px track length!
  // This mathematically guarantees ZERO stutter, ZERO blank space, and ZERO jump across all screen resolutions up to 4K!
  const singleSet = projectsData;
  const halfSet = [...singleSet, ...singleSet, ...singleSet]; // 12 cards
  const fullTrack = [...halfSet, ...halfSet]; // 24 cards (exact 50% loop symmetry)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            badgeText="Selected Work"
            badgeVariant="white"
            title="Featured"
            titleAccent="Projects"
            watermark="03"
            description="Continuous showcase of modern web applications, interactive dashboards, and design systems. Hover any card to pause and explore live demos."
          />

          {/* Marquee status indicator */}
          <div className="flex items-center gap-3 pb-2 self-start md:self-end">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 transition-all active:scale-95"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  <span>Resume Stream</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-zinc-400" />
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Stream • Hover to Pause
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Seamless Marquee Viewport */}
      <div className="projects-marquee-wrapper relative w-full overflow-hidden py-4">
        {/* Left & Right Cinematic Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-48 lg:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-48 lg:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20" />

        {/* Continuous Moving Track: 100% GPU-accelerated CSS with freeze-frame pause on hover */}
        <div
          className="projects-marquee-track gap-6 sm:gap-8"
          style={isPaused ? { animationPlayState: "paused" } : undefined}
        >
          {fullTrack.map((project, idx) => {
            const projectIndex = (idx % 4) + 1;

            return (
              <div
                key={`${project.id}-${idx}`}
                className="w-[340px] sm:w-[420px] rounded-3xl bg-[#09090c]/90 backdrop-blur-2xl border border-white/10 hover:border-white/40 p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)] group shrink-0"
              >
                {/* Top Browser Bar Mockup */}
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="text-[11px] font-mono text-zinc-400 pl-2">
                        0{projectIndex}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="white" size="sm">
                        {project.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Visual Live Preview Frame / Mockup Window */}
                  <div className="w-full h-44 rounded-2xl bg-black/60 border border-white/10 p-4 mb-4 relative overflow-hidden flex flex-col justify-between group-hover:border-white/20 transition-all">
                    {/* Project-specific visual preview art */}
                    {project.id === "luxe-ecommerce" && (
                      <>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-white font-bold">Luxe Storefront</span>
                          <span className="text-emerald-400 font-semibold">$380.00</span>
                        </div>
                        <div className="flex items-center justify-center my-auto py-2">
                          <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform bg-gradient-to-tr from-white/5 to-transparent">
                            <ShoppingBag className="w-8 h-8 text-white/90" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                          <span>Next.js App Router</span>
                          <span className="text-emerald-400 font-bold">&lt; 15ms Latency</span>
                        </div>
                      </>
                    )}

                    {project.id === "saas-analytics-dashboard" && (
                      <>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-white font-bold">Executive Metrics</span>
                          <span className="text-cyan-400 font-semibold">$148.9k MRR</span>
                        </div>
                        <div className="h-20 w-full flex items-end gap-1.5 my-auto px-2">
                          {[30, 45, 38, 65, 52, 75, 68, 85, 80, 95].map((val, bIdx) => (
                            <div
                              key={bIdx}
                              style={{ height: `${val}%` }}
                              className={`flex-1 rounded-t-sm ${
                                bIdx === 9 ? "bg-cyan-400 shadow-sm shadow-cyan-400" : "bg-white/25"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                          <span>TanStack Query</span>
                          <span className="text-cyan-400 font-bold">60 FPS Recharts</span>
                        </div>
                      </>
                    )}

                    {project.id === "motion-kanban-workspace" && (
                      <>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-white font-bold">Kanban Productivity</span>
                          <span className="text-purple-400 font-semibold">Sprint Active</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 my-auto py-1">
                          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 space-y-1">
                            <span className="text-[9px] font-mono text-zinc-500 block">TODO</span>
                            <div className="h-1.5 w-full bg-white/20 rounded-full" />
                          </div>
                          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 space-y-1">
                            <span className="text-[9px] font-mono text-purple-300 block">IN PROGRESS</span>
                            <div className="h-1.5 w-3/4 bg-purple-400 rounded-full" />
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                            <span className="text-[9px] font-mono text-emerald-300 block">DONE</span>
                            <div className="h-1.5 w-full bg-emerald-400 rounded-full" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                          <span>Framer Motion</span>
                          <span className="text-purple-300 font-bold">Drag Physics</span>
                        </div>
                      </>
                    )}

                    {project.id === "design-system-library" && (
                      <>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-white font-bold">UI Component Suite</span>
                          <span className="text-amber-400 font-semibold">Radix + Tailwind</span>
                        </div>
                        <div className="flex flex-col gap-2 my-auto px-2">
                          <div className="flex gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-white text-black text-[10px] font-mono font-bold">
                              Button Primary
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white text-[10px] font-mono">
                              Ghost
                            </span>
                          </div>
                          <div className="flex gap-1.5 items-center">
                            <span className="w-3 h-3 rounded-full bg-white/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="w-3 h-3 rounded-full bg-purple-400" />
                            <span className="text-[10px] font-mono text-zinc-400 pl-1">Theme Tokens</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                          <span>WCAG 2.1 AA</span>
                          <span className="text-amber-400 font-bold">100% Type-Safe</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors mb-1.5 line-clamp-1">
                    {project.title}
                  </h4>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/[0.02] text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Cluster: Live Demo, GitHub, Case Study */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {/* Live Preview Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClick}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold font-mono transition-all shadow-md active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {/* GitHub Repo Button */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        className="p-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-95"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Case Study Details Modal */}
                  <button
                    onClick={() => {
                      playClick();
                      setActiveModalProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
