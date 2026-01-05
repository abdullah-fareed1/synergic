"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check, ArrowRight } from "lucide-react";

type Section = "choose" | "combine" | "grow";

export default function ChooseCombineGrow() {
  const [openSection, setOpenSection] = useState<Section | null>(null);

  const toggle = (section: Section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="bg-slate-900 text-white relative overflow-hidden">
      <div
        className="hidden md:block absolute pointer-events-none z-0"
        style={{
          left: "5.56%",
          width: "44.44%",
          bottom: "0",
          height: "150px",
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(100, 116, 139, 0.1) 10px,
            rgba(100, 116, 139, 0.1) 11px
          )`,
        }}
      />
      
      <div
        className="hidden md:block absolute pointer-events-none z-0"
        style={{
          left: "72.22%",
          right: "0",
          top: "50%",
          bottom: "0",
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(100, 116, 139, 0.1) 10px,
            rgba(100, 116, 139, 0.1) 11px
          )`,
        }}
      />
      
      <div className="max-w-full mx-auto relative py-16 md:py-20">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        </div>

        <div className="max-w-full mx-auto px-6 md:px-0 relative z-10">
          {/* Mobile Layout */}
          <div className="md:hidden relative">
            <div className="mb-12">
              <p className="text-gray-400 text-xs tracking-widest mb-3 uppercase">
                CHOOSE. COMBINE. GROW.
              </p>
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                Solutions that fit your strategy
              </h2>
              <div>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  Every business is different. That's why we don't just offer
                  platforms — we design systems that match how you sell,
                  operate, and grow.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Our modular, API-driven framework empowers you to create,
                  customize, and expand without constraints.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 w-px bg-gray-400 opacity-30" style={{ bottom: '-2rem' }} />
              <div className="absolute right-0 top-0 w-px bg-gray-400 opacity-30" style={{ bottom: '-2rem' }} />
              
              <div className="border-t border-gray-400 border-opacity-30">
                <button
                  onClick={() => toggle("choose")}
                  className="w-full py-6 px-6 flex items-center justify-between text-left"
                >
                  <div>
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: "#FF4D3D" }}
                    >
                      01
                    </div>
                    <h3 className="text-2xl font-bold">Choose</h3>
                  </div>
                  {openSection === "choose" ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {openSection === "choose" && (
                  <>
                    <div className="border-t border-gray-400 border-opacity-30" />
                    <div className="pb-6 pt-6 px-6 pr-8">
                      <p className="text-gray-300 leading-relaxed">
                        You can start with what you need. Identify and select the
                        solutions that best drive your strategic goals—whether
                        that's launching a B2C eshop, leveraging AI-powered search,
                        or automating key workflows—for an ideal fit from day one.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-gray-400 border-opacity-30">
                <button
                  onClick={() => toggle("combine")}
                  className="w-full py-6 px-6 flex items-center justify-between text-left"
                >
                  <div>
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: "#FF4D3D" }}
                    >
                      02
                    </div>
                    <h3 className="text-2xl font-bold">Combine</h3>
                  </div>
                  {openSection === "combine" ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {openSection === "combine" && (
                  <>
                    <div className="border-t border-gray-400 border-opacity-30" />
                    <div className="pb-6 pt-6 px-6 pr-8">
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Seamlessly integrate your chosen modules into a single,
                        cohesive platform that breaks down silos, automates
                        processes, and delivers a unified customer experience.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">
                            Combine a B2C shop with a product catalog
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">
                            Add workflows or integrations with your ERP
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">
                            Launch mobile apps or automate your services
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">
                            Add AI, notifications, or subscriptions later
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">
                            And whatever you can imagine next
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-gray-400 border-opacity-30">
                <button
                  onClick={() => toggle("grow")}
                  className="w-full py-6 px-6 flex items-center justify-between text-left"
                >
                  <div>
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: "#FF4D3D" }}
                    >
                      03
                    </div>
                    <h3 className="text-2xl font-bold">Grow</h3>
                  </div>
                  {openSection === "grow" ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {openSection === "grow" && (
                  <>
                    <div className="border-t border-gray-400 opacity-30" />
                    <div className="pb-6 pt-6 px-6 pr-8">
                      <p className="text-gray-300 leading-relaxed">
                        Expand over time with secure, scalable solutions tailored
                        to your business. Unlock new revenue streams and enter new
                        markets without disruption—add new features or services
                        whenever you're ready.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="pt-8">
              <button
                className="w-full text-white px-6 py-5 flex items-center justify-between transition"
                style={{ backgroundColor: "#FF4D3D" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E63520")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FF4D3D")
                }
              >
                <div className="text-left">
                  <div className="text-base mb-0.5">Start now</div>
                  <div className="text-base">
                    Let's Build Your System Together
                  </div>
                </div>

                <div
                  className="rounded-full p-3 ml-4 shrink-0 border border-white"
                  style={{ backgroundColor: "#FF4D3D" }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="flex h-full">
              <div
                className="flex flex-col justify-between relative"
                style={{ width: "50%" }}
              >
                <div className="pl-[16.67%] pr-[11.11%] py-12">
                  <p className="text-gray-400 font-extrabold text-sm tracking-widest mb-4 uppercase">
                    CHOOSE. COMBINE. GROW.
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                    Solutions that fit your strategy
                  </h2>
                  <p className="text-gray-300 text-lg lg:text-2xl mb-5 leading-relaxed">
                    Every business is different. That's why we don't just<br/> offer
                    platforms — we design systems that match<br/> how you sell,
                    operate, and grow.
                  </p>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    Our modular, API-driven framework empowers you to create,
                    customize, and expand without constraints.
                  </p>
                </div>

                <div className="pl-[11.11%] relative z-20">
                  <button
                    className="w-full text-white px-8 py-6 flex items-center justify-between transition"
                    style={{ backgroundColor: "#FF4D3D" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#E63520")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#FF4D3D")
                    }
                  >
                    <div className="text-left">
                      <div className="text-lg mb-1">Start now</div>
                      <div className="text-lg font-semibold leading-tight">
                        Let's Build Your System Together
                      </div>
                    </div>

                    <div
                      className="rounded-full p-3 ml-4 shrink-0 border border-white"
                      style={{ backgroundColor: "#FF4D3D" }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative" style={{ width: "50%" }}>
                <div
                  className="absolute left-0 top-1/2 h-px bg-gray-400 opacity-30 z-10"
                  style={{ right: "11.11%" }}
                />

                <div
                  className="grid grid-cols-2 grid-rows-2 h-full relative z-10"
                  style={{ paddingRight: "11.11%" }}
                >
                  <div className="px-8 py-12 flex flex-col justify-center">
                    <div
                      className="font-bold text-sm"
                      style={{ color: "#FF4D3D" }}
                    >
                      01
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Choose
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      You can start with what you need. Identify and select the
                      solutions that best drive your strategic goals—whether
                      that's launching a B2C eshop, leveraging AI-powered
                      search, or automating key workflows—for an ideal fit from
                      day one.
                    </p>
                  </div>
                  <div className="px-8 py-12 flex flex-col justify-center">
                    <div
                      className="font-bold text-sm"
                      style={{ color: "#FF4D3D" }}
                    >
                      02
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Combine
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      Seamlessly integrate your chosen modules into a single,
                      cohesive platform that breaks down silos, automates
                      processes, and delivers a unified customer experience.
                    </p>
                  </div>
                  <div className="px-8 py-12 flex flex-col justify-center">
                    <div
                      className="font-bold text-sm"
                      style={{ color: "#FF4D3D" }}
                    >
                      03
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Grow
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      Expand over time with secure, scalable solutions tailored
                      to your business. Unlock new revenue streams and enter new
                      markets without disruption—add new features or services
                      whenever you're ready.
                    </p>
                  </div>

                  <div className="px-8 py-12 flex items-center">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          Combine a B2C shop with a product catalog
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          Add workflows or integrations with your ERP
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          Launch mobile apps or automate your services
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          Add AI, notifications, or subscriptions later
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          And whatever you can imagine next
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}