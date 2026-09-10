"use client";

import React from "react";
import { useThemeContext } from "@/components/providers/ThemeContext";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function AudioToggle() {
  const { audioEnabled, toggleAudio } = useThemeContext();

  return (
    <button
      onClick={toggleAudio}
      title={audioEnabled ? "Mute interactive audio FX" : "Enable interactive sound design"}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
        audioEnabled
          ? "bg-white text-black border-white shadow-md shadow-white/10 font-bold"
          : "bg-white/[0.04] text-zinc-400 border-white/10 hover:text-white hover:border-white/25"
      }`}
      aria-label="Toggle sound effects"
    >
      {audioEnabled ? (
        <>
          <div className="flex items-end gap-0.5 h-3 w-3.5">
            <motion.span
              animate={{ height: ["40%", "100%", "30%"] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              className="w-0.5 bg-black rounded-full"
            />
            <motion.span
              animate={{ height: ["80%", "30%", "90%"] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="w-0.5 bg-black rounded-full"
            />
            <motion.span
              animate={{ height: ["50%", "90%", "40%"] }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.2 }}
              className="w-0.5 bg-black rounded-full"
            />
          </div>
          <span className="text-[10px] tracking-wider hidden sm:inline">SFX ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-70" />
          <span className="text-[10px] tracking-wider hidden sm:inline">SFX</span>
        </>
      )}
    </button>
  );
}
