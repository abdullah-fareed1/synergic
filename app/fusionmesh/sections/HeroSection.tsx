"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <section
        className="lg:hidden relative min-h-screen"
        style={{ backgroundColor: "#070C18" }}
      >
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "60%",
            background:
              "linear-gradient(to bottom, #111D2B 0%, #0D1520 40%, #070C18 100%)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          <Navbar onMenuClick={() => setIsMenuOpen(true)} />

          <div className="pt-24 px-6 pb-12">
            <h1 className="text-white text-4xl font-extrabold leading-tight mb-6">
              The Technology Platform for<br/>Scalable, Intelligent<br />Systems
            </h1>

            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 text-white text-sm font-bold tracking-wide"
                style={{ backgroundColor: "#FB3B22" }}
              >
                FusionMesh™
              </span>
            </div>

            <p className="text-gray-300 text-l leading-relaxed mb-8">
              Power your digital innovations with a secure, cloud-ready
              framework built to scale and evolve with your business.
            </p>

            <div className="space-y-4 text-gray-400 text-m leading-relaxed">
              <p>
                FusionMesh™ is Synergic's modular, open architecture framework
                designed to power custom applications and intelligent platforms
                at any scale.
              </p>
              <p>
                Whether cloud-native or on-premise, it enables organizations to
                build fast, secure, extensible systems without starting from
                scratch.
              </p>
              <p>
                With built-in security, automations and adaptable data
                pipelines, fusion is the engine that turns ideas into reality.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "30%",
              background:
                "linear-gradient(to bottom, #070C18 0%, rgba(7, 12, 24, 0.6) 50%, transparent 100%)",
              zIndex: 10,
            }}
          />
          <img
            src="images/fusion.webp"
            alt="Data Analytics Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>
      {/* Desktop */}
      <div
        className="hidden lg:block relative"
        style={{ backgroundColor: "#070C18" }}
      >
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          showLines={[false, false, false, false, false]}
          bgColor="bg-transparent"
          minHeight="100vh"
        >
          <div
            className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30"
            style={{ zIndex: 50 }}
          />
          <div
            className="hidden lg:block absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30"
            style={{ zIndex: 50 }}
          />
          <div
            className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30"
            style={{ zIndex: 50 }}
          />
          <div
            className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30"
            style={{ zIndex: 50 }}
          />
          <div
            className="hidden lg:block absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30"
            style={{ zIndex: 50 }}
          />

          <div
            className="absolute top-0 bottom-0 left-0 right-0"
            style={{
              background:
                "linear-gradient(to right, #111D2B 0%, #0D1520 25%, #070C18 50%, #070C18 100%)",
              zIndex: 0,
            }}
          />

          <div
            className="absolute top-0 bottom-0 right-0"
            style={{
              backgroundImage: "url(images/fusion.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              left: "50%",
              zIndex: 1,
            }}
          />

          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: "50%",
              width: "20%",
              background: `linear-gradient(to right, #070C18 0%, rgba(7, 12, 24, 0.8) 20%, rgba(7, 12, 24, 0.4) 50%, transparent 100%)`,
              zIndex: 2,
            }}
          />

          <GridContainer className="min-h-screen">
            <GridCol span="AB" className="relative flex items-center">
              <div className="relative z-10 pl-8 pt-29 ">
                <h1
                  className="text-white font-extrabold mb-6 text-[41px]"
                >
                  The Technology Platform for Scalable,
                  Intelligent Systems
                </h1>

                <div className="mb-8">
                  <span
                    className="inline-block px-4 pt-1 pb-1 text-white text-base tracking-wide"
                    style={{ backgroundColor: "#FB3B22" }}
                  >
                    FusionMesh™
                  </span>
                </div>

                <p
                  className="text-gray-300 leading-relaxed mb-10 text-2xl max-w-3xl"
                >
                  Power your digital innovations with a secure, cloud-ready
                  framework built to scale and evolve with your business.
                </p>

                <div
                  className="space-y-5 text-gray-400 leading-relaxed text-lg max-w-xl"
                >
                  <p>
                    FusionMesh™ is Synergic's modular, open architecture
                    framework designed to power custom applications and intelligent
                    platforms at any scale.
                  </p>
                  <p>
                    Whether cloud-native or on-premise, it enables organizations
                    to build fast, secure, extensible systems without starting
                    from scratch.
                    <br />
                    With built-in security, automations and adaptable data
                    pipelines, fusion is the engine that turns ideas into reality.
                  </p>
                </div>
              </div>
            </GridCol>

            <GridCol span="CD" className="min-h-screen relative">
              <div />
            </GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}
