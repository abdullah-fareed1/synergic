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
      <section className="lg:hidden relative bg-white min-h-screen">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 py-16 space-y-12">
          {/* Text Content */}
          <div className="space-y-6 pt-6">
            <h1 className="text-4xl font-extrabold text-black leading-tight">
              Tech Advantage
            </h1>
            <p className="text-2xl text-black font-2xl">
              The Foundation Behind Every Intelligent System We Build
            </p>
            <p className="text-base text-gray-600">
              Every Synergic solution — from eCommerce to Enterprise Software
              (FusionMesh) — is powered by our battle-tested, scalable tech stack.
              Modular, flexible, and future-ready, it allows us to build, adapt, and grow
              your digital platforms with precision.
            </p>
            <p className="text-base text-gray-600">
              From backend services to AI-ready layers, everything is selected to
              support performance, extensibility, and growth — now and in the future.
            </p>

            {/* Icons */}
            <div className="flex gap-4">
              {[
                { name: "pc-and-smartphone", alt: "PC and Smartphone" },
                { name: "server", alt: "Server" },
                { name: "cloud-network3", alt: "Cloud Network" },
                { name: "shield-check", alt: "Shield Check" }
              ].map((icon) => (
                <div
                  key={icon.name}
                  className="w-12 h-12 bg-[#111D2B] rounded flex items-center justify-center"
                >
                  <img
                    src={`icons/${icon.name}.svg`}
                    alt={icon.alt}
                    className="w-6 h-6"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tech Grid - Mobile */}
          <div className="grid grid-cols-3 border border-gray-300">
            {[
              { name: "medusa" },
              { name: "ionic" },
              { name: "qdrant" },
              { name: "couchbase" },
              { name: "angular" },
              { name: "cubik" },
              { name: "elastic" },
              { name: "nextjs" },
              { name: "docker" },
              { name: "react" },
              { name: "play" },
              { name: "directus" },
            ].map((tech, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;

              return (
                <div
                  key={tech.name}
                  className={`aspect-square flex items-center justify-center p-6
                    ${row !== 0 ? "border-t" : ""}
                    ${col !== 2 ? "border-r" : ""}
                    border-gray-300 bg-white hover:bg-gray-50 transition-colors`}
                >
                  <img
                    src={`/logos/${tech.name}.svg`}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:block relative bg-white">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          showLines={[true, false, false, false, true]}
          className="py-20"
          minHeight="700px"
        >
          <GridContainer className="items-stretch">
            {/* LEFT SIDE - AB Columns */}
            <GridCol span="AB" className="flex flex-col justify-center p-12 pr-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-extrabold text-black leading-tight">
                    Tech Advantage
                  </h1>
                  <p className="text-2xl text-black">
                    The Foundation Behind Every Intelligent System We Build
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Every Synergic solution — from eCommerce to Enterprise Software
                    (FusionMesh) — is powered by our battle-tested, scalable tech stack.
                    Modular, flexible, and future-ready, it allows us to build, adapt, and grow
                    your digital platforms with precision.
                  </p>
                  <p>
                    From backend services to AI-ready layers, everything is selected to
                    support performance, extensibility, and growth — now and in the future.
                  </p>
                </div>

                {/* Icons */}
                <div className="flex gap-4 pt-4">
                  {[
                    { name: "pc-and-smartphone", alt: "PC and Smartphone" },
                    { name: "server", alt: "Server" },
                    { name: "cloud-network3", alt: "Cloud Network" },
                    { name: "shield-check", alt: "Shield Check" }
                  ].map((icon) => (
                    <div
                      key={icon.name}
                      className="w-14 h-14 bg-[#111D2B] rounded flex items-center justify-center hover:bg-[#1a2b3f] transition-colors cursor-pointer"
                    >
                      <img
                        src={`icons/${icon.name}.svg`}
                        alt={icon.alt}
                        className="w-7 h-7"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </GridCol>

            {/* RIGHT SIDE - CD  */}
            <GridCol span="CD" className="relative flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center pt-20">
                <div className="relative w-full h-full">
                  {/* Main Grid Container */}
                  <div className="grid grid-cols-4 grid-rows-3 border border-gray-300 bg-white w-full h-full">
                    {[
                      { name: "medusa", row: 0, col: 0 },
                      { name: "ionic", row: 0, col: 1 },
                      { name: "qdrant", row: 0, col: 2 },
                      { name: "react", row: 0, col: 3 },
                      { name: "couchbase", row: 1, col: 0 },
                      { name: "angular", row: 1, col: 1 },
                      { name: "play", row: 1, col: 2 },
                      { name: "cubik", row: 1, col: 3 },
                      { name: "elastic", row: 2, col: 0 },
                      { name: "nextjs", row: 2, col: 1 },
                      { name: "docker", row: 2, col: 2 },
                      { name: "directus", row: 2, col: 3 },
                    ].map((tech) => {
                      const isNotLastRow = tech.row !== 2;
                      const isNotLastCol = tech.col !== 3;

                      return (
                        <div
                          key={tech.name}
                          className={`relative w-full aspect-square flex items-center justify-center p-8
                            ${isNotLastRow ? "border-b" : ""}
                            ${isNotLastCol ? "border-r" : ""}
                            border-gray-300 bg-white`}
                        >
                          
                          {isNotLastRow && isNotLastCol && (
                            <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 flex items-center justify-center z-10">
                              <div className="w-full h-0.5 bg-gray-300" />
                              <div className="absolute w-0.5 h-full bg-gray-300" />
                            </div>
                          )}

                          <img
                            src={`/logos/${tech.name}.svg`}
                            alt={`${tech.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Corner Plus Icons */}
                  {[
                    "top-[-10px] left-[-10px]",
                    "top-[-10px] right-[-10px]",
                    "bottom-[-10px] left-[-10px]",
                    "bottom-[-10px] right-[-10px]",
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} w-5 h-5 flex items-center justify-center z-10`}
                    >
                      <div className="w-full h-0.5 bg-gray-400" />
                      <div className="absolute w-0.5 h-full bg-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}