"use client";

import React, { useState, useEffect, useRef } from "react";
import { useThemeContext, AccentTheme } from "@/components/providers/ThemeContext";
import { profileData } from "@/data/profile";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  Sparkles,
  Download,
  FolderGit2,
  Cpu,
  Layers,
  FlaskConical,
  Mail,
  Palette,
  Volume2,
  VolumeX,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Actions" | "Themes" | "Quick Links";
  title: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { accent, setAccent, audioEnabled, toggleAudio, playWhoosh, playClick, playSuccess } = useThemeContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Global key listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) playWhoosh();
          return !prev;
        });
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, playWhoosh]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const triggerConfetti = () => {
    setIsOpen(false);
    playSuccess();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#10b981", "#a855f7", "#06b6d4"],
      });
    } catch {
      // Ignore
    }
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-hero",
      category: "Navigation",
      title: "Jump to Hero",
      description: "Header intro, portrait, and status pill",
      icon: <Terminal className="w-4 h-4 text-white" />,
      action: () => scrollTo("hero"),
    },
    {
      id: "nav-lab",
      category: "Navigation",
      title: "Interactive Component Lab",
      description: "Live 3D card tilt, cart simulator, and physics sandbox",
      icon: <FlaskConical className="w-4 h-4 text-emerald-400" />,
      action: () => scrollTo("lab"),
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Featured Projects",
      description: "Explore all 5 production web applications & themes",
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      action: () => scrollTo("projects"),
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Skills & Technical Stack",
      description: "Explore technical competencies, frameworks, and tools",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo("skills"),
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Professional Experience",
      description: "Career progression & sticky card deck timeline",
      icon: <Cpu className="w-4 h-4 text-amber-400" />,
      action: () => scrollTo("experience"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Get in Touch",
      description: "Send a project inquiry or message",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => scrollTo("contact"),
    },

    // Actions
    {
      id: "action-cv",
      category: "Actions",
      title: "Download Curriculum Vitae",
      description: "Mahmoud_Salah_CV.pdf direct download",
      icon: <Download className="w-4 h-4 text-white" />,
      action: () => {
        setIsOpen(false);
        playSuccess();
        const a = document.createElement("a");
        a.href = "/cv.pdf";
        a.download = "Mahmoud_Salah_CV.pdf";
        a.click();
      },
    },
    {
      id: "action-audio",
      category: "Actions",
      title: audioEnabled ? "Mute Sound Effects (SFX)" : "Enable Sound Effects (SFX)",
      description: "Procedural Web Audio API sound synthesis",
      icon: audioEnabled ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />,
      action: () => {
        toggleAudio();
        setIsOpen(false);
      },
    },
    {
      id: "action-confetti",
      category: "Actions",
      title: "Trigger Confetti Celebration",
      description: "Launch celebratory particle fireworks",
      icon: <Sparkles className="w-4 h-4 text-yellow-400" />,
      action: triggerConfetti,
    },

    // Theme Accents
    {
      id: "theme-titanium",
      category: "Themes",
      title: "Titanium White Accent",
      description: "Clean minimalist monochrome aesthetic",
      icon: <Palette className="w-4 h-4 text-zinc-200" />,
      action: () => {
        setAccent("titanium");
        setIsOpen(false);
      },
    },
    {
      id: "theme-emerald",
      category: "Themes",
      title: "Cyber Emerald Accent",
      description: "Modern vibrant emerald green accent",
      icon: <Palette className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setAccent("emerald");
        setIsOpen(false);
      },
    },
    {
      id: "theme-violet",
      category: "Themes",
      title: "Electric Violet Accent",
      description: "Deep luxury React & Next.js aesthetic",
      icon: <Palette className="w-4 h-4 text-purple-400" />,
      action: () => {
        setAccent("violet");
        setIsOpen(false);
      },
    },
    {
      id: "theme-cyan",
      category: "Themes",
      title: "Cyber Cyan Accent",
      description: "High-tech futuristic glow",
      icon: <Palette className="w-4 h-4 text-cyan-400" />,
      action: () => {
        setAccent("cyan");
        setIsOpen(false);
      },
    },

    // Quick Links
    {
      id: "link-live-store",
      category: "Quick Links",
      title: "Visit Luxe Storefront (Live)",
      description: "https://luxe-one-bay.vercel.app/",
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setIsOpen(false);
        playClick();
        window.open(profileData.socials.featuredStore, "_blank");
      },
    },
    {
      id: "link-github",
      category: "Quick Links",
      title: "Mahmoud's GitHub Profile",
      description: "https://github.com/MahmoudSalah50",
      icon: <ExternalLink className="w-4 h-4 text-zinc-300" />,
      action: () => {
        setIsOpen(false);
        playClick();
        window.open(profileData.socials.github, "_blank");
      },
    },
    {
      id: "link-linkedin",
      category: "Quick Links",
      title: "Connect on LinkedIn",
      description: "Direct profile message & recommendations",
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        playClick();
        window.open(profileData.socials.linkedin, "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating HUD Pill Button at Bottom-Right (Desktop only) */}
      <motion.button
        onClick={() => {
          playWhoosh();
          setIsOpen(true);
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-40 hidden md:flex px-3.5 py-2 rounded-full glass-panel border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-2xl items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/40 transition-all cursor-pointer group bg-[#09090b]/90"
        aria-label="Open command palette"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-semibold text-white">⌘ Command Center</span>
        <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-zinc-400 group-hover:text-white font-mono">
          Ctrl+K
        </span>
      </motion.button>

      {/* Modal Dialog Backdrop & Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-xl glass-panel rounded-3xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden bg-[#09090b]/95 backdrop-blur-3xl z-10"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
                <Search className="w-5 h-5 text-zinc-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDownList}
                  placeholder="Type a command or search sections, projects, themes..."
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results List */}
              <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-xs font-mono text-zinc-500">
                    No matching commands found for &quot;{search}&quot;.
                  </div>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                          isSelected
                            ? "bg-white text-black font-semibold shadow-md"
                            : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-black/10 text-black" : "bg-white/[0.06] text-white"
                            }`}
                          >
                            {cmd.icon}
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs sm:text-sm truncate">{cmd.title}</div>
                            <div
                              className={`text-[10px] font-mono truncate ${
                                isSelected ? "text-zinc-700" : "text-zinc-500"
                              }`}
                            >
                              {cmd.description}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider ${
                              isSelected
                                ? "bg-black/10 text-black"
                                : "bg-white/[0.05] text-zinc-400"
                            }`}
                          >
                            {cmd.category}
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 ${
                              isSelected ? "text-black" : "text-zinc-600"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer status bar */}
              <div className="px-5 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-3">
                  <span>
                    Use <kbd className="px-1 py-0.5 rounded bg-white/10 text-zinc-300">↑</kbd>{" "}
                    <kbd className="px-1 py-0.5 rounded bg-white/10 text-zinc-300">↓</kbd> to navigate
                  </span>
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-white/10 text-zinc-300">Enter</kbd> to select
                  </span>
                </div>
                <div>
                  <kbd className="px-1 py-0.5 rounded bg-white/10 text-zinc-300">ESC</kbd> to close
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
