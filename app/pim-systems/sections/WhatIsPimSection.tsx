import { GridSection, GridContainer, GridCol } from "../../components/grid";

const pimBenefits = [
  {
    number: "01",
    title: "One place",
    description: "where all product data lives",
  },
  {
    number: "02",
    title: "Consistent updates",
    description: "across every sales channel and ERP system",
  },
  {
    number: "03",
    title: "Less manual work",
    description: "for your team",
  },
  {
    number: "04",
    title: "Accurate pricing, stock, and availability",
    description: "everywhere your products are sold",
  },
];

const WhatIsPimSection = () => {
  return (
    <>
      <section
        className="lg:hidden"
        style={{ backgroundColor: "var(--brand-light)" }}
      >
        <div className="px-6 py-12">
          <h2
            className="font-bold mb-2"
            style={{
              color: "#111D2B",
              fontSize: "25px",
            }}
          >
            How it works
          </h2>
          <p
            className="font-bold mb-4"
            style={{
              color: "#111D2B",
              fontSize: "16px",
            }}
          >
            PIM stands for Product Information Management.
          </p>
          <p
            className="max-w-xs"
            style={{
              color: "#111D2B",
              fontSize: "16px",
            }}
          >
            A PIM system is software that collects, organizes, and manages all
            the product data a business uses — things like names, descriptions,
            prices, stock, images, and supplier details.<br/>
            Instead of juggling
            spreadsheets, xml files, and supplier feeds, a PIM gives you:
          </p>
        </div>

        <div className="flex flex-col">
          {pimBenefits.map((benefit, index) => (
            <div
              key={index}
              className="border-t flex flex-col items-start px-6 py-8"
              style={{
                borderColor: "rgba(17, 29, 43, 0.2)",
              }}
            >
              <span
                className="font-bold mb-2"
                style={{
                  color: "var(--brand-red)",
                  fontSize: "20px",
                }}
              >
                {benefit.number}
              </span>
              <h3
                className="font-bold mb-1"
                style={{
                  color: "#111D2B",
                  fontSize: "20px",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  maxWidth: "220px",
                  color: "#111D2B",
                  opacity: 0.75,
                  fontSize: "16px",
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[var(--brand-light)]"
        desktopOnly={true}
        className="py-20"
      >
        <GridContainer className="flex-col">
          <GridCol span="ABCD" className="text-center px-8 pb-16">
            <h2
              className="font-extrabold"
              style={{
                color: "#111D2B",
                fontSize: "36px",
              }}
            >
              What is PIM?
            </h2>
            <p
              className="font-bold mb-6"
              style={{
                color: "#111D2B",
                fontSize: "24px",
              }}
            >
              PIM stands for Product Information Management.
            </p>
            <p
              className="mx-auto max-w-2xl"
              style={{
                color: "#111D2B",
                opacity: 0.75,
                fontSize: "16px",
              }}
            >
              A PIM system is software that collects, organizes, and manages all
              the product data a business uses — things like names, descriptions,
              prices, stock, images, and supplier details. Instead of juggling
              spreadsheets, xml files, and supplier feeds, a PIM gives you:
            </p>
          </GridCol>
        </GridContainer>

        <div
          className="w-full h-px"
          style={{ backgroundColor: "rgba(17, 29, 43, 0.2)" }}
        />

        <GridContainer className="pt-12">
          {pimBenefits.map((benefit, index) => (
            <GridCol
              key={index}
              span={index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}
              className="px-4"
            >
              <div className="flex flex-col">
                <span
                  className="font-bold"
                  style={{
                    color: "var(--brand-red)",
                    fontSize: "20px",
                  }}
                >
                  {benefit.number}
                </span>
                <h3
                  className="font-bold mb-1"
                  style={{
                    color: "#111D2B",
                    opacity: 0.75,
                    fontSize: "16px",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    maxWidth: "200px",
                    color: "#111D2B",
                    opacity: 0.75,
                    fontSize: "16px",
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </GridCol>
          ))}
        </GridContainer>
      </GridSection>
    </>
  );
};

export default WhatIsPimSection;