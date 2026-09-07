import { cn } from "@/lib/utils";
import React from "react";
import { Badge, BadgeProps } from "./Badge";

interface SectionHeaderProps {
  badgeText: string;
  badgeVariant?: BadgeProps["variant"];
  title: string;
  titleAccent?: string;
  description: string;
  className?: string;
  align?: "left" | "center";
  watermark?: string;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "white",
  title,
  titleAccent,
  description,
  className,
  align = "center",
  watermark,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col relative",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {watermark && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl font-extrabold font-mono text-white/[0.02] select-none pointer-events-none tracking-widest z-0">
          {watermark}
        </span>
      )}

      <Badge variant={badgeVariant} className="mb-4 relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        {badgeText}
      </Badge>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 relative z-10">
        {title}{" "}
        {titleAccent && (
          <span className="text-gradient underline decoration-white/20 underline-offset-8">
            {titleAccent}
          </span>
        )}
      </h2>

      <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light relative z-10">
        {description}
      </p>
    </div>
  );
}
