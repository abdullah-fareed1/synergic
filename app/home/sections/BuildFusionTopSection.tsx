import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

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
      {/* DESKTOP */}
      <GridSection
        bgColor="bg-[#111D2B]"
        showLines={[true, false, false, false, false]}
        className="py-20 text-white"
        desktopOnly={true}
      >
        <GridContainer className="items-start">
          <GridCol span="AB" className="pr-16 pl-8">
            <p className="text-sm text-white font-bold tracking-widest uppercase mb-6">
              CHOOSE. COMBINE. GROW.
            </p>

            <h2 className="text-5xl font-extrabold leading-tight mb-8">
              What Do You Want <br />
              to Build?
            </h2>

            <p className="text-xl text-gray-300 mb-4">Not sure where to start?</p>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Just tell us what you're aiming to build — we'll bring<br/>
              the right technology, logic, and integrations to <br/>
              make it work.
            </p>
          </GridCol>

          <GridCol span="CD">
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
                  <h3 className="text-lg text-gray-400 pr-8 leading-snug">
                    {title}
                  </h3>

                  <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>

            <div className="border border-gray-400/30 border-t-0 bg-[#2B7856] cursor-pointer">
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-white/80 mb-1">Beyond the Usual?</p>
                  <h3 className="text-xl">
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

      {/* MOBILE */}
      <section className="lg:hidden bg-[#111D2B] text-white px-4 py-12">
        <div className="mb-10">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-300">
            CHOOSE. COMBINE. GROW.
          </p>

          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            What Do You Want<br />
            to Build?
          </h2>

          <p className="text-lg text-gray-300 mb-2">
            Not sure where to start?
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Just tell us what you're aiming to build — we'll<br />
            bring the right technology, logic, and<br />
            integrations to make it work.
          </p>
        </div>

        <div className="grid grid-cols-2 border border-gray-400/30">
          {buildOptions.map((title, i) => (
            <div
              key={title}
              className={`
                relative p-4 h-24 flex items-center
                border-gray-400/30
                ${i % 2 === 0 ? "border-r" : ""}
                ${i < 4 ? "border-b" : ""}
                cursor-pointer
              `}
            >
              <h3 className="text-sm text-gray-400 pr-6 leading-snug">
                {title}
              </h3>
              <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        <div className="border border-gray-400/30 border-t-0 bg-[#2B7856] cursor-pointer">
          <div className="flex items-center justify-between p-6">
            <div className="pr-4">
              <p className="text-xs text-white/80 mb-1.5">Beyond the Usual?</p>
              <h3 className="text-base font-semibold leading-tight">
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