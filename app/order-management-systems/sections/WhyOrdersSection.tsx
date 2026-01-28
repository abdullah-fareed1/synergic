"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

const WhyOrdersSection = () => {
  const painPoints = [
    { number: "01", text: "Manual order entry eating hours daily" },
    { number: "02", text: "Overselling or stockouts from mismatched inventory" },
    { number: "03", text: "Warehouse coordination chaos & lost or forgotten orders" },
    { number: "04", text: "No real-time visibility into order status" },
    { number: "05", text: "Multiple systems that don't sync" },
    { number: "06", text: 'Customer service swamped with "Where\'s my order?"' },
  ];

  return (
    <>
      <section
        className="lg:hidden pt-10 pb-0"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="px-6">
          <h2
            className="font-extrabold text-white mb-3"
            style={{ fontSize: "24px" }}
          >
            Why Orders Create Chaos
          </h2>

          <p className="text-white" style={{ fontSize: "18px" }}>
            When orders come from many channels, things get messy fast.
            <br />
            <span className="font-bold">Without automation, teams face:</span>
          </p>
        </div>

        <div className="mt-8">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="py-6 px-6"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: index === 5 ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
              }}
            >
              <p
                className="font-bold mb-1"
                style={{ fontSize: "16px", color: "var(--brand-red)" }}
              >
                {item.number}
              </p>
              <p className="text-white" style={{ fontSize: "15px" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="lg:hidden px-6 pt-8 pb-0"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <h2
          className="font-extrabold text-white mb-5 inline-block"
          style={{ fontSize: "24px" }}
        >
          What is{" "}
          <span
            className="px-2 py-1"
            style={{ backgroundColor: "var(--brand-red)" }}
          >
            OMS?
          </span>
        </h2>

        <p className="text-white mb-6" style={{ fontSize: "18px" }}>
          <span className="font-bold">
            OMS stands for Order Management System.
          </span>{" "}
          It's the central hub where all your orders come together from your
          eShop, marketplaces, B2B portals, or even phone and email.
        </p>

        <p className="text-white mb-8" style={{ fontSize: "18px" }}>
          An OMS automates the entire process: capturing orders, allocating
          inventory, routing fulfillment, updating customers, and tracking
          status in real time.
        </p>

        <button
          className="w-full px-6 py-5 cursor-pointer"
          style={{ backgroundColor: "var(--brand-red)", marginLeft: "-24px", marginRight: "-24px", width: "calc(100% + 48px)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/80 text-left">
                Need more info ?
              </p>
              <p className="text-base text-white mt-1 text-left">
                Streamline Order Operations
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

      <div className="relative hidden lg:block">
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-dark)]"
          className="pt-16 pb-0"
          desktopOnly={true}
        >
          <GridContainer className="items-start">
            <GridCol span="ABC" className="py-12">
              <div className="pl-8">
                <h2
                  className="font-extrabold text-white mb-4"
                  style={{ fontSize: "32px" }}
                >
                  Why Orders Create Chaos
                </h2>

                <p className="text-white" style={{ fontSize: "25px" }}>
                  When orders come from many channels, things get messy fast.
                  <br />
                  <span className="font-bold">Without automation, teams face:</span>
                </p>
              </div>

              <div className="grid grid-cols-3 mt-12">
                {painPoints.map((item, index) => (
                  <div key={index} className="pl-8 pr-6 mb-10">
                    <p
                      className="font-bold mb-2"
                      style={{ fontSize: "20px", color: "var(--brand-red)" }}
                    >
                      {item.number}
                    </p>
                    <p className="text-white" style={{ fontSize: "18px" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </GridCol>

            <GridCol span="D" className="flex items-center justify-center h-full">
              <div className="flex items-center justify-center h-full py-12">
                <img
                  src="/images/oms-bulb-image.svg"
                  alt="Order chaos illustration"
                  className="w-full max-w-[280px] h-auto"
                />
              </div>
            </GridCol>
          </GridContainer>

          <div
            className="w-full h-px"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
        </GridSection>

        <div className="relative">
          <div
            className="hidden lg:block absolute"
            style={{
              left: "72.22%",
              top: "-5px",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          >
            <span
              style={{
                color: "var(--brand-red)",
                fontSize: "3rem",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              +
            </span>
          </div>

          <GridSection
            showLines={[true, true, true, true, true]}
            bgColor="bg-[var(--brand-dark)]"
            className="pt-0 pb-16"
            desktopOnly={true}
          >
            <GridContainer className="items-end">
              <GridCol span="AB" className="pl-8 pr-12 py-16">
                <h2
                  className="font-extrabold text-white mb-6 inline-block"
                  style={{ fontSize: "32px" }}
                >
                  What is{" "}
                  <span
                    className="px-2 py-1"
                    style={{ backgroundColor: "var(--brand-red)" }}
                  >
                    OMS?
                  </span>
                </h2>

                <p className="text-white mb-10" style={{ fontSize: "25px" }}>
                  <span className="font-bold">
                    OMS stands for Order Management System.
                  </span>{" "}
                  It's the central hub where all your orders come together from your
                  eShop, marketplaces, B2B portals, or even phone and email.
                </p>

                <p className="text-white" style={{ fontSize: "25px", marginTop: "20px" }}>
                  An OMS automates the entire process: capturing orders, allocating
                  inventory, routing fulfillment, updating customers, and tracking
                  status in real time.
                </p>
              </GridCol>

              <GridCol span="CD" className="flex items-end h-full pb-16">
                <button
                  className="w-full px-8 py-6 cursor-pointer"
                  style={{ backgroundColor: "var(--brand-red)" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/80 text-left">
                        Need more info ?
                      </p>
                      <p className="text-lg text-white mt-1 text-left">
                        Streamline Order Operations
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
      </div>
    </>
  );
};

export default WhyOrdersSection;