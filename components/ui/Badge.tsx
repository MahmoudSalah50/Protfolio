import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "white" | "silver" | "neutral" | "emerald" | "orange" | "amber" | "rose" | "purple" | "cyan" | "indigo";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "white",
  size = "sm",
  ...props
}: BadgeProps) {
  const variantStyles = {
    white: "bg-white/10 text-white border-white/20",
    silver: "bg-zinc-800/80 text-zinc-200 border-zinc-700/60",
    neutral: "bg-zinc-900/60 text-zinc-400 border-zinc-800",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    orange: "bg-white/10 text-white border-white/20",
    amber: "bg-white/10 text-white border-white/20",
    rose: "bg-white/10 text-white border-white/20",
    purple: "bg-white/10 text-white border-white/20",
    cyan: "bg-white/10 text-white border-white/20",
    indigo: "bg-white/10 text-white border-white/20",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide",
    md: "px-3 py-1 text-xs font-mono font-semibold tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
