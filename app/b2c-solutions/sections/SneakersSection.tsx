"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

type TabId = 'single' | 'multi' | 'omni' | 'high';

export default function SneakersSection() {
  const [hoveredTab, setHoveredTab] = useState<TabId | null>(null);
  
  const getIsActive = (tabId: TabId) => {
    if (hoveredTab !== null) {
      return hoveredTab === tabId;
    }
    return tabId === 'single'; 
  };

  const tabs = [
    { id: 'single' as TabId, title: 'Single-Brand eShops', icon: 'single-brand-eshops.svg' },
    { id: 'multi' as TabId, title: 'Multi-Store Operations', icon: 'multi-store-operations.svg' },
    { id: 'omni' as TabId, title: 'Omnichannel Online Stores', icon: 'omnichannel-online-stores.svg' },
    { id: 'high' as TabId, title: 'High-Volume eCommerce', icon: 'high-volume-ecommerce.svg' }
  ];

  return (
    <>
      <section className="lg:hidden relative bg-white">
        <div className="px-6 pt-24 pb-0">
          <div className="mb-6">
            <p className="text-sm font-extrabold mb-2" style={{ color: '#31A270' }}>
              SOLUTIONS WE DELIVER
            </p>
            <h2 className="text-3xl font-extrabold mb-3">What You Can Build</h2>
            <p className="text-lg text-gray-700 mb-6">
              Tailored solutions for every retail scenario.
            </p>

            <div className="space-y-0 mb-8 -mx-6">
              {tabs.map((tab) => {
                const isActive = getIsActive(tab.id);
                return (
                  <div
                    key={tab.id}
                    className={`p-4 flex items-center gap-3 cursor-pointer transition-colors duration-300 border-b border-gray-400/30 ${
                      isActive ? 'bg-(--brand-dark)' : 'bg-(--brand-light)'
                    }`}
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onTouchStart={() => setHoveredTab(tab.id)}
                  >
                    <img
                      src={`/icons/${tab.icon}`}
                      alt=""
                      className="w-6 h-6 pointer-events-none"
                      style={{
                        filter: isActive ? 'brightness(0) invert(1)' : 'none'
                      }}
                    />
                    <span
                      className={`font-medium pointer-events-none transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-black'
                      }`}
                    >
                      {tab.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                Have complete control over your online presence, including branding, pricing, and customer experience.
              </p>
              <p className="text-gray-700">
                By focusing on a single brand, you can build a strong, cohesive brand identity, create a more streamlined shopping experience for customers, and establish yourself as an expert in your specific product niche.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Lightning-fast online stores with personalized experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Advanced product catalogs with smart search and filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Integrated loyalty programs and subscription management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="-mx-6">
            <img
              src="/images/b2c-solutions-shoes-mobile.webp"
              alt="B2C eCommerce Solutions"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      <div className="hidden lg:block relative bg-white">
        <GridSection
          bgColor="bg-white"
          showLines={[true, false, true, true, true]}
          minHeight="20vh"
          className=""
        >
          <GridContainer className="items-center h-full">
            <GridCol span="AB" className="pl-12 pr-8 py-8">
              <p className="text-sm font-extrabold mb-2" style={{ color: '#31A270' }}>
                SOLUTIONS WE DELIVER
              </p>
              <h2 className="text-4xl font-bold text-black mb-3">
                What You Can Build
              </h2>
              <p className="text-lg text-gray-700">
                Tailored solutions for every retail scenario.
              </p>
            </GridCol>
            <GridCol span="CD" className="py-8">
              <div></div>
            </GridCol>
          </GridContainer>
        </GridSection>
        <GridSection
          bgColor="bg-white"
          showLines={[true, true, true, true, true]}
          minHeight="10vh"
          className=""
        >
          <GridContainer className="items-stretch">
            <GridCol
              span="A"
              bgColor={getIsActive('single') ? 'bg-[var(--brand-dark)]' : 'bg-[var(--brand-light)]'}
              className="cursor-pointer transition-colors duration-300"
              style={{ minHeight: '80px' }}
            >
              <div
                className="flex items-center gap-4 w-full h-full px-6 py-8"
                onMouseEnter={() => setHoveredTab('single')}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <img
                  src="/icons/single-brand-eshops.svg"
                  alt=""
                  className="w-8 h-8 shrink-0 pointer-events-none"
                  style={{
                    filter: getIsActive('single') ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
                <span
                  className={`font-semibold text-base transition-colors duration-300 pointer-events-none ${
                    getIsActive('single') ? 'text-white' : 'text-black'
                  }`}
                >
                  Single-Brand eShops
                </span>
              </div>
            </GridCol>

            <GridCol
              span="B"
              bgColor={getIsActive('multi') ? 'bg-[var(--brand-dark)]' : 'bg-[var(--brand-light)]'}
              className="cursor-pointer transition-colors duration-300"
              style={{ minHeight: '80px' }}
            >
              <div
                className="flex items-center gap-4 w-full h-full px-6 py-8"
                onMouseEnter={() => setHoveredTab('multi')}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <img
                  src="/icons/multi-store-operations.svg"
                  alt=""
                  className="w-8 h-8 shrink-0 pointer-events-none"
                  style={{
                    filter: getIsActive('multi') ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
                <span
                  className={`font-semibold text-base transition-colors duration-300 pointer-events-none ${
                    getIsActive('multi') ? 'text-white' : 'text-black'
                  }`}
                >
                  Multi-Store Operations
                </span>
              </div>
            </GridCol>

            <GridCol
              span="C"
              bgColor={getIsActive('omni') ? 'bg-[var(--brand-dark)]' : 'bg-[var(--brand-light)]'}
              className="cursor-pointer transition-colors duration-300"
              style={{ minHeight: '80px' }}
            >
              <div
                className="flex items-center gap-4 w-full h-full px-6 py-8"
                onMouseEnter={() => setHoveredTab('omni')}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <img
                  src="/icons/omnichannel-online-stores.svg"
                  alt=""
                  className="w-8 h-8 shrink-0 pointer-events-none"
                  style={{
                    filter: getIsActive('omni') ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
                <span
                  className={`font-semibold text-base transition-colors duration-300 pointer-events-none ${
                    getIsActive('omni') ? 'text-white' : 'text-black'
                  }`}
                >
                  Omnichannel Online Stores
                </span>
              </div>
            </GridCol>

            <GridCol
              span="D"
              bgColor={getIsActive('high') ? 'bg-[var(--brand-dark)]' : 'bg-[var(--brand-light)]'}
              className="cursor-pointer transition-colors duration-300"
              style={{ minHeight: '80px' }}
            >
              <div
                className="flex items-center gap-4 w-full h-full px-6 py-8"
                onMouseEnter={() => setHoveredTab('high')}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <img
                  src="/icons/high-volume-ecommerce.svg"
                  alt=""
                  className="w-8 h-8 shrink-0 pointer-events-none"
                  style={{
                    filter: getIsActive('high') ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
                <span
                  className={`font-semibold text-base transition-colors duration-300 pointer-events-none ${
                    getIsActive('high') ? 'text-white' : 'text-black'
                  }`}
                >
                  High-Volume eCommerce
                </span>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          bgColor="bg-white"
          showLines={[true, true, true, true, true]}
          minHeight="65vh"
          className="-mb-1"
        >
          <div className="relative z-20">
            <GridContainer className="items-center h-full pt-20">
              <GridCol span="AB" className="pl-12 pr-8 pb-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700">
                    Have complete control over your online presence, including branding,<br/> pricing, and customer experience.
                  </p>
                  <p className="text-lg text-gray-700">
                    By focusing on a single brand, you can build a strong, cohesive brand<br/>
                     identity, create a more streamlined shopping experience for<br/> 
                     customers, and establish yourself as an expert in your specific<br/>
                      product niche.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="text-gray-400 text-xl leading-none" style={{ marginTop: '-2px' }}>•</span>
                      <span>Lightning-fast online stores with personalized experiences</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-gray-400 text-xl leading-none" style={{ marginTop: '-2px' }}>•</span>
                      <span>Advanced product catalogs with smart search and filtering</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-gray-400 text-xl leading-none" style={{ marginTop: '-2px' }}>•</span>
                      <span>Integrated loyalty programs and subscription management</span>
                    </li>
                  </ul>
                </div>
              </GridCol>

              <GridCol
                span="CD"
                className="relative pb-0 mb-0"
                style={{
                  alignSelf: "flex-end",
                  lineHeight: 0,
                  zIndex: 30,
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: "110%",
                    lineHeight: 0,
                    fontSize: 0,
                    paddingTop: "20px",
                    marginBottom: 0,
                    paddingBottom: 5,
                    zIndex: 30,
                  }}
                >
                  <img
                    src="/images/b2c-solutions-shoes-web.webp"
                    alt="B2C eCommerce Solutions"
                    className="block"
                    style={{
                      width: "auto",
                      height: "auto",
                      marginLeft: "-10%",
                      display: "block",
                      marginBottom: 15,
                    }}
                  />
                </div>
              </GridCol>
            </GridContainer>
          </div>
        </GridSection>
      </div>
    </>
  );
}