"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* MOBILE VERSION */}
      <section className="lg:hidden relative bg-white min-h-screen">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="px-4 pt-24 pb-12">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold leading-tight mb-6 text-gray-900">
              Composable eCommerce,{" "}
              <span className="block mt-1">Built for Your Business</span>
            </h1>
            <p className="text-2xl leading-relaxed mb-4 text-gray-700">
              From fast retail shops to enterprise-grade commerce ecosystems — tailored, scalable, and built to grow.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="images/b2c-mobile.svg"
              alt="eCommerce Platform"
              className="w-full max-w-md"
            />
          </div>
          <div className="mb-8">
            <p className="text-l leading-relaxed mb-4 text-gray-600">
              Whether you're launching a modern eShop or scaling a complex B2B platform, we design solutions that grow with your business — fast, secure, and built around your goals.
            </p>

            <p className="text-l leading-relaxed text-gray-600">
              B2C, B2B, or hybrid — our modular systems connect channels, automate operations, and power experiences that convert.
            </p>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* DESKTOP */}
      <div className="hidden lg:block relative bg-white">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <GridSection
          bgColor="bg-white"
          showLines={[true, true, true, true, true]}
          className="min-h-screen"
          desktopOnly={true}
        >
          <GridContainer className="min-h-screen">
            <GridCol span="AB" className="flex flex-col pl-6 pt-55 ">
              <h1 className="text-4xl xl:text-[40px] font-extrabold leading-tight mb-8 text-gray-900">
                Composable eCommerce,{" "}
                <span className="block mt-2">Built for Your Business</span>
              </h1>

              <p className="text-2xl leading-relaxed mb-6 text-gray-700 max-w-3xl">
                From fast retail shops to enterprise-grade commerce ecosystems <br/>— tailored, scalable, and built to grow.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-600 max-w-xl">
                Whether you're launching a modern eShop or scaling a complex B2B platform, we design solutions that grow with your business — fast, secure, and built around your goals.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 max-w-xl">
                B2C, B2B, or hybrid — our modular systems connect channels, automate operations, and power experiences that convert.
              </p>
            </GridCol>
            <GridCol span="CD" className="flex items-center justify-start pl-12 pt-12">
              <img
                src="images/b2c-mobile.svg"
                alt="eCommerce Platform"
                className="max-w-xl max-h-225 object-contain"
              />
            </GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}