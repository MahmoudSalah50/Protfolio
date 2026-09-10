"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mahmoudImg from "@/public/mahmoud.jpg";
import { profileData } from "@/data/profile";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { AudioToggle } from "@/components/ui/AudioToggle";
import { useThemeContext } from "@/components/providers/ThemeContext";
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "about", label: "About", number: "01" },
  { id: "skills", label: "Skills", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id), 120);
  const { playClick, playSuccess, playWhoosh } = useThemeContext();

  const handleNavClick = (id: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Dynamic Island Capsule Container */}
        <div className="w-full glass-panel rounded-full px-3 sm:px-4 py-2 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl border border-white/20 pointer-events-auto bg-[#050505]/90">
          {/* Brand Logo */}
          <Link
            href="#hero"
            onClick={playClick}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="size-8.5 rounded-full gradient-ring p-0.5 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <div className="size-full rounded-full overflow-hidden bg-zinc-900 relative">
                <Image
                  src={mahmoudImg}
                  alt="Mahmoud Salah"
                  fill
                  sizes="34px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Mahmoud Salah
              </span>
              <span className="text-[9px] text-zinc-400 font-mono hidden sm:inline -mt-0.5">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.08]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium transition-colors rounded-full focus:outline-none ${
                    isActive ? "text-black font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full shadow-sm z-0"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster: Audio + WhatsApp + Download CV + Contact CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <AudioToggle />

            {/* Direct WhatsApp Quick Connect */}
            <a
              href="https://wa.me/20150740490"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+20 150 740 490)"
              onClick={playClick}
              className="size-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
            </a>

            {/* Direct CV Download */}
            <a
              href="/cv.pdf"
              download="Mahmoud_Salah_CV.pdf"
              onClick={playSuccess}
              title="Download CV (PDF)"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-zinc-300 hover:text-white transition-all text-xs font-mono active:scale-95"
            >
              <Download className="w-3 h-3 text-white" />
              <span>CV</span>
            </a>

            {/* Get In Touch CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="group hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/80 bg-white text-black hover:bg-zinc-200 transition-all duration-300 text-xs font-semibold shrink-0 active:scale-95"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                playWhoosh();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-3xl flex flex-col justify-between p-6 pointer-events-auto overflow-y-auto"
          >
            {/* Top Bar inside Mobile Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="size-8.5 rounded-full gradient-ring p-0.5 shadow-md shrink-0">
                  <div className="size-full rounded-full overflow-hidden bg-zinc-900 relative">
                    <Image
                      src={mahmoudImg}
                      alt="Mahmoud Salah"
                      fill
                      sizes="34px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Mahmoud Salah</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Frontend Developer</div>
                </div>
              </div>

              <button
                onClick={() => {
                  playWhoosh();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Navigation Links List (Numbered, High-Contrast) */}
            <div className="py-6 flex flex-col space-y-3">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-white text-black font-bold shadow-lg"
                        : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span className="text-lg font-bold tracking-tight">{link.label}</span>
                    <span className={`text-xs font-mono ${isActive ? "text-zinc-600" : "text-zinc-500"}`}>
                      {link.number}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Action Buttons & Socials Footer */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* WhatsApp & CV Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://wa.me/20150740490"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-lg active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="/cv.pdf"
                  download="Mahmoud_Salah_CV.pdf"
                  onClick={playSuccess}
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/15 border border-white/15 text-white font-mono text-xs active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="text-center text-[10px] font-mono text-zinc-500">
                Mansoura, Egypt • Available for Hire
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
