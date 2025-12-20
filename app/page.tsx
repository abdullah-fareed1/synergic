"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
  TrendingUp,
  Package,
  Lightbulb,
  Clock,
  Plug,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type Section = "choose" | "combine" | "grow";

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("enterprise");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: Section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero & Nav Start*/}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/heroimage.png')",
            backgroundPosition: "center center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Navigation Header */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/synergic-logo.svg"
              alt="Synergic Intelligent Systems"
              className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Get in Touch + Menu Button */}
          <div className="flex items-center gap-4">
            {/* Get in Touch - Hidden on small screens */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-white text-sm font-medium tracking-wide uppercase">
                Get in Touch
              </span>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-10 transition-all cursor-pointer"
                style={{
                  borderWidth: "2px",
                  borderColor: "var(--brand-red)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(251, 59, 34, 0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: "var(--brand-red)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* Menu Button - Visible on all screens */}
            <button
              className="relative flex flex-col items-center justify-center p-0 hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ width: "72px", height: "56px" }}
            >
              {/* Semi-transparent background */}
              <div
                className="absolute inset-0 bg-black rounded-sm"
                style={{ opacity: 0.32 }}
              ></div>

              {/* Content */}
              <div className="relative flex flex-col items-center justify-center gap-0">
                {/* MENU text */}
                <span
                  className="uppercase font-semibold mb-1"
                  style={{
                    color: "var(--brand-red)",
                    fontSize: "9px",
                    letterSpacing: "1.55px",
                    lineHeight: "11px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  MENU
                </span>

                {/* Hamburger lines */}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="bg-white rounded-sm"
                    style={{ width: "29px", height: "3px" }}
                  ></div>
                  <div
                    className="bg-white rounded-sm"
                    style={{ width: "29px", height: "3px" }}
                  ></div>
                  <div
                    className="bg-white rounded-sm"
                    style={{ width: "29px", height: "3px" }}
                  ></div>
                </div>
              </div>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center z-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8">
              Intelligent Systems for Commerce,
              <br className="hidden sm:block" />
              <span className="block mt-1 sm:mt-2">Enterprise and Growth</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed opacity-90">
              Modular, API-first platforms built for performance,
              <br className="hidden sm:block" />
              <span className="block mt-0.5 sm:mt-1">
                automation, and scale
              </span>
            </p>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-30 flex flex-col">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-800">
              <img
                src="/synergic-logo.svg"
                alt="Synergic Intelligent Systems"
                className="h-7 sm:h-8 md:h-9 w-auto"
              />
              <button
                className="text-white text-4xl sm:text-5xl leading-none transition-colors"
                style={{
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--brand-red)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="flex flex-col gap-6 sm:gap-8 text-white text-2xl sm:text-3xl md:text-4xl font-light">
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-red)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-red)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-red)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-red)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    Contact
                  </a>
                </div>

                {/* Get in Touch on Mobile */}
                <div className="mt-12 sm:mt-16 flex items-center justify-center gap-3">
                  <span className="text-white text-sm font-medium tracking-wide uppercase">
                    Get in Touch
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                    style={{
                      borderWidth: "2px",
                      borderColor: "var(--brand-red)",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(251, 59, 34, 0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: "var(--brand-red)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Hero & Nav End*/}

      {/* Choose, Combine, Grow Section Start */}
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
                onClick={() => toggleSection("choose")}
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
                onClick={() => toggleSection("combine")}
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
                      <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        Combine a B2C shop with a product catalog
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        Add workflows or integrations with your ERP
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        Launch mobile apps or automate your services
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        Add AI, notifications, or subscriptions later
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                onClick={() => toggleSection("grow")}
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
                <div className="bg-white bg-opacity-20 rounded-full p-3 ml-4 flex-shrink-0">
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition" />
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
                <div className="bg-white bg-opacity-20 rounded-full p-3 ml-4 flex-shrink-0">
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition" />
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
                    <Check className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      Combine a B2C shop with a product catalog
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      Add workflows or integrations with your ERP
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      Launch mobile apps or automate your services
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      Add AI, notifications, or subscriptions later
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
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
      {/* Choose, Combine, Grow Section End*/}
    </div>
  );
}
