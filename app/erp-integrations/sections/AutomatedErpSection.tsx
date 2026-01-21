"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

const GrayIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "35px",
      height: "35px",
      filter: "sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
    }}
  />
);

const AutomatedErpSection = () => {
  const solutionFeatures = [
    {
      icon: "/icons/sync.svg",
      title: "Product Data Sync:",
      description: "Pricing, stock, SKUs, and attributes flow from ERP into PIM and OMS",
    },
    {
      icon: "/icons/gear.svg",
      title: "Customer Sync:",
      description: "Unified customer profiles across OMS and ERP matched by email, phone, or VAT/tax ID.",
    },
    {
      icon: "/icons/invoice.svg",
      title: "Order Sync:",
      description: "Orders from eShops, marketplaces, and B2B portals flow back into ERP",
    },
    {
      icon: "/icons/unity.svg",
      title: "Status & Financials:",
      description: "Payments, invoices, shipping, and returns flow back to ERP in real time.",
    },
  ];

  const benefits = [
    {
      icon: "/icons/stockswidget.svg",
      title: "Real-time Stock & Pricing",
      description: "no more overselling or pricing errors",
    },
    {
      icon: "/icons/gear.svg",
      title: "Automated Orders & Fulfillment",
      description: "orders flow directly into ERP/OMS",
    },
    {
      icon: "/icons/invoice.svg",
      title: "Accurate Financials & Reporting",
      description: "invoices, payments, and returns synced in real time",
    },
    {
      icon: "/icons/unity.svg",
      title: "Unified Customer Records",
      description: "a single profile across channels & ERP",
    },
    {
      icon: "/icons/actionlauncher.svg",
      title: "Scalable Operations",
      description: "onboard new eShops or marketplaces without IT bottlenecks",
    },
  ];

  return (
    <>
      <section className="lg:hidden px-6 py-12 bg-white">
        <div className="mb-6">
          <p
            className="font-extrabold uppercase tracking-wider mb-3"
            style={{ color: "var(--brand-red)", fontSize: "14px" }}
          >
            OUR SOLUTION
          </p>
          <h2
            className="font-extrabold mb-4"
            style={{ color: "#111D2B", fontSize: "25px", lineHeight: "1.2" }}
          >
            Automated ERP
            <br />
            Connectivity
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ color: "#111D2B", fontSize: "16px" }}
          >
            We don't just connect systems —{" "}
            <span className="font-bold">
              we design and set up ERP workflows that run automatically from day one.
            </span>
          </p>
          {solutionFeatures.map((feature, index) => (
            <div key={index} className="mb-6">
              <GrayIcon src={feature.icon} alt={feature.title} />
              <h4
                className="font-bold mb-1 mt-4"
                style={{ color: "#111D2B", fontSize: "16px" }}
              >
                {feature.title}
              </h4>
              <p
                className="leading-relaxed"
                style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "14px" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "#111D2B", fontSize: "16px" }}
          >
            We support automations for{" "}
            <span className="font-bold">SoftOne, Pylon, Megasoft, and Odoo</span> — and
            build <span className="font-bold">custom drivers</span> on demand.
          </p>
        </div>
      </section>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        className="py-20"
        desktopOnly={true}
      >
        <GridContainer className="items-start">
          <GridCol span="AB" className="pl-8 pr-8">
            <p
              className="font-extrabold uppercase tracking-wider"
              style={{ color: "var(--brand-red)", fontSize: "18px", height: "24px" }}
            >
              OUR SOLUTION
            </p>

            <div style={{ height: "8px" }} />

            <h2
              className="font-extrabold"
              style={{ color: "#111D2B", fontSize: "32px", lineHeight: "1.2" }}
            >
              Automated ERP Connectivity
            </h2>

            <div style={{ height: "8px" }} />

            <p
              className="leading-relaxed mb-8"
              style={{ color: "#111D2B", fontSize: "18px", height: "56px" }}
            >
              We don't just connect systems —{" "}
              <span className="font-bold">
                we design and set up ERP workflows that run automatically from day one.
              </span>
            </p>

            <div style={{ height: "32px" }} />

            <div className="grid grid-cols-2 gap-x-8">
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={solutionFeatures[0].icon} alt={solutionFeatures[0].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {solutionFeatures[0].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {solutionFeatures[0].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={solutionFeatures[1].icon} alt={solutionFeatures[1].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {solutionFeatures[1].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {solutionFeatures[1].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={solutionFeatures[2].icon} alt={solutionFeatures[2].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {solutionFeatures[2].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {solutionFeatures[2].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={solutionFeatures[3].icon} alt={solutionFeatures[3].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {solutionFeatures[3].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {solutionFeatures[3].description}
                </p>
              </div>
            </div>

            <p
              className="leading-relaxed"
              style={{ color: "#111D2B", fontSize: "18px" }}
            >
              We support automations for{" "}
              <span className="font-bold">SoftOne, Pylon, Megasoft, and Odoo</span> — and
              build <span className="font-bold">custom drivers</span> on demand.
            </p>
          </GridCol>

          <GridCol span="CD" className="pl-8 pr-8">
            <p
              className="font-extrabold uppercase tracking-wider"
              style={{ color: "var(--brand-red)", fontSize: "18px", height: "24px" }}
            >
              YOUR BENEFITS
            </p>

            <div style={{ height: "8px" }} />

            <h2
              className="font-extrabold"
              style={{ color: "#111D2B", fontSize: "32px", lineHeight: "1.2" }}
            >
              We don't just connect,{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#2B7856",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                }}
              >
                we Automate
              </span>
            </h2>

            <div style={{ height: "8px" }} />

            <p
              className="leading-relaxed mb-8"
              style={{ color: "#111D2B", fontSize: "18px", height: "56px" }}
            >
              Stop wasting time on manual fixes. With Cubik ERP integrations, you get:
            </p>

            <div style={{ height: "32px" }} />

            <div className="grid grid-cols-2 gap-x-8">
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={benefits[0].icon} alt={benefits[0].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {benefits[0].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {benefits[0].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={benefits[1].icon} alt={benefits[1].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {benefits[1].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {benefits[1].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={benefits[2].icon} alt={benefits[2].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {benefits[2].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {benefits[2].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={benefits[3].icon} alt={benefits[3].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {benefits[3].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {benefits[3].description}
                </p>
              </div>
              <div style={{ height: "160px", marginBottom: "24px" }}>
                <GrayIcon src={benefits[4].icon} alt={benefits[4].title} />
                <h4 className="font-bold mt-3" style={{ color: "#111D2B", fontSize: "20px", height: "28px" }}>
                  {benefits[4].title}
                </h4>
                <p className="leading-relaxed mt-1" style={{ color: "rgba(0, 0, 0, 0.75)", fontSize: "18px" }}>
                  {benefits[4].description}
                </p>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>
    </>
  );
};

export default AutomatedErpSection;