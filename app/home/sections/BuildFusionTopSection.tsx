import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { GridSection, GridContainer, GridCol } from "../../components";

export default function BuildFusionTopSection() {
  const buildOptions = [
    "Modern Online Store",
    "B2B Commerce Platform",
    "SaaS Platform You Can Grow",
    "Smart Product Catalog or PIM",
    "Custom Business Internal System",
    "Portal for Your Customers or Partners",
  ];

  return (
    <>
      {/* DESKTOP VERSION - Grid Layout */}
      <GridSection
        bgColor="bg-[#111D2B]"
        showLines={[true, false, false, false, false]}
        className="py-20 text-white"
        desktopOnly={true}
      >
        <GridContainer className="items-start">
          {/* LEFT — A-B */}
          <GridCol span="AB" className="pr-16 pl-8">
            <p className="text-sm text-white font-bold tracking-widest uppercase mb-6">
              CHOOSE. COMBINE. GROW.
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              What Do You Want <br />
              to Build?
            </h2>

            <p className="text-lg text-gray-300 mb-2">Not sure where to start?</p>

            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Just tell us what you're aiming to build — we'll bring the right
              technology, logic, and integrations to make it work.
            </p>
          </GridCol>

          {/* RIGHT — C-D */}
          <GridCol span="CD">
            {/* 2 × 3 Options Grid */}
            <div className="grid grid-cols-2 border border-gray-400/30">
              {buildOptions.map((title, i) => (
                <div
                  key={title}
                  className={`
                    relative p-6 min-h-30 flex items-center
                    border-gray-400/30
                    ${i % 2 === 0 ? "border-r" : ""}
                    ${i < 4 ? "border-b" : ""}
                    hover:bg-white/5 transition-colors cursor-pointer
                  `}
                >
                  <h3 className="text-lg font-medium pr-8 leading-snug">
                    {title}
                  </h3>

                  <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>

            {/* CTA — full C-D width */}
            <div className="mt-6 border border-gray-400/30 bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer">
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-white/80 mb-1">Beyond the Usual?</p>
                  <h3 className="text-xl font-bold">
                    Let's Build Your System Together
                  </h3>
                </div>

                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* MOBILE VERSION */}
      <section className="lg:hidden bg-[#111D2B] text-white px-5 py-12">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-300">
            CHOOSE. COMBINE. GROW.
          </p>

          <h2 className="text-3xl font-bold leading-tight mb-6">
            What Do You Want to Build?
          </h2>

          <p className="text-base text-gray-300 mb-2 font-medium">
            Not sure where to start?
          </p>

          <p className="text-base text-gray-300 leading-relaxed">
            Just tell us what you're aiming to build — we'll bring the right
            technology, logic, and integrations to make it work.
          </p>
        </div>

        {/* Build Options - 2 Column Grid */}
        <div className="grid grid-cols-2 border border-gray-400/30">
          {buildOptions.map((title, i) => (
            <div
              key={title}
              className={`
                relative p-4 min-h-25 flex items-center
                border-gray-400/30
                ${i % 2 === 0 ? "border-r" : ""}
                ${i < 4 ? "border-b" : ""}
                hover:bg-white/5 transition-colors cursor-pointer
              `}
            >
              <h3 className="text-sm font-medium pr-6 leading-snug">
                {title}
              </h3>
              <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-6 border border-gray-400/30 bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer">
          <div className="flex items-center justify-between p-5">
            <div className="pr-4">
              <p className="text-xs text-white/80 mb-1.5">Beyond the Usual?</p>
              <h3 className="text-base font-bold leading-tight">
                Let's Build Your System Together
              </h3>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}