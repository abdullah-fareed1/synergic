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
          <h1 className="text-[28px] font-extrabold text-(--brand-black) mb-3 leading-tight">
            Automating connections to your ERP/CRM
          </h1>
          <p className="text-[18px] text-(--brand-black) mb-4 leading-snug">
            Your commerce platform is only as strong as the systems behind it.
          </p>
          <div className="mb-6">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              We connect your eShops, marketplaces, and PIM/OMS with your ERP — and fully automate the workflows, so product data, orders, stock, and customer records flow without bottlenecks, errors, or manual work.
            </p>
          </div>
          
          {/* Mobile Image with Honeycomb Background */}
          <div className="relative pb-6">
            {/* Honeycomb background pattern */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/honeycomb-bg.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.4,
              }}
            />
            {/* Main ERP hero image */}
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

      {/* DESKTOP */}
      <div className="hidden lg:block relative">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-[var(--brand-light)]"
          showLines={[true, true, true, true, true]}
          minHeight="100vh"
          className="relative"
        >
          <div className="relative z-20">
            <GridContainer className="items-center h-full">
              <GridCol span="AB" className="pl-12 pr-8">
                <div style={{ paddingTop: "calc(100vw / 18 + 60px)" }}>
                  <h1 className="text-[42px] font-extrabold text-(--brand-black) mb-4 leading-[1.1]">
                    Automating connections to your ERP/CRM
                  </h1>
                  <p className="text-[20px] text-(--brand-black) mb-6 leading-snug font-medium">
                    Your commerce platform is only as strong as the systems behind it.
                  </p>
                  <div className="max-w-[420px]">
                    <p className="text-[16px] text-gray-600 leading-relaxed">
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
                    height: "100%",
                    paddingTop: "calc(100vw / 18 + 40px)",
                    paddingBottom: "40px",
                    zIndex: 30,
                  }}
                >
                  {/* Honeycomb background pattern */}
                  <div 
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "110%",
                      height: "110%",
                      backgroundImage: "url('/images/honeycomb-bg.avif')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.35,
                      zIndex: 1,
                    }}
                  />
                  
                  <img
                    src="/images/erp-hero.avif"
                    alt="ERP/CRM Integration - Marketplace, B2C Store, ERP, and B2B Platform connections"
                    className="block mx-auto relative"
                    style={{
                      width: "95%",
                      height: "auto",
                      display: "block",
                      zIndex: 10,
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