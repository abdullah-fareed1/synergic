"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function MissionSection() {
  return (
    <>
      {/* MOBILE: */}
      <section
        className="lg:hidden px-2 py-12"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="flex flex-col items-start  mb-11">
          <div className="relative flex items-center justify-center">
            <img
              src="/mission.png"
              alt="Mission"
              className="w-66 h-66"
            />
            <h2 className="absolute text-white pl-20 text-2xl font-bold  tracking-tight">
              Our Mission<br />is Simple
            </h2>
          </div>
        </div>

        <div className="space-y-2 px-2 text-gray-300">
          <p className="text-base leading-relaxed font-normal">
            To empower forward-thinking companies and organizations with
            technology that works smarter — not harder.
          </p>

          <p className="text-sm leading-relaxed text-gray-400">
            For us, working smarter means <span className="font-semibold text-white">building systems that adapt to
            your needs, simplify complexity, and help your business do
            more with less effort.</span>
          </p>
        </div>
      </section>

      {/* DESKTOP: */}
      <GridSection
        bgColor="bg-[var(--brand-dark)]"
        showLines={[true, false, true, true, true]}
        className="py-16"
        desktopOnly={true}
      >
        <GridContainer className="items-center">
          {/* AB Column */}
          <GridCol
            span="AB"
            className="flex items-center justify-center relative min-h-112.5"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/mission.png"
                alt="Mission"
                className="w-100 h-10 xl:w-112.5 xl:h-112.5 object-contain"
              />
              <h2 className="absolute pl-60 text-white text-3xl xl:text-6xl font-bold text-center leading-[1.15] tracking-tight">
                Our Mission<br />is Simple
              </h2>
            </div>
          </GridCol>

          {/* CD Column*/}
          <GridCol span="CD" className="pl-16 pr-12 py-12 flex items-center">
            <div className="space-y-6 max-w-lg">
              <p className="text-gray-300 text-xl xl:text-2xl leading-relaxed font-normal">
                To empower forward-thinking companies and organizations with
                technology that works smarter — not harder.
              </p>

              <p className="text-gray-400 text-base xl:text-lg leading-relaxed">
                For us, working smarter means <span className="font-semibold text-white">building systems that adapt to
                your needs, simplify complexity, and help your business do
                more with less effort.</span>
              </p>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>
    </>
  );
}