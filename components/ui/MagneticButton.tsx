"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useThemeContext } from "@/components/providers/ThemeContext";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  pullFactor?: number; // Distance multiplier
}

export function Magnetic({
  children,
  className = "",
  pullFactor = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { playHover } = useThemeContext();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * pullFactor;
    const deltaY = (clientY - centerY) * pullFactor;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseEnter = () => {
    playHover();
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
