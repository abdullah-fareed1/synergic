import { GridSection, GridContainer, GridCol } from "../../components/grid";

const cardData = [
  {
    title: "Data Source Review:",
    description:
      "We review your suppliers, other eShops, and system integrations.",
  },
  {
    title: "Onboarding & Setup:",
    description:
      "Our team configures Cubik PIM workflows, mappings, validations, and business rules tailored to your operations.",
  },
  {
    title: "Automation:",
    description:
      "From then on, everything runs automatically. Cubik PIM imports supplier feeds, applies pricing logic (markups, discounts), synchronizes stock & availability, and distributes updates to every sales channel.",
  },
  {
    title: "Multi-Channel Distribution:",
    description:
      "One catalog can power multiple stores and platforms — for example, two B2C eShops, one B2B platform, and a marketplace feed like Skroutz — all in sync, all automatic.",
  },
  {
    title: "ERP Integration:",
    description:
      "PIM connects directly with ERP systems — as an input source for product data or as an output channel — with ready drivers for SoftOne, Pylon, Megasoft, and custom connectors on demand.",
  },
  {
    title: "Training:",
    description:
      "We train your team so they can use Cubik PIM independently — saving time, reducing costs, and avoiding reliance on external support.",
  },
  {
    title: "Ease of Use:",
    description:
      "After setup, your staff works with a clean, intuitive system — no bottlenecks, no errors, no extra load on your eCommerce platform.",
  },
  {
    title: "Fast Delivery:",
    description:
      "Depending on the number of suppliers and sources, Cubik PIM can be configured from just a few hours to a few days — not weeks.",
  },
];

const DesktopCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col">
    <img
      src="/icons/inbox-up-red.svg"
      alt=""
      className="mb-6"
      style={{ width: "31.09px", height: "34.56px" }}
    />
    <h3
      className="font-bold mb-3"
      style={{ fontSize: "18px", color: "white" }}
    >
      {title}
    </h3>
    <p style={{ fontSize: "16px", color: "white" }}>{description}</p>
  </div>
);

const MobileCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col py-8 border-t border-gray-700 -mx-6 px-6">
    <img
      src="/icons/inbox-up-red.svg"
      alt=""
      className="mb-4"
      style={{ width: "31.09px", height: "34.56px" }}
    />
    <h3
      className="font-bold mb-2"
      style={{ fontSize: "16px", color: "white" }}
    >
      {title}
    </h3>
    <p style={{ fontSize: "14px", color: "white" }}>{description}</p>
  </div>
);

const OurApproachSection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)";
  const stripeSize = "6.00px 6.00px";

  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        desktopOnly={true}
        className="relative"
      >
        <div
          className="absolute left-0 right-0 h-px bg-gray-600"
          style={{ top: "7%" }}
        />

        <div
          className="absolute"
          style={{
            top: 0,
            bottom: "93%",
            left: "72.22%",
            right: "5.56%",
            backgroundImage: stripePattern,
            backgroundSize: stripeSize,
          }}
        />

        <div
          className="absolute left-0 right-0 h-px bg-gray-600"
          style={{ bottom: "7%" }}
        />

        <div
          className="absolute"
          style={{
            top: "93%",
            bottom: 0,
            left: "72.22%",
            right: "5.56%",
            backgroundImage: stripePattern,
            backgroundSize: stripeSize,
          }}
        />

        <GridContainer className="pt-24 pb-16">
          <GridCol span="ABCD" className="text-center">
            <p
              style={{ fontSize: "32px", color: "#AFAFAF" }}
              className="mb-2"
            >
              Our Approach
            </p>
            <h2
              className="font-extrabold mb-4"
              style={{ fontSize: "36px", color: "white" }}
            >
              Platform{" "}
              <span style={{ color: "var(--brand-red)" }}>+</span> Services
            </h2>
            <p style={{ fontSize: "25px", color: "white" }}>
              We don't just give you a PIM tool — we set up a working solution.
            </p>
          </GridCol>
        </GridContainer>

        <GridContainer className="py-12">
          <GridCol span="A" className="px-6">
            <DesktopCard
              title={cardData[0].title}
              description={cardData[0].description}
            />
          </GridCol>
          <GridCol span="B" className="px-6">
            <DesktopCard
              title={cardData[1].title}
              description={cardData[1].description}
            />
          </GridCol>
          <GridCol span="C" className="px-6">
            <DesktopCard
              title={cardData[2].title}
              description={cardData[2].description}
            />
          </GridCol>
          <GridCol span="D" className="px-6">
            <DesktopCard
              title={cardData[3].title}
              description={cardData[3].description}
            />
          </GridCol>
        </GridContainer>

        <GridContainer className="relative py-15 pb-30">
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-600" />
          
          <GridCol span="A" className="px-6">
            <DesktopCard
              title={cardData[4].title}
              description={cardData[4].description}
            />
          </GridCol>
          <GridCol span="B" className="px-6">
            <DesktopCard
              title={cardData[5].title}
              description={cardData[5].description}
            />
          </GridCol>
          <GridCol span="C" className="px-6">
            <DesktopCard
              title={cardData[6].title}
              description={cardData[6].description}
            />
          </GridCol>
          <GridCol span="D" className="px-6">
            <DesktopCard
              title={cardData[7].title}
              description={cardData[7].description}
            />
          </GridCol>
        </GridContainer>
      </GridSection>

      <section
        className="lg:hidden px-6 py-12"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="mb-8">
          <p
            style={{ fontSize: "20px", color: "#AFAFAF" }}
            className="mb-2"
          >
            Our Approach
          </p>
          <h2
            className="font-extrabold mb-3"
            style={{ fontSize: "25px", color: "white" }}
          >
            Platform{" "}
            <span style={{ color: "var(--brand-red)" }}>+</span> Services
          </h2>
          <p style={{ fontSize: "16px", color: "white" }}>
            We don't just give you a PIM tool we set up a working solution.
          </p>
        </div>

        <div className="flex flex-col">
          {cardData.map((card, index) => (
            <MobileCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurApproachSection;