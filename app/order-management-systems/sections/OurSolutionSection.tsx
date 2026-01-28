"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

const featureRows = [
  {
    left: {
      icon: "/icons/product.svg",
      title: "Centralized order capture (web, marketplaces, B2B, phone, email)",
    },
    right: {
      icon: "/icons/exchange-change.svg",
      title: "Returns & exchange workflows (RMA)",
    },
  },
  {
    left: {
      icon: "/icons/reorder-white.svg",
      title: "Real-time inventory tracking and allocation",
    },
    right: {
      icon: "/icons/Iconly-curved-activity.svg",
      title: "Activity logs — who did what, when",
    },
  },
  {
    left: {
      icon: "/icons/dataflow.svg",
      title: "Automated warehouse & fulfillment routing",
    },
    right: {
      icon: "/icons/notes.svg",
      title: "Per-order internal notes for collaboration",
    },
  },
  {
    left: {
      icon: "/icons/smartphone-location.svg",
      title: "Carrier labels, shipping, and tracking",
    },
    right: {
      icon: "/icons/manager-tools.svg",
      title: "Manager tools to reassign orders between staff",
    },
  },
  {
    left: {
      icon: "/icons/support.svg",
      title: "Customer notifications (confirmation, shipping, delivery)",
    },
    right: {
      icon: "/icons/infinity.svg",
      title: "ERP Order Bidirectional Synchronization",
    },
  },
];

const OurSolutionSection = () => {
  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#2B7856]"
        className="py-16"
        desktopOnly={true}
      >
        <GridContainer className="items-stretch">
          <GridCol span="AB" className="pl-8 pr-16 py-8">
            <h2
              className="font-extrabold text-white mb-6"
              style={{ fontSize: "32px" }}
            >
              Our Solution
            </h2>
            <p
              className="text-white mb-10 leading-snug "
              style={{ fontSize: "25px" }}
            >
              We implement centralized Order Management Systems (OMS)<br/>
              and set up the automation workflows that run them.
            </p>
            <div className="text-white space-y-6 max-w-md" style={{ fontSize: "18px" }}>
              <p className="leading-relaxed" style={{ opacity: 0.85 }}>
                Using the same Cubik PIM catalog for products, pricing, and
                availability, every order regardless of source flows through
                unified workflows that handle.
              </p>
              <p className="leading-relaxed" style={{ opacity: 0.85 }}>
                We configure Cubik OMS to fit your business so it runs
                automatically from day one. Your team oversees exceptions not
                routine tasks
              </p>
            </div>
          </GridCol>

          <GridCol span="C" className="py-8 pl-6 pr-4">
            <div className="flex flex-col items-start gap-9">
              {featureRows.map((row, index) => (
                <div key={index} className="flex flex-col items-start gap-2 w-full" style={{ minHeight: "85px" }}>
                  <img
                    src={row.left.icon}
                    alt=""
                    className="shrink-0 self-start"
                    style={{ width: "auto", height: "33px" }}
                  />
                  <p
                    className="font-semibold leading-snug text-left"
                    style={{ color: "#F3F5F5", fontSize: "18px" }}
                  >
                    {row.left.title}
                  </p>
                </div>
              ))}
            </div>
          </GridCol>

          <GridCol span="D" className="py-8 pl-6 pr-4">
            <div className="flex flex-col items-start gap-9">
              {featureRows.map((row, index) => (
                <div key={index} className="flex flex-col items-start gap-2 w-full" style={{ minHeight: "85px" }}>
                  <img
                    src={row.right.icon}
                    alt=""
                    className="shrink-0 self-start"
                    style={{ width: "37px", height: "33px" }}
                  />
                  <p
                    className="font-semibold leading-snug text-left"
                    style={{ color: "#F3F5F5", fontSize: "18px" }}
                  >
                    {row.right.title}
                  </p>
                </div>
              ))}
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section
        className="lg:hidden pt-12"
        style={{ backgroundColor: "#2B7856" }}
      >
        <div className="px-6">
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: "26px", fontStyle: "italic" }}
          >
            Our Solution
          </h2>
          <p
            className="text-white mb-6 leading-snug"
            style={{ fontSize: "18px" }}
          >
            We implement centralized Order Management Systems (OMS) and set up the
            automation workflows that run them.
          </p>
          <div
            className="text-white space-y-4 mb-10"
            style={{ fontSize: "15px", opacity: 0.85 }}
          >
            <p className="leading-relaxed">
              Using the same Cubik PIM catalog for products, pricing, and
              availability, every order regardless of source flows through unified
              workflows that handle.
            </p>
            <p className="leading-relaxed">
              We configure Cubik OMS to fit your business so it runs automatically
              from day one. Your team oversees exceptions not routine tasks
            </p>
          </div>
        </div>

        {/* Single column stacked layout with full-width top borders */}
        <div className="flex flex-col">
          {featureRows.map((row, index) => (
            <div key={index} className="flex flex-col">
              {/* Left item */}
              <div 
                className="flex flex-col items-start gap-2 px-6 py-4"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
              >
                <img
                  src={row.left.icon}
                  alt=""
                  className="shrink-0"
                  style={{ height: "28px" }}
                />
                <p
                  className="font-semibold leading-snug text-left"
                  style={{ color: "#F3F5F5", fontSize: "14px" }}
                >
                  {row.left.title}
                </p>
              </div>
              {/* Right item */}
              <div 
                className="flex flex-col items-start gap-2 px-6 py-4"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
              >
                <img
                  src={row.right.icon}
                  alt=""
                  className="shrink-0"
                  style={{ height: "28px" }}
                />
                <p
                  className="font-semibold leading-snug text-left"
                  style={{ color: "#F3F5F5", fontSize: "14px" }}
                >
                  {row.right.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurSolutionSection;