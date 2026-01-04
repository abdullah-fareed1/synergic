import React from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const BuiltForGrowthSection = () => {
  const stripePattern =
    "linear-gradient(45deg, #d9d9d9 8.33%, #ffffff 8.33%, #ffffff 50%, #d9d9d9 50%, #d9d9d9 58.33%, #ffffff 58.33%, #ffffff 100%)";
  const stripeSize = "6.00px 6.00px";

  const steps = [
    {
      number: "01",
      title: "Start simple",
      description: "launch with core eCommerce features",
    },
    {
      number: "02",
      title: "Add capabilities",
      description: "loyalty programs, subscriptions, mobile apps, multi-store",
    },
    {
      number: "03",
      title: "Expand channels",
      description: "marketplaces, social commerce, physical stores",
    },
    {
      number: "04",
      title: "Handle Growth",
      description: "from hundreds to millions of products and customers",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 100 }}
        >
          <div
            className="absolute text-gray-900 font-light"
            style={{
              left: "5.56%",
              top: "295px",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5rem",
              lineHeight: 1,
            }}
          >
            +
          </div>
          <div
            className="absolute text-[#FB3B22] font-light"
            style={{
              left: "72.22%",
              top: "295px",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5rem",
              lineHeight: 1,
            }}
          >
            +
          </div>
          <div
            className="absolute text-gray-900 font-light"
            style={{
              left: "27.78%",
              top: "595px",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5rem",
              lineHeight: 1,
            }}
          >
            +
          </div>
        </div>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          minHeight="300px"
        >
          <GridContainer>
            <GridCol
              span="AB"
              className="flex flex-col justify-center py-10 pl-16 pr-12"
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Built for Your Growth
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Whether you're launching your first eShop or scaling an
                established store, our platforms grow with you:
              </p>
            </GridCol>
            <GridCol
              span="CD"
              className="flex items-center justify-center py-4 px-8"
            >
              <img
                src="/images/built-for-growth.webp"
                alt="Growth visualization"
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: "250px" }}
              />
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          className="relative"
          minHeight="300px"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400 opacity-30 z-20"></div>

          <GridContainer className="relative h-full">
            <GridCol
              span="A"
              className="relative h-full flex items-center pt-25"
            >
              <div className="px-8 w-full">
                <div className="text-[#FB3B22] font-bold text-base mb-3">
                  {steps[0].number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {steps[0].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {steps[0].description}
                </p>
              </div>
            </GridCol>

            <GridCol
              span="B"
              className="relative h-full flex items-center pt-25"
            >
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "20px solid transparent",
                  borderBottom: "20px solid transparent",
                  borderLeft: "20px solid #e5e7eb",
                  zIndex: 10,
                  marginTop: "50px",
                }}
              ></div>

              <div className="px-8 w-full relative z-20">
                <div className="text-[#FB3B22] font-bold text-base mb-3">
                  {steps[1].number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {steps[1].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {steps[1].description}
                </p>
              </div>
            </GridCol>

            <GridCol
              span="C"
              className="relative h-full flex items-center pt-25"
            >
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "20px solid transparent",
                  borderBottom: "20px solid transparent",
                  borderLeft: "20px solid #e5e7eb",
                  zIndex: 10,
                  marginTop: "50px",
                }}
              ></div>

              <div className="px-8 w-full relative z-20">
                <div className="text-[#FB3B22] font-bold text-base mb-3">
                  {steps[2].number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {steps[2].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {steps[2].description}
                </p>
              </div>
            </GridCol>

            <GridCol
              span="D"
              className="relative h-full flex items-center pt-25"
            >
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "20px solid transparent",
                  borderBottom: "20px solid transparent",
                  borderLeft: "20px solid #e5e7eb",
                  zIndex: 10,
                  marginTop: "50px",
                }}
              ></div>

              <div className="px-8 w-full relative z-20">
                <div className="text-[#FB3B22] font-bold text-base mb-3">
                  {steps[3].number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {steps[3].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {steps[3].description}
                </p>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-white"
          className="relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400 opacity-30 z-20"></div>

          <GridContainer>
            <GridCol span="A" className="h-[6vh] relative">
              <div
                className="absolute"
                style={{
                  backgroundImage: stripePattern,
                  backgroundSize: stripeSize,
                  zIndex: -1,
                  inset: "0.5px",
                }}
              ></div>
            </GridCol>
            <GridCol span="B" className="h-[6vh]">
              <div></div>
            </GridCol>
            <GridCol span="C" className="h-[6vh] relative">
              <div
                className="absolute"
                style={{
                  backgroundImage: stripePattern,
                  backgroundSize: stripeSize,
                  zIndex: -1,
                  inset: "0.5px",
                }}
              ></div>
            </GridCol>
            <GridCol span="D" className="h-[6vh]">
              <div></div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* Mobile Version */}
      <section className="lg:hidden bg-white">
        <div className="px-6 pt-12 pb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Built for Your Growth
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're launching your first eShop or scaling an established store, our platforms grow with you:
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <>
                  <div className="w-full h-px bg-gray-300"></div>
                  <div
                    style={{
                      position: "absolute",
                      left: "85%",
                      top: "1px",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "22px solid transparent",
                      borderRight: "22px solid transparent",
                      borderTop: "22px solid rgba(156, 163, 175, 0.3)",
                    }}
                  ></div>
                </>
              )}
              <div className="px-6 py-6">
                <div className="text-[#FB3B22] font-bold text-xl mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BuiltForGrowthSection;