import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from 'next/image';

const SolvingSection = () => {
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
              <h2 className="text-3xl font-extrabold text-black mb-3">
                Solving What Slows You Down
              </h2>
              <p className="text-black text-2xl">
                From fast retail shops to enterprise-grade commerce ecosystems<br/>
                — tailored, scalable, and built to grow.
              </p>
            </div>
          </GridCol>

          <GridCol span="CD" className="h-full relative">
            <div></div>
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
              Common challenges
            </h3>
          </GridCol>

          <GridCol span="CD" className="flex items-center relative pl-16">
            <svg className="absolute left-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6V26M6 16H26" stroke="#2B7856" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3 className="text-2xl font-extrabold text-gray-900">
              The Better Way Forward
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
            <p className="text-gray-900 text-lg mb-8 leading-relaxed">
              We see these problems all the time — and <span className="font-bold">we build<br/>
              systems that solve them.</span>
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Slow sites losing mobile customers
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Platforms crashing under high traffic
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Limited catalog logic and poor UX
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Checkout without role-based pricing
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Painful ERP/CRM/shipping integrations
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Security gaps in old plugins
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Frequent plugin conflicts and site breakage after updates
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Every change causes issues — and growth becomes a risk
                </span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="CD" className="flex flex-col pr-12 pl-16">
            <p className="text-gray-900 text-lg mb-8 leading-relaxed">
              Our commerce solutions go beyond the basics, combining modern design<br/>
              with enterprise-grade flexibility — <span className="font-bold">without the complexity.</span>
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Secure by Design
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    encrypted, compliant, and access-controlled
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Fast & Reliable
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    optimized for traffic spikes and large catalogs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Scalable & Flexible
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    add products, users, and channels anytime
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Easily Integrated
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    ERP, PIM, logistics, payments, and more
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Customizable
                  </h4>
                  <p className="text-gray-900 text-lg  leading-relaxed">
                    checkout, roles, and workflows your way
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Transparent Pricing
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    no hidden costs or transaction fees, so you sell without fear
                  </p>
                </div>
              </li>
            </ul>
          </GridCol>
        </GridContainer>
      </GridSection>
      {/* MOBILE */}
      <section className="lg:hidden bg-white">
        <div className="px-6 pt-8 pb-2">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              Solving What Slows<br/>You Down
            </h2>
            <p className="text-gray-900 text-[22px] ">
              From fast retail shops to enterprise-grade commerce ecosystems — tailored, scalable, and built to grow.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-500 text-2xl font-bold">✕</span>
              <h3 className="text-xl font-extrabold text-gray-900">Common challenges</h3>
            </div>

            <p className="text-gray-900 text-[19px] mb-4 leading-relaxed">
              We see these problems all the time — and <span className="font-bold">we build systems that solve them.</span>
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Slow sites losing mobile customers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Platforms crashing under high traffic</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Limited catalog logic and poor UX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Checkout without role-based pricing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Painful ERP/CRM/shipping integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Security gaps in old plugins</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Frequent plugin conflicts and site breakage after updates</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">Every change causes issues — and growth becomes a risk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M11 3V19M3 11H19" stroke="#2B7856" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-extrabold text-gray-900">The Better Way Forward</h3>
            </div>

            <p className="text-gray-900 text-[19px] mb-6 leading-relaxed">
              Our commerce solutions go beyond the basics, combining modern design with enterprise-grade flexibility — <span className="font-bold">without the complexity.</span>
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={10} 
                  height={10} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">Secure by Design</h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">encrypted, compliant, and access-controlled</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={10} 
                  height={10} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">Fast & Reliable</h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">optimized for traffic spikes and large catalogs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={10} 
                  height={10} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">Scalable & Flexible</h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">add products, users, and channels anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={10} 
                  height={10} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">Easily Integrated</h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">ERP, PIM, logistics, payments, and more</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={10} 
                  height={10} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">Customizable</h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">checkout, roles, and workflows your way</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image 
                  src="/icons/green-tick.svg" 
                  alt="" 
                  width={10} 
                  height={10} 
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">Transparent Pricing</h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">no hidden costs or transaction fees, so you sell without fear</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolvingSection;