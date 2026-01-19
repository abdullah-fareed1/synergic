import { GridSection, GridContainer, GridCol } from "../../components/grid";

const ValueAcrossSection = () => {
  const operatorBenefits = [
    "Rapid revenue scaling through vendor ecosystems",
    "Diversified product offerings without added risk",
    "Reduced overhead with automated operations",
  ];

  const vendorBenefits = [
    "Access to new customer bases instantly",
    "Lower marketing and infrastructure costs",
    "Professional selling tools and analytics",
    "Streamlined payments and order processing",
  ];

  const customerBenefits = [
    "Vast product selection in one place",
    "Competitive pricing through vendor competition",
    "Consistent shopping experience across channels",
    "Trusted transaction security and support",
  ];

  const BenefitsList = ({ benefits }: { benefits: string[] }) => (
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="text-gray-900 text-[14px]">●</span>
          <span className="text-[15px] text-gray-700 leading-relaxed">
            {benefit}
          </span>
        </li>
      ))}
    </ul>
  );

  const MobileBenefitsList = ({ benefits }: { benefits: string[] }) => (
    <ul className="space-y-2 pl-1">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="text-gray-900 text-[14px]">●</span>
          <span className="text-sm text-black leading-relaxed">
            {benefit}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="hidden lg:block relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center z-20" style={{ transform: "translateX(calc(100vw * 2 / 12))" }}>
          <img
            src="/images/dotted-bg-marketplace.avif"
            alt="dotted bg image used for designing"
            className="w-auto h-full object-contain"
          />
        </div>

        <div
          className="absolute w-4 h-4 rounded-full z-20"
          style={{
            backgroundColor: "#FB3B22",
            left: "calc(100vw / 18)",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-4 h-4 rounded-full z-20"
          style={{
            backgroundColor: "#AE7FF8",
            left: "calc(100vw * 5 / 18 - 5px)",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-4 h-4 rounded-full z-20"
          style={{
            backgroundColor: "#FFCE00",
            left: "calc(100vw * 9 / 18 - 9px)",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10">
          <GridSection
            showLines={[true, true, true, true, true]}
            className="bg-transparent! h-full"
          >
            <GridContainer className="h-auto">
              <GridCol span="ABC" className="pt-18 pb-12 pl-11">
                <h2 className="text-[40px] font-bold leading-tight text-gray-900 mb-0 whitespace-nowrap">
                  Value Across the Ecosystem
                </h2>
              </GridCol>
            </GridContainer>
            <GridContainer className="h-full">
              <GridCol span="A" className="flex flex-col justify-start pb-24 pl-11">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Operators
                  </h3>
                </div>
                <BenefitsList benefits={operatorBenefits} />
              </GridCol>

              <GridCol span="B" className="flex flex-col justify-start pb-24 pl-11">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Vendors
                  </h3>
                </div>
                <BenefitsList benefits={vendorBenefits} />
              </GridCol>

              <GridCol span="C" className="flex flex-col justify-start pb-24 pl-11">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Customers
                  </h3>
                </div>
                <BenefitsList benefits={customerBenefits} />
              </GridCol>

              <GridCol span="D">
                <></>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>
      </div>

      <section className="lg:hidden bg-white px-6 py-12">
        <div className="mb-1">
          <span
            className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
            style={{ backgroundColor: "#F7FF00", color: "#000" }}
          >
            Planned
          </span>
        </div>

        <h2 className="text-[32px] font-extrabold leading-tight text-gray-900 mb-8">
          Key Capabilities
        </h2>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: "#FB3B22" }}
            />
            <h3 className="text-xl font-extrabold text-gray-900">
              For Operators
            </h3>
          </div>
          <MobileBenefitsList benefits={operatorBenefits} />
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: "#AE7FF8" }}
            />
            <h3 className="text-xl font-extrabold text-gray-900">
              For Vendors
            </h3>
          </div>
          <MobileBenefitsList benefits={vendorBenefits} />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: "#FFCE00" }}
            />
            <h3 className="text-xl font-extrabold text-gray-900">
              For Customers
            </h3>
          </div>
          <MobileBenefitsList benefits={customerBenefits} />
        </div>
      </section>
    </>
  );
};

export default ValueAcrossSection;