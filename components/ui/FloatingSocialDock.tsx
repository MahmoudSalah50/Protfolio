"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { useThemeContext } from "@/components/providers/ThemeContext";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";
import {
  Mail,
  Phone,
  MessageCircle,
  Share2,
  X,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingSocialDock() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { playClick, playHover } = useThemeContext();

  const socialLinks = [
    {
      id: "github",
      name: "GitHub",
      url: profileData.socials.github,
      icon: <GithubIcon className="w-4 h-4" />,
      color: "hover:text-white hover:bg-white/20",
      accent: "#ffffff",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: profileData.socials.linkedin,
      icon: <LinkedinIcon className="w-4 h-4" />,
      color: "hover:text-sky-400 hover:bg-sky-500/20",
      accent: "#0ea5e9",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/20150740490",
      icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
      color: "hover:text-emerald-300 hover:bg-emerald-500/20",
      accent: "#10b981",
    },
    {
      id: "twitter",
      name: "Twitter / X",
      url: profileData.socials.twitter,
      icon: <TwitterIcon className="w-4 h-4" />,
      color: "hover:text-cyan-400 hover:bg-cyan-500/20",
      accent: "#06b6d4",
    },
    {
      id: "email",
      name: "Send Email",
      url: `mailto:${profileData.emails[0]}`,
      icon: <Mail className="w-4 h-4 text-amber-300" />,
      color: "hover:text-amber-200 hover:bg-amber-500/20",
      accent: "#f59e0b",
    },
  ];

  return (
    <>
      {/* Desktop Floating Vertical Social Dock: Pinned at Middle Left */}
      <aside
        aria-label="Social Profiles Dock"
        className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 p-2 rounded-full glass-panel border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl bg-[#09090b]/85"
      >
        {/* Top Decorative Indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse my-1" />

        {socialLinks.map((social, idx) => (
          <div
            key={social.id}
            className="relative flex items-center"
            onMouseEnter={() => {
              playHover();
              setHoveredIndex(idx);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className={`p-2.5 rounded-full text-zinc-400 transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>

            {/* Hover Tooltip Pill */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-14 px-3 py-1 rounded-xl glass-panel border border-white/20 text-xs font-mono font-medium text-white shadow-xl whitespace-nowrap bg-[#08080a]/95 pointer-events-none z-50 flex items-center gap-1.5"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: social.accent }}
                  />
                  <span>{social.name}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Bottom Small Connector Line */}
        <div className="w-0.5 h-4 bg-white/10 rounded-full my-1" />
      </aside>
    </>
  );
}
