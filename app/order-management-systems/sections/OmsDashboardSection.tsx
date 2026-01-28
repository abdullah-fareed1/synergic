"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

const OmsDashboardSection = () => {
  const whatYouGetColA = [
    "Centralized order capture (web, marketplaces, B2B, phone, email)",
    "Real-time inventory tracking and allocation",
    "Automated warehouse & fulfillment routing",
    "Carrier labels, shipping, and tracking",
    "Automated customer notifications (confirmation, shipping, delivery)",
  ];

  const whatYouGetColB = [
    "Returns & exchange workflows (RMA)",
    "Activity logs — who did what, when",
    "Per-order internal notes for collaboration",
    "Manager tools to reassign orders between staff",
    "Complete visibility and reporting",
  ];

  const benefitsColA = [
    {
      title: "Save Time",
      subtitle: "up to 70% less manual processing",
    },
    {
      title: "Improve Experience",
      subtitle: "faster fulfillment & proactive comms",
    },
    {
      title: "Stay in Control",
      subtitle: "logs, notes, and reallocation ensure nothing slips",
    },
  ];

  const benefitsColB = [
    {
      title: "Reduce Errors",
      subtitle: "stop overselling and lost orders",
    },
    {
      title: "Scale Effortlessly",
      subtitle: "handle 10x more orders with the same team",
    },
  ];

  const allBenefits = [
    {
      title: "Save Time",
      subtitle: "up to 70% less manual processing",
    },
    {
      title: "Reduce Errors",
      subtitle: "stop overselling and lost orders",
    },
    {
      title: "Improve Experience",
      subtitle: "faster fulfillment & proactive comms",
    },
    {
      title: "Scale Effortlessly",
      subtitle: "handle 10x more orders with the same team",
    },
    {
      title: "Stay in Control",
      subtitle: "logs, notes, and reallocation ensure nothing slips",
    },
  ];

  return (
    <>
      <div className="hidden lg:block relative overflow-hidden">
        <div className="relative">
          <GridSection
            showLines={[true, true, true, true, true]}
            bgColor="bg-white"
            desktopOnly={true}
          >
            <GridContainer>
              <GridCol span="A" className="pl-8 pt-20 pb-28" style={{ height: "520px" }}>
                <h2
                  className="font-extrabold mb-10"
                  style={{ color: "#111D2B", fontSize: "32px", lineHeight: "1.2" }}
                >
                  What You Get
                </h2>
                <ul className="space-y-6">
                  {whatYouGetColA.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
                    >
                      <span
                        className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#000000" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GridCol>

              <GridCol span="B" className="pl-8 pt-20 pb-28" style={{ height: "520px" }}>
                <div className="pt-19">
                  <ul className="space-y-6">
                    {whatYouGetColB.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
                      >
                        <span
                          className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#000000" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GridCol>

              <GridCol span="CD" style={{ height: "520px" }}>
                <></>
              </GridCol>
            </GridContainer>
          </GridSection>
          <GridSection
            showLines={[true, true, true, true, true]}
            bgColor="bg-[#F3F3EE]"
            desktopOnly={true}
          >
            <GridContainer>
              <GridCol span="A" className="pl-8 pt-20 pb-46" style={{ height: "420px" }}>
                <h2
                  className="font-extrabold mb-10"
                  style={{ color: "#111D2B", fontSize: "32px", lineHeight: "1.2" }}
                >
                  Benefits That Matter
                </h2>
                <ul className="space-y-6">
                  {benefitsColA.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      style={{ fontSize: "14px", lineHeight: "1.5" }}
                    >
                      <img
                        src="/icons/green-tick.svg"
                        alt=""
                        className="shrink-0 mt-1"
                        style={{ width: "11.7px", height: "11px" }}
                      />
                      <div>
                        <span className="font-bold" style={{ color: "#000000", fontSize: "14px" }}>
                          {item.title}
                        </span>
                        <br />
                        <span style={{ color: "#000000", fontSize: "14px" }}>{item.subtitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </GridCol>

              <GridCol span="B" className="pl-8 pt-20 pb-46" style={{ height: "420px" }}>
                <div className="pt-19">
                  <ul className="space-y-6">
                    {benefitsColB.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        style={{ fontSize: "14px", lineHeight: "1.5" }}
                      >
                        <img
                          src="/icons/green-tick.svg"
                          alt=""
                          className="shrink-0 mt-1"
                          style={{ width: "11.7px", height: "11px" }}
                        />
                        <div>
                          <span className="font-bold" style={{ color: "#000000", fontSize: "14px" }}>
                            {item.title}
                          </span>
                          <br />
                          <span style={{ color: "#000000", fontSize: "14px" }}>{item.subtitle}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </GridCol>

              <GridCol span="CD" className="pb-46" style={{ height: "420px" }}>
                <></>
              </GridCol>
            </GridContainer>
          </GridSection>
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              bottom: "0",
              right: "-32%",
              width: "80%",
              height: "auto",
            }}
          >
            <img
              src="/images/oms-dashboard.avif"
              alt="OMS Dashboard Interface"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
              }}
            />
          </div>
        </div>
      </div>

      <section className="lg:hidden relative overflow-hidden">
        <div className="bg-white px-6 py-10">
          <h2
            className="font-extrabold mb-8 pl-2"
            style={{ color: "#111D2B", fontSize: "25px", lineHeight: "1.2" }}
          >
            What You Get
          </h2>
          <ul className="space-y-5 pl-2">
            {[...whatYouGetColA, ...whatYouGetColB].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
                style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
              >
                <span
                  className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#000000" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="px-6 py-10"
          style={{ backgroundColor: "#F3F3EE" }}
        >
          <h2
            className="font-extrabold mb-8 pl-2"
            style={{ color: "#111D2B", fontSize: "25px", lineHeight: "1.2" }}
          >
            Benefits That Matter
          </h2>
          <ul className="space-y-5 pl-2">
            {allBenefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
                style={{ fontSize: "14px", lineHeight: "1.5" }}
              >
                <img
                  src="/icons/green-tick.svg"
                  alt=""
                  className="shrink-0 mt-1"
                  style={{ width: "11.7px", height: "11px" }}
                />
                <div>
                  <span className="font-bold" style={{ color: "#000000", fontSize: "14px" }}>
                    {item.title}
                  </span>
                  <br />
                  <span style={{ color: "#000000", fontSize: "14px" }}>{item.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OmsDashboardSection;