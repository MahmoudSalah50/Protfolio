import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { InteractiveCursor } from "@/components/ui/InteractiveCursor";
import { profileData } from "@/data/profile";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mahmoud Salah | Frontend Developer — React, Next.js & E-Commerce",
  description:
    "Production-grade portfolio of Mahmoud Salah, Frontend Developer. Specializing in Next.js App Router, React 19, TypeScript, dynamic UI/UX animations, and specialized e-commerce storefronts across Salla, Shopify, and Zid.",
  keywords: [
    "Mahmoud Salah",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Salla Developer",
    "Salla Theme Development",
    "Twig",
    "Shopify Developer",
    "Shopify Liquid",
    "Zid Developer",
    "Frontend Architecture",
    "Framer Motion",
    "Mansoura Egypt",
    "Luxe Storefront",
  ],
  authors: [{ name: "Mahmoud Salah", url: "https://github.com/MahmoudSalah50" }],
  creator: "Mahmoud Salah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahmoud-salah.vercel.app",
    title: "Mahmoud Salah | Frontend Developer",
    description:
      "Modern, responsive web experiences with React, Next.js, TypeScript, and clean frontend architecture — with deep experience in Salla, Shopify, and Zid e-commerce platforms.",
    siteName: "Mahmoud Salah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Salah | Frontend Developer",
    description:
      "Modern web applications, interactive animations, and specialized Salla, Shopify, and Zid e-commerce engineering.",
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
      "Salla",
      "Twig",
      "Shopify",
      "Liquid",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Frontend Architecture",
      "Core Web Vitals",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-zinc-100 antialiased selection:bg-white selection:text-black">
        <SmoothScrollProvider>
          <InteractiveCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
