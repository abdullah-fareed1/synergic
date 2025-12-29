import { GridSection, GridContainer, GridCol } from "../../components/grid";
const SolvingSection = () => {
  return (
    <>
      <GridSection 
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="py-16">
          <GridCol span="AB" className="flex flex-col pl-24">
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Solving What Slows You Down
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed max-w-md">
                From fast retail shops to enterprise-grade commerce ecosystems — tailored, scalable, and built to grow.
              </p>
            </div>

            <div >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-red-500 text-2xl font-bold">✕</span>
                <h3 className="text-2xl font-extrabold text-gray-900">Common challenges</h3>
              </div>

              <p className="text-gray-900 text-base mb-8 leading-relaxed pt-8">
                We see these problems all the time — and <span className="font-bold">we build <br/> systems that solve them.</span>
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Slow sites losing mobile customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Platforms crashing under high traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Limited catalog logic and poor UX</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Checkout without role-based pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Painful ERP/CRM/shipping integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Security gaps in old plugins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Frequent plugin conflicts and site breakage after updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">•</span>
                  <span className="text-gray-900 text-base leading-relaxed">Every change causes issues — and growth becomes a risk</span>
                </li>
              </ul>
            </div>
          </GridCol>

          <GridCol span="CD" className="flex flex-col pl-16">
            <div className="mb-12">
              <div style={{ height: '120px' }}></div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-green-500 text-2xl font-bold">+</span>
                <h3 className="text-2xl font-extrabold text-gray-900">The Better Way Forward</h3>
              </div>

              <p className="text-gray-900 text-base mb-8 pt-8 leading-relaxed">
                Our commerce solutions go beyond the basics, combining modern design <br/> with enterprise-grade flexibility — <span className="font-bold">without the complexity.</span>
              </p>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">Secure by Design</h4>
                    <p className="text-gray-900 text-sm leading-relaxed">encrypted, compliant, and access-controlled</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">Fast & Reliable</h4>
                    <p className="text-gray-900 text-sm leading-relaxed">optimized for traffic spikes and large catalogs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">Scalable & Flexible</h4>
                    <p className="text-gray-900 text-sm leading-relaxed">add products, users, and channels anytime</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">Easily Integrated</h4>
                    <p className="text-gray-900 text-sm leading-relaxed">ERP, PIM, logistics, payments, and more</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">Customizable</h4>
                    <p className="text-gray-900 text-sm leading-relaxed">checkout, roles, and workflows your way</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">Transparent Pricing</h4>
                    <p className="text-gray-900 text-sm leading-relaxed">no hidden costs or transaction fees, so you sell without fear</p>
                  </div>
                </li>
              </ul>
            </div>
          </GridCol>
        </GridContainer>

        <div className="absolute w-full h-px bg-gray-400 opacity-30" style={{ top: 'calc(4rem + 120px + 20px)' }}></div>

        <div className="absolute w-full h-px bg-gray-400 opacity-30" style={{ top: 'calc(4rem + 120px + 100px)' }}></div>

        <div className="w-full h-px bg-gray-400 opacity-30"></div>
      </GridSection>

      <section className="lg:hidden bg-white">
        <div className="px-6 pt-8 pb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              Solving What Slows You Down
            </h2>
            <p className="text-gray-900 text-base leading-relaxed">
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

            <p className="text-gray-900 text-sm mb-4 leading-relaxed">
              We see these problems all the time — and <span className="font-bold">we <br/> build systems that solve them.</span>
            </p>

            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Slow sites losing mobile customers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Platforms crashing under high traffic</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Limited catalog logic and poor UX</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Checkout without role-based pricing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Painful ERP/CRM/shipping integrations</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Security gaps in old plugins</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Frequent plugin conflicts and site breakage after updates</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-400 mt-0.5 text-sm">•</span>
                <span className="text-gray-900 text-sm leading-relaxed">Every change causes issues — and growth becomes a risk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-500 text-2xl font-bold">+</span>
              <h3 className="text-xl font-extrabold text-gray-900">The Better Way Forward</h3>
            </div>

            <p className="text-gray-900 text-sm mb-4 leading-relaxed">
              Our commerce solutions go beyond the basics,<br/> combining modern design with enterprise-grade<br/> flexibility — <span className="font-bold">without the complexity.</span>
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">Secure by Design</h4>
                  <p className="text-gray-900 text-sm leading-relaxed">encrypted, compliant, and access-controlled</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">Fast & Reliable</h4>
                  <p className="text-gray-900 text-sm leading-relaxed">optimized for traffic spikes and large catalogs</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">Scalable & Flexible</h4>
                  <p className="text-gray-900 text-sm leading-relaxed">add products, users, and channels anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">Easily Integrated</h4>
                  <p className="text-gray-900 text-sm leading-relaxed">ERP, PIM, logistics, payments, and more</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">Customizable</h4>
                  <p className="text-gray-900 text-sm leading-relaxed">checkout, roles, and workflows your way</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5">Transparent Pricing</h4>
                  <p className="text-gray-900 text-sm leading-relaxed">no hidden costs or transaction fees, so you sell without fear</p>
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