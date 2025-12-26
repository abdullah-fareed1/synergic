import React from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function SystemIntelligentSection() {
  const features = [
    {
      number: "01",
      title: "Process-Aware",
      description: "Aligned with how your business actually works"
    },
    {
      number: "02",
      title: "Insight-Driven",
      description: "Surfaces the data that drives better decisions"
    },
    {
      number: "03",
      title: "Integrated & Connected",
      description: "Syncs across systems, data, and teams"
    },
    {
      number: "04",
      title: "Scalable & Secure",
      description: "Built for growth, resilience, and protection"
    },
    {
      number: "05",
      title: "Automation-Ready",
      description: "Reduces manual work, improves productivity"
    },
    {
      number: "06",
      title: "Future-Ready",
      description: "Designed for change, innovation, and evolution"
    }
  ];

  return (
    <>
      {/* Desktop */}
      <GridSection
        desktopOnly={true}
        bgColor="bg-[#2B7856]"
        showLines={[true, false, true, true, true]}
        className="py-16"
      >
        <GridContainer>
          {/* AB Span */}
          <GridCol span="AB" className="flex flex-col">
            {/* Header */}
            <div className="px-12 pt-12 pb-16">
              <h2 className="text-white text-4xl font-bold leading-tight mb-6">
                What Makes
                <br />
                a System Intelligent?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                We design systems that do more than execute code — they solve real problems, unlock efficiency, and grow with you.
              </p>
            </div>

            {/* CTA Button*/}
            <button className="w-full bg-white/10 hover:bg-white/15 transition-colors py-6 px-12 flex items-center justify-between group">
              <div className="text-left">
                <p className="text-white/60 text-sm mb-1">Not sure where to begin?</p>
                <p className="text-white text-xl">Book a Free Discovery Call</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 10H16M16 10L11 5M16 10L11 15" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </GridCol>

          {/* Column C */}
          <GridCol span="C" className="px-12 py-12">
            {[features[0], features[2], features[4]].map((feature, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <p className="text-white/40 text-sm mb-2">{feature.number}</p>
                <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </GridCol>

          {/* Column D */}
          <GridCol span="D" className="px-12 py-12">
            {[features[1], features[3], features[5]].map((feature, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <p className="text-white/40 text-sm mb-2">{feature.number}</p>
                <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile Layout */}
      <section className="lg:hidden bg-[#2B7856]">
        {/* Header */}
        <div className="mb-8 px-6 pt-12">
          <h2 className="text-white text-3xl font-bold leading-tight mb-4">
            What Makes
            <br />
            a System Intelligent?
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            We design systems that do more than execute code — they solve real problems, unlock efficiency, and grow with you.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-8 mb-8 px-6">
          {features.map((feature, index) => (
            <div key={index}>
              <p className="text-white/40 text-sm mb-1">{feature.number}</p>
              <h3 className="text-white text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button  */}
        <button className="w-full bg-white/10 active:bg-white/15 transition-colors py-5 px-6 flex items-center justify-between">
          <div className="text-left">
            <p className="text-white/60 text-xs mb-0.5">Not sure where to begin?</p>
            <p className="text-white text-base">Book a Free Discovery Call</p>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center shrink-0">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 10H16M16 10L11 5M16 10L11 15" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </section>
    </>
  );
}