"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Sparkles, MessageCircle, FolderGit2, User, Wrench, Send } from "lucide-react";
import { useThemeContext } from "@/components/providers/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export function BottomNav() {
  const [show, setShow] = useState(false);
  const { playClick, playSuccess } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom dock after scrolling 150px
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 flex items-center justify-center px-4 pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#08080a]/90 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.9)] max-w-full overflow-x-auto no-scrollbar">
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="size-9 sm:size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer flex-shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </button>

            {/* Navigation Pills */}
            <div className="flex items-center gap-0.5 sm:gap-1 text-xs font-mono">
              <button
                onClick={() => scrollTo("about")}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                <User className="size-3.5 sm:hidden" />
                <span className="hidden sm:inline">About</span>
              </button>

              <button
                onClick={() => scrollTo("skills")}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                <Wrench className="size-3.5 sm:hidden" />
                <span className="hidden sm:inline">Skills</span>
              </button>

              <button
                onClick={() => scrollTo("projects")}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                <FolderGit2 className="size-3.5 sm:hidden" />
                <span className="hidden sm:inline">Projects</span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-emerald-400 font-semibold hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                <Send className="size-3.5 sm:hidden" />
                <span className="hidden sm:inline">Contact</span>
              </button>
            </div>

            {/* Direct WhatsApp Quick Connect Button */}
            <a
              href="https://wa.me/20150740490"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              onClick={playSuccess}
              className="size-9 sm:size-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center transition-transform active:scale-90 shadow-md shadow-emerald-500/30 flex-shrink-0"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
