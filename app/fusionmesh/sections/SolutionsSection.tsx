"use client";

import React, { useRef, useEffect, useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const stripeStyle = {
  backgroundImage: 'linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)',
  backgroundSize: '6.00px 6.00px',
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
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    features: [
      "B2C, B2B and eCommerce marketplaces",
      "AI-enhanced discovery and data products",
      "Product catalogs, advanced search, and personalization engines",
    ],
  },
];

// Bullet Point Component
const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span 
      className="w-2 h-2 rounded-full bg-[#111D2B] mt-2 shrink-0"
      aria-hidden="true"
    />
    <span>{children}</span>
  </li>
);

//Card Component - Desktop
interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  image,
  features,
}) => (
  <div className="pt-32 mb-15 mt-25 pb-12 px-6 flex flex-col">
    <div className="w-full aspect-368/277 mb-6 overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
    <p className="text-black mb-6 text-xl leading-relaxed">{description}</p>
    <ul className="space-y-5 text-base text-black">
      {features.map((feature, idx) => (
        <BulletPoint key={idx}>{feature}</BulletPoint>
      ))}
    </ul>
  </div>
);

// Mobile Card Component
const MobileSolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  image,
  features,
}) => (
  <div className="px-6 mb-8">
    <div className="w-full aspect-[365/271.77] mb-6 overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
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

// Arrow Button Component
interface ArrowButtonProps {
  label: string;
  text: string;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ label, text, className = "" }) => (
  <button className={`w-full flex items-center justify-between px-8 py-6 bg-white text-black text-lg cursor-pointer ${className}`}>
    <div className="flex flex-col items-start">
      <span className="text-base text-black mb-1">{label}</span>
      <span className="text-2xl">{text}</span>
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
);

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [buttonTopPosition, setButtonTopPosition] = useState('0px');
  const [buttonHeight, setButtonHeight] = useState('89px');

  useEffect(() => {
    const updateButtonPosition = () => {
      if (sectionRef.current && buttonRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const buttonTopRelative = buttonRect.top - sectionRect.top;
        setButtonTopPosition(`${buttonTopRelative}px`);
        setButtonHeight(`${buttonRect.height}px`);
      }
    };

    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    setTimeout(updateButtonPosition, 100);
    setTimeout(updateButtonPosition, 300);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  const columnSpans = ["B", "C", "D"] as const;

  return (
    <div className="bg-[#F3F3EE]">
      {/* Desktop Layout */}
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#F3F3EE]"
        className="relative hidden lg:block"
      >
        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
          style={{ top: "10%", zIndex: 2 }}
        />

        <GridContainer className="items-stretch">
          <GridCol
            span="A"
            className="relative flex flex-col justify-center py-16 px-8"
          >
            <div
              className="absolute left-0 right-0 top-0"
              style={{
                height: "10%",
                ...stripeStyle,
                zIndex: 0,
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold text-black leading-tight mb-5">
                Solutions You<br/>Can Create with<br/>Fusion
              </h2>
              <div className="w-12 h-1.5 p-1 mt-3 bg-[#FB3B22]" />
            </div>
          </GridCol>

          {solutions.map((solution, index) => (
            <GridCol key={solution.title} span={columnSpans[index]}>
              <SolutionCard {...solution} />
            </GridCol>
          ))}
        </GridContainer>
      </GridSection>
      <GridSection
        showLines={[true, true, true, false, true]}
        bgColor="bg-[#F3F3EE]"
        className="relative hidden lg:block"
        minHeight="450px"
      >
        <div ref={sectionRef} className="relative w-full h-full">
          <div
            className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
            style={{ top: "1px", zIndex: 2 }}
          />
          <div
            className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
            style={{ top: `calc(${buttonTopPosition} - 1px)`, zIndex: 6 }}
          />
          <div
            className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
            style={{ top: `calc(${buttonTopPosition} + ${buttonHeight} - 1px)`, zIndex: 6 }}
          />

          <GridContainer className="items-stretch min-h-112.5">
            <GridCol
              span="AB"
              className="py-16 px-0 flex flex-col justify-between relative"
              style={stripeStyle}
            >
              <div className="flex-1 flex items-center">
                <h2 className="text-4xl font-extrabold text-[#111D2B] leading-tight px-8 pb-10">
                  Powered by Proven <br />
                  Technologies
                </h2>
              </div>

              <div ref={buttonRef}>
                <ArrowButton
                  label="Want to see what's under the hood?"
                  text="Explore Our Tech Advantage"
                />
              </div>
            </GridCol>
            <GridCol
              span="CD"
              className="py-16 px-8 flex flex-col justify-between"
            >
              <div className="flex-1 flex items-center">
                <p className="text-[#111D2B] text-2xl leading-relaxed max-w-lg pl-9 pb-10">
                  Fusion is built with industry-grade, future-ready technologies that support scale, security, and performance.
                </p>
              </div>
              <div className="flex items-center" style={{ height: "100px" }}>
                <p className="text-[#111D2B] text-lg max-w-lg leading-relaxed pl-9 pb-3">
                  From modern data layers to AI-ready architectures, it brings together the best of today's tech — engineered into one cohesive framework.
                </p>
              </div>
            </GridCol>
          </GridContainer>
        </div>
      </GridSection>

      {/* Mobile Layout */}
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

        <div className="w-full border-t border-gray-400" style={{ opacity: 0.3 }} />
        
        <div 
          className="w-full px-6 pt-12 pb-8"
          style={{ ...stripeStyle, marginLeft: 0, marginRight: 0 }}
        >
          <h2 className="text-3xl font-extrabold text-[#111D2B] mb-6 leading-tight">
            Powered by Proven Technologies
          </h2>
          <p className="text-[#111D2B] mb-4 leading-relaxed text-xl">
            Fusion is built with industry-grade, future-ready technologies that support scale, security, and performance.
          </p>
          <p className="text-[#111D2B] mb-6 leading-relaxed text-base">
            From modern data layers to AI-ready architectures, it brings together the best of today's tech — engineered into one cohesive framework.
          </p>
        </div>
        <button className="w-full flex items-center justify-between px-6 py-5 bg-white text-black border-t border-gray-200">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs text-gray-700 mb-1">
              Need a custom mix? We'll design the right stack.
            </span>
            <span className="text-lg">
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