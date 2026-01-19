import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";

const IndustrySolutionSection = () => {
  const solutions = [
    {
      icon: "/icons/shopping-cart.svg",
      title: "Retail Marketplaces",
      description: "fashion, electronics, lifestyle"
    },
    {
      icon: "/icons/factory-thin.svg",
      title: "B2B Trading Platforms",
      description: "wholesale & industrial supply"
    },
    {
      icon: "/icons/perfume.svg",
      title: "Niche Markets",
      description: "specialized industries with compliance features"
    }
  ];

  return (
    <>
      <GridSection
        desktopOnly={true}
        bgColor="bg-[var(--brand-light)]"
        showLines={[true, true, true, true, true]}
        className="py-20"
      >
        <GridContainer className="items-center">
          <GridCol span="ABCD" className="px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#F7FF00] px-4 py-1 text-sm font-medium mb-4">
                PREVIEW
              </div>
              <h2 className="text-5xl font-bold mb-6 text-(--brand-black)">
                Industry Solutions
              </h2>
              <p className="text-xl text-(--brand-black) max-w-4xl mx-auto">
                Whether retail, B2B or niche verticals — our marketplace platform adapts with <br />
                tailored workflows, compliance tools, and vendor models.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={48}
                      height={48}
                      className="opacity-60"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-(--brand-black)">
                    {solution.title}
                  </h3>
                  <p className="text-(--brand-black) text-base">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-(--brand-light) px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#F7FF00] px-4 py-1 text-sm font-medium mb-4">
            PREVIEW
          </div>
          <h2 className="text-3xl font-bold mb-4 text-(--brand-black)">
            Industry Solutions
          </h2>
          <p className="text-base text-(--brand-black)">
            Whether retail, B2B or niche verticals our <br />
            marketplace platform adapts with tailored <br />
            workflows, compliance tools, and vendor <br />
            models.
          </p>
        </div>
        <div className="space-y-10">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={48}
                  height={48}
                  className="opacity-60"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-(--brand-black)">
                {solution.title}
              </h3>
              <p className="text-(--brand-black) text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IndustrySolutionSection;