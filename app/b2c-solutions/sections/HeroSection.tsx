"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../../components/WhiteNavbar";
import MobileMenu from "../../components/Menu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="lg:hidden relative bg-(--brand-light)">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pt-24 pb-0">
          <h1 className="text-4xl font-bold text-(--brand-black) mb-4 leading-tight">
            B2C eCommerce Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Fast, modern, and scalable eShops for retailers and brands
          </p>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              Today's customers expect speed, personalization, and seamless
              shopping across every device.
            </p>
            <p className="text-sm text-gray-600">
              We help you build B2C eCommerce systems that convert visitors into
              loyal customers — with mobile-first design, secure checkout, and
              the flexibility to scale as you grow.
            </p>
          </div>

          <div className="-mx-6">
            <img
              src="/images/b2c-solutions-mobile.svg"
              alt="B2C eCommerce Solutions"
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
          {/* Horizontal line */}
          <div
            className="absolute left-0 right-0 h-px bg-gray-400/30 z-10 hidden lg:block"
            style={{ top: "50.5%" }}
          />
          <div
            className="absolute text-(--brand-red) font-light hidden lg:block"
            style={{
              left: "5.56%",
              top: "50%",
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
              top: "50%",
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
                  B2C eCommerce Solutions
                </h1>
                <p className="text-3xl text-gray-700 mb-10 pb-2">
                  Fast, modern, and scalable eShops for retailers and brands
                </p>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 flex-1">
                    Today's customers expect speed, personalization, and seamless<br/>
                    shopping across every device.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We help you build B2C eCommerce systems that convert visitors
                    into<br/> loyal customers — with mobile-first design, secure
                    checkout, and the<br/> flexibility to scale as you grow.
                  </p>
                </div>
              </GridCol>

              <GridCol
                span="CD"
                className="relative pb-0 mb-0"
                style={{
                  alignSelf: "flex-end",
                  lineHeight: 0,
                  zIndex: 30,
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: "120%",
                    lineHeight: 0,
                    fontSize: 0,
                    paddingTop: "30px",
                    marginBottom: 0,
                    paddingBottom: 0,
                    zIndex: 30,
                  }}
                >
                  <img
                    src="/images/b2c-solutions-hero.avif"
                    alt="B2C eCommerce Solutions"
                    className="block"
                    style={{
                      width: "auto",
                      height: "auto",
                      marginLeft: "-10%",
                      display: "block",
                      marginBottom: 0,
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