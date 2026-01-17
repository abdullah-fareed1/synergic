"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const IndustryFocusedSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stripePatternDark =
    "linear-gradient(45deg, rgba(30, 55, 80, 0.9) 8.33%, rgba(15, 30, 50, 0.9) 8.33%, rgba(15, 30, 50, 0.9) 50%, rgba(30, 55, 80, 0.9) 50%, rgba(30, 55, 80, 0.9) 58.33%, rgba(15, 30, 50, 0.9) 58.33%, rgba(15, 30, 50, 0.9) 100%)";

  const stripeSize = "6.00px 6.00px";

  const industries = [
    {
      title: "Enterprises",
      subtitle: "Integrate. Automate. Modernize.",
      services: [
        "Enterprise Apps",
        "Customer & Partner Portals",
        "Workflow Automation & AI Agents",
        "System Integration & APIs",
        "Data Integration & BI",
        "Legacy Modernization",
        "AI-Enhanced Search",
      ],
    },
    {
      title: "Startups & SaaS Builders",
      subtitle: "Build It Right from Day One. From MVP to market-ready SaaS.",
      services: [
        "FusionMesh SaaS Platform",
        "Subscription & Billing Platform",
        "Mobile Apps",
        "Web Presence (Headless CMS)",
      ],
    },
    {
      title: "Retailers & B2B",
      subtitle: "Create Commerce Systems That Perform and Deliver fast.",
      services: [
        "B2C eShop",
        "B2B Commerce Suite",
        "PIM",
        "OMS",
        "Smart Catalog & Search",
        "Marketplace Platform",
        "ERP/CRM Integrations",
      ],
    },
    {
      title: "Public Sector",
      subtitle: "Serve Smarter, More Securely",
      services: [
        "Enterprise Systems (FusionMesh)",
        "Data Integration & BI",
        "Workflow Automation & AI Agents",
        "System Integration & APIs",
        "Legacy Modernization",
      ],
    },
  ];

  const activeCard = hoveredCard !== null ? hoveredCard : 0;

  const renderCard = (index: number, span: "A" | "B" | "C" | "D") => {
    const industry = industries[index];
    const isActive = activeCard === index;

    return (
      <GridCol span={span} className="relative z-10">
        <div
          className={`h-150 transition-all duration-300 mx-0.5 ${
            isActive ? "bg-black/85" : "bg-black/40 hover:bg-black/70"
          }`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`h-full flex flex-col transition-all duration-300 ${
              isActive
                ? "justify-center items-start text-left px-8 pl-12"
                : "items-center text-center p-8 pt-[42%]"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                isActive ? "text-[#FB3B22]" : "text-white"
              }`}
            >
              {industry.title}
            </h3>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isActive ? "opacity-100 max-h-125" : "opacity-0 max-h-0"
              }`}
            >
              <p className="text-gray-400 text-lg font-bold mb-6">
                {industry.subtitle}
              </p>
              <ul className="space-y-3 ml-4">
                {industry.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-base hover:text-white transition-colors cursor-pointer"
                    style={{
                      textUnderlineOffset: "4px",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                      e.currentTarget.style.textDecorationColor =
                        "var(--brand-red)";
                      e.currentTarget.style.textDecorationThickness = "1px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </GridCol>
    );
  };

  return (
    <>
      <div className="hidden lg:block">
        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="text-white pt-20 pb-12"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="ABCD" className="px-5">
              <p className="text-[#FB3B22] text-sm font-bold uppercase tracking-wider mb-4">
                INDUSTRY-FOCUSED SOLUTIONS
              </p>
              <h2 className="text-5xl font-bold leading-tight max-w-4xl">
                From startups to enterprises, we build what works at any scale
              </h2>
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="text-white border-t border-b border-gray-700 relative"
          desktopOnly={true}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-[5.56%] pointer-events-none"
            style={{
              backgroundImage: stripePatternDark,
              backgroundSize: stripeSize,
            }}
          />

          <GridContainer className="min-h-150 relative">
            <GridCol
              span="ABCD"
              position="absolute"
              className="z-0 h-full"
              style={{
                backgroundImage: "url(images/industryfocusedsolutions.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-150"></div>
            </GridCol>

            {renderCard(0, "A")}
            {renderCard(1, "B")}
            {renderCard(2, "C")}
            {renderCard(3, "D")}
          </GridContainer>
        </GridSection>

        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="h-16"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="ABCD">
              <div></div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* Mobile version */}
      <section className="lg:hidden bg-[#111D2B] text-white">
        <div className="px-[5.56%] py-12">
          <p className="text-[#FB3B22] text-xs font-bold uppercase tracking-wider mb-4">
            INDUSTRY-FOCUSED SOLUTIONS
          </p>
          <h2 className="text-2xl font-bold leading-tight">
            From startups to enterprises, we build what works at any scale
          </h2>
        </div>

        <div className="relative" style={{ height: "50vh" }}>
          <div
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: "url(images/industryfocusedsolutions.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />

          <div className="h-full overflow-hidden relative z-10">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="w-full h-full shrink-0 bg-black/85"
                >
                  <div className="h-full flex flex-col justify-start items-start text-left p-8">
                    <h3 className="text-2xl font-bold mb-2 text-[#FB3B22]">
                      {industry.title}
                    </h3>

                    <p className="text-gray-400 text-base mb-6">
                      {industry.subtitle}
                    </p>

                    <ul className="space-y-4 mt-4">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="text-gray-300 text-base">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#0A1929] py-6 flex justify-center">
          <div className="flex gap-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-8 bg-[#FB3B22]"
                    : "w-1.5 bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryFocusedSection;