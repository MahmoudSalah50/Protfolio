"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/schema";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Next.js Web Application",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();

    // Trigger celebration confetti in warm sunset palette
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#f97316", "#f59e0b", "#10b981"],
      });
    } catch {
      // Graceful fallback
    }
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Get In Touch"
          badgeVariant="white"
          title="Let's build something"
          titleAccent="great."
          watermark="07"
          description="Have an ambitious web application, need high-end React & Next.js engineering, or looking for an experienced Frontend Developer? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  Direct Communication Channels
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  I typically respond quickly. Feel free to email, call, or reach out on any social network.
                </p>
              </div>

              {/* Download CV Banner */}
              <a
                href="/cv.pdf"
                download="Mahmoud_Salah_CV.pdf"
                className="flex items-center justify-between p-4 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm shadow-xl hover:bg-zinc-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center text-black">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div>Download Full Curriculum Vitae</div>
                    <div className="text-[11px] font-normal text-zinc-600 font-mono">PDF Format (Direct Download)</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-black text-white px-2.5 py-1 rounded-lg">CV ↓</span>
              </a>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-zinc-400">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${profileData.emails[0]}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:underline transition-colors truncate block"
                    >
                      {profileData.emails[0]}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profileData.emails[0], "email")}
                  className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all shrink-0"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Numbers with Copy / Dial */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      Phone / WhatsApp
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white space-x-2">
                      <a
                        href={`tel:${profileData.phones[0].replace(/\s+/g, "")}`}
                        className="hover:underline transition-colors"
                      >
                        {profileData.phones[0]}
                      </a>
                      <span className="text-zinc-600">|</span>
                      <a
                        href={`tel:${profileData.phones[1].replace(/\s+/g, "")}`}
                        className="hover:underline transition-colors"
                      >
                        {profileData.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profileData.phones[0], "phone")}
                  className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all shrink-0"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    Location & Time Zone
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {profileData.location} (UTC+2 / UTC+3)
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="pt-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                  Professional Networks
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white hover:text-black text-xs font-medium text-zinc-300 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white hover:text-black text-xs font-medium text-zinc-300 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profileData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white hover:text-black text-xs font-medium text-zinc-300 transition-all"
                  >
                    <TwitterIcon className="w-4 h-4" />
                    <span>Twitter / X</span>
                  </a>

                  <a
                    href={profileData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white hover:text-black text-xs font-medium text-zinc-300 transition-all"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form with Zod Validation */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/10 relative shadow-2xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Fill out the form below and I will get back to you with ideas, estimates, or next steps.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-white/[0.05] border border-white/20 text-center space-y-4"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-white text-black flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h4 className="text-xl font-bold text-white">
                      Message Received!
                    </h4>

                    <p className="text-sm text-zinc-300 max-w-md mx-auto">
                      Thank you for reaching out. I will review your inquiry and get in touch with you shortly.
                    </p>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider"
                      >
                        Your Name / Company *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. John Doe / Retail Brand"
                        {...register("name")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                          errors.name
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-white/10 focus:border-white focus:ring-2 focus:ring-white/20"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-rose-400 mt-1 block font-mono">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. name@example.com"
                        {...register("email")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-white/10 focus:border-white focus:ring-2 focus:ring-white/20"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-400 mt-1 block font-mono">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Project Type Selector */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider"
                      >
                        Project Scope
                      </label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                      >
                        <option value="Next.js Web Application">
                          Next.js Web Application / Frontend
                        </option>
                        <option value="React SPA & Interactive Dashboard">
                          React SPA &amp; Interactive Dashboard
                        </option>
                        <option value="UI/UX Engineering & Design Systems">
                          UI/UX Engineering &amp; Design Systems
                        </option>
                        <option value="Performance & Core Web Vitals Optimization">
                          Performance &amp; Core Web Vitals Optimization
                        </option>
                        <option value="Frontend Developer Opportunity">
                          Frontend Developer Opportunity
                        </option>
                        <option value="Other Project">Other Project</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider"
                      >
                        Message / Project Scope *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Describe what you want to build, timelines, and requirements..."
                        {...register("message")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all resize-none ${
                          errors.message
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-white/10 focus:border-white focus:ring-2 focus:ring-white/20"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-400 mt-1 block font-mono">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full mt-2"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
