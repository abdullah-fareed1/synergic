"use client";

import { useState } from "react";

import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "./../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function EmpoweringSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* MOBILE: centered stacked hero */}
      <section
        className="lg:hidden relative text-(--brand-white)"
        style={{ backgroundColor: "var(--brand-red)" }}
      >
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pt-28 pb-16 text-center flex flex-col items-center">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 opacity-90">
            Synergic Intelligent Systems
          </p>

          <h1 className="text-3xl font-bold leading-tight mb-4">
            Empowering Innovation{" "}
            <span className="block mt-1">since 2005</span>
          </h1>

          <p className="text-sm leading-relaxed mb-4 max-w-md">
            Future-ready{" "}
            <span className="inline-block bg-(--brand-black) text-(--brand-white) px-2 py-1 rounded-sm text-xs align-middle">
              Intelligent Systems
            </span>{" "}
            built for performance, automation, and growth.
          </p>

          <p className="text-sm leading-relaxed max-w-md opacity-90">
            We have been solving real business challenges with custom software
            since 2005. Today, we call them Intelligent Systems – modular,
            scalable, and process-aware platforms that evolve with your
            business.
          </p>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* DESKTOP: grid-based */}
      <div className="hidden lg:block relative">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-[var(--brand-red)]"
          showLines={[true, false, false, false, true]}
          className="text-(--brand-white) pt-28 pb-24"
          desktopOnly={true}
        >
          <GridContainer className="items-center justify-center">
            {/* Single full-width column, content centered */}
            <GridCol span="ABCD" className="flex flex-col items-center text-center pt-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-90">
                Synergic Intelligent Systems
              </p>

              <h1 className="text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Empowering Innovation{" "}
                <span className="block mt-1">since 2005</span>
              </h1>

              <p className="text-base leading-relaxed mb-4 max-w-2xl">
                Future-ready{" "}
                <span className="inline-block bg-(--brand-black) text-(--brand-white) px-3 py-1 rounded-sm text-xs align-middle">
                  Intelligent Systems
                </span>{" "}
                built for performance, automation, and growth.
              </p>

              <p className="text-sm leading-relaxed max-w-3xl opacity-90">
                We have been solving real business challenges with custom
                software since 2005. Today, we call them Intelligent Systems –
                modular, scalable, and process-aware platforms that evolve with
                your business.
              </p>
            </GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}
