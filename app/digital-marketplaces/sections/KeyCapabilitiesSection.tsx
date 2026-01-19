import { GridSection, GridContainer, GridCol } from "../../components/grid";

const KeyCapabilitiesSection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, transparent, transparent 2px, #d9d9d9 2px, #d9d9d9 4px)";
  const stripeSize = "6.00px 6.00px";

  const capabilities = [
    {
      title: "Vendor &\nChannel Management",
      items: [
        "Streamlined vendor onboarding and verification",
        "Automated vendor dashboards and analytics",
        "Flexible commission structures and payments",
        "Unified inventory across vendors and channels",
        "Centralized order management from web, mobile, and third-party platforms",
      ],
    },
    {
      title: "Marketplace Operations",
      items: [
        "Advanced product catalog management with Cubik PIM",
        "Dispute resolution and quality assurance workflows",
        "Review, rating, and compliance tools",
        "Comprehensive reporting and performance analytics",
      ],
    },
    {
      title: "Revenue Optimization",
      items: [
        "Dynamic commission models (percentage, fixed, hybrid)",
        "Subscription and listing fee management",
        "Promotional tools and discount engines",
        "Automated revenue sharing and reporting",
      ],
    },
  ];

  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[var(--brand-light)]"
        desktopOnly={true}
        className="relative"
      >
        <GridContainer className="border-b border-[#d1d1d1]">
          <GridCol span="ABC" className="py-12 pl-8">
            <span
              className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: "#F7FF00" }}
            >
              PLANNED
            </span>
            <h2 className="text-4xl font-bold text-black">Key Capabilities</h2>
          </GridCol>
          <GridCol
            span="D"
            className="relative"
            style={{
              backgroundImage: stripePattern,
              backgroundSize: stripeSize,
            }}
          >
            {null}
          </GridCol>
        </GridContainer>
        <GridContainer className="border-b border-[#d1d1d1]">
          <GridCol span="A" className="py-10 pl-10 pr-6">
            <h3 className="text-[25px] font-bold text-black mb-6 whitespace-pre-line leading-tight">
              {capabilities[0].title}
            </h3>
            <ul className="space-y-3">
              {capabilities[0].items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "var(--brand-dark)" }}
                  />
                  <span className="text-sm text-black leading-relaxed max-w-xs">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GridCol>
          <GridCol span="B" className="py-10 px-6 pl-10">
            <h3 className="text-[25px] font-bold text-black mb-6">
              {capabilities[1].title}
            </h3>
            <ul className="space-y-3">
              {capabilities[1].items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "var(--brand-dark)" }}
                  />
                  <span className="text-sm text-black leading-relaxed max-w-xs">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="C" className="py-10 px-6 pl-10">
            <h3 className="text-[25px] font-bold text-black mb-6">
              {capabilities[2].title}
            </h3>
            <ul className="space-y-3">
              {capabilities[2].items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "var(--brand-dark)" }}
                  />
                  <span className="text-sm text-black leading-relaxed max-w-xs">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GridCol>
          <GridCol span="D" className="relative">
            <></>
          </GridCol>
        </GridContainer>
        <GridContainer>
          <GridCol span="ABC" className="py-6">
            <></>
          </GridCol>
          <GridCol span="D" className="py-6">
             <></>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* MOBILE VERSION */}
      <section
        className="lg:hidden px-6 py-10"
        style={{ backgroundColor: "var(--brand-light)" }}
      >
        <span
          className="inline-block px-1 py-1 text-sm font-bold uppercase tracking-wider mb-4"
          style={{ backgroundColor: "#F7FF00" }}
        >
          PLANNED
        </span>

        <h2 className="text-4xl font-extrabold text-black mb-8">Key Capabilities</h2>

        <div className="mb-8">
          <h3 className="text-xl font-extrabold text-black mb-4">
            Vendor & Channel Management
          </h3>
          <ul className="space-y-3">
            {capabilities[0].items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "var(--brand-dark)" }}
                />
                <span className="text-sm text-black leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-extrabold text-black mb-4">
            Marketplace Operations
          </h3>
          <ul className="space-y-3">
            {capabilities[1].items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "var(--brand-dark)" }}
                />
                <span className="text-sm text-black leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-black mb-4">
            Revenue Optimization
          </h3>
          <ul className="space-y-3">
            {capabilities[2].items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "var(--brand-dark)" }}
                />
                <span className="text-sm text-black leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default KeyCapabilitiesSection;