"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/Menu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="lg:hidden relative bg-(--brand-light) overflow-hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pb-8" style={{ paddingTop: "100px" }}>
          <h1 className="text-[28px] font-extrabold text-(--brand-black) mb-3 leading-tight">
            Automating connections to your ERP/CRM
          </h1>
          <p className="text-[20px] text-(--brand-black) mb-4 leading-snug">
            Your commerce platform is only as strong as the systems behind it.
          </p>
          <div className="mb-6">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              We connect your eShops, marketplaces, and PIM/OMS with your ERP — and fully automate the workflows, so product data, orders, stock, and customer records flow without bottlenecks, errors, or manual work.
            </p>
          </div>
          
          <div className="relative pb-6">
            <div 
              className="absolute pointer-events-none"
              style={{
                top: "-20%",
                left: "-10%",
                right: "-10%",
                bottom: "-20%",
                backgroundImage: "url('/images/honeycomb-bg.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.4,
              }}
            />
            <div className="relative z-10">
              <img
                src="/images/erp-hero.avif"
                alt="ERP/CRM Integration - Marketplace, B2C Store, ERP, and B2B Platform connections"
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
          className="relative pt-12 pb-20"
        >
          <div 
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: "27.78%",
              right: 0,
              bottom: 0,
              backgroundImage: "url('/images/honeycomb-bg.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.4,
              zIndex: 1,
            }}
          />

          <div className="relative z-20">
            <GridContainer className="items-center">
              <GridCol span="AB" className="pl-12 pr-8">
                <div style={{ paddingTop: "calc(100vw / 18 + 20px)" }}>
                  <h1 className="text-[42px] font-extrabold text-[#111D2B] mb-4 leading-[1.1] max-w-xl">
                    Automating connections to your ERP/CRM
                  </h1>
                  <p className="text-[24px] text-[#111D2B] mb-6 leading-snug max-w-md">
                    Your commerce platform is only as strong as the systems behind it.
                  </p>
                  <div className="max-w-127">
                    <p className="text-[18px] text-black leading-relaxed">
                      We connect your eShops, marketplaces, and PIM/OMS with your ERP — and fully automate the workflows, so product data, orders, stock, and customer records flow without bottlenecks, errors, or manual work.
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
                    paddingTop: "calc(100vw / 18 + 20px)",
                  }}
                >
                  <img
                    src="/images/erp-hero.avif"
                    alt="ERP/CRM Integration - Marketplace, B2C Store, ERP, and B2B Platform connections"
                    className="block mx-auto relative"
                    style={{
                      width: "95%",
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