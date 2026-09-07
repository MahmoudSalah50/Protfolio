"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "NEXT.JS 15 (APP ROUTER)",
  "REACT 19",
  "TYPESCRIPT",
  "SALLA CLI & TWIG",
  "SHOPIFY & LIQUID",
  "ZID COMMERCE PLATFORM",
  "TAILWIND CSS V4",
  "TANSTACK QUERY",
  "FRAMER MOTION",
  "ZUSTAND",
  "CORE WEB VITALS 100",
  "HEADLESS E-COMMERCE",
  "REST APIS & AXIOS",
  "RESPONSIVE UI/UX",
];

export function TechMarquee() {
  const repeatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/[0.08] bg-black/40 backdrop-blur-md">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 text-xs sm:text-sm font-mono tracking-wider font-bold text-zinc-400 hover:text-white transition-colors select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
