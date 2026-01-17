"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Solution {
  id: string;
  iconPath: string;
  title: string;
  description: string;
}

const SolutionsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("enterprise");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filters = [
    { id: "enterprise", label: "enterprise" },
    { id: "commerce", label: "commerce" },
    { id: "integrations", label: "integrations" },
    { id: "ai-data", label: "AI & Data" },
  ];

  const solutions: Solution[] = [
    {
      id: "b2c",
      iconPath: "/icons/shopping-cart.svg",
      title: "B2C eCommerce",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
    {
      id: "b2b",
      iconPath: "/icons/factory-thin.svg",
      title: "B2B Commerce Platforms",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
    {
      id: "marketplaces",
      iconPath: "/icons/shop.svg",
      title: "Marketplaces",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
    {
      id: "pim",
      iconPath: "/icons/boxes.svg",
      title: "Product Information Management (PIM)",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
    {
      id: "oms",
      iconPath: "/icons/inbox-up.svg",
      title: "Order Management Systems (OMS)",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
    {
      id: "ai",
      iconPath: "/icons/bulb.svg",
      title: "AI enhanced Product Discovery & Recommendations",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
    {
      id: "crm",
      iconPath: "/icons/plug-disconnected.svg",
      title: "CRM & ERP Integration",
      description:
        "Every organization is different. That's why our solutions aren't just off-the-shelf.",
    },
  ];

  const stripePattern =
    "linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)";
  const stripeSize = "6.00px 6.00px";

  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <div className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400/30" />
      <div className="hidden lg:block absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400/30" />
      <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400/30" />
      <div className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400/30" />
      <div className="hidden lg:block absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400/30" />

      <div className="relative z-10 px-4 lg:px-0">
        <div className="lg:ml-[5.56%] lg:mr-[5.56%] mb-12 lg:pl-4">
          <p className="text-m text-black font-extrabold mb-2 tracking-wide uppercase">
            SOLUTIONS WE DELIVER
          </p>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D2B] mb-4">
            Powerful digital solutions on modern technological platforms
          </h2>
          <p className="text-xl lg:text-xl text-black">
            Our modular, API-driven framework empowers you to create, customize,
            and expand without constraints
          </p>
        </div>

        <div className="relative mb-5">
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400/30" />

          <div className="lg:mx-[5.56%] bg-[#F3F3EE] py-6 px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <span className="text-gray-700 font-medium text-center lg:text-left">
                Solutions for :
              </span>
              
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 lg:gap-3 flex-1">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-2.5 rounded-sm lg:rounded-full text-base lg:text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter.id
                        ? "bg-[#111D2B] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              
              <button className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors justify-center lg:justify-start">
                <img src="/icons/reset.svg" alt="Reset" className="w-4 h-4" />
                <span className="text-sm">Reset</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400/30" />
        </div>

        <div className="hidden lg:block lg:ml-[5.56%] lg:mr-[5.56%] mb-5">
          <p className="text-lg font-bold text-gray-800 pl-4">
            From eShops to{" "}
            <span className="text-[#FB3B22] font-semibold">
              enterprise-grade
            </span>{" "}
            omnichannel ecosystems.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 h-px bg-gray-400/30"
            style={{
              marginLeft: "-100vw",
              marginRight: "-100vw",
              width: "200vw",
            }}
          />

          <div className="lg:hidden">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="flex items-start gap-4 px-4 py-5 border-b border-l border-r border-gray-200"
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Image
                    src={solution.iconPath}
                    alt={solution.title}
                    width={28}
                    height={28}
                    className="text-gray-600"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:ml-[5.56%] lg:mr-[5.56%]">
            <div className="grid grid-cols-4 gap-0 mb-0">
              {solutions.slice(0, 4).map((solution, index) => (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative transition-all duration-300 cursor-pointer group border-l border-b border-t border-gray-300 flex flex-col ${
                    index === 3 ? "border-r" : ""
                  } ${
                    hoveredCard === solution.id
                      ? "bg-[#FB3B22] text-white"
                      : "bg-white text-gray-800"
                  } min-h-90`}
                >
                  {hoveredCard === solution.id && (
                    <div className="absolute top-4 right-4 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col justify-center p-6">
                    <div
                      className={`mb-4 ${hoveredCard === solution.id ? "text-white" : "text-gray-600"}`}
                    >
                      <Image
                        src={solution.iconPath}
                        alt={solution.title}
                        width={32}
                        height={32}
                        className={
                          hoveredCard === solution.id
                            ? "brightness-0 invert"
                            : ""
                        }
                      />
                    </div>

                    <h3 className="text-base font-bold mb-3 mt-10 leading-tight">
                      {solution.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        hoveredCard === solution.id
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {solution.description}
                    </p>

                    {solution.title === "Marketplaces" && (
                      <div className="absolute bottom-2 flex gap-4">
                        <p className="text-sm text-gray-400">commerce</p>
                        <p className="text-sm text-gray-400">startup & saas</p>
                        <p className="text-sm text-gray-400">public sector</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-0">
              {solutions.slice(4).map((solution, index) => (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative transition-all duration-300 cursor-pointer group border-l border-b border-gray-200 flex flex-col ${
                    hoveredCard === solution.id
                      ? "bg-[#FB3B22] text-white"
                      : "bg-white text-gray-800"
                  } min-h-90`}
                >
                  {hoveredCard === solution.id && (
                    <div className="absolute top-4 right-4 z-10">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col justify-center p-6">
                    <div
                      className={`mb-4 ${hoveredCard === solution.id ? "text-white" : "text-gray-600"}`}
                    >
                      <Image
                        src={solution.iconPath}
                        alt={solution.title}
                        width={32}
                        height={32}
                        className={
                          hoveredCard === solution.id
                            ? "brightness-0 invert"
                            : ""
                        }
                      />
                    </div>

                    <h3 className="text-base font-bold mb-3 mt-10 leading-tight">
                      {solution.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        hoveredCard === solution.id
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}

              <div
                className="bg-transparent border-l border-r border-b border-gray-200 relative overflow-hidden min-h-70"
                style={{
                  backgroundImage: stripePattern,
                  backgroundSize: stripeSize,
                }}
              />
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-400/30"
            style={{
              marginLeft: "-100vw",
              marginRight: "-100vw",
              width: "200vw",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;