"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

const PimDashboardSection = () => {
  const whatYouGetColA = [
    "One source of truth for all product information",
    "Automated supplier feed integration (CSV, XML, JSON, APIs)",
    "Accurate pricing with markup/discount rules",
    "Stock and availability always up to date",
    "Automatic distribution to multiple sales channels (B2C, B2B, marketplaces, apps)",
  ];

  const whatYouGetColB = [
    "ERP-ready — send and receive product data with your back-office systems",
    "Duplicate detection and discontinued product cleanup",
    "Built-in validation and quality control",
    "No heavy load on your commerce systems — all processing happens in Cubik PIM",
  ];

  const benefitsColA = [
    "One source of truth for all product information",
    "Automated supplier feed integration (CSV, XML, JSON, APIs)",
    "Automatic distribution to multiple sales channels (B2C, B2B, marketplaces, apps)",
    "ERP-ready — send and receive product data with your back-office systems",
    "Duplicate detection and discontinued product cleanup",
  ];

  const benefitsColB = [
    "Accurate pricing with markup/discount rules",
    "Stock and availability always up to date",
    "Built-in validation and quality control",
    "No heavy load on your commerce systems — all processing happens in Cubik PIM",
  ];

  const allBenefits = [
    "One source of truth for all product information",
    "Automated supplier feed integration (CSV, XML, JSON, APIs)",
    "Automatic distribution to multiple sales channels (B2C, B2B, marketplaces, apps)",
    "ERP-ready — send and receive product data with your back-office systems",
    "Duplicate detection and discontinued product cleanup",
    "Accurate pricing with markup/discount rules",
    "Stock and availability always up to date",
    "Built-in validation and quality control",
    "No heavy load on your commerce systems — all processing happens in Cubik PIM",
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
                  style={{ color: "#111D2B", fontSize: "36px", lineHeight: "1.2" }}
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
                        style={{ backgroundColor: "#111D2B" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GridCol>

              <GridCol span="B" className="pl-8 pt-20 pb-28" style={{ height: "520px" }}>
                <div className="pt-17">
                  <ul className="space-y-6">
                    {whatYouGetColB.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
                      >
                        <span
                          className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#111D2B" }}
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
              <GridCol span="A" className="pl-8 pt-20 pb-36" style={{ height: "520px" }}>
                <h2
                  className="font-extrabold mb-10"
                  style={{ color: "#111D2B", fontSize: "36px", lineHeight: "1.2" }}
                >
                  Benefits That Matter
                </h2>
                <ul className="space-y-6">
                  {benefitsColA.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
                    >
                      <img
                        src="/icons/green-tick.svg"
                        alt=""
                        className="shrink-0 mt-1.5"
                        style={{ width: "11.7px", height: "11px" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GridCol>

              <GridCol span="B" className="pl-8 pt-20 pb-36" style={{ height: "520px" }}>
                <div className="pt-17">
                  <ul className="space-y-6">
                    {benefitsColB.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
                      >
                        <img
                          src="/icons/green-tick.svg"
                          alt=""
                          className="shrink-0 mt-1.5"
                          style={{ width: "11.7px", height: "11px" }}
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

          <div
            className="absolute z-20 pointer-events-none"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              right: "-27%",
              width: "70%",
            }}
          >
            <img
              src="/images/pim-dashboard.avif"
              alt="PIM Dashboard Interface"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
              }}
            />
          </div>
        </div>
      </div>

      <section className="lg:hidden relative overflow-hidden">
        <div className="bg-white px-6 py-10 pb-48">
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
                  style={{ backgroundColor: "#111D2B" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="absolute z-20"
            style={{
              top: "-180px",
              left: "0",
              width: "auto",
            }}
          >
            <img
              src="/images/pim-dashboard.avif"
              alt="PIM Dashboard Interface"
              style={{
                width: "auto",
                height: "360px",
                objectFit: "cover",
                objectPosition: "left top",
                filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2))",
              }}
            />
          </div>

          <div
            className="px-6 pt-50 pb-16"
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
                  style={{ color: "#000000", fontSize: "14px", lineHeight: "1.7" }}
                >
                  <img
                    src="/icons/green-tick.svg"
                    alt=""
                    className="shrink-0 mt-1.5"
                    style={{ width: "11.7px", height: "11px" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PimDashboardSection;