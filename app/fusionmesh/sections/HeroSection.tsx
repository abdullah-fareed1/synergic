"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* MOBILE VERSION */}
      <section className="lg:hidden relative min-h-screen" style={{ backgroundColor: '#111D2B' }}>
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="pt-24 px-6 pb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-white text-sm font-bold tracking-wide" style={{ backgroundColor: '#FB3B22' }}>
              FusionMesh™
            </span>
          </div>

          <h1 className="text-white text-4xl font-extrabold leading-tight mb-6">
            The Technology Platform for Scalable, Intelligent Systems
          </h1>

          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Power your digital innovations with a secure, cloud-ready framework built to scale and evolve with your business.
          </p>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              FusionMesh™ is Synergic's modular, open architecture framework designed to power custom applications and intelligent platforms at any scale.
            </p>
            <p>
              Whether cloud-native or on-premise, it enables organizations to build fast, secure, extensible systems without starting from scratch.
            </p>
            <p>
              With built-in security, automations and adaptable data pipelines, fusion is the engine that turns ideas into reality.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/fusion.webp"
            alt="Data Analytics Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:block relative" style={{ backgroundColor: '#111D2B' }}>
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-transparent"
          minHeight="100vh"
        >
          {/* Background image that extends to the right edge */}
          <div 
            className="absolute top-0 bottom-0 right-0"
            style={{
              backgroundImage: 'url(/fusion.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              left: '50%'
            }}
          />

          {/* Gradient overlay on top of the image for fade effect */}
          <div 
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: '50%',
              width: '20%',
              background: `linear-gradient(to right, #111D2B 0%, #0a1219 20%, #050C1A 50%, transparent 100%)`
            }}
          />

          <GridContainer className="min-h-screen">
            {/* Left Content Column (AB) */}
            <GridCol
              span="AB"
              className="relative flex items-center"
              style={{ backgroundColor: '#111D2B' }}
            >
              <div className="relative z-10 pl-16 pr-12 py-24 max-w-2xl">
                <div className="mb-8">
                  <span className="inline-block px-5 py-2.5 text-white text-sm font-bold tracking-wide" style={{ backgroundColor: '#FB3B22' }}>
                    FusionMesh™
                  </span>
                </div>

                <h1 className="text-white text-5xl xl:text-6xl font-extrabold leading-tight mb-8">
                  The Technology Platform for Scalable, Intelligent Systems
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                  Power your digital innovations with a secure, cloud-ready framework built to scale and evolve with your business.
                </p>

                <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                  <p>
                    FusionMesh™ is Synergic's modular, open architecture framework designed to power custom applications and intelligent platforms at any scale.
                  </p>
                  <p>
                    Whether cloud-native or on-premise, it enables organizations to build fast, secure, extensible systems without starting from scratch.
                  </p>
                  <p>
                    With built-in security, automations and adaptable data pipelines, fusion is the engine that turns ideas into reality.
                  </p>
                </div>
              </div>
            </GridCol>

            {/* Right Image Column (CD) - Transparent to show background */}
            <GridCol
              span="CD"
              className="min-h-screen relative"
            >
              <div />
            </GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}