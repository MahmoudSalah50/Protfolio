"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { motion } from "framer-motion";

export function CreativeansStats() {
  const stats = [
    { value: "4+", label: "Years of Engineering" },
    { value: "25+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "4", label: "Core Platforms (Salla • Shopify • Zid • Next.js)" },
  ];

  return (
    <section className="relative z-20 mx-auto px-6 py-24 md:py-32 text-white max-w-6xl">
      <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
        <p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl leading-relaxed">
          Mahmoud Salah is a specialized Frontend Architect and E-Commerce Engineer based in Mansoura, Egypt. I build digital products that matter.
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-5xl">
          Business leaders and fast-growing brands trust me to solve their critical technical challenges: from Next.js App Router architectures to high-conversion Salla (Twig) &amp; Shopify (Liquid) custom themes.
        </h2>
      </div>

      {/* 4 Creativeans-style Big Metric Counters */}
      <div className="w-full mt-16 md:mt-24 pt-12 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold font-mono tracking-tight text-white leading-none">
                {stat.value}
              </span>
              <span className="mt-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
