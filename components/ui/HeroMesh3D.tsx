"use client";

import React, { useEffect, useRef } from "react";

export function HeroMesh3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse influence
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left - width / 2) / (width / 2);
      mouse.y = (e.clientY - rect.top - height / 2) / (height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D Geometric Torus / Sphere points
    const R = Math.min(width, height) * 0.28; // Major radius
    const r = R * 0.42; // Minor radius
    const segmentsU = 28;
    const segmentsV = 16;
    const points: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < segmentsU; i++) {
      const u = (i / segmentsU) * Math.PI * 2;
      for (let j = 0; j < segmentsV; j++) {
        const v = (j / segmentsV) * Math.PI * 2;
        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);
        points.push({ x, y, z });
      }
    }

    let angleX = 0.4;
    let angleY = 0;
    let angleZ = 0.2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation with mouse influence
      angleY += 0.006 + mouse.x * 0.005;
      angleX += 0.003 + mouse.y * 0.003;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      const fov = 400;
      const projected: { x: number; y: number; z: number; alpha: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;

        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        // Rotate Z
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;

        // Perspective
        const depth = z2 + 500;
        const scale = fov / Math.max(depth, 100);
        const px = width / 2 + x3 * scale;
        const py = height / 2 + y3 * scale;
        const alpha = Math.max(0.08, Math.min(0.65, (z2 + R) / (2 * R)));

        projected.push({ x: px, y: py, z: z2, alpha });
      }

      // Draw wireframe connections
      ctx.lineWidth = 0.9;
      for (let i = 0; i < segmentsU; i++) {
        for (let j = 0; j < segmentsV; j++) {
          const idx = i * segmentsV + j;
          const nextV = i * segmentsV + ((j + 1) % segmentsV);
          const nextU = ((i + 1) % segmentsU) * segmentsV + j;

          const p1 = projected[idx];
          const p2 = projected[nextV];
          const p3 = projected[nextU];

          // Draw ring line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(39, 252, 242, ${p1.alpha * 0.25})`; // Creativeans cyan
          ctx.stroke();

          // Draw longitudinal line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.strokeStyle = `rgba(135, 57, 213, ${p1.alpha * 0.25})`; // Creativeans violet
          ctx.stroke();
        }
      }

      // Draw subtle nodes
      for (let i = 0; i < projected.length; i += 2) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.5})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full pointer-events-none opacity-45 -z-10"
      aria-hidden="true"
    />
  );
}
