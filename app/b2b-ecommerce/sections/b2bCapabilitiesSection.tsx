"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const B2BCapabilitiesSection = () => {
  return (
    <>
      {/*B2B SOLVING SECTION*/}
      <GridSection
        showLines={[true, false, true, true, true]}
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="h-[20vh]">
          <GridCol span="AB" className="flex items-center pl-8">
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-3">
                Solving What Slows B2B Down
              </h2>
            </div>
          </GridCol>

          <GridCol span="CD" className="h-full relative">
            <div></div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute top-0 w-full h-px bg-gray-400 opacity-30"></div>

        <GridContainer className="h-[10vh]">
          <GridCol span="AB" className="flex items-center relative pl-16">
            <svg
              className="absolute left-4"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 8L8 24M8 8L24 24"
                stroke="#EF4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Common challenges costing you sales:
            </h3>
          </GridCol>

          <GridCol span="CD" className="flex items-center relative pl-16">
            <svg
              className="absolute left-4"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 6V26M6 16H26"
                stroke="#2B7856"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="text-2xl font-extrabold text-gray-900">
              We replace these with systems that deliver
            </h3>
          </GridCol>
        </GridContainer>

        <div className="absolute bottom-0 w-full h-px bg-gray-400 opacity-30"></div>
      </GridSection>

      <GridSection
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="py-12">
          <GridCol span="AB" className="flex flex-col pr-12 pl-16">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Manual quoting and outdated product catalogs
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Complex pricing logic that can't scale
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Sales teams tied to legacy systems
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  No self-service or order tracking
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Lack of integration with ERP, CRM, or warehouse systems
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 mt-1 text-xl">•</span>
                <span className="text-gray-900 text-lg leading-relaxed">
                  Friction in approval workflows or reordering processes
                </span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="CD" className="flex flex-col pr-12 pl-16">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    50% faster reordering
                  </h4>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Streamlined approval flows
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    that reduce sales cycle time
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Seamless ERP integration
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    eliminating double data entry
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Role-based access
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    with enterprise-grade security
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    Automated workflows
                  </h4>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    that free up your sales team for high-value activities
                  </p>
                </div>
              </li>
            </ul>
          </GridCol>
        </GridContainer>
      </GridSection>
      <GridSection
        showLines={[true, true, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute top-0 w-full h-px bg-gray-400 opacity-30 z-20"></div>

        <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-20"></div>
        <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-20"></div>

        <GridContainer className="h-25">
          <GridCol
            span="AB"
            className="h-full relative"
            style={{ backgroundColor: "#F7F7F7" }}
          >
            <div className="h-full w-full"></div>
          </GridCol>

          <GridCol span="CD" className="flex items-stretch h-full">
            <div className="w-full bg-[#2B7856] cursor-pointer flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-white/80 mb-1 font-normal">Need more info ?</p>
                <h3 className="text-xl text-white font-normal">
                  Let's create your new B2B platform
                </h3>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </GridCol>
        </GridContainer>

        <div className="absolute bottom-0 w-full h-px bg-gray-400 opacity-30 z-20"></div>
      </GridSection>
      <div className="hidden lg:block relative h-0 z-100">
        <div className="absolute left-[5.56%] -translate-x-1/2 -translate-y-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="#FB3B22"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/*DESKTOP: WHAT YOU CAN BUILD SECTION */}
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-(--brand-white)"
        className="py-20 pb-28 relative"
        desktopOnly={true}
      >
        <GridContainer className="items-stretch">
          <GridCol
            span="A"
            className="py-8 pl-7 pr-8 flex flex-col justify-start pt-8"
          >
            <div className="h-10 mb-6"></div>
            <h2 className="text-3xl font-extrabold text-black leading-tight mb-4">
              What You Can Build
            </h2>
            <p className="text-black text-2xl leading-relaxed">
              Tailored platforms for every
              <br />
              kind of B2B scenario.
            </p>
          </GridCol>

          <GridCol span="B" className="py-8 px-6 border-l border-gray-300/50">
            <div className="h-10 mb-6 flex items-center">
              <Image
                src="/icons/reorder.svg"
                alt="Wholesale Portal"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-(--brand-dark) mb-5">
              Wholesale Portal
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Company accounts, buyers, and reps
                  <br />
                  with role-based permissions
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  One-click reordering and automated
                  <br />
                  quote generation
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Integrated credit terms and payment
                  <br />
                  processing
                </span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="C" className="py-8 px-6 border-l border-gray-300/50">
            <div className="h-10 mb-6 flex items-center">
              <Image
                src="/icons/inbox-up.svg"
                alt="Distributor & Supplier Platforms"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-(--brand-dark) mb-5">
              Distributor & Supplier Platforms
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Multilingual, multi-brand catalogs with
                  <br />
                  real-time inventory
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Product variations and technical specs
                  <br />
                  automatically synced
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Full ERP integration for seamless order
                  <br />
                  fulfillment
                </span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="D" className="py-8 px-6 border-l border-gray-300/50">
            <div className="h-10 mb-6 flex items-center">
              <Image
                src="/icons/statistic-workflow.svg"
                alt="Mixed B2B/B2C Platforms"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-(--brand-dark) mb-5">
              Mixed B2B/B2C Platforms
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Unified catalogs with separate pricing
                  <br />
                  and checkout logic
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Hybrid workflows supporting both
                  <br />
                  business and consumer buyers
                </span>
              </li>
            </ul>
          </GridCol>
        </GridContainer>

        <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-300/50 w-full"></div>
        <div className="absolute left-[27.78%] bottom-1 text-(--brand-black) text-4xl font-light -translate-x-1/2 translate-y-1/2 leading-none flex items-center justify-center">
          +
        </div>
        <div className="absolute left-[72.22%] bottom-1 text-(--brand-red) text-4xl font-light -translate-x-1/2 translate-y-1/2 leading-none flex items-center justify-center">
          +
        </div>
      </GridSection>

      {/* MOBILE: B2B SOLVING SECTION */}
      <section className="lg:hidden bg-white">
        <div className="px-6 pt-8 pb-2">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              Solving What Slows
              <br />
              B2B Down
            </h2>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-500 text-2xl font-bold">✕</span>
              <h3 className="text-xl font-extrabold text-gray-900">
                Common challenges costing you sales:
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">
                  Manual quoting and outdated product catalogs
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">
                  Complex pricing logic that can't scale
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">
                  Sales teams tied to legacy systems
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">
                  No self-service or order tracking
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">
                  Lack of integration with ERP, CRM, or warehouse systems
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl leading-none">•</span>
                <span className="text-gray-900 text-[15px] leading-relaxed">
                  Friction in approval workflows or reordering processes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="px-6 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M11 3V19M3 11H19"
                  stroke="#2B7856"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="text-xl font-extrabold text-gray-900">
                We replace these with systems that deliver
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">
                    50% faster reordering
                  </h4>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">
                    Streamlined approval flows
                  </h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">
                    that reduce sales cycle time
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">
                    Seamless ERP integration
                  </h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">
                    eliminating double data entry
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">
                    Role-based access
                  </h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">
                    with enterprise-grade security
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/green-tick.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="mt-1.5 shrink-0"
                />
                <div>
                  <h4 className="text-gray-900 font-bold text-[17px] mb-0.5">
                    Automated workflows
                  </h4>
                  <p className="text-gray-900 text-[15px] leading-relaxed">
                    that free up your sales team for high-value activities
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="w-full bg-[#2B7856] cursor-pointer p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 mb-1 font-normal">Need more info ?</p>
              <h3 className="text-lg text-white font-normal">
                Let's create your new B2B platform
              </h3>
            </div>
            <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE: WHAT YOU CAN BUILD SECTION*/}
      <section className="lg:hidden bg-(--brand-white) py-8">
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-extrabold text-black leading-tight mb-3">
            What You Can Build
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Tailored platforms for every kind of
            <br />
            B2B scenario.
          </p>
        </div>

        <div className="border-t border-gray-500/50">
          <div className="px-6 py-8">
            <div className="h-9 mb-4 flex items-center">
              <Image
                src="/icons/reorder.svg"
                alt="Wholesale Portal"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-(--brand-dark) mb-4">
              Wholesale Portal
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Company accounts, buyers, and reps with
                  <br />
                  role-based permissions
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  One-click reordering and automated
                  <br />
                  quote generation
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Integrated credit terms and payment
                  <br />
                  processing
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500/50">
          <div className="px-6 py-8">
            <div className="h-9 mb-4 flex items-center">
              <Image
                src="/icons/inbox-up.svg"
                alt="Distributor & Supplier Platforms"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-(--brand-dark) mb-4">
              Distributor & Supplier Platforms
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Multilingual, multi-brand catalogs with real-
                  <br />
                  time inventory
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Product variations and technical specs
                  <br />
                  automatically synced
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Full ERP integration for seamless order
                  <br />
                  fulfillment
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500/50">
          <div className="px-6 py-8">
            <div className="h-9 mb-4 flex items-center">
              <Image
                src="/icons/statistic-workflow.svg"
                alt="Mixed B2B/B2C Platforms"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-(--brand-dark) mb-4">
              Mixed B2B/B2C Platforms
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Unified catalogs with separate pricing and
                  <br />
                  checkout logic
                </span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>
                  Hybrid workflows supporting both
                  <br />
                  business and consumer buyers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2BCapabilitiesSection;