"use client";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

const CommerceLeadersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineTop, setLineTop] = useState("85%");
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const images = [
    "images/commerce1.png",
    "images/commerce2.png",
    "images/commerce3.png",
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

  useEffect(() => {
    const updateLinePosition = () => {
      if (lineRef.current && sectionRef.current) {
        const lineRect = lineRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const topOffset = lineRect.top - sectionRect.top;
        setLineTop(`${topOffset}px`);
      }
    };

    updateLinePosition();
    window.addEventListener("resize", updateLinePosition);
    return () => window.removeEventListener("resize", updateLinePosition);
  }, []);

  return (
    <>
      <div ref={sectionRef} className="hidden lg:block relative bg-gray-50">
        <GridSection
          showLines={[true, true, true, true, true]}
          className="py-24 bg-transparent relative"
          desktopOnly={true}
        >
          <div
            ref={lineRef}
            className="absolute left-0 right-0 w-full h-px bg-gray-400 opacity-30"
            style={{ top: "85%" }}
          />

          <GridContainer className="items-center relative">
            <div style={{ zIndex: 2 }} className="contents">
              <GridCol
                span="AB"
                className="pr-16"
                style={{
                  paddingTop: "3rem",
                  paddingBottom: "5rem",
                  paddingLeft: "3rem",
                }}
              >
                <h2 className="text-4xl font-extrabold text-[#111D2B] mb-8 leading-tight tracking-tight">
                  Trusted by Commerce Leaders
                </h2>
                <p className="text-2xl text-black leading-relaxed" style={{ lineHeight: "1.8" }}>
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
                  className="absolute left-0 top-0 bottom-0 h-full"
                  style={{ width: "150%", overflow: "visible" }}
                >
                  <div
                    className="relative h-full flex items-center"
                    style={{ width: "100%", paddingLeft: "2%" }}
                  >
                    {images.map((img, index) => {
                      const position =
                        (index - activeIndex + images.length) % images.length;

                      const mainCardWidth = 32;
                      const secondaryCardWidth = 31;
                      const gap = 0.5;

                      return (
                        <div
                          key={index}
                          className="absolute transition-all duration-700 ease-out"
                          style={{
                            left:
                              position === 0
                                ? "-6%"
                                : position === 1
                                ? `${-6 + mainCardWidth + gap}%`
                                : position === 2
                                ? `${-6 + mainCardWidth + gap + secondaryCardWidth + gap}%`
                                : "110%",
                            opacity:
                              position === 0
                                ? 1
                                : position === 1
                                ? 0.35
                                : position === 2
                                ? 0.25
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
                            width: position === 0 ? `${mainCardWidth}%` : `${secondaryCardWidth}%`,
                            pointerEvents: position === 0 ? "auto" : "none",
                          }}
                        >
                          <div
                            className="bg-white rounded-lg overflow-hidden"
                            style={{
                              boxShadow:
                                position === 0
                                  ? "0 10px 40px -10px rgba(0, 0, 0, 0.15)"
                                  : "0 4px 20px -5px rgba(0, 0, 0, 0.08)",
                            }}
                          >
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
                        className="w-10 h-10 text-gray-300 cursor-pointer"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              </GridCol>
            </div>
          </GridContainer>
        </GridSection>
        
        <div
          className="absolute left-0 w-[27.78%]"
          style={{
            top: lineTop,
            bottom: 0,
            zIndex: 1,
            backgroundImage: 'linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)',
            backgroundSize: '6.00px 6.00px',
          }}
        />
      </div>

      <section className="lg:hidden px-4 py-12 bg-gray-50 overflow-x-hidden">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-[#111D2B] mb-5 leading-tight tracking-tight">
            Trusted by Commerce Leaders
          </h2>
          <p className="text-xl text-black leading-relaxed" style={{ lineHeight: "1.75" }}>
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
                      left: isActive ? "0%" : isPeeking ? "61%" : "100%",
                      opacity: isActive ? 1 : isPeeking ? 0.35 : 0,
                      zIndex: isActive ? 20 : isPeeking ? 10 : 0,
                      transform: isActive ? "scale(1)" : "scale(0.95)",
                      width: isActive ? "60%" : "58%",
                      pointerEvents: isActive ? "auto" : "none",
                      visibility: isActive || isPeeking ? "visible" : "hidden",
                    }}
                  >
                    <div
                      className="bg-white rounded-xl overflow-hidden"
                      style={{
                        boxShadow: isActive
                          ? "0 10px 40px -10px rgba(0, 0, 0, 0.15)"
                          : "0 4px 20px -5px rgba(0, 0, 0, 0.08)",
                      }}
                    >
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