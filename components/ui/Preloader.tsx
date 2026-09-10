"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "@/components/providers/ThemeContext";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [phrase, setPhrase] = useState("INITIALIZING ENGINE");
  const { playSuccess } = useThemeContext();

  useEffect(() => {
    const totalDuration = 1250; // 1.25s duration
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(current);

      if (current < 35) {
        setPhrase("INITIALIZING NEXT.JS 16 CORE");
      } else if (current < 75) {
        setPhrase("COMPILING REACT 19 & MOTION");
      } else if (current < 99) {
        setPhrase("ASSEMBLING EXPERIENCES");
      } else {
        setPhrase("WELCOME TO MAHMOUD'S WORLD");
      }

      if (current >= 100) {
        clearInterval(interval);
        try {
          playSuccess?.();
        } catch {}
        setTimeout(() => {
          setIsLoading(false);
        }, 220);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed inset-0 z-[99999] pointer-events-none select-none flex flex-col justify-between overflow-hidden">
          {/* Top Shutter Half (Slides Up on exit) */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.9,
                ease: [0.85, 0, 0.15, 1], // cinematic luxury split curve
              },
            }}
            className="absolute top-0 inset-x-0 h-1/2 bg-[#040405] border-b border-white/[0.06] z-10"
          />

          {/* Bottom Shutter Half (Slides Down on exit) */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{
              y: "100%",
              transition: {
                duration: 0.9,
                ease: [0.85, 0, 0.15, 1],
              },
            }}
            className="absolute bottom-0 inset-x-0 h-1/2 bg-[#040405] border-t border-white/[0.06] z-10"
          />

          {/* Central Foreground Content (Fades & Scales gracefully before split) */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="relative z-20 flex flex-col justify-between h-full p-6 sm:p-12 text-white"
          >
            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-semibold text-zinc-200 tracking-wider">
                  MAHMOUD SALAH
                </span>
              </div>

              <div className="text-[11px] tracking-widest text-zinc-400 hidden sm:block">
                FRONTEND ARCHITECT • 2026
              </div>
            </div>

            {/* Center Stage: Monumental Counter & Kinetic Laser Line */}
            <div className="flex flex-col items-center justify-center my-auto">
              {/* Giant Numerical Counter */}
              <div className="relative flex items-baseline">
                <span className="text-7xl sm:text-9xl md:text-[11rem] font-black font-heading tracking-tighter text-white select-none leading-none">
                  {progress.toString().padStart(2, "0")}
                </span>
                <span className="text-2xl sm:text-4xl font-mono text-emerald-400 font-bold ml-1 sm:ml-2">
                  %
                </span>
              </div>

              {/* Status Phrase with Smooth Blur Fade */}
              <div className="h-6 flex items-center justify-center mt-3">
                <motion.span
                  key={phrase}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.2 }}
                  className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-zinc-300 text-center font-medium"
                >
                  {phrase}
                </motion.span>
              </div>

              {/* Centered Glowing Laser Progress Bar */}
              <div className="w-56 sm:w-80 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-white rounded-full shadow-[0_0_16px_rgba(52,211,153,1)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            {/* Bottom Status & Geo Coordinates */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2">
                <span className="text-zinc-300">MANSOURA, EG</span>
                <span className="text-zinc-700">•</span>
                <span className="text-zinc-400">31.04° N, 31.37° E</span>
              </div>

              <div className="text-emerald-400 font-semibold tracking-wider text-[11px]">
                {progress === 100 ? "ACCESS GRANTED" : "COMPILING..."}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
