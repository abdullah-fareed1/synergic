"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../../components/WhiteNavbar";
import MobileMenu from "../../components/Menu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="lg:hidden relative bg-(--brand-light) overflow-hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pb-6" style={{ paddingTop: "90px" }}>
          <h1 className="text-[28px] font-extrabold text-(--brand-black) mb-2 leading-tight">
            Take Control of Your Product Data
          </h1>
          <p className="text-[18px] text-(--brand-black) mb-4 leading-snug">
            Centralized Product Management Across Suppliers and Channels
          </p>
          <div className="mb-2">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Stop wasting time fixing supplier files and updating spreadsheets.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              With our PIM solution, all your product data flows into one central hub — automatically cleaned, enriched, and distributed across every channel with accurate pricing, stock, and availability.
            </p>
          </div>
          
          <div className="relative pb-4">
            <div className="relative z-10">
              <img
                src="/images/pim-systems-hero.avif"
                alt="PIM System - Centralized product management connecting suppliers to marketplaces"
                className="w-full block"
              />
            </div>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      <div className="hidden lg:block relative overflow-hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-[var(--brand-light)]"
          showLines={[true, true, true, true, true]}
          className="relative pt-8 pb-12"
        >
          <div className="relative z-20">
            <GridContainer className="items-center">
              <GridCol span="AB" className="pl-12 pr-8">
                <div>
                  <h1 className="text-[40px] font-extrabold text-[#111D2B] mb-3 leading-[1.1]">
                    Take Control of Your Product Data
                  </h1>
                  <p className="text-[25px] text-[#111D2B] mb-7 leading-snug">
                    Centralized Product Management Across Suppliers and Channels
                  </p>
                  <div className="max-w-lg">
                    <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                      Stop wasting time fixing supplier files and updating spreadsheets.
                    </p>
                    <p className="text-[16px] text-gray-600 leading-relaxed">
                      With our PIM solution, all your product data flows into one central hub — automatically cleaned, enriched, and distributed across every channel with accurate pricing, stock, and availability.
                    </p>
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
                    paddingTop: "calc(100vw / 28)",
                  }}
                >
                  <img
                    src="/images/pim-systems-hero.avif"
                    alt="PIM System - Centralized product management connecting suppliers to marketplaces"
                    className="block mx-auto relative"
                    style={{
                      width: "80%",
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