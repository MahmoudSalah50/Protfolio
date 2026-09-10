"use client";

import { useEffect, useState } from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Terminal,
  Clock,
  Heart,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setLocalTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050505] text-zinc-400 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-white/[0.02] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] text-center sm:text-left">
          {/* Column 1 & 2: Bio & Profile (Centered on mobile) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold shadow-md">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-lg tracking-tight">
                  {profileData.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {profileData.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm sm:max-w-md leading-relaxed font-light mx-auto sm:mx-0">
              Engineering high-performance web applications, scalable design systems, and responsive digital products across React 19, Next.js App Router, and TypeScript.
            </p>

            {/* Time & Location badges (Centered on mobile) */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Mansoura, EG:</span>
                <span className="text-white font-semibold">{localTime || "12:00 PM"}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Quick Links (Centered on mobile) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm flex flex-col items-center sm:items-start">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills &amp; Mastery
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Capabilities & Assets (Centered on mobile) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-sm flex flex-col items-center sm:items-start">
              <li>
                <a
                  href="/cv.pdf"
                  download="Mahmoud_Salah_CV.pdf"
                  className="hover:underline transition-colors inline-flex items-center gap-1 text-white font-semibold"
                >
                  Download CV (PDF) ↓
                </a>
              </li>
              <li>
                <a
                  href="https://luxe-one-bay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors inline-flex items-center gap-1 text-zinc-300"
                >
                  Luxe Storefront ↗
                </a>
              </li>
              <li>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors inline-flex items-center gap-1 text-zinc-300"
                >
                  GitHub Profile ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact & Socials (Centered on mobile) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs flex flex-col items-center sm:items-start">
              <a
                href={`mailto:${profileData.emails[0]}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-zinc-400" />
                <span>{profileData.emails[0]}</span>
              </a>
              <a
                href={`tel:${profileData.phones[0].replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{profileData.phones[0]}</span>
              </a>
            </div>

            {/* Social Icons (Centered on mobile) */}
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white hover:text-black transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white hover:text-black transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white hover:text-black transition-all"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white hover:text-black transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top (Centered on mobile) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mahmoud Salah. All rights reserved.</p>

          <div className="flex items-center justify-center gap-1 text-zinc-400">
            <span>Crafted with passion in</span>
            <span className="text-white font-medium">Egypt</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white hover:text-black transition-all text-zinc-300 active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
