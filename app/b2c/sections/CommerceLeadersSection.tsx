"use client";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const CommerceLeadersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/commerce1.png",
    "/commerce2.png",
    "/commerce3.png",
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const stripePattern =
    "repeating-linear-gradient(45deg, transparent, transparent 8px, #e5e5e5 10px, #e5e5e5 11px)";

  return (
    <>
      {/* Desktop Layout */}
      <GridSection
        showLines={[true, true, true, true, true]}
        className="py-20 bg-gray-50 relative"
        desktopOnly={true}
      >
        <div
          className="hidden lg:block absolute left-0 right-0 w-full h-px bg-gray-400 opacity-30"
          style={{ top: "85%" }}
        />

        <div
          className="hidden lg:block absolute left-0"
          style={{
            top: "85%",
            bottom: "-80px",
            width: "27.78%",
            background: stripePattern,
            zIndex: 1,
          }}
        />

        <GridContainer className="items-center relative">
          <div style={{ zIndex: 2 }} className="contents">
            <GridCol
              span="AB"
              className="pr-16"
              style={{
                paddingTop: "2rem",
                paddingBottom: "4rem",
                paddingLeft: "3rem",
              }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                Trusted by Commerce Leaders
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From retailers to global B2B brands, our
                <br />
                solutions scale with speed, security,
                <br />
                and flexibility.
              </p>
            </GridCol>

            <GridCol
              span="CD"
              className="relative h-150"
              style={{ overflow: "visible", padding: 0, margin: 0 }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 h-full mt-5 mb-10"
                style={{ width: "150%", overflow: "visible" }}
              >
                <div
                  className="relative h-full flex items-center"
                  style={{ width: "100%", paddingLeft: "2%" }}
                >
                  {images.map((img, index) => {
                    const position =
                      (index - activeIndex + images.length) % images.length;

                    return (
                      <div
                        key={index}
                        className="absolute transition-all duration-700 ease-out"
                        style={{
                          left:
                            position === 0
                              ? "-6%"
                              : position === 1
                              ? "30%"
                              : position === 2
                              ? "60%"
                              : "110%",
                          opacity:
                            position === 0
                              ? 1
                              : position === 1 || position === 2
                              ? 0.4
                              : 0,
                          transform: `scale(${position === 0 ? 1 : 0.95})`,
                          zIndex:
                            position === 0
                              ? 30
                              : position === 1
                              ? 20
                              : position === 2
                              ? 10
                              : 0,
                          width: "32%",
                          pointerEvents:
                            position === 0 ? "auto" : "none",
                        }}
                      >
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                          <img
                            src={img}
                            alt={`Commerce platform ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    );
                  })}

                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 transform -translate-y-1/2 z-40 flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label="Previous slide"
                    style={{ left: "-11%" }}
                  >
                    <ArrowLeft
                      className="w-10 h-10 text-gray-300"
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </div>
            </GridCol>
          </div>
        </GridContainer>
      </GridSection>

      {/* Mobile Layout */}
      <section className="lg:hidden px-4 py-8 bg-gray-50 overflow-x-hidden" >
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Trusted by Commerce Leaders
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From retailers to global B2B brands, our solutions scale with speed,
            security, and flexibility.
          </p>
        </div>

        <div className="relative overflow-x-hidden" style={{ height: "350px" }}>
          <div className="relative h-full">
            <div className="relative w-full h-full flex items-center overflow-visible">
              {images.map((img, index) => {
                const nextIndex = (activeIndex + 1) % images.length;
                const isActive = index === activeIndex;
                const isPeeking = index === nextIndex;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out"
                    style={{
                      left: isActive ? "0%" : isPeeking ? "68%" : "100%",
                      opacity: isActive || isPeeking ? 1 : 0,
                      zIndex: isActive ? 20 : isPeeking ? 10 : 0,
                      transform:"1.05",
                      width: "68%",
                      pointerEvents: isActive ? "auto" : "none",
                      visibility:
                        isActive || isPeeking ? "visible" : "hidden",
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                      <img
                        src={img}
                        alt={`Commerce platform ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-8 z-30">
              <button
                onClick={prevSlide}
                className="hover:opacity-70 transition-opacity"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-7 h-7 text-black" strokeWidth={1.5} />
              </button>
              <button
                onClick={nextSlide}
                className="hover:opacity-70 transition-opacity"
                aria-label="Next slide"
              >
                <ArrowLeft
                  className="w-7 h-7 text-black rotate-180"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommerceLeadersSection;
