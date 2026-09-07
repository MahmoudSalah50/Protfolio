"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-white text-black font-semibold shadow-lg shadow-white/10 hover:bg-zinc-200 hover:shadow-white/20 active:scale-[0.98] border border-white",
    secondary:
      "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 shadow-sm active:scale-[0.98]",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/[0.06] active:scale-[0.98]",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.06] active:scale-[0.98]",
    glow:
      "relative bg-black text-white border border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
}
