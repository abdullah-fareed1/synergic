"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const technologiesData = [
  {
    id: "backend",
    icon: "/icons/workflow.svg",
    title: "Backend & Logic",
    description:
      "The core engine of our systems — where business logic, data flow, and APIs come together.",
    details: "Built for speed, flexibility, and long-term maintainability.",
    subDetails:
      "→ Benefit: Handle complex logic and workflows with confidence and clarity.",
    technologies: [
      {
        name: "Java Play Framework",
        desc: "High-performance services and robust APIs",
      },
      {
        name: "Groovy",
        desc: "Dynamic business rules, workflows, and validations",
      },
      {
        name: "JPA ORM",
        desc: "Fast, structured data access and management",
      },
      {
        name: "Directus CMS",
        desc: "API-first content infrastructure",
      },
    ],
  },
  {
    id: "frontend",
    icon: "/icons/interface-ui.svg",
    title: "Frontend & User Interfaces",
    description:
      "Powerful frontends for any device — from browser-based apps to mobile-ready platforms.",
    details: "Built to deliver modern experiences with flexibility and speed.",
    subDetails:
      "→ Benefit: Deliver engaging user experiences — across web, mobile, and portals.",
    technologies: [
      {
        name: "Angular, React, Next.js, Ionic",
        desc: "Build once, run everywhere",
      },
      {
        name: "HTML, CSS, TypeScript, JavaScript",
        desc: "Clean, responsive, and intuitive user interfaces",
      },
    ],
  },
  {
    id: "database",
    icon: "/icons/database.svg",
    title: "Databases & Storage",
    description:
      "Designed for scale, speed, and flexibility — from fast queries to intelligent search and file delivery.",
    details:
      "Structured, unstructured, and file-based storage working together seamlessly.",
    subDetails: "→ Benefit: Store, query, and deliver data at any scale.",
    technologies: [
      {
        name: "RDBMS",
        desc: "PostgreSQL, Oracle, MySQL, and any JDBC-compliant relational database",
      },
      {
        name: "NoSQL",
        desc: "Redis, Couchbase, TiDB for fast, scalable non-relational storage",
      },
      {
        name: "Elasticsearch & Vector Databases",
        desc: "Advanced product search, semantic queries, and AI-powered discovery",
      },
      {
        name: "S3-Compatible Object Storage",
        desc: "Reliable and scalable storage for files, media, and static assets",
      },
    ],
  },
  {
    id: "ai",
    icon: "/icons/adjustment.svg",
    title: "AI & Automation",
    description:
      "Add intelligence when you need it — not when you’re forced to.",
    details:
      "Our architecture enables AI features through open and secure integrations.",
    subDetails:
      "→ Benefit: Unlock smarter decisions, better experiences, and less effort.",
    technologies: [
      {
        name: "Open-source LLM Integration",
        desc: "Private or cloud-based large language models",
      },
      {
        name: "Semantic Search & Smart Tagging",
        desc: "Understand and organize content intelligently",
      },
      {
        name: "Recommendations & Automation",
        desc: "Decision engines and automated workflows",
      },
    ],
  },
  {
    id: "commerce",
    icon: "/icons/pricetag.svg",
    title: "Commerce & Headless",
    description:
      "Flexible, API-first commerce experiences aligned to your business.",
    details: "No platform lock-in. Full control over logic and integrations.",
    subDetails:
      "→ Benefit: Build commerce systems that grow and adapt with your needs.",
    technologies: [
      {
        name: "Medusa.js",
        desc: "Headless commerce engine with rich customization",
      },
      {
        name: "Custom Logic & Microservices",
        desc: "Tailored processes, integrations, and workflows",
      },
    ],
  },
  {
    id: "cloud",
    icon: "/icons/cloud-network.svg",
    title: "Cloud-Ready & Flexible Deployment",
    description:
      "Run your system your way — with built-in support for scale and resilience.",
    details:
      "Modern infrastructure designed for continuous delivery and growth.",
    subDetails: "→ Benefit: Scale confidently with visibility and control.",
    technologies: [
      {
        name: "Flexible Deployment",
        desc: "Public cloud, private cloud, on-prem, or hybrid",
      },
      {
        name: "Docker",
        desc: "Containerized services for portability and scalability",
      },
      {
        name: "CI/CD Automation",
        desc: "Smooth, repeatable deployments",
      },
      {
        name: "Horizontal Scalability",
        desc: "Clustered services for high performance",
      },
      {
        name: "Load Balancing & Traffic Routing",
        desc: "Intelligent request distribution",
      },
      {
        name: "Caching, Monitoring & Observability",
        desc: "Low latency, logs, metrics, and proactive alerts",
      },
    ],
  },
];

const CoreTechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("backend");

  const activeTech = technologiesData.find((tech) => tech.id === activeTab);

  return (
    <>
      {/* Desktop */}
      <GridSection
        desktopOnly={true}
        showLines={[true, false, true, false, true]}
        bgColor="bg-[#111D2B]"
        className="py-0 pt-20 relative"
      >
        <div
          className="absolute left-0 right-0 h-px bg-gray-400 opacity-30 z-20"
          style={{ top: "0" }}
        />

        <GridContainer className="gap-0 mt-0">
          <GridCol span="AB" className="flex flex-col bg-transparent relative">
            <div className="bg-[#FB3B22] p-12">
              <h2 className="text-white text-5xl font-bold mb-4">
                Core Technologies
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-lg">
                Our architecture combines modern frameworks, extensible
                services, and smart data tools — designed to support
                performance, modularity, and intelligent automation across any
                solution.
              </p>
            </div>

            <div className="flex-1 bg-transparent">
              {technologiesData.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  onMouseEnter={() => setActiveTab(tech.id)}
                  className={`w-full flex items-center gap-4 px-12 py-6 transition-all duration-300 ${
                    activeTab === tech.id
                      ? "bg-[#1a2838] text-white"
                      : "bg-transparent text-gray-400 hover:bg-[#1a2838] hover:text-white"
                  } ${index < technologiesData.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-7 h-7 opacity-80"
                  />
                  <span className="text-xl font-medium">{tech.title}</span>
                </button>
              ))}
            </div>
          </GridCol>
          <GridCol
            span="CD"
            className="p-12 flex flex-col justify-center bg-transparent"
          >
            <div className="space-y-8">
              <h3 className="text-white text-4xl font-normal leading-relaxed">
                {activeTech?.description}
              </h3>

              <div className="space-y-6">
                <h4 className="text-[#FB3B22] text-2xl font-bold">
                  {activeTech?.title}
                </h4>
                <p className="text-gray-400 text-lg">{activeTech?.details}</p>

                {activeTech?.subDetails && (
                  <p className="text-gray-400 text-lg">
                    {activeTech.subDetails}
                  </p>
                )}

                <div className="space-y-4 mt-8">
                  {activeTech?.technologies.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h5 className="text-white font-semibold text-lg">
                        {item.name}
                      </h5>
                      <p className="text-gray-500 text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile*/}
      <section className="lg:hidden bg-[#111D2B] pb-12">
        <div className="bg-[#FB3B22] px-6 py-8">
          <h2 className="text-white text-3xl font-bold mb-3">
            Core Technologies
          </h2>
          <p className="text-white/90 text-base leading-relaxed">
            Our architecture combines modern frameworks, extensible services,
            and smart data tools — designed to support performance, modularity,
            and intelligent automation across any solution.
          </p>
        </div>

        <div className="divide-y divide-white/10">
          {technologiesData.map((tech) => (
            <div key={tech.id} className="bg-[#1a2838]">
              <button
                onClick={() =>
                  setActiveTab(activeTab === tech.id ? "" : tech.id)
                }
                className="w-full flex items-center justify-between gap-3 px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-5 h-5 opacity-80"
                  />
                  <span className="text-white text-base font-medium">
                    {tech.title}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    activeTab === tech.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeTab === tech.id && (
                <div className="px-6 pb-6 space-y-4 bg-[#111D2B]">
                  <p className="text-gray-300 text-base leading-relaxed">
                    {tech.description}
                  </p>

                  <h5 className="text-[#FB3B22] text-lg font-bold mt-4">
                    {tech.title}
                  </h5>

                  <p className="text-gray-400 text-sm">{tech.details}</p>

                  {tech.subDetails && (
                    <p className="text-gray-400 text-sm">{tech.subDetails}</p>
                  )}

                  <div className="space-y-3 mt-4">
                    {tech.technologies.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <h5 className="text-white font-semibold text-sm">
                          {item.name}
                        </h5>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoreTechnologiesSection;
