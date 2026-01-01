import { GridSection, GridContainer, GridCol } from "../../components/grid";

const MixMatchSection = () => {
  return (
    <>
      {/* Desktop */}
      <GridSection
        desktopOnly={true}
        showLines={[true, true, true, true, true]}
        bgColor=""
        className="py-0 relative"
      >
        <GridContainer className="items-end">
          <GridCol span="AB" className="flex flex-col">
            <div className="h-20 bg-white"></div>

            <div
              className="relative flex items-center p-12 bg-white"
              style={{
                backgroundImage: "url(/images/mix-match.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "400px",
              }}
            >
              <div className="max-w-md">
                <h2 className="text-white text-5xl font-bold mb-4 leading-tight">
                  Mix, Match, and Extend
                </h2>
                <p className="text-white text-xl leading-relaxed">
                  Choose what fits. Combine what works. Grow without rebuilding.
                </p>
              </div>
            </div>
          </GridCol>
          <GridCol span="CD" className="flex flex-col bg-white">
            <div className="flex-1 px-12 py-12 flex flex-col justify-center">
              <p className="text-black text-xl mb-8 leading-relaxed">
                Our solutions aren't locked into one tech path. Instead, we
                combine technologies from this stack to create the right
                solution — tailored to your case, not someone else's.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-black mr-2 text-lg">•</span>
                  <span className="text-black text-lg">
                    Need custom workflows? Use Groovy + Play + Directus
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2 text-lg">•</span>
                  <span className="text-black text-lg">
                    Selling online? Combine Medusa.js with Elasticsearch and
                    Next.js
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2 text-lg">•</span>
                  <span className="text-black text-lg">
                    Scaling fast? Rely on stateless APIs, async jobs, and
                    horizontally scalable services
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="absolute h-px z-30"
              style={{
                backgroundColor: "rgb(156, 163, 175)",
                opacity: 0.3,
                bottom: "5.5rem",
                left: 0,
                right: "-100vw",
                width: "200vw",
              }}
            ></div>
            <div className="pl-12 h-20 flex items-center">
              <div className="relative overflow-hidden bg-[#2B7856] cursor-pointer w-full">
                <div className="flex items-center justify-between px-12 py-6">
                  <div className="flex flex-col">
                    <span className="text-[#B8D4C8] text-sm mb-1">
                      Start now
                    </span>
                    <span className="text-white text-xl">
                      Let's Build Your System Together
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
          </GridCol>
        </GridContainer>
        <GridContainer>
          <div
            className="absolute left-0 right-0 w-full h-px z-30"
            style={{
              backgroundColor: "rgb(156, 163, 175)",
              opacity: 0.3,
              bottom: "6.2rem",
            }}
          ></div>
          <GridCol span="AB" className="flex flex-col bg-white">
            <div
              className="h-25"
              style={{
                background: "#f5f5f5",
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 5px)",
              }}
            ></div>
          </GridCol>
          <GridCol span="CD" className="flex flex-col bg-white">
            <div className="h-25 bg-white"></div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile */}
      <section className="lg:hidden px-4 pt-6">
        <div
          className="relative min-h-80 flex items-center p-6 rounded-lg"
          style={{
            backgroundImage: "url(/images/mix-match.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
              Mix, Match, and Extend
            </h2>
            <p className="text-white text-xl leading-relaxed">
              Choose what fits. Combine what works. Grow without rebuilding.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6">
          <p className="text-black text-lg mb-6 leading-relaxed">
            Our solutions aren't locked into one tech path. Instead, we combine
            technologies from this stack to create the right solution tailored
            to your case, not someone else's.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-black mr-2 text-base">•</span>
              <span className="text-black text-base">
                Need custom workflows? Use Groovy + Play + Directus
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 text-base">•</span>
              <span className="text-black text-base">
                Selling online? Combine Medusa.js with Elasticsearch and Next.js
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 text-base">•</span>
              <span className="text-black text-base">
                Scaling fast? Rely on stateless APIs, async jobs, and
                horizontally scalable services
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MixMatchSection;
