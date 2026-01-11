"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function MissionSection() {
  return (
    <>
      {/* MOBILE*/}
      <section
        className="lg:hidden px-2 py-2"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="flex flex-col items-start mb-2">
          <img
            src="images/our-mission.webp"
            alt="Our Mission is Simple"
            className="w-76 h-76"
          />
        </div>

        <div className="space-y-2 px-2 text-gray-300">
          <p className="text-xl leading-relaxed font-normal">
            To empower forward-thinking companies and organizations with
            technology that works smarter — not harder.
          </p>

          <p className="text-base leading-relaxed text-gray-400 mb-11">
            For us, working smarter means{" "}
            <span className="text-white">
              building systems that adapt to your needs, simplify complexity,
              and help your business do more with less effort.
            </span>
          </p>
        </div>
      </section>

      {/* DESKTOP*/}
      <GridSection
        bgColor="bg-[var(--brand-dark)]"
        showLines={[true, false, true, true, true]}
        className="py-16"
        desktopOnly={true}
      >
        <GridContainer className="items-center">
          <GridCol
            span="AB"
            className="flex items-center justify-center relative min-h-112.5"
          >
            <img
              src="images/our-mission.webp"
              alt="Our Mission is Simple"
              className="w-100 h-100 xl:w-115.5 xl:h-115.5 object-contain"
            />
          </GridCol>

          <GridCol span="CD" className="pl-16 pr-12 py-12 flex items-center">
            <div className="space-y-6 ">
              <p className="text-gray-300 text-xl xl:text-2xl font-normal">
                To empower forward-thinking companies and organizations<br/> with
                technology that works smarter — not harder.
              </p>

              <p className="text-gray-200 text-base xl:text-lg leading-relaxed">
                For us, working smarter means{" "}
                <span className="font-semibold text-white">
                  building systems that adapt to<br/>
                   your needs, simplify complexity, and help your business do<br/>
                    more with less effort.
                </span>
              </p>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>
    </>
  );
}