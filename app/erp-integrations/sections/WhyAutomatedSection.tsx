import { GridSection, GridContainer, GridCol } from "../../components/grid";

const WhyAutomatedSection = () => {
  const painPointsColA = [
    "Manual data entry between ERP and commerce systems",
    "Pricing differences across channels",
    "Customer data scattered across databases",
  ];

  const painPointsColB = [
    "Inventory mismatches and overselling",
    "Delayed or incorrect order updates",
    "Reports that never match up",
  ];

  const benefitsColC = [
    {
      title: "Data validation & monitoring",
      description: "to prevent errors reaching your ERP",
    },
    {
      title: "Training for your team",
      description: "so you're not dependent on IT for daily operations",
    },
    {
      title: "Fast Delivery",
      description:
        "most ERP integrations go live from a few days to a few weeks, depending on complexity.",
    },
  ];

  const benefitsColD = [
    {
      title: "End-to-end automated workflows,",
      description: "not just one-way data links",
    },
    {
      title: "Automatic application of business rules",
      description: "(pricing, stock, invoices, returns)",
    },
  ];

  const allPainPoints = [
    "Manual data entry between ERP and commerce systems",
    "Inventory mismatches and overselling",
    "Pricing differences across channels",
    "Delayed or incorrect order updates",
    "Customer data scattered across databases",
    "Reports that never match up",
  ];

  const allBenefits = [
    {
      title: "Data validation & monitoring",
      description: "to prevent errors reaching your ERP",
    },
    {
      title: "End-to-end automated workflows,",
      description: "not just one-way data links",
    },
    {
      title: "Training for your team",
      description: "so you're not dependent on IT for daily operations",
    },
    {
      title: "Automatic application of business rules",
      description: "(pricing, stock, invoices, returns)",
    },
    {
      title: "Fast Delivery",
      description:
        "most ERP integrations go live from a few days to a few weeks, depending on complexity.",
    },
  ];

  return (
    <>
      <section className="lg:hidden">
        <div
          className="px-6 py-12"
          style={{ backgroundColor: "var(--brand-dark)" }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Why automated integrations matter
          </h2>
          <p className="text-white/80 text-sm mb-2">
            Disconnected systems create silos that slow growth and frustrate
            teams.
          </p>
          <p
            className="text-sm mb-8"
            style={{ color: "var(--brand-red)" }}
          >
            Without automation, connectors alone leave you struggling with:
          </p>

          <ul className="space-y-4">
            {allPainPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: "var(--brand-red)" }}
                />
                <span className="text-white/90 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="px-6 py-12 relative overflow-hidden"
          style={{ backgroundColor: "#2B7856" }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Where we're different from connectors
          </h2>
          <p className="text-white/80 text-sm mb-2">
            Most providers offer simple connectors that just pass data back and
            forth.
          </p>
          <p className="text-white text-sm mb-8">
            With our ERP Integrations solution, you get:
          </p>

          <ul className="space-y-5">
            {allBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <img
                  src="/icons/white-tick.svg"
                  alt=""
                  className="w-5 h-5 mt-0.5 shrink-0"
                />
                <span className="text-white/90 text-sm">
                  <span className="font-semibold text-white">
                    {benefit.title}
                  </span>{" "}
                  {benefit.description}
                </span>
              </li>
            ))}
          </ul>

          <img
            src="/images/hexagon-design.svg"
            alt=""
            className="absolute -bottom-24 -right-24 w-72 h-auto"
          />
        </div>
      </section>

      <div className="hidden lg:block relative overflow-hidden">
        <div
          className="absolute top-0 bottom-0 left-0"
          style={{
            width: "5.56%",
            backgroundColor: "var(--brand-dark)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{
            width: "5.56%",
            backgroundColor: "#2B7856",
          }}
        />

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-transparent"
          desktopOnly={true}
        >
          <GridContainer className="min-h-[600px]">
            <GridCol
              span="AB"
              className="py-20 relative"
              style={{ backgroundColor: "var(--brand-dark)" }}
            >
              <div className="pl-8 pr-8">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Why automated integrations matter
                </h2>
                <p className="text-white/80 text-base mb-1">
                  Disconnected systems create silos that slow growth and frustrate
                  teams.
                </p>
                <p
                  className="text-base mb-12"
                  style={{ color: "var(--brand-red)" }}
                >
                  Without automation, connectors alone leave you struggling with:
                </p>
              </div>

              <div className="flex">
                <div className="w-1/2 pl-8 pr-6 flex flex-col gap-12">
                  {painPointsColA.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "var(--brand-red)" }}
                      />
                      <span className="text-white/90 text-base leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-1/2 pl-6 pr-8 flex flex-col gap-12">
                  {painPointsColB.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "var(--brand-red)" }}
                      />
                      <span className="text-white/90 text-base leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="absolute right-0 top-0 bottom-0 w-px"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              />
            </GridCol>

            <GridCol
              span="CD"
              className="py-20 relative"
              style={{ backgroundColor: "#2B7856" }}
            >
              <div className="pl-8 pr-8 relative z-10">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Where we're different from connectors
                </h2>
                <p className="text-white/80 text-base mb-1">
                  Most providers offer simple connectors that just pass data back
                  and forth.
                </p>
                <p className="text-white text-base mb-12">
                  With our ERP Integrations solution, you get:
                </p>
              </div>

              <div className="flex relative z-10">
                <div className="w-1/2 pl-8 pr-6 flex flex-col gap-12">
                  {benefitsColC.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <img
                        src="/icons/white-tick.svg"
                        alt=""
                        className="w-5 h-5 mt-1 shrink-0"
                      />
                      <span className="text-white/90 text-base leading-relaxed">
                        <span className="font-semibold text-white">
                          {benefit.title}
                        </span>{" "}
                        {benefit.description}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-1/2 pl-6 pr-8 flex flex-col gap-12">
                  {benefitsColD.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <img
                        src="/icons/white-tick.svg"
                        alt=""
                        className="w-5 h-5 mt-1 shrink-0"
                      />
                      <span className="text-white/90 text-base leading-relaxed">
                        <span className="font-semibold text-white">
                          {benefit.title}
                        </span>{" "}
                        {benefit.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src="/images/hexagon-design.svg"
                alt=""
                className="absolute -bottom-32 -right-64 w-[630px] h-auto"
              />
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>
    </>
  );
};

export default WhyAutomatedSection;