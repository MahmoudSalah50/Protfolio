"use client";

import React from "react";
import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  isHovered?: boolean;
}

// 1. React.js: Rotating Atom Orbitals with pulsing nucleus
export function ReactAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer spinning orbit 1 */}
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full text-white"
        animate={{ rotate: 360 }}
        transition={{ duration: isHovered ? 4 : 10, repeat: Infinity, ease: "linear" }}
      >
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
      </motion.svg>

      {/* Orbit 2 (60 deg rotated) */}
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full text-white"
        animate={{ rotate: -360 }}
        transition={{ duration: isHovered ? 5 : 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      >
        <g transform="rotate(60 12 12)">
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
        </g>
      </motion.svg>

      {/* Orbit 3 (120 deg rotated) */}
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full text-white"
        animate={{ rotate: 360 }}
        transition={{ duration: isHovered ? 6 : 14, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      >
        <g transform="rotate(120 12 12)">
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
        </g>
      </motion.svg>

      {/* Pulsing Nucleus */}
      <motion.div
        animate={{ scale: isHovered ? [1, 1.4, 1] : [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10"
      />
    </div>
  );
}

// 2. Next.js: Modern triangle monogram with light beam scanning down the stroke
export function NextAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.4" />
        
        {/* 'N' Left Stem */}
        <line x1="8.5" y1="7" x2="8.5" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        
        {/* 'N' Diagonal with animated dash stroke */}
        <motion.line
          x1="8.5"
          y1="7"
          x2="15.5"
          y2="17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          animate={{ strokeDashoffset: [0, -30] }}
          transition={{ duration: isHovered ? 1 : 2.5, repeat: Infinity, ease: "linear" }}
          strokeDasharray="4 2"
        />

        {/* 'N' Right Stem */}
        <line x1="15.5" y1="7" x2="15.5" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.8" />
      </motion.svg>
    </div>
  );
}

// 3. TypeScript: Strict code brackets with glowing active cursor
export function TypeScriptAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center font-mono font-bold ${className}`}>
      <motion.div
        animate={{ scale: isHovered ? 1.05 : 1 }}
        className="w-full h-full rounded-lg border border-white/40 bg-white/5 flex items-center justify-center p-1 relative overflow-hidden"
      >
        <span className="text-[11px] tracking-tighter text-white font-extrabold">TS</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          className="w-1 h-2.5 bg-white ml-0.5"
        />
        {/* Edge scanning light */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: isHovered ? 1.2 : 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

// 4. JavaScript: Animated curly brackets with kinetic sparks
export function JavaScriptAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center font-mono font-bold ${className}`}>
      <motion.div
        animate={{ scale: isHovered ? 1.05 : 1 }}
        className="w-full h-full rounded-lg border border-white/30 bg-white/5 flex items-center justify-center relative overflow-hidden"
      >
        <span className="text-[11px] tracking-tighter text-zinc-200 font-extrabold flex items-center gap-0.5">
          <motion.span animate={{ x: isHovered ? [-1, 0, -1] : 0 }} transition={{ repeat: Infinity, duration: 1 }}>
            &#123;
          </motion.span>
          <span className="text-white">JS</span>
          <motion.span animate={{ x: isHovered ? [1, 0, 1] : 0 }} transition={{ repeat: Infinity, duration: 1 }}>
            &#125;
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
}

// 5. HTML5 & CSS3: Modern wireframe layout with scanning render bar
export function HtmlCssAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.4" />
        <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="9" y1="8" x2="9" y2="21" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        {/* Scanning render bar */}
        <motion.line
          x1="11"
          y1="12"
          x2="19"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={{
            y: isHovered ? [-2, 5, -2] : [-1, 4, -1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// 6. Salla Theme Engine: Luxury Storefront Bag with radiant pulse ring
export function SallaAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background radial beacon */}
      <motion.div
        animate={{ scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-white blur-sm pointer-events-none"
      />
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
        animate={{ y: isHovered ? [-1, 1, -1] : 0 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M6 8V6C6 4.34315 7.34315 3 9 3H15C16.6569 3 18 4.34315 18 6V8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="4" y="8" width="16" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        {/* Center monogram mark */}
        <motion.circle
          cx="12"
          cy="14.5"
          r="2.2"
          fill="currentColor"
          animate={{ scale: isHovered ? [1, 1.25, 1] : 1 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

// 7. Shopify Storefronts: Dynamic Shopping Bag with Tag Reveal
export function ShopifyAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
        animate={{ rotate: isHovered ? [-3, 3, -3] : 0 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M5 9L6.5 20H17.5L19 9H5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 10V6.5C9 5.11929 10.1193 4 11.5 4H12.5C13.8807 4 15 5.11929 15 6.5V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Inner tag node */}
        <motion.path
          d="M12 12V16M10 14H14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.8 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

// 8. Zid Commerce: Kinetic Lightning Energy Bolt
export function ZidAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
        animate={{
          scale: isHovered ? [1, 1.15, 1] : 1,
        }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        <motion.path
          d="M13 2L4 14H12L11 22L20 10H12L13 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            fill: isHovered ? ["rgba(255,255,255,0)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0)"] : "none",
          }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

// 9. Twig & Liquid: Dynamic template tag brackets
export function TwigLiquidAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center font-mono font-bold ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        {/* Bracket { */}
        <motion.path
          d="M6 5C6 7 5 8 3 8C5 8 6 9 6 11M6 13C6 15 5 16 3 16C5 16 6 17 6 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ x: isHovered ? [-1, 0, -1] : 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        {/* Inner % percent */}
        <motion.circle cx="10" cy="9" r="1.5" fill="currentColor" />
        <line x1="9" y1="15" x2="15" y2="9" stroke="currentColor" strokeWidth="1.4" />
        <motion.circle cx="14" cy="15" r="1.5" fill="currentColor" />
        {/* Bracket } */}
        <motion.path
          d="M18 5C18 7 19 8 21 8C19 8 18 9 18 11M18 13C18 15 19 16 21 16C19 16 18 17 18 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ x: isHovered ? [1, 0, 1] : 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

// 10. Zustand: Minimalist atomic state with orbiting electrons
export function ZustandAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.4" />
        {/* Orbiting state node */}
        <motion.circle
          cx="12"
          cy="4"
          r="2.2"
          fill="currentColor"
          animate={{ rotate: 360 }}
          transition={{ duration: isHovered ? 2 : 4.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "12px 12px" }}
        />
        {/* Core center state */}
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          fill="currentColor"
          animate={{ scale: isHovered ? [1, 1.25, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

// 11. TanStack Query: Smooth inertia rotating dual sync arrows
export function TanStackQueryAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
        animate={{ rotate: 360 }}
        transition={{ duration: isHovered ? 2.5 : 7, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M20 12A8 8 0 0 0 6.34 6.34L4 8.5M4 4V8.5H8.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12A8 8 0 0 0 17.66 17.66L20 15.5M20 20V15.5H15.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}

// 12. Redux Toolkit: 3-tier layered state stack with floating vertical shift
export function ReduxAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        {/* Top layer */}
        <motion.path
          d="M12 3L20 7.5L12 12L4 7.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          animate={{ y: isHovered ? [-1.5, 0, -1.5] : [0, -1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Middle layer */}
        <path
          d="M4 12L12 16.5L20 12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom layer */}
        <path
          d="M4 16.5L12 21L20 16.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}

// 13. Axios & REST APIs: Bi-directional network pulses
export function AxiosAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
        {/* Request arrow */}
        <motion.path
          d="M5 9H19M19 9L15 5M19 9L15 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: isHovered ? [0, 2, 0] : [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        {/* Response arrow */}
        <motion.path
          d="M19 15H5M5 15L9 11M5 15L9 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.7"
          animate={{ x: isHovered ? [0, -2, 0] : [0, -1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

// 14. Zod & React Hook Form: Security Shield with animated drawing checkmark
export function ZodAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
        <path
          d="M12 3L4 6.5V11.5C4 16.5 7.4 20.9 12 22C16.6 20.9 20 16.5 20 11.5V6.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.6"
        />
        {/* Dynamic checkmark */}
        <motion.path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: isHovered ? [0.3, 1] : 1, opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// 15. Tailwind CSS: Flowing aerodynamic wind vectors
export function TailwindAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        <motion.path
          d="M3 10C5.5 10 7 8 9.5 8C12 8 13.5 10 16 10C18 10 19.5 8.5 21 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={{ strokeDashoffset: isHovered ? [0, -20] : [0, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          strokeDasharray="16 4"
        />
        <motion.path
          d="M3 15C5.5 15 7 13 9.5 13C12 13 13.5 15 16 15C18 15 19.5 13.5 21 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={{ strokeDashoffset: isHovered ? [0, -20] : [0, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.3 }}
          strokeDasharray="16 4"
        />
      </motion.svg>
    </div>
  );
}

// 16. Framer Motion: Geometric physics shape morphing
export function FramerMotionAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
        animate={{ rotate: isHovered ? [0, 90, 180, 270, 360] : 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <path d="M4 4H20V12H12L4 4Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M4 12H12L20 20H4V12Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M12 12L20 20H12V12Z" fill="currentColor" fillOpacity="0.9" />
      </motion.svg>
    </div>
  );
}

// 17. Responsive & RTL Architecture: Dynamic Bi-directional orientation
export function ResponsiveRtlAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.5" />
        <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth="1.4" />
        {/* Dynamic switching RTL/LTR arrow indicator */}
        <motion.path
          d="M7 10.5H17M17 10.5L14 8M17 10.5L14 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            x: isHovered ? [-2, 2, -2] : 0,
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// 18. Git & Workflow: Branching commit tree with pulsing nodes
export function GitAnimatedIcon({ className = "w-6 h-6", isHovered = false }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <line x1="6" y1="8.5" x2="6" y2="15.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 14C6 11 10 9 14 9" stroke="currentColor" strokeWidth="1.4" />
        {/* Target branch node */}
        <motion.circle
          cx="17"
          cy="9"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.4"
          animate={{ scale: isHovered ? [1, 1.3, 1] : [1, 1.15, 1], fill: isHovered ? "currentColor" : "none" }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

// 19. Domain Card Animated Icons
export function FrontendDomainIcon({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:bg-white group-hover:text-black transition-all">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        animate={{ rotate: 360 }}
        transition={{ duration: isHovered ? 4 : 12, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </motion.svg>
    </div>
  );
}

export function EcommerceDomainIcon({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:bg-white group-hover:text-black transition-all">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        animate={{ y: isHovered ? [-1, 1, -1] : 0 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M6 8V6C6 4.34315 7.34315 3 9 3H15C16.6569 3 18 4.34315 18 6V8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="8" width="16" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <motion.path
          d="M9 13L11 15L15 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

export function StateDomainIcon({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:bg-white group-hover:text-black transition-all">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        animate={{ rotate: 360 }}
        transition={{ duration: isHovered ? 3 : 9, repeat: Infinity, ease: "linear" }}
      >
        <path d="M21 12A9 9 0 0 0 5.64 5.64L3 8M3 3V8H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12A9 9 0 0 0 18.36 18.36L21 16M21 21V16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}

export function MotionDomainIcon({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:bg-white group-hover:text-black transition-all">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : [1, 1.08, 1],
          rotate: isHovered ? [0, 45, 0] : 0,
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}

// Main Dispatcher by skill name
export function SkillAnimatedIcon({
  name,
  isHovered = false,
  className = "w-6 h-6",
}: {
  name: string;
  isHovered?: boolean;
  className?: string;
}) {
  switch (name) {
    case "React.js":
      return <ReactAnimatedIcon className={className} isHovered={isHovered} />;
    case "Next.js":
      return <NextAnimatedIcon className={className} isHovered={isHovered} />;
    case "TypeScript":
      return <TypeScriptAnimatedIcon className={className} isHovered={isHovered} />;
    case "JavaScript (ES6+)":
      return <JavaScriptAnimatedIcon className={className} isHovered={isHovered} />;
    case "HTML5 & CSS3":
      return <HtmlCssAnimatedIcon className={className} isHovered={isHovered} />;
    case "Salla Theme Engine":
      return <SallaAnimatedIcon className={className} isHovered={isHovered} />;
    case "Shopify Storefronts":
      return <ShopifyAnimatedIcon className={className} isHovered={isHovered} />;
    case "Zid Commerce Platform":
      return <ZidAnimatedIcon className={className} isHovered={isHovered} />;
    case "Twig & Liquid Engines":
      return <TwigLiquidAnimatedIcon className={className} isHovered={isHovered} />;
    case "Zustand":
      return <ZustandAnimatedIcon className={className} isHovered={isHovered} />;
    case "TanStack Query":
      return <TanStackQueryAnimatedIcon className={className} isHovered={isHovered} />;
    case "Redux Toolkit":
      return <ReduxAnimatedIcon className={className} isHovered={isHovered} />;
    case "Axios & REST APIs":
      return <AxiosAnimatedIcon className={className} isHovered={isHovered} />;
    case "Zod & React Hook Form":
      return <ZodAnimatedIcon className={className} isHovered={isHovered} />;
    case "Tailwind CSS v4":
      return <TailwindAnimatedIcon className={className} isHovered={isHovered} />;
    case "Framer Motion":
      return <FramerMotionAnimatedIcon className={className} isHovered={isHovered} />;
    case "Responsive & RTL Architecture":
      return <ResponsiveRtlAnimatedIcon className={className} isHovered={isHovered} />;
    case "Git & Clean Workflow":
      return <GitAnimatedIcon className={className} isHovered={isHovered} />;
    default:
      return <ReactAnimatedIcon className={className} isHovered={isHovered} />;
  }
}
