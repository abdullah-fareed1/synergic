"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

const PIMIntegrationSection = () => {
  const integrationPoints = [
    {
      title: "Shared Product Intelligence",
      description: "Because OMS runs on the Cubik PIM catalog, every order uses accurate products, pricing rules (markups, discounts), stock, and availability.",
    },
    {
      title: "Unified Operations",
      description: "Supplier updates, discontinued items, or price changes in PIM flow automatically into OMS for smooth, error-free processing.",
    },
    {
      title: "ERP Ready",
      description: "Connect OMS to your ERP for true end-to-end workflows. We provide drivers for SoftOne, Pylon, Megasoft, and build custom connectors on demand.",
    },
  ];

  return (
    <>
      <section
        className="lg:hidden pt-10 pb-0"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="px-6">
          <h2
            className="font-extrabold text-white mb-6"
            style={{ fontSize: "24px" }}
          >
            PIM <span style={{ color: "var(--brand-red)" }}>+</span> OMS Integration
          </h2>

          {integrationPoints.map((item, index) => (
            <div key={index} className="mb-6">
              <p
                className="font-bold mb-2"
                style={{ fontSize: "16px", color: "var(--brand-red)" }}
              >
                {item.title}
              </p>
              <p className="text-white" style={{ fontSize: "15px" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="w-full h-px mt-8"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        />

        <div className="px-6 pt-8">
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: "24px" }}
          >
            Powered by Modern Technology
          </h2>

          <p className="text-white mb-4" style={{ fontSize: "18px" }}>
            Stop losing orders and frustrating customers with manual processes.
          </p>

          <p className="text-white mb-8" style={{ fontSize: "15px" }}>
            With Cubik OMS, we set up the solution and automation workflows for you so your team saves time, avoids errors, and focuses on growth.
          </p>
        </div>

        <button
          className="w-full px-6 py-5 cursor-pointer"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-left" style={{ fontSize: "14px" }}>
                Get Notified When We Launch
              </p>
              <p className="text-white mt-1 text-left" style={{ fontSize: "18px" }}>
                Join the Early Access List
              </p>
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 ml-4"
              style={{ border: "1.5px solid white" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      </section>

      <div className="hidden lg:block">
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-dark)]"
          className="py-0"
          desktopOnly={true}
          minHeight="550px"
        >
          <GridContainer className="items-stretch h-full min-h-137.5">
            <GridCol span="AB" className="pl-8 pr-12 py-12 flex flex-col justify-start">
              <h2
                className="font-extrabold text-white mb-8"
                style={{ fontSize: "32px" }}
              >
                PIM <span style={{ color: "var(--brand-red)" }}>+</span> OMS Integration
              </h2>

              {integrationPoints.map((item, index) => (
                <div key={index} className="mb-6 max-w-xl">
                  <p
                    className="font-bold mb-2"
                    style={{ fontSize: "20px", color: "var(--brand-red)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-white" style={{ fontSize: "18px" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </GridCol>

            <GridCol span="CD" className="relative flex flex-col min-h-137.5 p-0">
              <div className="py-12 pl-8 pr-8 flex-1">
                <h2
                  className="font-extrabold text-white mb-4"
                  style={{ fontSize: "32px" }}
                >
                  Powered by Modern Technology
                </h2>

                <p className="text-white mb-5" style={{ fontSize: "25px" }}>
                  Stop losing orders and frustrating customers with<br/>manual processes.
                </p>

                <p className="text-white" style={{ fontSize: "18px" }}>
                  With Cubik OMS, we set up the solution and automation<br/>
                  workflows for you so your team saves time, avoids errors, and<br/>
                  focuses on growth.
                </p>
              </div>

              <button
                className="absolute bottom-0 left-0 right-0 w-full px-8 py-6 cursor-pointer"
                style={{ backgroundColor: "var(--brand-green)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-left" style={{ fontSize: "16px" }}>
                      Get Notified When We Launch
                    </p>
                    <p className="text-white mt-1 text-left" style={{ fontSize: "23px" }}>
                      Join the Early Access List
                    </p>
                  </div>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 ml-4"
                    style={{ border: "1.5px solid white" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>
    </>
  );
};

export default PIMIntegrationSection;