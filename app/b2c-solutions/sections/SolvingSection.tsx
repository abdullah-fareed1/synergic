import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { ArrowRight } from 'lucide-react';

const RetailerSolvingSection = () => {
  const stripePattern = 'linear-gradient(45deg, #d9d9d9 8.33%, #ffffff 8.33%, #ffffff 50%, #d9d9d9 50%, #d9d9d9 58.33%, #ffffff 58.33%, #ffffff 100%)';
  const stripeSize = '6.00px 6.00px';

  return (
    <>
      <GridSection 
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="h-[20vh]">
          <GridCol span="AB" className="flex items-center pl-8">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
                Solving What Retailers Struggle With
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Our modern eShop platform helps you convert more visitors while reducing operational complexity.
              </p>
            </div>
          </GridCol>

          <GridCol 
            span="CD" 
            className="h-full relative"
            style={{ 
              backgroundImage: stripePattern,
              backgroundSize: stripeSize
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-400 opacity-30"></div>
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
              Common challenges costing you sales
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
                  Slow websites that drive shoppers away
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Rigid platforms with limited customization options
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Transaction fees eating into margins (2-3% per sale)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Checkout abandonment from poor mobile experiences
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Plugin-heavy systems that break or create security risks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-2xl">•</span>
                <span className="text-gray-700 text-[15px] leading-relaxed">
                  Disconnected product, inventory, and order systems
                </span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="CD" className="flex flex-col pr-12 pl-16">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Lightning-fast performance
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    under 2-second load times that keep customers engaged
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Mobile-first checkout
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    optimized flows for every device
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    No transaction fees
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    keep 100% of your revenue
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Seamless integrations
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    unified product data, inventory, and order management
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Enterprise-grade security
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    without enterprise complexity
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1">
                    Unlimited customization
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    your brand, your rules, your way
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
        <div className="absolute top-0 w-full h-px bg-gray-400 opacity-30"></div>

        <GridContainer className="h-25">
          <GridCol 
            span="AB" 
            className="h-full relative"
            style={{ 
              backgroundImage: stripePattern,
              backgroundSize: stripeSize
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-400 opacity-30"></div>
            <div className="h-full w-full"></div>
          </GridCol>

          <GridCol span="CD" className="flex items-stretch h-full">
            <div className="w-full bg-[#2B7856] cursor-pointer flex items-center relative overflow-hidden">
              <div className="flex items-center justify-between p-6 w-full relative z-10 pr-30">
                <div>
                  <p className="text-sm text-white/80 mb-1">Talk to an eCommerce expert</p>
                  <h3 className="text-xl text-white">
                    Let's create your new eShop
                  </h3>
                </div>
              </div>
                            <div className="absolute right-0 top-0 bottom-0 w-25 bg-[#2E9568] border-l border-white/10 flex items-center justify-center">
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </GridCol>
        </GridContainer>

        <div className="absolute bottom-0 w-full h-px bg-gray-400 opacity-30"></div>
      </GridSection>

      {/* Mobile Layout */}
      <section className="lg:hidden bg-white">
        <div className="px-6 pt-8 pb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              Solving What Retailers Struggle With
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our modern eShop platform helps you convert more visitors while reducing operational complexity.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-500 text-2xl font-bold">✕</span>
              <h3 className="text-xl font-extrabold text-gray-900">
                Common challenges costing you sales
              </h3>
            </div>

            <ul className="space-y-2.5 mt-6">
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  Slow websites that drive shoppers away
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  Rigid platforms with limited customization options
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  Transaction fees eating into margins (2-3% per sale)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  Checkout abandonment from poor mobile experiences
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  Plugin-heavy systems that break or create security risks
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  Disconnected product, inventory, and order systems
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-2xl font-bold">+</span>
              <h3 className="text-xl font-extrabold text-gray-900">
                We replace these with systems that deliver
              </h3>
            </div>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">
                    Lightning-fast performance
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    under 2-second load times that keep customers engaged
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">
                    Mobile-first checkout
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    optimized flows for every device
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">
                    No transaction fees
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    keep 100% of your revenue
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">
                    Seamless integrations
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    unified product data, inventory, and order management
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">
                    Enterprise-grade security
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    without enterprise complexity
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">
                    Unlimited customization
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    your brand, your rules, your way
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-[#2B7856] cursor-pointer p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 mb-1">Talk to an eCommerce expert</p>
              <h3 className="text-lg text-white">
                Let's create your new eShop
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

export default RetailerSolvingSection;