"use client";
import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../../components/TransparentNavbar";
import MobileMenu from "../../components/Menu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="lg:hidden overflow-x-hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        <div
          className="relative px-6 pt-24 pb-8"
          style={{ minHeight: "500px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/oms-bg.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(17, 29, 43, 0.65)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, var(--brand-dark) 0%, transparent 100%)",
            }}
          />
          <div className="relative z-10">
            <h1
              className="text-white font-extrabold leading-tight"
              style={{ fontSize: "25px" }}
            >
              Automated Order Processing, Fulfillment, and Inventory Control
            </h1>
            <p
              className="text-white mt-4 font-medium"
              style={{ fontSize: "17px" }}
            >
              Automate Your Order Chaos
              <br />
              Turn manual order management into seamless automation
            </p>
            <p
              className="leading-relaxed mt-4"
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              We set up your order workflows on Cubik OMS so every order from capture to fulfillment runs through one system that scales with your business.
            </p>
          </div>
        </div>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      <div className="hidden lg:block">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div
          className="relative overflow-hidden"
          style={{ height: "821px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/oms-bg.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: "rgba(17, 29, 43, 0.65)" }}
          />

          <div
            className="absolute inset-0 z-1"
            style={{
              backgroundImage: "url('/images/oms-gradient-overlay.svg')",
              backgroundSize: "cover",
              backgroundPosition: "left center",
            }}
          />

          <img
            src="/images/oms/returns-and-exchange-workflow.webp"
            alt="Returns & Exchange Workflow"
            className="absolute z-2 opacity-35"
            style={{
              height: "70px",
              top: "145px",
              left: "52%",
            }}
          />

          <img
            src="/images/oms/activity-logs.webp"
            alt="Activity Logs"
            className="absolute z-2"
            style={{
              height: "130px",
              top: "145px",
              right: "3.5%",
            }}
          />

          <img
            src="/images/oms/reporting.webp"
            alt="Reporting"
            className="absolute z-2"
            style={{
              height: "95px",
              top: "320px",
              left: "54%",
            }}
          />

          <img
            src="/images/oms/real-time-inventory-tracking.webp"
            alt="Real-time Inventory Tracking"
            className="absolute z-2 opacity-45"
            style={{
              height: "70px",
              top: "350px",
              right: "5%",
            }}
          />

          <img
            src="/images/oms/analytics.webp"
            alt="Analytics"
            className="absolute z-2 opacity-60"
            style={{
              height: "95px",
              top: "520px",
              left: "42%",
            }}
          />

          <img
            src="/images/oms/centralized-order-capture.webp"
            alt="Centralized Order Capture"
            className="absolute z-2 opacity-70"
            style={{
              height: "115px",
              top: "530px",
              right: "11%",
            }}
          />

          <div className="absolute inset-0 z-5 pointer-events-none">
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ left: "5.56%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ left: "27.78%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ left: "50%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ left: "72.22%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ left: "94.44%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />
          </div>

          <div className="relative z-10 h-full pointer-events-none">
            <div style={{ height: "5.56vw" }} />

            <GridSection
              showLines={[false, false, false, false, false]}
              bgColor="bg-transparent"
              minHeight="calc(821px - 5.56vw)"
            >
              <GridContainer className="h-full items-center">
                <GridCol span="AB" className="pl-8 pr-12 pt-22 pointer-events-auto">
                  <h1
                    className="text-white font-extrabold leading-tight"
                    style={{ fontSize: "39px" }}
                  >
                    Automated Order Processing,
                    <br />
                    Fulfillment, and Inventory Control
                  </h1>

                  <p
                    className="text-white mt-6"
                    style={{ fontSize: "25px" }}
                  >
                    Automate Your Order Chaos
                    <br />
                    Turn manual order management into seamless automation
                  </p>

                  <p
                    className="leading-relaxed mt-16 max-w-lg"
                    style={{
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    We set up your order workflows on Cubik OMS so every order from capture to fulfillment runs through one system that scales with your business.
                  </p>
                </GridCol>

                <GridCol span="CD" className="relative">
                  {null}
                </GridCol>
              </GridContainer>
            </GridSection>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}