"use client";

import React, { useRef, useEffect, useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const StartBuildingSmarterSection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 4px)";
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [buttonTopPosition, setButtonTopPosition] = useState("50%");
  const [buttonHeight, setButtonHeight] = useState("80px");

  useEffect(() => {
    const updateButtonPosition = () => {
      if (sectionRef.current && buttonRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const buttonTopRelative = buttonRect.top - sectionRect.top;
        const percentagePosition =
          (buttonTopRelative / sectionRect.height) * 100;
        setButtonTopPosition(`${percentagePosition}%`);
        setButtonHeight(`${buttonRect.height}px`);
      }
    };

    updateButtonPosition();
    window.addEventListener("resize", updateButtonPosition);
    setTimeout(updateButtonPosition, 100);
    return () => window.removeEventListener("resize", updateButtonPosition);
  }, []);

  return (
    <>
      {/* Desktop Grid Layout */}
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        className="relative"
        desktopOnly={true}
      >
        <div ref={sectionRef} className="relative w-full h-full">
          <div
            className="hidden lg:block absolute left-0"
            style={{
              width: "27.78%",
              background: stripePattern,
              top: "auto",
              bottom: 0,
              height: `calc(100% - ${buttonTopPosition})`,
              zIndex: 1,
            }}
          />

          <div
            className="hidden lg:block absolute right-0"
            style={{
              width: "27.78%",
              background: stripePattern,
              top: 0,
              height: buttonTopPosition,
              zIndex: 1,
            }}
          />

          <div className="relative z-10 flex flex-col min-h-[50vh]">
            <div className="flex-1 flex items-center pt-12 pb-16">
              <GridContainer className="w-full">
                <GridCol span="A" className="h-full">
                  <div />
                </GridCol>

                <GridCol span="BC" className="flex items-center">
                  <div className="px-12">
                    <h2 className="text-white text-5xl font-bold mb-6 leading-tight">
                      Start Building Smarter
                    </h2>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                      Whether you're modernizing internal systems or launching
                      new platforms, fusion gives you the foundation to move
                      faster, integrate deeper, and scale without limits.
                    </p>
                  </div>
                </GridCol>

                <GridCol span="D" className="h-full">
                  <div />
                </GridCol>
              </GridContainer>
            </div>

            <div className="relative" style={{ paddingBottom: "80px" }}>
              <div className="flex items-center justify-center">
                <div
                  ref={buttonRef}
                  style={{
                    width: "44.44%",
                    marginLeft: "0",
                  }}
                >
                  <div
                    className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
                    style={{
                      top: "0",
                      zIndex: 6,
                    }}
                  />

                  <div className="relative overflow-hidden bg-[#2B7856] cursor-pointer">
                    <div className="flex items-center justify-between px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-[#B8D4C8] text-sm mb-1">
                          Need more info?
                        </span>
                        <span className="text-white text-xl">
                          Talk to Our Engineers
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

                  <div
                    className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
                    style={{
                      top: buttonHeight,
                      zIndex: 6,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridSection>

      {/* Mobile Layout */}
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

export default StartBuildingSmarterSection;
