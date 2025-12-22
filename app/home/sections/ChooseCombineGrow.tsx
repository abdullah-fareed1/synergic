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
    <section className="bg-slate-900 text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              {/* Mobile Accordion Layout */}
              <div className="md:hidden">
                {/* Mobile Header */}
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
    
                {/* Choose Accordion */}
                <div className="border-t border-gray-700">
                  <button
                    onClick={() => toggle("choose")}
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <div>
                      <div
                        className="font-bold text-sm mb-1"
                        style={{ color: "var(--brand-red)" }}
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
                    <div className="pb-6 pr-8">
                      <p className="text-gray-300 leading-relaxed">
                        You can start with what you need. Identify and select the
                        solutions that best drive your strategic goals—whether
                        that's launching a B2C eshop, leveraging AI-powered search,
                        or automating key workflows—for an ideal fit from day one.
                      </p>
                    </div>
                  )}
                </div>
    
                {/* Combine Accordion */}
                <div className="border-t border-gray-700">
                  <button
                    onClick={() => toggle("combine")}
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <div>
                      <div
                        className="font-bold text-sm mb-1"
                        style={{ color: "var(--brand-red)" }}
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
                    <div className="pb-6 pr-8">
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
                  )}
                </div>
    
                {/* Grow Accordion */}
                <div className="border-t border-gray-700">
                  <button
                    onClick={() => toggle("grow")}
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <div>
                      <div
                        className="font-bold text-sm mb-1"
                        style={{ color: "var(--brand-red)" }}
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
                    <div className="pb-6 pr-8">
                      <p className="text-gray-300 leading-relaxed">
                        Expand over time with secure, scalable solutions tailored to
                        your business. Unlock new revenue streams and enter new
                        markets without disruption—add new features or services
                        whenever you're ready.
                      </p>
                    </div>
                  )}
                </div>
    
                {/* Mobile CTA Button */}
                <div className="pt-8">
                  <button
                    className="w-full text-white px-6 py-5 rounded flex items-center justify-between group transition"
                    style={{ backgroundColor: "var(--brand-red)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#E63520")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--brand-red)")
                    }
                  >
                    <div className="text-left">
                      <div className="text-xs mb-0.5">Start now</div>
                      <div className="font-bold text-base">
                        Let's Build Your System Together
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-full p-3 ml-4 shrink-0">
                      <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition" />
                    </div>
                  </button>
                </div>
              </div>
    
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-10">
                {/* Left Column - Header + CTA (spans 5 columns) */}
                <div className="col-span-5 flex flex-col">
                  {/* Header */}
                  <div className="mb-auto">
                    <p className="text-gray-400 text-xs tracking-widest mb-3 uppercase">
                      CHOOSE. COMBINE. GROW.
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      Solutions that fit your strategy
                    </h2>
                    <p className="text-gray-300 text-base lg:text-lg mb-5 leading-relaxed">
                      Every business is different. That's why we don't just offer
                      platforms — we design systems that match how you sell,
                      operate, and grow.
                    </p>
                    <p className="text-gray-300 text-base lg:text-lg mb-12 leading-relaxed">
                      Our modular, API-driven framework empowers you to create,
                      customize, and expand without constraints.
                    </p>
                  </div>
    
                  {/* CTA Button */}
                  <button
                    className="w-full text-white px-6 py-5 rounded flex items-center justify-between group transition"
                    style={{ backgroundColor: "#FF4D3D" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#E63520")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#FF4D3D")
                    }
                  >
                    <div className="text-left">
                      <div className="text-xs mb-1">Start now</div>
                      <div className="font-bold text-base leading-tight">
                        Let's Build Your System Together
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-full p-3 ml-4 shrink-0">
                      <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition" />
                    </div>
                  </button>
                </div>
    
                {/* Right Side - 2x2 Grid (spans 7 columns) */}
                <div className="col-span-7 grid grid-cols-2 gap-8 lg:gap-10">
                  {/* Choose - Top Left */}
                  <div className="col-span-1 border-l border-gray-700 pl-6 lg:pl-8">
                    <div
                      className="font-bold mb-2 text-sm"
                      style={{ color: "var(--brand-red)" }}
                    >
                      01
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Choose</h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      You can start with what you need. Identify and select the
                      solutions that best drive your strategic goals—whether that's
                      launching a B2C eshop, leveraging AI-powered search, or
                      automating key workflows—for an ideal fit from day one.
                    </p>
                  </div>
    
                  {/* Combine - Top Right */}
                  <div className="col-span-1 border-l border-gray-700 pl-6 lg:pl-8">
                    <div
                      className="font-bold mb-2 text-sm"
                      style={{ color: "var(--brand-red)" }}
                    >
                      02
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Combine</h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      Seamlessly integrate your chosen modules into a single,
                      cohesive platform that breaks down silos, automates processes,
                      and delivers a unified customer experience.
                    </p>
                  </div>
    
                  {/* Grow - Bottom Left */}
                  <div className="col-span-1 border-l border-t border-gray-700 pl-6 lg:pl-8 pt-8">
                    <div
                      className="font-bold mb-2 text-sm"
                      style={{ color: "var(--brand-red)" }}
                    >
                      03
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Grow</h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      Expand over time with secure, scalable solutions tailored to
                      your business. Unlock new revenue streams and enter new
                      markets without disruption—add new features or services
                      whenever you're ready.
                    </p>
                  </div>
    
                  {/* Checklist - Bottom Right */}
                  <div className="col-span-1 border-l border-t border-gray-700 pl-6 lg:pl-8 pt-8 flex items-center">
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
          </section>
  );
}


