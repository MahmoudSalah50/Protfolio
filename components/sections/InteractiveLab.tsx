"use client";

import React, { useState, useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { useThemeContext } from "@/components/providers/ThemeContext";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Layers,
  ShoppingBag,
  Sliders,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Zap,
  Tag,
  RefreshCw,
  Code2,
} from "lucide-react";

export function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<"card3d" | "ecommerce" | "i18n" | "physics">("card3d");
  const { playHover, playClick, playSuccess } = useThemeContext();

  // --- Sub-experiment 1: 3D Holographic Parallax Card ---
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]), { damping: 20, stiffness: 200 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // --- Sub-experiment 2: Optimistic E-Commerce Micro-Engine ---
  const [cartCount, setCartCount] = useState(0);
  const [stockRemaining, setStockRemaining] = useState(8);
  const [isAdding, setIsAdding] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState(false);
  const basePrice = 450;
  const currentPrice = couponApplied ? basePrice * 0.9 : basePrice;

  const handleAddToCart = () => {
    if (stockRemaining <= 0) return;
    setIsAdding(true);
    playClick();
    setCartCount((c) => c + 1);
    setStockRemaining((s) => s - 1);
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "MAHMOUD10") {
      setCouponApplied(true);
      setCouponError(false);
      playSuccess();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#10b981", "#ffffff", "#f59e0b"],
        });
      } catch {
        // Ignore
      }
    } else {
      setCouponError(true);
      playClick();
    }
  };

  // --- Sub-experiment 3: i18n & Currency Switcher ---
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [currency, setCurrency] = useState<"USD" | "SAR" | "EGP" | "AED">("SAR");

  const currencyRates = {
    USD: { rate: 1, symbol: "$" },
    SAR: { rate: 3.75, symbol: "SAR" },
    EGP: { rate: 50.2, symbol: "EGP" },
    AED: { rate: 3.67, symbol: "AED" },
  };

  // --- Sub-experiment 4: Framer Motion Physics Sandbox ---
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(15);
  const [mass, setMass] = useState(1);
  const [ballToggled, setBallToggled] = useState(false);

  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-zinc-950/70 border-y border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Live Experiment Sandbox"
          badgeVariant="white"
          title="Interactive Engineering"
          titleAccent="Playground"
          watermark="LAB"
          description="Test-drive live UI interactions, physics simulations, optimistic cart synchronization, and bi-directional architecture directly inside this sandbox."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl gap-1">
            <button
              onClick={() => {
                setActiveTab("card3d");
                playClick();
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === "card3d"
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Parallax Card</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("ecommerce");
                playClick();
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === "ecommerce"
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Optimistic Cart</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("i18n");
                playClick();
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === "i18n"
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>RTL &amp; Currency</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("physics");
                playClick();
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === "physics"
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Spring Physics</span>
            </button>
          </div>
        </div>

        {/* Sandbox Content Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden bg-zinc-950/90">
          <AnimatePresence mode="wait">
            {/* 1. 3D Parallax Card */}
            {activeTab === "card3d" && (
              <motion.div
                key="card3d"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="white" size="sm">
                      Kinematic Physics
                    </Badge>
                    <span className="text-xs font-mono text-zinc-400">
                      Multi-Layer 3D Depth
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Multi-Plane 3D Holographic Card
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    Hover and move your mouse over the card to observe continuous Euler rotation (`rotateX` / `rotateY`) computed with Framer Motion spring dampening, delivering fluid 60 FPS motion without frame drops.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2 font-mono text-xs text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Transform Engine:</span>
                      <span className="text-white">CSS 3D perspective(1000px)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Smoothing:</span>
                      <span className="text-white">useSpring(stiffness: 200, damping: 20)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Performance:</span>
                      <span className="text-emerald-400">GPU Accelerated (Hardware composited)</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center py-4" style={{ perspective: 1000 }}>
                  <motion.div
                    ref={cardRef}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    className="relative w-full max-w-sm rounded-3xl p-7 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-pointer group select-none"
                  >
                    {/* Floating ambient glow border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                    <div style={{ transform: "translateZ(40px)" }} className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs font-bold border border-white/20">
                          PROTOTYPE #01
                        </span>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>

                      <div className="h-28 rounded-2xl bg-gradient-to-tr from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center p-4">
                        <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-xl shadow-xl">
                          MS
                        </div>
                      </div>

                      <div style={{ transform: "translateZ(25px)" }}>
                        <div className="text-lg font-bold text-white tracking-tight">
                          Mahmoud Salah
                        </div>
                        <div className="text-xs font-mono text-zinc-400">
                          Frontend Architect &amp; E-Commerce Lead
                        </div>
                      </div>

                      <div
                        style={{ transform: "translateZ(15px)" }}
                        className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400"
                      >
                        <span>Interactive 3D Layer</span>
                        <span className="text-emerald-400 font-semibold">Live Interactive</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* 2. Optimistic Cart & Coupon Simulator */}
            {activeTab === "ecommerce" && (
              <motion.div
                key="ecommerce"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="emerald" size="sm">
                      Optimistic Mutations
                    </Badge>
                    <span className="text-xs font-mono text-zinc-400">
                      Sub-15ms Latency
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Instant E-Commerce Cart &amp; Promo Engine
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    Test optimistic local mutations. When clicking Add to Cart, state updates instantaneously without waiting for a server round-trip. Try typing discount code <code className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono font-bold">MAHMOUD10</code> for an instant discount calculation!
                  </p>

                  <form onSubmit={handleApplyCoupon} className="space-y-2 pt-2">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Promo Code Simulator:
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Try typing: MAHMOUD10"
                          className="w-full px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-white"
                        />
                        <Tag className="w-3.5 h-3.5 text-zinc-500 absolute right-3 top-2.5" />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-white text-black font-mono font-bold text-xs hover:bg-zinc-200 transition-all shrink-0 active:scale-95"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        10% Discount applied successfully!
                      </p>
                    )}
                    {couponError && (
                      <p className="text-xs font-mono text-rose-400">
                        Invalid code. Hint: Use &quot;MAHMOUD10&quot;
                      </p>
                    )}
                  </form>
                </div>

                <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span>SIMULATED PRODUCT DRAWER</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-400">Cart Total:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-black font-bold font-mono text-xs shadow-md">
                        {cartCount} items
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div>
                      <div className="font-bold text-sm text-white">Luxe Chrono Titanium</div>
                      <div className="text-[11px] font-mono text-zinc-400">
                        SKU: LUX-2026-TIT • Stock: {stockRemaining} units left
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-bold font-mono text-white">
                          ${currentPrice.toFixed(2)}
                        </span>
                        {couponApplied && (
                          <span className="text-xs font-mono text-zinc-500 line-through">
                            ${basePrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={stockRemaining <= 0}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md active:scale-95 shrink-0 ${
                        isAdding
                          ? "bg-emerald-400 text-black scale-105"
                          : stockRemaining <= 0
                          ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                          : "bg-white text-black hover:bg-zinc-200"
                      }`}
                    >
                      {isAdding ? "✓ Added (< 12ms)" : stockRemaining <= 0 ? "Sold Out" : "+ Add To Cart"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
                    <span>Zustand store optimistic write</span>
                    <span className="text-emerald-400">Sync status: OK</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. RTL & Currency Switcher */}
            {activeTab === "i18n" && (
              <motion.div
                key="i18n"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="white" size="sm">
                      Bi-Directional Engine
                    </Badge>
                    <span className="text-xs font-mono text-zinc-400">
                      Arabic RTL &amp; Global Currencies
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    GCC RTL &amp; Multi-Currency Switcher
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    Salla and Middle-East storefronts require deep bi-directional typography alignment, reversed flex flows, and currency conversion without layout jumping. Test live switching below:
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="text-xs font-mono uppercase text-zinc-400 block mb-2 font-bold">
                        Layout Direction &amp; Language:
                      </span>
                      <div className="inline-flex p-1 rounded-xl bg-white/[0.05] border border-white/10">
                        <button
                          onClick={() => {
                            setLanguage("en");
                            playClick();
                          }}
                          className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            language === "en" ? "bg-white text-black font-bold shadow" : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          English (LTR)
                        </button>
                        <button
                          onClick={() => {
                            setLanguage("ar");
                            playClick();
                          }}
                          className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            language === "ar" ? "bg-white text-black font-bold shadow" : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          العربية (RTL)
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase text-zinc-400 block mb-2 font-bold">
                        Storefront Currency:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(["SAR", "USD", "AED", "EGP"] as const).map((curr) => (
                          <button
                            key={curr}
                            onClick={() => {
                              setCurrency(curr);
                              playClick();
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                              currency === curr
                                ? "bg-white text-black font-bold shadow"
                                : "bg-white/[0.04] text-zinc-400 border border-white/10 hover:text-white"
                            }`}
                          >
                            {curr}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  dir={language === "ar" ? "rtl" : "ltr"}
                  className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 transition-all"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                    <span>{language === "ar" ? "معاينة واجهة المتجر" : "LIVE STOREFRONT PREVIEW"}</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white">
                      {currencyRates[currency].symbol}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="text-base font-bold text-white">
                        {language === "ar" ? "حقيبة جلدية فاخرة — إصدار حصري" : "Bespoke Leather Briefcase — Limited Edition"}
                      </div>
                      <p className="text-xs text-zinc-400">
                        {language === "ar"
                          ? "مصنوعة يدوياً من أفخر أنواع الجلود الإيطالية بتصميم انسيابي."
                          : "Handcrafted using premium Italian full-grain leather with tailored ergonomics."}
                      </p>
                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-lg font-bold font-mono text-white">
                          {(180 * currencyRates[currency].rate).toFixed(0)} {currencyRates[currency].symbol}
                        </span>
                        <button className="px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-bold font-mono hover:bg-zinc-200 transition-colors">
                          {language === "ar" ? "أضف للسلة" : "Quick Add"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-500 pt-2 flex items-center justify-between">
                    <span>{language === "ar" ? "خصائص CSS المنطقية مفعلة" : "CSS Logical Properties Active"}</span>
                    <span className="text-emerald-400">100% Native RTL</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. Framer Motion Physics Tuner */}
            {activeTab === "physics" && (
              <motion.div
                key="physics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="white" size="sm">
                      Physics Sandbox
                    </Badge>
                    <span className="text-xs font-mono text-zinc-400">
                      Framer Motion Spring Dynamics
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Interactive Spring Physics Tuner
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    Adjust the spring parameters below, then click &quot;Trigger Bounce&quot; to inspect how mechanical stiffness, damping, and mass alter the physical bounce equation in real time.
                  </p>

                  <div className="space-y-3 pt-2 font-mono text-xs">
                    {/* Stiffness slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-zinc-300">
                        <span>Stiffness: {stiffness}</span>
                        <span className="text-zinc-500">Rigidity &amp; snap speed</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="600"
                        step="10"
                        value={stiffness}
                        onChange={(e) => setStiffness(Number(e.target.value))}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>

                    {/* Damping slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-zinc-300">
                        <span>Damping: {damping}</span>
                        <span className="text-zinc-500">Friction &amp; oscillation decay</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        step="1"
                        value={damping}
                        onChange={(e) => setDamping(Number(e.target.value))}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>

                    {/* Mass slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-zinc-300">
                        <span>Mass: {mass}</span>
                        <span className="text-zinc-500">Inertia &amp; weight</span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max="3"
                        step="0.1"
                        value={mass}
                        onChange={(e) => setMass(Number(e.target.value))}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-6 flex flex-col items-center justify-center min-h-[260px]">
                  {/* The interactive physics ball / element */}
                  <div className="w-full flex items-center justify-around h-28 relative">
                    <motion.div
                      animate={{
                        x: ballToggled ? 90 : -90,
                        rotate: ballToggled ? 180 : 0,
                        scale: ballToggled ? 1.2 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness,
                        damping,
                        mass,
                      }}
                      className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl shadow-2xl shadow-white/20 cursor-pointer"
                      onClick={() => {
                        setBallToggled(!ballToggled);
                        playClick();
                      }}
                    >
                      ⚡
                    </motion.div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setBallToggled(!ballToggled);
                        playClick();
                      }}
                      className="px-5 py-2.5 rounded-full bg-white text-black font-mono font-bold text-xs hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
                    >
                      Trigger Bounce Simulation ⟲
                    </button>
                    <button
                      onClick={() => {
                        setStiffness(300);
                        setDamping(15);
                        setMass(1);
                        playClick();
                      }}
                      className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all text-xs"
                      title="Reset defaults"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
