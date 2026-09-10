"use client";

import React from "react";

export function TopNoticeBar() {
  const items = [
    "Frontend Architecture for High-Growth Digital Products",
    "Specialized Salla (Twig) & Shopify (Liquid) Storefronts",
    "Next.js App Router & React 19 Performance Engineering",
    "Available for Client Projects & Frontend Engineering Roles",
    "Based in Mansoura, Egypt • Global Delivery",
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-50 overflow-hidden bg-[#18181b]/70 py-1.5 backdrop-blur-md border-b border-white/[0.08]">
      <div className="flex w-max items-center animate-marquee select-none">
        <div className="flex shrink-0 items-center gap-x-8 pr-8 whitespace-nowrap text-[11px] font-mono tracking-wider text-zinc-300">
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27FCF2]" />
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-x-8 pr-8 whitespace-nowrap text-[11px] font-mono tracking-wider text-zinc-300" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27FCF2]" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
