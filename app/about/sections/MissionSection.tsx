"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function MissionSection() {
  return (
    <>
      {/* MOBILE: stacked layout */}
      <section
        className="lg:hidden px-2 py-12"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="flex flex-col items-start mb-11">
          <img
            src="images/our-mission.webp"
            alt="Our Mission is Simple"
            className="w-66 h-66"
          />
        </div>

        <div className="space-y-2 px-2 text-gray-300">
          <p className="text-base leading-relaxed font-normal">
            To empower forward-thinking companies and organizations with
            technology that works smarter — not harder.
          </p>

          <p className="text-sm leading-relaxed text-gray-400">
            For us, working smarter means{" "}
            <span className="font-semibold text-white">
              building systems that adapt to your needs, simplify complexity,
              and help your business do more with less effort.
            </span>
          </p>
        </div>
      </section>

      {/* DESKTOP: grid-based layout */}
      <GridSection
        bgColor="bg-[var(--brand-dark)]"
        showLines={[true, false, true, true, true]}
        className="py-16"
        desktopOnly={true}
      >
        <GridContainer className="items-center">
          {/* AB Column - Image */}
          <GridCol
            span="AB"
            className="flex items-center justify-center relative min-h-[450px]"
          >
            <img
              src="images/our-mission.webp"
              alt="Our Mission is Simple"
              className="w-[400px] h-[400px] xl:w-[450px] xl:h-[450px] object-contain"
            />
          </GridCol>

          {/* CD Column - Text content */}
          <GridCol span="CD" className="pl-16 pr-12 py-12 flex items-center">
            <div className="space-y-6 max-w-lg">
              <p className="text-gray-300 text-xl xl:text-2xl leading-relaxed font-normal">
                To empower forward-thinking companies and organizations with
                technology that works smarter — not harder.
              </p>

              <p className="text-gray-400 text-base xl:text-lg leading-relaxed">
                For us, working smarter means{" "}
                <span className="font-semibold text-white">
                  building systems that adapt to your needs, simplify
                  complexity, and help your business do more with less effort.
                </span>
              </p>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>
    </>
  );
}