"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stripePatternBrandLight =
    "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(209, 209, 209, 0.3) 2px, rgba(209, 209, 209, 0.3) 4px)";

  return (
    <>
      <section className="lg:hidden relative bg-(--brand-light)">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pt-24 pb-0">
          <h1 className="text-4xl font-extrabold text-(--brand-black) mb-4 ">
            B2B eCommerce Platforms
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Built for complexity. Ready for growth.
          </p>

          <div className="mb-6">
            <p className="text-base text-gray-600 mb-4">
              Modern B2B buyers expect the speed and ease of B2C — but with
              personalized pricing, roles, and workflows. We help you deliver
              both while reducing order processing time by up to 60%.
            </p>
          </div>

          <div className="-mx-6">
            <img
              src="/images/b2b-hero-mobile.webp"
              alt="B2B eCommerce Solutions"
              className="w-full block"
            />
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      <div className="hidden lg:block relative">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-[var(--brand-light)]"
          showLines={[true, true, true, true, true]}
          minHeight="65vh"
          className="relative -mb-1"
        >

          <div
            className="absolute hidden lg:block"
            style={{
              left: "27.78%",
              top: 0,
              width: "22.22%",
              height: "48.5%",
              background: stripePatternBrandLight,
              zIndex: 1,
            }}
          />
          <div
            className="absolute hidden lg:block"
            style={{
              left: "72.22%",
              top: "48.5%",
              right: 0,
              bottom: 0,
              background: stripePatternBrandLight,
              zIndex: 1,
            }}
          />

          <div
            className="absolute left-0 right-0 h-px bg-gray-400/30 z-10 hidden lg:block"
            style={{ top: "48.5%" }}
          />

          <div
            className="absolute text-(--brand-red) font-light hidden lg:block"
            style={{
              left: "94.44%",
              top: "48%",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5rem",
              lineHeight: 1,
              zIndex: 40,
            }}
          >
            +
          </div>

          <div
            className="absolute text-(--brand-black) font-light hidden lg:block"
            style={{
              left: "50%",
              top: "48%",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5rem",
              lineHeight: 1,
              zIndex: 40,
            }}
          >
            +
          </div>

          <div className="relative z-20">
            <GridContainer className="items-center h-full pt-20">
              <GridCol span="AB" className="pl-12 pr-8 pb-8">
                <h1 className="text-5xl font-extrabold text-(--brand-black) mb-6 leading-tight">
                  B2B eCommerce Platforms
                </h1>
                <p className="text-3xl text-gray-700 mb-10 pb-2">
                  Built for complexity. Ready for growth.
                </p>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 flex-1">
                    Modern B2B buyers expect the speed and ease of B2C — but
                    with personalized pricing, roles, and workflows. We help you
                    deliver both while reducing order processing time by up to
                    60%.
                  </p>
                </div>
              </GridCol>

              <GridCol
                span="CD"
                className="relative"
                style={{
                  alignSelf: "flex-end",
                  lineHeight: 0,
                  zIndex: 30,
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: "100%",
                    lineHeight: 0,
                    fontSize: 0,
                    paddingTop: "50px",
                    marginBottom: "20px",
                    paddingRight: "5.56%", 
                    zIndex: 30,
                  }}
                >
                  <img
                    src="/images/b2b-hero-desktop.webp"
                    alt="B2B eCommerce Solutions"
                    className="block"
                    style={{
                      paddingTop: 20,
                      paddingBottom: 40,
                      width: "120%",
                      height: "auto",
                      marginLeft: "0%",
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