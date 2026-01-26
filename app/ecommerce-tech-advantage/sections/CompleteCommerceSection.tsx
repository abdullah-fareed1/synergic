import { GridSection, GridContainer, GridCol } from "../../components/grid";

const CompleteCommerceSection = () => {
  const stripePattern =
    "linear-gradient(45deg, #d9d9d9 8.33%, transparent 8.33%, transparent 50%, #d9d9d9 50%, #d9d9d9 58.33%, transparent 58.33%, transparent 100%)";
  const stripeSize = "5.66px 5.66px";

  const stripePatternWide =
    "linear-gradient(45deg, #d9d9d9 4%, transparent 4%, transparent 50%, #d9d9d9 50%, #d9d9d9 54%, transparent 54%, transparent 100%)";
  const stripeSizeWide = "12px 12px";

  const paddingHeight = 60;

  return (
    <>
      <GridSection
        showLines={[true, true, false, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="relative w-full">
          <div
            className="relative w-full"
            style={{ height: `${paddingHeight}px` }}
          >
            <div
              className="absolute"
              style={{
                left: "27.78%",
                width: "44.44%",
                height: "100%",
                backgroundImage: stripePatternWide,
                backgroundSize: stripeSizeWide,
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ backgroundColor: "#d1d1d1" }}
            />
          </div>

          <div className="relative">
            <div
              className="absolute top-0 bottom-0"
              style={{
                left: "72.22%",
                width: "27.78%",
                backgroundImage: stripePattern,
                backgroundSize: stripeSize,
              }}
            />

            <GridContainer className="relative z-10">
              <GridCol span="A" className="py-16">
                <></>
              </GridCol>

              <GridCol span="BC" className="py-16">
                <div className="px-8">
                  <h2
                    className="text-4xl font-extrabold mb-4 leading-tight"
                    style={{ color: "var(--brand-black)" }}
                  >
                    Complete Commerce Solutions
                  </h2>
                  <p
                    className="text-xl mb-6 leading-relaxed"
                    style={{ color: "var(--brand-black)" }}
                  >
                    One tech stack, endless possibilities — all connected, scalable,
                    and built to adapt as your business evolves.
                  </p>
                  <p
                    className="text-base leading-relaxed max-w-xl"
                    style={{ color: "rgba(0, 0, 0, 0.55)" }}
                  >
                    With our modular architecture, the same technology foundation powers everything
                    from B2B platforms and digital marketplaces to PIM, OMS, ERP integrations, and
                    even AI-driven discovery.
                  </p>
                </div>
              </GridCol>

              <GridCol span="D" className="py-16">
                <></>
              </GridCol>
            </GridContainer>
          </div>

          <div className="relative">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ backgroundColor: "#d1d1d1" }}
            />

            <div
              className="relative"
              style={{
                marginLeft: "27.78%",
                width: "44.44%",
              }}
            >
              <div
                className="cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2B7856" }}
              >
                <div className="flex items-center justify-between px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-[#B8D4C8] text-sm mb-1">
                      Learn more ?
                    </span>
                    <span className="text-white text-xl font-medium">
                      View All Commerce Solutions
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shrink-0 ml-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ backgroundColor: "#d1d1d1" }}
            />
          </div>

          <div
            className="relative w-full"
            style={{ height: `${paddingHeight}px` }}
          >
            <div
              className="absolute left-0 top-0"
              style={{
                width: "27.78%",
                height: "100%",
                backgroundImage: stripePattern,
                backgroundSize: stripeSize,
              }}
            />
          </div>
        </div>
      </GridSection>

      <section className="lg:hidden bg-[#111D2B] px-6 pt-12 pb-0">
        <h2 className="text-white text-3xl font-bold mb-4">
          Start Building Smarter
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Whether you're modernizing internal systems or launching new
          platforms, fusion gives you the foundation to move faster, integrate
          deeper, and scale without limits.
        </p>

        <div className="relative overflow-hidden bg-[#2B7856] cursor-pointer -mx-6">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex flex-col">
              <span className="text-[#B8D4C8] text-xs mb-1">
                Need more info?
              </span>
              <span className="text-white text-lg">Talk to Our Engineers</span>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shrink-0 ml-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompleteCommerceSection;