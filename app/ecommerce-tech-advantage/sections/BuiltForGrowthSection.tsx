"use client";

import React from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const stripeStyle = {
  backgroundImage:
    "linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)",
  backgroundSize: "6.00px 6.00px",
};

const solutions = [
  {
    title: "Enterprise Systems",
    description:
      "For large organizations with complex needs — internal operations, analytics, and smart automation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    features: [
      "B2C, B2B and eCommerce marketplaces",
      "AI-enhanced discovery and data products",
      "Product catalogs, advanced search, and personalization engines",
    ],
  },
];

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span
      className="w-2 h-2 rounded-full bg-[#111D2B] mt-2 shrink-0"
      aria-hidden="true"
    />
    <span>{children}</span>
  </li>
);

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const MobileSolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  image,
  features,
}) => (
  <div className="px-6 mb-8">
    <div className="w-full aspect-[365/271.77] mb-6 overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-[#111D2B] mb-3">{title}</h3>
    <p className="text-[#111D2B] mb-6 leading-relaxed text-lg">{description}</p>
    <ul className="space-y-3 text-sm text-[#111D2B]">
      {features.map((feature, idx) => (
        <BulletPoint key={idx}>{feature}</BulletPoint>
      ))}
    </ul>
  </div>
);

const features = [
  { icon: "/icons/phone-mobile-ring.svg", text: "Mobile-first & PWA-ready eShops" },
  { icon: "/icons/shuffle-black.svg", text: "Mix and match capabilities like B2B, PIM, OMS and subscriptions" },
  { icon: "/icons/victronconnect.svg", text: "Real-time ERP and supplier connectivity" },
  { icon: "/icons/credit-card.svg", text: "No transaction fees — keep 100% of your revenue" },
  { icon: "/icons/database-stats.svg", text: "Enterprise performance without enterprise complexity" },
  { icon: "/icons/data-apis.svg", text: "Centralized product management across suppliers and channels" },
  { icon: "/icons/devops.svg", text: "Automated order workflows from quote to fulfillment" },
  { icon: "/icons/private-network.svg", text: "Secure APIs & microservices — no endless plugins to maintain" },
];

const BuiltForGrowthSection = () => {
  return (
    <div className="bg-(--brand-light)">
      <div className="hidden lg:block relative">
        <div
          className="absolute z-20"
          style={{
            color: "var(--brand-red)",
            fontSize: "2.5rem",
            fontWeight: 300,
            lineHeight: 1,
            top: "190px",
            left: "calc(27.78% - 12px)",
          }}
        >
          +
        </div>
        <div
          className="absolute z-20"
          style={{
            color: "var(--brand-red)",
            fontSize: "2.5rem",
            fontWeight: 300,
            lineHeight: 1,
            top: "471px",
            left: "calc(72.22% - 12px)",
          }}
        >
          +
        </div>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-light)]"
          className="relative"
        >
          <GridContainer>
            <GridCol span="ABCD">
              <div className="py-12 px-6">
                <p
                  className="font-extrabold mb-2"
                  style={{ color: "var(--brand-red)", fontSize: "16px" }}
                >
                  COMPOSABLE COMMERCE
                </p>
                <h2
                  className="font-extrabold leading-tight mb-3"
                  style={{ color: "#09051F", fontSize: "32px" }}
                >
                  Built for Growth
                </h2>
                <p style={{ color: "#09051F", fontSize: "25px", lineHeight: 1.5 }}>
                  You choose only the parts you need — and add new capabilities
                  without rebuilding your whole platform.
                </p>
              </div>
            </GridCol>
          </GridContainer>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-400/30" />
        </GridSection>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-light)]"
          className="relative"
        >
          <GridContainer>
            <GridCol span="A">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[0].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[0].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="B">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[1].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[1].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="C">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[2].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[2].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="D">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[3].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[3].text}
                </p>
              </div>
            </GridCol>
          </GridContainer>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-400/30" />
        </GridSection>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-light)]"
          className="relative"
        >
          <GridContainer>
            <GridCol span="A">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[4].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[4].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="B">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[5].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[5].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="C">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[6].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[6].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="D">
              <div className="px-6 flex flex-col justify-center items-start" style={{ height: "280px" }}>
                <img
                  src={features[7].icon}
                  alt=""
                  style={{ height: "42px", width: "auto", opacity: 0.75 }}
                  className="mb-5"
                />
                <p style={{ color: "#09051F", fontSize: "18px", opacity: 0.75, lineHeight: 1.6 }}>
                  {features[7].text}
                </p>
              </div>
            </GridCol>
          </GridContainer>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-400/30" />
        </GridSection>
      </div>

      <section className="lg:hidden">
        <div className="px-6 pt-8 pb-8">
          <h2 className="text-4xl font-extrabold text-[#111D2B] leading-tight mb-4">
            Solutions You Can Create with Fusion
          </h2>
          <div className="w-12 h-1.5 py-1 bg-[#FB3B22]" />
        </div>

        {solutions.map((solution) => (
          <MobileSolutionCard key={solution.title} {...solution} />
        ))}

        <div
          className="w-full border-t border-gray-400"
          style={{ opacity: 0.3 }}
        />

        <div
          className="w-full px-6 pt-12 pb-8"
          style={{ ...stripeStyle, marginLeft: 0, marginRight: 0 }}
        >
          <h2 className="text-3xl font-extrabold text-[#111D2B] mb-6 leading-tight">
            Powered by Proven Technologies
          </h2>
          <p className="text-[#111D2B] mb-4 leading-relaxed text-xl">
            Fusion is built with industry-grade, future-ready technologies that
            support scale, security, and performance.
          </p>
          <p className="text-[#111D2B] mb-6 leading-relaxed text-base">
            From modern data layers to AI-ready architectures, it brings
            together the best of today's tech — engineered into one cohesive
            framework.
          </p>
        </div>
        <button className="w-full flex items-center justify-between px-6 py-5 bg-white text-black border-t border-gray-200">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs text-gray-700 mb-1">
              Need a custom mix? We'll design the right stack.
            </span>
            <span className="text-lg">Start your unique commerce platform</span>
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

export default BuiltForGrowthSection;