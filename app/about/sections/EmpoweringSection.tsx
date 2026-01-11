"use client";

import { useState } from "react";

import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "./../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function EmpoweringSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* MOBILE */}
      <section
        className="lg:hidden relative text-(--brand-white)"
        style={{ backgroundColor: "var(--brand-red)" }}
      >
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-6 pt-28 pb-16 text-center flex flex-col items-center">
          <p className="text-sm tracking-[0.05em] uppercase mb-3 opacity-90">
            Synergic Intelligent Systems
          </p>

          <h1 className="text-3xl font-bold leading-tight mb-4 ">
            Empowering Innovation{" "}
            <span className="block mt-1">since 2005</span>
          </h1>

          <p className="text-base leading-relaxed mb-4 max-w-md opacity-90">
            Future-ready{" "}
            <span className="inline-block bg-(--brand-black) text-(--brand-white) px-3 py-1 rounded-sm text-base align-middle">
              Intelligent Systems
            </span>{" "}
            built for<br/> performance, automation, and growth.
          </p>

          <p className="text-base leading-relaxed max-w-md mt-3 opacity-90">
            We have been solving real business challenges with<br/> custom software
            since 2005.<br/> Today, we call them Intelligent Systems – modular,<br/>
            scalable, and process-aware platforms that evolve with<br/> your
            business.
          </p>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* DESKTOP*/}
      <div className="hidden lg:block relative">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-[var(--brand-red)]"
          showLines={[true, false, false, false, true]}
          className="text-(--brand-white) pt-28 pb-24"
          desktopOnly={true}
        >
          <GridContainer className="items-center">
            <GridCol span="A" className="hidden lg:block"><div /></GridCol>
            
            <GridCol span="BC" className="flex flex-col items-center text-center pt-10">
              <p className="text-lg uppercase mb-4 opacity-90">
                Synergic Intelligent Systems
              </p>

              <h1 className="text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Empowering Innovationsince 2005
              </h1>

              <p className="text-base leading-relaxed mb-4 max-w-2xl">
                Future-ready{" "}
                <span className="inline-block bg-(--brand-black) text-(--brand-white) px-3 py-1 rounded-sm text-base align-middle">
                  Intelligent Systems
                </span>{" "}
                built for performance, automation, and growth.
              </p>

              <p className="text-base leading-relaxed max-w-3xl opacity-90">
                We have been solving real business challenges with custom
                software since 2005.<br/> Today, we call them Intelligent Systems –
                modular, scalable, and process-aware platforms that evolve with<br/>
                your business.
              </p>
            </GridCol>
            
            <GridCol span="D" className="hidden lg:block"><div /></GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}