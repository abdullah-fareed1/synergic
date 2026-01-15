import type { Metadata } from "next";

// =============================================================================
// CONFIGURATION
// =============================================================================

const baseUrl = process.env.WEBSITE_BASE_URL || "https://synergic.vercel.app";
const ogImageUrl = `${baseUrl}/images/synergic.webp`;

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  // Base URL for resolving relative URLs
  metadataBase: new URL(baseUrl),

  // Basic
  title:
    "Synergic Intelligent Systems | Modular Software Platforms for Commerce & Enterprise",
  description:
    "Synergic Intelligent Systems builds modular, API-first software platforms for commerce, enterprise systems, integrations, and AI-driven growth. Choose, combine, and scale solutions tailored to your business.",

  // Keywords
  keywords: [
    "software company",
    "modular software platforms",
    "API-first platforms",
    "commerce solutions",
    "B2B commerce",
    "B2C ecommerce",
    "enterprise software",
    "system integrations",
    "AI solutions",
    "custom software development",
    "PIM",
    "OMS",
    "ERP integration",
    "digital transformation",
  ],

  // Open Graph (Facebook, Discord, LinkedIn, Slack)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Synergic Intelligent Systems",
    title: "Synergic Intelligent Systems | Choose. Combine. Grow.",
    description:
      "Intelligent, modular software platforms for commerce, enterprise systems, integrations, and AI-driven growth. Built for performance, automation, and scale.",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Synergic Intelligent Systems – Modular Software Platforms",
        type: "image/webp",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Synergic Intelligent Systems | Choose. Combine. Grow.",
    description:
      "Intelligent, modular software platforms for commerce, enterprise systems, integrations, and AI-driven growth.",
    images: [ogImageUrl],
  },

  // Robots & Indexing
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

  alternates: {
    canonical: baseUrl,
  },

  authors: [{ name: "Synergic Intelligent Systems" }],
  creator: "Synergic Intelligent Systems",
  publisher: "Synergic Intelligent Systems",
  category: "Technology",
};


import HeroSection from "./home/sections/HeroSection";
import ChooseCombineGrow from "./home/sections/ChooseCombineGrow";
import SolutionsSection from "./home/sections/SolutionsSection";
import CustomersLogoSection from "./home/sections/CustomersLogoSection";
import IndustryFocusedSection from "./home/sections/IndustryFocusedSection";
import BlogSection from "./home/sections/BlogSection";
import Footer from "./components/Footer";
import BuildFusionTopSection from "./home/sections/BuildFusionTopSection";
import BuildFusionBottomSection from "./home/sections/BuildFusionBottomSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ChooseCombineGrow />
      <SolutionsSection />
      <BuildFusionTopSection />
      <BuildFusionBottomSection />
      <CustomersLogoSection />
      <IndustryFocusedSection />
      <BlogSection />
      <Footer />
    </main>
  );
}