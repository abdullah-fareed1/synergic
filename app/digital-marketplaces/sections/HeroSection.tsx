"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* MOBILE */}
      <section className="lg:hidden relative bg-(--brand-light)">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pb-8" style={{ paddingTop: "100px" }}>
          <div className="mb-2">
            <span className="inline-block bg-[#F7FF00] text-(--brand-black) font-bold text-sm tracking-wider uppercase px-2 py-1 rounded-sm">
              COMING SOON
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-(--brand-black) mb-2 leading-tight">
            Digital Marketplaces
          </h1>
          <p className="text-[25px] text-(--brand-black) mb-4 leading-snug max-w-sm">
            Multi-Vendor and Multi-Channel Commerce Solutions
          </p>
          <div className="space-y-4 mb-6 max-w-base">
            <p className="text-base text-gray-600 leading-relaxed">
              We're building a powerful multi-vendor and multi-channel marketplace solution. This page is a preview designed to gauge interest and connect with early adopters.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              From vendor onboarding to commission management, our marketplace platform will empower you to create digital ecosystems that generate revenue and deliver value for everyone.
            </p>
          </div>
          <div className="mb-8">
            <a 
              href="/fusionmesh" 
              className="inline-flex items-center gap-3 text-xl font-semibold text-(--brand-black) hover:opacity-80 transition-opacity"
            >
              <span>How Fusion Powers Your Business</span>
              <span className="w-8 h-8 rounded-full border border-(--brand-black) flex items-center justify-center">
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
          <div className="pb-6">
            <img
              src="/images/marketplaces-hero.avif"
              alt="Digital Marketplaces - Multi-Vendor Commerce Solutions"
              className="w-full block"
            />
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* DESKTOP */}
      <div className="hidden lg:block relative">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-[var(--brand-light)]"
          showLines={[true, true, true, true, true]}
          minHeight="65vh"
          className="relative"
        >
          <div className="relative z-20">
            <GridContainer className="items-center h-full">
              <GridCol span="AB" className="pl-12 pr-8 pb-12">
                <div style={{ paddingTop: "calc(100vw / 18 + 40px)" }}>
                <div className="mb-3">
                  <span className="inline-block bg-[#F7FF00] text-(--brand-black) font-bold text-[13px] tracking-wider uppercase px-2 py-1 rounded-sm">
                    COMING SOON
                  </span>
                </div>
                <h1 className="text-[42px] font-extrabold text-(--brand-black) mb-4 leading-tight">
                  Digital Marketplaces
                </h1>
                <p className="text-[25px] text-(--brand-black) mb-8 leading-snug">
                  Multi-Vendor and Multi-Channel Commerce Solutions
                </p>
                <div className="space-y-5 mb-10 max-w-152">
                  <p className="text-[18px] text-gray-800 leading-relaxed">
                    We're building a powerful multi-vendor and multi-channel marketplace solution. This page is a preview designed to gauge interest and connect with early adopters.
                  </p>
                  <p className="text-[18px] text-gray-800 leading-relaxed">
                    From vendor onboarding to commission management, our marketplace platform will empower you to create digital ecosystems that generate revenue and deliver value for everyone.
                  </p>
                </div>
                <div>
                  <a 
                    href="/fusionmesh" 
                    className="inline-flex items-center gap-4 text-[18px] font-semibold text-(--brand-black) hover:opacity-80 transition-opacity"
                  >
                    <span>How Fusion Powers Your Business</span>
                    <span className="w-10 h-10 rounded-full border border-(--brand-black) flex items-center justify-center">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </a>
                </div>
                </div>
              </GridCol>

              <GridCol
                span="CD"
                className="relative flex items-center justify-center"
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    lineHeight: 0,
                    fontSize: 0,
                    paddingTop: "calc(100vw / 18 + 40px)",
                    paddingBottom: "40px",
                    zIndex: 30,
                  }}
                >
                  <img
                    src="/images/marketplaces-hero.avif"
                    alt="Digital Marketplaces - Multi-Vendor Commerce Solutions"
                    className="block mx-auto"
                    style={{
                      width: "90%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </GridCol>
            </GridContainer>
          </div>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}