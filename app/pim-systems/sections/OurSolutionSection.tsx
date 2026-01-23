import { GridSection, GridContainer, GridCol } from "../../components/grid";

const OurSolutionSection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, transparent, transparent 2px, #d9d9d9 2px, #d9d9d9 4px)";
  const stripeSize = "6.00px 6.00px";

  const resultItems = [
    {
      icon: "/icons/duplicate.svg",
      text: "Duplicate products from multiple supplier",
    },
    {
      icon: "/icons/discontinued.svg",
      text: "Discontinued items still showing as available",
    },
    {
      icon: "/icons/factory-thin.svg",
      text: "Inconsistent product info across channels",
    },
    {
      icon: "/icons/error.svg",
      text: "Pricing errors and missing discount rules",
    },
    {
      icon: "/icons/shuffle.svg",
      text: "Stock mismatches that frustrate customers",
    },
    {
      icon: "/icons/renew-team.svg",
      text: "Teams wasting 20+ hours a week on manual updates",
    },
  ];

  return (
    <>
      <div className="hidden lg:block relative">
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="AB" className="py-12">
              <div className="pl-8 pr-8 flex items-center h-full">
                <h2
                  className="font-extrabold leading-tight"
                  style={{ fontSize: "32px" }}
                >
                  <span style={{ color: "var(--brand-black)" }}>
                    Why Product Data Is{" "}
                  </span>
                  <span
                    className="text-white px-2 rounded"
                    style={{ backgroundColor: "var(--brand-red)", paddingTop: "2px", paddingBottom: "2px" }}
                  >
                    Holding You Back
                  </span>
                </h2>
              </div>
            </GridCol>

            <GridCol span="C" className="py-12">
              <div className="pl-8 flex items-center h-full">
                <p
                  className="font-semibold tracking-wide"
                  style={{ color: "var(--brand-dark)", fontSize: "25px" }}
                >
                  THE RESULT ?
                </p>
              </div>
            </GridCol>
            <GridCol
              span="D"
              className="py-12"
              style={{
                backgroundImage: stripePattern,
                backgroundSize: stripeSize,
              }}
            >
              <></>
            </GridCol>
          </GridContainer>
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"
          />
        </GridSection>
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="AB" className="py-5">
              <div className="pl-8 pr-8 flex items-center h-full">
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontSize: "25px" }}
                >
                  Product data comes from everywhere — CSVs, XML feeds, JSON
                  APIs, and manual spreadsheets.
                </p>
              </div>
            </GridCol>
            <GridCol span="C" className="py-8">
              <div className="pl-8 pr-4 flex items-start gap-4 h-full">
                <img
                  src={resultItems[0].icon}
                  alt=""
                  className="shrink-0"
                  style={{ width: "35.83px", height: "35.83px" }}
                />
                <p
                  className="leading-snug"
                  style={{ fontSize: "18px", color: "var(--brand-black)" }}
                >
                  {resultItems[0].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="D" className="py-8">
              <div className="pl-8 pr-8 flex items-start gap-4 h-full">
                <img
                  src={resultItems[1].icon}
                  alt=""
                  className="shrink-0"
                  style={{ width: "35.83px", height: "35.83px" }}
                />
                <p
                  className="leading-snug"
                  style={{ fontSize: "18px", color: "var(--brand-black)" }}
                >
                  {resultItems[1].text}
                </p>
              </div>
            </GridCol>
          </GridContainer>
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"
          />
        </GridSection>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="AB" className="py-8">
              <div className="pl-8 pr-8 h-full">
                <></>
              </div>
            </GridCol>
            <GridCol span="C" className="py-8">
              <div className="pl-8 pr-4 flex items-start gap-4 h-full">
                <img
                  src={resultItems[2].icon}
                  alt=""
                  className="shrink-0"
                  style={{ width: "35.83px", height: "35.83px" }}
                />
                <p
                  className="leading-snug"
                  style={{ fontSize: "18px", color: "var(--brand-black)" }}
                >
                  {resultItems[2].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="D" className="py-8">
              <div className="pl-8 pr-8 flex items-start gap-4 h-full">
                <img
                  src={resultItems[3].icon}
                  alt=""
                  className="shrink-0"
                  style={{ width: "35.83px", height: "35.83px" }}
                />
                <p
                  className="leading-snug"
                  style={{ fontSize: "18px", color: "var(--brand-black)" }}
                >
                  {resultItems[3].text}
                </p>
              </div>
            </GridCol>
          </GridContainer>
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"
          />
        </GridSection>
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="AB" className="py-8">
              <div className="pl-8 pr-8 h-full">
                <></>
              </div>
            </GridCol>
            <GridCol span="C" className="py-8">
              <div className="pl-8 pr-4 flex items-start gap-4 h-full">
                <img
                  src={resultItems[4].icon}
                  alt=""
                  className="shrink-0"
                  style={{ width: "35.83px", height: "35.83px" }}
                />
                <p
                  className="leading-snug"
                  style={{ fontSize: "18px", color: "var(--brand-black)" }}
                >
                  {resultItems[4].text}
                </p>
              </div>
            </GridCol>
            <GridCol span="D" className="py-8">
              <div className="pl-8 pr-8 flex items-start gap-4 h-full">
                <img
                  src={resultItems[5].icon}
                  alt=""
                  className="shrink-0"
                  style={{ width: "35.83px", height: "35.83px" }}
                />
                <p
                  className="leading-snug"
                  style={{ fontSize: "18px", color: "var(--brand-black)" }}
                >
                  {resultItems[5].text}
                </p>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* MOBILE VERSION */}
      <section className="lg:hidden bg-white px-6 py-10">
        <p
          className="font-bold uppercase tracking-wider mb-3"
          style={{ color: "var(--brand-red)", fontSize: "14px" }}
        >
          OUR SOLUTION
        </p>
        <h2
          className="font-extrabold leading-tight mb-3"
          style={{ fontSize: "25px" }}
        >
          <span style={{ color: "var(--brand-black)" }}>
            Why Product Data Is{" "}
          </span>
          <span
            className="text-white px-1.5 rounded inline-block"
            style={{ backgroundColor: "var(--brand-red)", paddingTop: "0px", paddingBottom: "2px", lineHeight: "1.1" }}
          >
            Holding You Back
          </span>
        </h2>
        <p
          className="text-gray-900 mb-3"
          style={{ fontSize: "18px" }}
        >
          Centralized Product Management Across Suppliers and Channels
        </p>
        <p className="text-gray-600 mb-3" style={{ fontSize: "16px" }}>
          Stop wasting time fixing supplier files and updating spreadsheets.
        </p>
        <p className="text-gray-600 mb-8" style={{ fontSize: "16px" }}>
          With our PIM solution, all your product data flows into one central
          hub — automatically cleaned, enriched, and distributed across every
          channel with accurate pricing, stock, and availability.
        </p>
        <p
          className="font-semibold tracking-wide mb-6"
          style={{ color: "var(--brand-dark)", fontSize: "20px" }}
        >
          THE RESULT ?
        </p>
        <div className="flex flex-col gap-7">
          {resultItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={item.icon}
                alt=""
                className="shrink-0"
                style={{ width: "38.48px", height: "38.48px" }}
              />
              <p
                className="leading-snug"
                style={{ fontSize: "16px", color: "var(--brand-black)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurSolutionSection;