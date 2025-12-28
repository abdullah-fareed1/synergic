import React from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { ArrowRight } from 'lucide-react';

const ModularSection = () => {
  return (
    <>
      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-gray-100"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="py-16">
          <GridCol span="AB" className="flex flex-col relative">
            <div className="pl-12 pr-8">
              <h2 className="text-4xl font-extrabold text-black mb-6 leading-tight">
                Modular & Custom by Design
              </h2>
              <p className="text-black text-xl leading-relaxed mb-12">
                Your business is unique — your commerce system should be too.
              </p>
            </div>

            <div className="absolute left-0 right-0" style={{ bottom: 0 }}>
              <div className="w-full bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer flex items-center">
                <div className="flex items-center justify-between p-6 w-full">
                  <div>
                    <p className="text-sm text-white/80 mb-1">Need a custom mix? We'll design the right stack</p>
                    <h3 className="text-xl font-normal text-white">
                      Start your unique commerce platform
                    </h3>
                  </div>

                  <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </GridCol>

          <GridCol span="CD" className="flex flex-col pl-12 pr-12">
            <p className="text-black text-base leading-relaxed mb-8">
              Every solution is <span className="font-bold">modular</span>. Need just a modern eShop today? Expanding into B2B next year? Adding subscriptions or a PIM down the line? You can start small and grow freely by combining the components you need, when you need them.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-black font-bold text-base mb-1">Mix & match solutions</h4>
                  <p className="text-black text-sm leading-relaxed">combine B2C with PIM, OMS, or loyalty programs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-black font-bold text-base mb-1">Customize at every layer</h4>
                  <p className="text-black text-sm leading-relaxed">checkout, integrations, dashboards, and roles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-black font-bold text-base mb-1">Future-ready</h4>
                  <p className="text-black text-sm leading-relaxed">mobile apps, AI search, or new sales channels anytime</p>
                </div>
              </li>
            </ul>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-gray-100">
        <div className="px-6 pt-12 pb-8">
          <h2 className="text-3xl font-extrabold text-black mb-4 leading-tight">
            Modular & Custom by Design
          </h2>
          <p className="text-black text-base leading-relaxed mb-6">
            Your business is unique — your commerce system should be too.
          </p>
          
          <p className="text-black text-base leading-relaxed">
            Every solution is <span className="font-bold">modular</span>. Need just a modern eShop today? Expanding into B2B next year?
          </p>
          <p className="text-black text-base leading-relaxed mt-2">
            Adding subscriptions or a PIM down the line? You can start small and grow freely by combining the components you need, when you need them.
          </p>
        </div>

        <div className="px-6 pb-8">
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-0.5">✓</span>
              <div>
                <h4 className="text-black font-bold text-base mb-1">Mix & match solutions</h4>
                <p className="text-black text-sm leading-relaxed">combine B2C with PIM, OMS, or loyalty programs</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-0.5">✓</span>
              <div>
                <h4 className="text-black font-bold text-base mb-1">Customize at every layer</h4>
                <p className="text-black text-sm leading-relaxed">checkout, integrations, dashboards, and roles</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-0.5">✓</span>
              <div>
                <h4 className="text-black font-bold text-base mb-1">Future-ready</h4>
                <p className="text-black text-sm leading-relaxed">mobile apps, AI search, or new sales channels anytime</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer">
          <div className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-white/80 mb-1">Need a custom mix? We'll design the right stack</p>
              <h3 className="text-xl font-normal text-white">
                Start your unique commerce platform
              </h3>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModularSection;