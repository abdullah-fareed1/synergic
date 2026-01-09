import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { ArrowRight } from 'lucide-react';

const B2BSolvingSection = () => {
  return (
    <>
      <GridSection 
        showLines={[true, false, true, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="py-8">
          <GridCol span="AB" className="flex items-center pl-8">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Solving What Slows B2B Down
              </h2>
            </div>
          </GridCol>

          <GridCol span="C" className="h-full relative">
            <div className="h-full w-full"></div>
          </GridCol>
          <GridCol span="D" className="h-full relative">
            <div className="h-full w-full"></div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute top-0 w-full h-px bg-gray-400 opacity-30"></div>
        
        <GridContainer className="h-[10vh]">
          <GridCol span="AB" className="flex items-center relative pl-16">
            <svg className="absolute left-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8L8 24M8 8L24 24" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Common challenges costing you sales:
            </h3>
          </GridCol>

          <GridCol span="CD" className="flex items-center relative pl-16">
            <svg className="absolute left-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6V26M6 16H26" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3 className="text-2xl font-extrabold text-gray-900">
              We replace these with systems that deliver
            </h3>
          </GridCol>
        </GridContainer>

        <div className="absolute bottom-0 w-full h-px bg-gray-400 opacity-30"></div>
      </GridSection>

      <GridSection 
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="py-12">
          <GridCol span="AB" className="flex flex-col pr-12 pl-16">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Manual quoting and outdated product catalogs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Complex pricing logic that can't scale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Sales teams tied to legacy systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  No self-service or order tracking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Lack of integration with ERP, CRM, or warehouse systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Friction in approval workflows or reordering processes
                </span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="CD" className="flex flex-col pr-12 pl-16">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px]">
                    50% faster reordering
                  </h4>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Streamlined approval flows
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    that reduce sales cycle time
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Seamless ERP integration
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    eliminating double data entry
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Role-based access
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    with enterprise-grade security
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Automated workflows
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    that free up your sales team for high-value activities
                  </p>
                </div>
              </li>
            </ul>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, true, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute top-0 w-full h-px bg-gray-400 opacity-30 z-20"></div>

        <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-20"></div>
        <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-20"></div>

        <div className="absolute bottom-0 left-[5.56%] -translate-x-1/2 translate-y-1/2 z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M4 12H20" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <GridContainer className="h-25">
          <GridCol 
            span="AB" 
            className="h-full relative"
            style={{ backgroundColor: '#F7F7F7' }}
          >
            <div className="h-full w-full"></div>
          </GridCol>

          <GridCol span="CD" className="flex items-stretch h-full">
            <div className="w-full bg-[#2B7856] cursor-pointer flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-white/80 mb-1">Need more info ?</p>
                <h3 className="text-xl text-white">
                  Let's create your new B2B platform
                </h3>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </GridCol>
        </GridContainer>

        <div className="absolute bottom-0 w-full h-px bg-gray-400 opacity-30 z-20"></div>
      </GridSection>

      <section className="lg:hidden bg-white">
        <div className="px-6 pt-8 pb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Solving What Slows B2B Down
            </h2>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-500 text-2xl font-bold">✕</span>
              <h3 className="text-xl font-extrabold text-gray-900">
                Common challenges costing you sales:
              </h3>
            </div>

            <ul className="space-y-2.5 mt-6">
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-base">•</span>
                <span className="text-gray-700 text-base leading-relaxed">
                  Manual quoting and outdated product catalogs
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-base">•</span>
                <span className="text-gray-700 text-base leading-relaxed">
                  Complex pricing logic that can't scale
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-base">•</span>
                <span className="text-gray-700 text-base leading-relaxed">
                  Sales teams tied to legacy systems
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-base">•</span>
                <span className="text-gray-700 text-base leading-relaxed">
                  No self-service or order tracking
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-base">•</span>
                <span className="text-gray-700 text-base leading-relaxed">
                  Lack of integration with ERP, CRM, or warehouse systems
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-base">•</span>
                <span className="text-gray-700 text-base leading-relaxed">
                  Friction in approval workflows or reordering processes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-3xl font-bold">+</span>
              <h3 className="text-xl font-extrabold text-gray-900">
                We replace these with systems that deliver
              </h3>
            </div>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-base">
                    50% faster reordering
                  </h4>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-0.5">
                    Streamlined approval flows
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    that reduce sales cycle time
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-0.5">
                    Seamless ERP integration
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    eliminating double data entry
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-0.5">
                    Role-based access
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    with enterprise-grade security
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-0.5">
                    Automated workflows
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    that free up your sales team for high-value activities
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-[#2B7856] cursor-pointer p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 mb-1">Need more info ?</p>
              <h3 className="text-lg text-white">
                Let's create your new B2B platform
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

export default B2BSolvingSection;