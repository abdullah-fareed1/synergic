import React from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const ReadyToBuildSection = () => {
  const stripePatternGreen =
    "linear-gradient(45deg, rgba(217, 217, 217, 0.2) 8.33%, transparent 8.33%, transparent 50%, rgba(217, 217, 217, 0.2) 50%, rgba(217, 217, 217, 0.2) 58.33%, transparent 58.33%, transparent 100%)";
  
  const stripePatternWhite =
    "linear-gradient(45deg, #d9d9d9 8.33%, #ffffff 8.33%, #ffffff 50%, #d9d9d9 50%, #d9d9d9 58.33%, #ffffff 58.33%, #ffffff 100%)";
  
  const stripeSize = "6.00px 6.00px";

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <GridSection
          bgColor="bg-transparent"
          showLines={[true, true, true, true, true]}
        >
          <div
            className="absolute left-0 w-[5.56%] top-0 bottom-0 bg-[#2B7856]"
            style={{ zIndex: 0 }}
          />
          
          <div
            className="absolute left-0 w-[5.56%] top-0"
            style={{ 
              zIndex: 1,
              height: '80%',
              backgroundImage: stripePatternGreen,
              backgroundSize: stripeSize,
              borderBottom: '1px solid rgba(156, 163, 175, 0.3)'
            }}
          />
          
          <div
            className="absolute right-[5.56%] w-[22.22%] top-0 bottom-0 bg-white"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute right-0 w-[5.56%] top-0 bottom-0 bg-white"
            style={{ 
              zIndex: 0,
              backgroundImage: stripePatternWhite,
              backgroundSize: stripeSize,
            }}
          />

          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />

          <GridContainer>
            <GridCol
              span="AB"
              className="px-12 py-16 text-white flex flex-col justify-center min-h-100 relative"
              style={{ zIndex: 5 }}
            >
              <div className="absolute inset-0 bg-[#2B7856]" style={{ zIndex: -1 }} />
              
              <div 
                className="absolute inset-y-0 left-0 w-1/2"
                style={{ 
                  zIndex: -1,
                  height: '80%',
                  backgroundImage: stripePatternGreen,
                  backgroundSize: stripeSize,
                  borderBottom: '1px solid rgba(156, 163, 175, 0.3)'
                }}
              />
              
              <h2 className="text-4xl font-extrabold mb-6 relative z-10">
                Ready to Build Your eShop?
              </h2>
              <p className="text-2xl font-normal mb-8 relative z-10">
                Stop losing sales to slow, outdated platforms.
              </p>
              <p className="text-lg mb-4 opacity-90 relative z-10">
                Give your customers the fast, modern shopping experience they<br/>
                expect — while keeping more of your revenue.
              </p>
              <p className="text-lg opacity-90 relative z-10">
                Build on technology designed for retail growth — without<br/>
                transaction fees or platform limits.
              </p>
            </GridCol>

            <GridCol
              span="CD"
              className="px-12 py-16 flex flex-col justify-center min-h-100 relative"
              style={{ zIndex: 5 }}
            >
              <div className="absolute inset-0 bg-white" style={{ zIndex: -1 }} />
              <div 
                className="absolute inset-y-0 right-0 w-1/2"
                style={{ 
                  zIndex: -1,
                  backgroundImage: stripePatternWhite,
                  backgroundSize: stripeSize,
                }}
              />
              <h2 className="text-4xl font-extrabold mb-6 text-black relative z-10">
                Complete Commerce Solutions
              </h2>
              <p className="text-2xl font-normal mb-8 text-black relative z-10">
                B2C is just the beginning.
              </p>
              <p className="text-lg mb-4 text-gray-700 relative z-10">
                With our modular platform, you can extend your eShop into B2B
                portals, digital<br/> marketplaces, or add enterprise-grade PIM, OMS,
                and ERP integrations.
              </p>
              <p className="text-lg text-gray-700 relative z-10">
                Even AI-powered product discovery is on the roadmap. One
                flexible foundation — endless<br/> ways to grow your business.
              </p>
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          bgColor="bg-transparent"
          showLines={[true, false, true, false, true]}
          className="relative"
        >
          <div
            className="absolute top-0 left-0 right-0 h-px bg-gray-400 opacity-30"
            style={{ zIndex: 20 }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-400 opacity-30"
            style={{ zIndex: 20 }}
          />
          <div
            className="absolute left-0 w-[5.56%] top-0 bottom-0 bg-[#2B7856]"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute right-[5.56%] w-[22.22%] top-0 bottom-0 bg-white"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute right-0 w-[5.56%] top-0 bottom-0 bg-white"
            style={{ zIndex: 0 }}
          />

          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />

          <GridContainer>
            <GridCol span="AB" className="relative" style={{ zIndex: 5 }}>
              <div className="absolute inset-0 bg-[#2B7856]" style={{ zIndex: -1 }} />
              <div
                className="absolute inset-0 bg-white opacity-5"
                style={{ zIndex: 0 }}
              />

              <button className="relative z-10 w-full flex items-center justify-between px-12 py-6 text-white">
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm opacity-80 mb-2">
                    Calculate Your ROI in 5 Minutes
                  </span>
                  <span className="text-xl font-normal">
                    See Live Demo for Your Industry
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shrink-0 ml-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </GridCol>

            <GridCol span="CD" className="px-12 py-6 relative" style={{ zIndex: 5 }}>
              <div className="absolute inset-0 bg-white" style={{ zIndex: -1 }} />
              <button className="relative z-10 w-full flex items-center justify-between text-black">
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm text-gray-600 mb-2">
                    Need more info?
                  </span>
                  <span className="text-xl font-normal">
                    View All Commerce Solutions
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center shrink-0 ml-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          bgColor="bg-transparent"
          showLines={[true, true, true, true, true]}
          className="h-20 relative"
        >
          <div
            className="absolute left-0 w-[50%] top-0 bottom-0 bg-[#2B7856]"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute right-0 w-[50%] top-0 bottom-0 bg-white"
            style={{ zIndex: 0 }}
          />

          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />
          <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-15" style={{ zIndex: 100 }} />

          <GridContainer className="h-full">
            <GridCol span="A" className="h-20 relative" style={{ zIndex: 5 }}>
              <div className="h-full" />
            </GridCol>
            <GridCol
              span="B"
              className="h-20 relative"
              style={{ 
                backgroundImage: stripePatternGreen,
                backgroundSize: stripeSize,
                zIndex: 5,
              }}
            >
              <div className="h-full" />
            </GridCol>
            <GridCol
              span="C"
              className="h-20 relative"
              style={{
                zIndex: 5,
              }}
            >
              <div className="h-full" />
            </GridCol>
            <GridCol span="D" className="h-20 relative" style={{ zIndex: 5 }}>
              <div className="h-full" />
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* Mobile Layout */}
      <section className="lg:hidden">
        <div className="bg-[#2B7856] text-white px-6 py-12">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Build Your eShop?
          </h2>
          <p className="text-xl font-normal mb-6">
            Stop losing sales to slow, outdated platforms.
          </p>
          <p className="text-sm mb-3 opacity-90">
            Give your customers the fast, modern shopping experience they expect
            — while keeping more of your revenue.
          </p>
          <p className="text-sm opacity-90">
            Build on technology designed for retail growth — without transaction
            fees or platform limits.
          </p>
        </div>
        <button className="w-full bg-[#418667] text-white px-6 py-6 flex items-center justify-between">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs opacity-80 mb-1">
              Calculate Your ROI in 5 Minutes
            </span>
            <span className="text-base font-normal">
              See Live Demo for Your Industry
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0 ml-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>

        <div className="bg-white px-6 py-12">
          <h2 className="text-3xl font-extrabold mb-4 text-black">
            Complete Commerce Solutions
          </h2>
          <p className="text-xl font-normal mb-6 text-black">
            B2C is just the beginning.
          </p>
          <p className="text-sm mb-3 text-gray-700">
            With our modular platform, you can extend your eShop into B2B
            portals, digital marketplaces, or add enterprise-grade PIM, OMS, and
            ERP integrations.
          </p>
          <p className="text-sm text-gray-700">
            Even AI-powered product discovery is on the roadmap. One flexible
            foundation — endless ways to grow your business.
          </p>
        </div>

        <div className="border-t border-b border-gray-400/30">
          <button className="w-full bg-white text-black px-6 py-6 flex items-center justify-between border-t border-gray-300">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs text-gray-600 mb-1">
                Need more info?
              </span>
              <span className="text-base font-normal">
                View All Commerce Solutions
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shrink-0 ml-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default ReadyToBuildSection;