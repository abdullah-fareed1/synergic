import React from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const SolutionsSection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.06) 0px, rgba(0, 0, 0, 0.06) 1px, transparent 1px, transparent 4px)";

  const solutions = [
    {
      title: "Enterprise Systems",
      description:
        "For large organizations with complex needs — internal operations, analytics, and smart automation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      features: [
        "Enterprise information systems and BI backbones",
        "Automation and integration services",
        "AI-enhanced discovery and data products",
        "Custom mobile + web apps with business logic",
      ],
    },
    {
      title: "Portals & SaaS Platforms",
      description:
        "For building digital ecosystems, customer self-service tools, and scalable SaaS models.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      features: [
        "Digital portals and self-service hubs",
        "SaaS platforms and subscription-based systems",
        "Custom mobile + web apps with business logic",
      ],
    },
    {
      title: "Commerce & Data Products",
      description:
        "For companies selling online or monetizing data through modern digital channels.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      features: [
        "B2C, B2B and eCommerce marketplaces",
        "AI-enhanced discovery and data products",
        "Product catalogs, advanced search, and personalization engines",
      ],
    },
  ];

  return (
    <div className="bg-[#F3F3EE]">
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#F3F3EE]"
        className="relative hidden lg:block"
      >
        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
          style={{ top: "15%", zIndex: 2 }}
        />

        <GridContainer className="items-stretch">
          <GridCol
            span="A"
            className="relative flex flex-col justify-center py-16 px-8"
          >
            <div
              className="absolute left-0 right-0 top-0"
              style={{
                height: "15%",
                background: stripePattern,
                zIndex: 0,
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold text-black leading-tight mb-4">
                Solutions You Can Create with Fusion
              </h2>
              <div className="w-12 h-1.5 bg-[#FB3B22]" />
            </div>
          </GridCol>

          <GridCol span="B" className="py-16 px-6 flex flex-col pt-32">
            <img
              src={solutions[0].image}
              alt={solutions[0].title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-black mb-3">
              {solutions[0].title}
            </h3>
            <p className="text-black mb-6">{solutions[0].description}</p>
            <ul className="space-y-3 text-sm text-black">
              {solutions[0].features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GridCol>
          <GridCol span="C" className="py-16 px-6 flex flex-col pt-32">
            <img
              src={solutions[1].image}
              alt={solutions[1].title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-black mb-3">
              {solutions[1].title}
            </h3>
            <p className="text-black mb-6">{solutions[1].description}</p>
            <ul className="space-y-3 text-sm text-black">
              {solutions[1].features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GridCol>
          <GridCol span="D" className="py-16 px-6 flex flex-col pt-32">
            <img
              src={solutions[2].image}
              alt={solutions[2].title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-black mb-3">
              {solutions[2].title}
            </h3>
            <p className="text-black mb-6">{solutions[2].description}</p>
            <ul className="space-y-3 text-sm text-black">
              {solutions[2].features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GridCol>
        </GridContainer>
      </GridSection>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#F3F3EE]"
        className="relative hidden lg:block"
        minHeight="450px"
      >
        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
          style={{ top: "1px", zIndex: 2 }}
        />
        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
          style={{ bottom: "165px", zIndex: 2 }}
        />

        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
          style={{ bottom: "63px", zIndex: 2 }}
        />

        <GridContainer className="items-stretch min-h-[450px]">
          <GridCol
            span="AB"
            className="py-16 px-0 flex flex-col justify-between relative"
            style={{
              background: stripePattern,
            }}
          >
            <div className="flex-1 flex items-center">
              <h2 className="text-4xl font-extrabold text-black leading-tight px-8">
                Powered by Proven <br /> Technologies
              </h2>
            </div>

            <div>
              <button className="w-full flex items-center justify-between px-8 py-6 bg-white text-black text-lg transition-all duration-300 hover:bg-gray-50">
                <div className="flex flex-col items-start">
                  <span className="text-sm text-black mb-1">
                    Want to see what's under the hood?
                  </span>
                  <span className="text-xl">Explore Our Tech Advantage</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </GridCol>
          <GridCol
            span="CD"
            className="py-16 px-8 flex flex-col justify-between"
          >
            <div className="flex-1 flex items-center">
              <p className="text-black text-xl leading-relaxed">
                Fusion is built with industry-grade, future-ready technologies
                that support scale, security, and performance.
              </p>
            </div>
            <div className="flex items-center" style={{ height: "89px" }}>
              <p className="text-black text-l leading-relaxed">
                From modern data layers to AI-ready architectures, it brings
                together the best of today's tech — engineered into one cohesive
                framework.
              </p>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden">
        <div className="px-6 pt-8 pb-8">
          <h2 className="text-4xl font-extrabold text-black leading-tight mb-4">
            Solutions You Can Create with Fusion
          </h2>
          <div className="w-16 h-1.5 bg-[#FB3B22]" />
        </div>

        {solutions.map((solution, idx) => (
          <div key={idx} className="px-6 mb-8">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-56 object-cover rounded-none mb-6"
            />
            <h3 className="text-xl font-bold text-black mb-3">
              {solution.title}
            </h3>
            <p className="text-black mb-6 leading-relaxed text-lg">{solution.description}</p>
            <ul className="space-y-3 text-base text-black">
              {solution.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-start">
                  <span className="mr-3 text-2xl leading-none">•</span>
                  <span className="pt-0.5">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-full border-t border-gray-400" style={{ opacity: 0.3 }} />
        
        <div 
          className="w-full px-6 pt-12 pb-0"
          style={{ background: stripePattern, marginLeft: 0, marginRight: 0 }}
        >
          <h2 className="text-3xl font-bold text-black mb-6 leading-tight">
            Powered by Proven Technologies
          </h2>
          <p className="text-black mb-4 leading-relaxed text-xl">
            Fusion is built with industry-grade, future-ready technologies that
            support scale, security, and performance.
          </p>
          <p className="text-black mb-8 leading-relaxed">
            From modern data layers to AI-ready architectures, it brings
            together the best of today's tech — engineered into one cohesive
            framework.
          </p>
        </div>
        <button className="w-full flex items-center justify-between px-6 py-5 bg-white text-black border-t border-gray-200">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs text-black mb-1">
              Need a custom mix? We'll design the right stack.
            </span>
            <span className="text-lg font-normal">
              Start your unique commerce platform
            </span>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center shrink-0 ml-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>
      </section>
    </div>
  );
};

export default SolutionsSection;