import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { InteractiveCursor } from "@/components/ui/InteractiveCursor";
import { ThemeProvider } from "@/components/providers/ThemeContext";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { FloatingSocialDock } from "@/components/ui/FloatingSocialDock";
import { Preloader } from "@/components/ui/Preloader";
import { profileData } from "@/data/profile";
import React from "react";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mahmoud Salah | Frontend Developer — Next.js, React & TypeScript",
  description:
    "Production-grade portfolio of Mahmoud Salah, Frontend Developer. Specializing in Next.js App Router, React 19, TypeScript, dynamic UI/UX animations, and scalable web applications.",
  keywords: [
    "Mahmoud Salah",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Frontend Architecture",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
    "TanStack Query",
    "Web Performance",
    "Core Web Vitals",
    "Mansoura Egypt",
  ],
  authors: [{ name: "Mahmoud Salah", url: "https://github.com/MahmoudSalah50" }],
  creator: "Mahmoud Salah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahmoud-salah.vercel.app",
    title: "Mahmoud Salah | Frontend Developer",
    description:
      "Modern, responsive web applications with React, Next.js, TypeScript, smooth animations, and clean frontend architecture.",
    siteName: "Mahmoud Salah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Salah | Frontend Developer",
    description:
      "Modern web applications, interactive animations, and production-grade frontend engineering.",
    creator: "@mahmoudsalahh19",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    url: "https://mahmoud-salah.vercel.app",
    sameAs: [
      profileData.socials.github,
      profileData.socials.linkedin,
      profileData.socials.twitter,
      profileData.socials.facebook,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mansoura",
      addressCountry: "Egypt",
    },
    email: profileData.emails[0],
    telephone: profileData.phones[0],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Framer Motion",
      "Frontend Architecture",
      "Core Web Vitals",
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-zinc-100 antialiased selection:bg-white selection:text-black">
        <ThemeProvider>
          <Preloader />
          <SmoothScrollProvider>
            <ParticleCanvas />
            <InteractiveCursor />
            <ScrollProgress />
            <Navbar />
            <FloatingSocialDock />
            <main className="flex-1 w-full relative z-10">{children}</main>
            <BottomNav />
            <Footer />
            <CommandPalette />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
