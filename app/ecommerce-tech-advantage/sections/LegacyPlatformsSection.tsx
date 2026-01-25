"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function LegacyPlatformsSection() {
  return (
    <>
      <section
        className="lg:hidden"
        style={{
          background: "var(--brand-dark)",
        }}
      >
        <div className="px-6 py-12">
          <h2 className="text-2xl text-white font-extrabold leading-tight">
            Why legacy platforms hold you back ?
          </h2>

          <p className="mt-6 text-[16px] leading-relaxed text-white/75">
            Whether you're running on WooCommerce, Magento, Shopify, or older PHP / .NET custom solutions, the story is the same: slow page speed, constant firefighting, plugin issues, broken updates, platform restrictions and mounting costs.
          </p>

          <p className="mt-6 text-[16px] leading-relaxed text-white/75">
            On the other hand, proprietary custom solutions — often delivered as closed systems with rigid architectures — may look appealing at first, but they quickly restrict innovation, lock you in, and make every change costly.
          </p>

          <p className="mt-6 text-[16px] leading-relaxed text-white/75">
            The result is the same in both cases: systems that slow you down instead of powering your growth.
          </p>

          <div className="mt-8 -mx-6 overflow-hidden">
            <img
              src="/images/legacy-platforms.avif"
              alt="Core Web Vitals Assessment showing poor performance"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div
          className="px-6 py-6"
          style={{ backgroundColor: "var(--brand-red)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/80">
                Need more info ?
              </p>
              <p className="text-lg text-white mt-1">
                Explore All Solutions
              </p>
            </div>
            <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ border: "1.5px solid white" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          </div>
        </div>
      </section>

      <div className="hidden lg:block relative" style={{ height: "700px" }}>
        <div
          className="absolute left-0 right-0 h-px z-10"
          style={{
            top: "10%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <div
          className="absolute left-0 right-0 h-px z-10"
          style={{
            bottom: "10%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <div
          className="absolute left-0 h-px z-10"
          style={{
            bottom: "calc(10% + 90px)",
            width: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <div
          className="absolute left-0 px-8 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity z-20"
          style={{
            bottom: "10%",
            height: "90px",
            width: "44.44%",
            marginLeft: "5.56%",
            backgroundColor: "var(--brand-red)",
          }}
        >
          <div>
            <p
              className="text-white"
              style={{ fontSize: "14px", opacity: 0.8 }}
            >
              Need more info ?
            </p>
            <p
              className="text-white mt-1"
              style={{ fontSize: "18px" }}
            >
              Explore All Solutions
            </p>
          </div>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ border: "1.5px solid white" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <GridSection
          showLines={[true, false, true, true, true]}
          bgColor="bg-(--brand-dark)"
          className="h-full"
        >
          <GridContainer className="items-start relative h-full">
            <GridCol span="AB" className="flex flex-col" style={{ paddingTop: "10%", paddingBottom: "calc(10% + 90px)" }}>
              <h2
                className="text-white font-extrabold leading-tight pl-8"
                style={{ fontSize: "32px" }}
              >
                Why legacy platforms hold you back ?
              </h2>

              <p
                className="mt-8 leading-relaxed pl-8"
                style={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                Whether you're running on WooCommerce, Magento, Shopify, or older PHP / .NET custom solutions, the story is the same: slow page speed, constant firefighting, plugin issues, broken updates, platform restrictions and mounting costs.
              </p>

              <p
                className="mt-6 leading-relaxed pl-8 pb-7"
                style={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                On the other hand, proprietary custom solutions — often delivered as closed systems with rigid architectures — may look appealing at first, but they quickly restrict innovation, lock you in, and make every change costly. The result is the same in both cases: systems that slow you down instead of powering your growth.
              </p>
            </GridCol>

            <GridCol span="CD" style={{ paddingTop: "10%", paddingBottom: "calc(10% + 90px)" }} className="flex items-center justify-center">
              <img
                src="/images/legacy-platforms.avif"
                alt="Core Web Vitals Assessment showing poor performance"
                className="w-full h-auto px-4"
              />
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>
    </>
  );
}