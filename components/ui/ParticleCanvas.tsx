"use client";

import React, { useEffect, useRef } from "react";
import { useThemeContext } from "@/components/providers/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { accent } = useThemeContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color mapper based on current accent
    const getAccentRGB = (): string => {
      switch (accent) {
        case "emerald":
          return "16, 185, 129"; // emerald-500
        case "violet":
          return "168, 85, 247"; // purple-500
        case "cyan":
          return "6, 182, 212"; // cyan-500
        case "titanium":
        default:
          return "255, 255, 255";
      }
    };

    const mouse = {
      x: -9999,
      y: -9999,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Generate responsive particle pool
    let particles: Particle[] = [];
    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 18000), 75);
      particles = [];
      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.4 + 0.15;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.6 + 0.8,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: Math.random() * 0.02 + 0.008,
        });
      }
    };

    initParticles();

    // Render loop
    let tick = 0;
    const render = () => {
      tick += 0.03;
      ctx.clearRect(0, 0, width, height);
      const rgb = getAccentRGB();

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance/gravitation physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Pulse alpha
        p.alpha = p.baseAlpha + Math.sin(tick + i) * 0.15;
        if (p.alpha < 0.05) p.alpha = 0.05;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();

        // Connect proximity lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxConnectDist = 130;

          if (lineDist < maxConnectDist) {
            const lineAlpha = (1 - lineDist / maxConnectDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${rgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accent]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
