"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="lg:hidden overflow-x-hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        <div
          className="relative px-6 pt-24 pb-8"
          style={{
            backgroundColor: "var(--brand-dark)",
            background: "radial-gradient(ellipse at center, #233A53 0%, var(--brand-dark) 70%)",
          }}
        >
          <h1
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: "25px" }}
          >
            Composable Commerce
          </h1>
          <p
            className="text-white mt-4"
            style={{ fontSize: "17px" }}
          >
            <span
              className="px-1.5 py-0.5"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              End plugin chaos
            </span>{" "}
            with Headless Technology
          </p>
          <p
            className="leading-relaxed mt-4"
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            Our headless ecommerce solution separates frontend and backend, giving you complete flexibility to design, extend, and grow your commerce system
          </p>
          <div
            className="mt-8 -mx-6 overflow-hidden"
          >
            <img
              src="/images/ecommerce-tech-hero.avif"
              alt="Composable Commerce Dashboard"
              className="h-auto block"
              style={{
                width: "180vw",
                maxWidth: "none",
              }}
            />
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>
      <div className="hidden lg:block">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div
          className="relative overflow-hidden"
          style={{
            backgroundColor: "var(--brand-dark)",
            background: "radial-gradient(ellipse at center, #233A53 0%, var(--brand-dark) 70%)",
          }}
        >
          <div className="absolute inset-0 z-0">
            <GridSection
              showLines={[true, true, true, true, true]}
              bgColor="bg-transparent"
              minHeight="100%"
            >
              <GridContainer className="h-full">
                <GridCol span="ABCD" className="h-full">{null}</GridCol>
              </GridContainer>
            </GridSection>
          </div>
          <div className="relative z-10">
            <div style={{ height: "5.56vw" }} />

            <GridSection
              showLines={[false, false, false, false, false]}
              bgColor="bg-transparent"
              minHeight="calc(100vh - 5.56vw)"
            >
              <GridContainer className="min-h-[calc(100vh-5.56vw)]">
                <GridCol span="AB" className="pl-8 pr-12 pt-40 pb-40">
                  <h1
                    className="text-white font-extrabold leading-tight"
                    style={{ fontSize: "42px" }}
                  >
                    Composable Commerce
                  </h1>
                  <p
                    className="text-white mt-6"
                    style={{ fontSize: "25px" }}
                  >
                    <span
                      className="px-2 py-1"
                      style={{ backgroundColor: "var(--brand-red)" }}
                    >
                      End plugin chaos
                    </span>{" "}
                    with Headless Technology
                  </p>
                  <p
                    className="leading-relaxed mt-6 max-w-lg"
                    style={{
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    Our headless ecommerce solution separates frontend and backend, giving you complete flexibility to design, extend, and grow your commerce system
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src="/icons/medusa-logo-gray.avif"
                      alt="Medusa"
                      style={{
                        width: "91px",
                        height: "22px",
                        opacity: 0.57,
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src="/icons/nextjs-logo-gray.avif"
                      alt="Next.js"
                      style={{
                        width: "91px",
                        height: "22px",
                        opacity: 0.57,
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src="/icons/cubik-logo-gray.avif"
                      alt="Cubik"
                      style={{
                        width: "91px",
                        height: "22px",
                        opacity: 0.57,
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </GridCol>
                <GridCol span="CD" className="pt-40 pb-40 relative">
                  <div
                    className="absolute"
                    style={{
                      left: "-5vw",
                      right: "-10vw",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <img
                      src="/images/ecommerce-tech-hero.avif"
                      alt="Composable Commerce Dashboard"
                      className="w-full h-auto"
                      style={{
                        maxWidth: "none",
                      }}
                    />
                  </div>
                </GridCol>
              </GridContainer>
            </GridSection>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}