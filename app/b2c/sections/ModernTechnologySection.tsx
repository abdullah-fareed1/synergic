import { GridSection, GridContainer, GridCol } from "../../components/grid";

const ModernTechnologySection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, transparent, transparent 8px, #e5e5e5 10px, #e5e5e5 11px)";

  return (
    <>
      {/* Desktop View */}
      <GridSection
        desktopOnly={true}
        showLines={[true, true, true, true, true]}
        className=""
        bgColor="bg-[#F3F5F5]"
      >
        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30 z-2"
          style={{ top: "7%" }}
        />

        <div
          className="hidden lg:block absolute left-0 top-0"
          style={{
            height: "17%",
            width: "27.78%",
            background: stripePattern,
            zIndex: 1,
            marginTop: 0,
            paddingTop: 0,
          }}
        />

        <div className="py-20">
          <GridContainer>
            <GridCol span="AB" className="pr-12 py-8 pt-15 pl-9">
              <div className="space-y-8">
                <p className="text-[#8044DE] text-l font-bold tracking-wider uppercase">
                  CHOOSE. COMBINE. GROW.
                </p>

                <h2 className="text-4xl font-extrabold text-black leading-tight">
                  Powered by a Modern<br />Technology Stack
                </h2>

                <p className="text-gray-600 text-2xl">
                  At the core of every project is our Composable Technology
                  <br />
                  Pack — built to adapt, scale, and integrate.
                </p>

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <img
                      src="/24-hour-service.svg"
                      alt="Cloud Native"
                      className="w-10 h-10 shrink-0"
                    />
                    <p className="text-gray-700 text-base pt-1">
                      Cloud-native, resilient, and future-proof
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src="/speed-alt.svg"
                      alt="Fast Response"
                      className="w-10 h-10 shrink-0"
                    />
                    <p className="text-gray-700 text-base pt-1">
                      Fast response times — even with 100K+ SKUs.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src="/cloud-network2.svg"
                      alt="Scalability"
                      className="w-10 h-10 shrink-0"
                    />
                    <p className="text-gray-700 text-base pt-1">
                      Always available — built-in failover & scalability.
                    </p>
                  </div>
                </div>
              </div>
            </GridCol>

            <GridCol span="C" className="py-8 pl-8 pt-15">
              <div className="space-y-10">
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Medusa.js
                  </h3>
                  <p className="text-gray-600 text-l leading-relaxed">
                    open-source headless commerce engine
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Next.js
                  </h3>
                  <p className="text-gray-600 text-l leading-relaxed">
                    fast, secure, mobile-first storefronts
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Cloud & AI Search
                  </h3>
                  <p className="text-gray-600 text-l leading-relaxed">
                    fast, typo-tolerant, semantic product discovery
                  </p>
                </div>
              </div>
            </GridCol>

            <GridCol span="D" className="py-8 pl-8 pt-15">
              <div className="space-y-10">
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Cubik PIM & OMS
                  </h3>
                  <p className="text-gray-600 text-l leading-relaxed">
                    centralized product and order manager
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Directus CMS
                  </h3>
                  <p className="text-gray-600 text-l leading-relaxed">
                    flexible content management for blogs and marketing pages
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    Automation & Workflows
                  </h3>
                  <p className="text-gray-600 text-l leading-relaxed">
                    enterprise-grade orchestration and analytics
                  </p>
                </div>
              </div>
            </GridCol>
          </GridContainer>
        </div>
      </GridSection>

      {/* Mobile View */}
      <section className="lg:hidden bg-[#F3F3EE] px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[#8044DE] text-l font-bold tracking-wider uppercase">
              CHOOSE. COMBINE. GROW.
            </p>

            <h2 className="text-3xl font-extrabold text-black leading-tight">
              Powered by a Modern Technology Stack
            </h2>

            <p className="text-gray-600 text-l leading-relaxed">
              At the core of every project is our Composable Technology Pack —
              built to adapt, scale, and integrate.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <img
                src="/24-hour-service.svg"
                alt="Cloud Native"
                className="w-8 h-8 shrink-0"
              />
              <p className="text-gray-700 text-l pt-0.5">
                Cloud-native, resilient, and future-proof
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/speed-alt.svg"
                alt="Fast Response"
                className="w-8 h-8 shrink-0"
              />
              <p className="text-gray-700 text-l pt-0.5">
                Fast response times — even with 100K+ SKUs.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/cloud-network2.svg"
                alt="Scalability"
                className="w-8 h-8 shrink-0"
              />
              <p className="text-gray-700 text-l pt-0.5">
                Always available — built-in failover & scalability.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-400 opacity-30" />

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 font-bold text-l mb-1.5">
                Medusa.js
              </h3>
              <p className="text-gray-600 text-l leading-relaxed">
                open-source headless commerce engine
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-l mb-1.5">
                Cubik PIM & OMS
              </h3>
              <p className="text-gray-600 text-l leading-relaxed">
                centralized product and order management
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-l mb-1.5">
                Next.js
              </h3>
              <p className="text-gray-600 text-l leading-relaxed">
                fast, secure, mobile-first storefronts
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-l mb-1.5">
                Directus CMS
              </h3>
              <p className="text-gray-600 text-l leading-relaxed">
                flexible content management for blogs and marketing pages
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-l mb-1.5">
                Cloud & AI Search
              </h3>
              <p className="text-gray-600 text-l leading-relaxed">
                fast, typo-tolerant, semantic product discovery
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-l mb-1.5">
                Automation & Workflows
              </h3>
              <p className="text-gray-600 text-l leading-relaxed">
                enterprise-grade orchestration and analytics
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModernTechnologySection;
