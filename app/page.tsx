import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synergic Intelligent Systems | Modular Software Platforms for Commerce & Enterprise",

  description:
    "Synergic Intelligent Systems builds modular, API-first software platforms for commerce, enterprise systems, integrations, and AI-driven growth. Choose, combine, and scale solutions tailored to your business.",

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

  openGraph: {
    title: "Synergic Intelligent Systems | Choose. Combine. Grow.",
    description:
      "Intelligent, modular software platforms for commerce, enterprise systems, integrations, and AI-driven growth. Built for performance, automation, and scale.",
    url: "https://synergic.vercel.app",
    siteName: "Synergic Intelligent Systems",
    images: [
      {
        url: "https://synergic.vercel.app/images/synergic.webp",
        width: 1200,
        height: 630,
        alt: "Synergic Intelligent Systems – Modular Software Platforms",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://synergic.vercel.app",
  },
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
