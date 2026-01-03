"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

type AccordionId = 'commerce' | 'product' | 'eshop';

export default function TechnologySection() {
  const [openAccordion, setOpenAccordion] = useState<AccordionId | null>('product');

  const toggleAccordion = (id: AccordionId) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionData = [
    {
      id: 'commerce' as AccordionId,
      title: 'Modern Commerce Engine',
      items: [
        'Microservices-based architecture for maximum flexibility',
        'API-first design enabling seamless integrations',
        'Cloud-native infrastructure with auto-scaling capabilities',
        'Real-time data synchronization across all systems',
        'Built-in support for multi-channel commerce'
      ]
    },
    {
      id: 'product' as AccordionId,
      title: 'Integrated Product & Order Management',
      items: [
        'Centralized catalog management with Cubik PIM',
        'Seamless integration with multiple suppliers, feeds, and channels',
        'Automated order processing and fulfillment workflows',
        'Real-time inventory synchronization across all touchpoints',
        'Smart pricing rules and promotional automation'
      ]
    },
    {
      id: 'eshop' as AccordionId,
      title: 'Optimized eShop Experience',
      items: [
        'Lightning-fast page loads with optimized frontend architecture',
        'Mobile-first responsive design for all devices',
        'Advanced search and filtering with AI-powered recommendations',
        'Streamlined checkout process to maximize conversions',
        'Personalized user experiences based on behavior and preferences'
      ]
    }
  ];

  return (
    <>
      {/* Mobile Version */}
      <section className="lg:hidden py-16" style={{ backgroundColor: 'var(--brand-light)' }}>
        <div className="mb-12 px-6">
          <h2 className="text-3xl font-extrabold mb-4">The Technology Behind Your Growth</h2>
          <p className="text-base text-gray-700 mb-8">
            We build eShops with modern technologies that deliver speed, security, and scalability — without the limits of traditional platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <img src="/icons/cloud-native.svg" alt="" className="w-6 h-6 mt-1 shrink-0" />
              <span className="text-gray-700">Cloud-native, resilient, and future-proof</span>
            </div>
            <div className="flex items-start gap-3">
              <img src="/icons/fast-response.svg" alt="" className="w-6 h-6 mt-1 shrink-0" />
              <span className="text-gray-700">Fast response times — even with 100K+ SKUs.</span>
            </div>
            <div className="flex items-start gap-3">
              <img src="/icons/always-available.svg" alt="" className="w-6 h-6 mt-1 shrink-0" />
              <span className="text-gray-700">Always available — built-in failover & scalability.</span>
            </div>
          </div>
        </div>

        <button className="flex items-center justify-between px-6 py-5 bg-white text-black w-full">
          <div className="flex flex-col items-start text-left">
            <span className="text-sm text-gray-600 mb-1">
              Our headless, modular architecture outperforms Shopify, Woo, Magento & traditional platforms
            </span>
            <span className="text-lg font-normal">
              Learn About Our Tech Stack
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shrink-0 ml-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>

        <div className="space-y-4 px-6 mt-12">
          {accordionData.map((section) => (
            <div key={section.id} className="overflow-hidden">
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                style={{ backgroundColor: 'var(--brand-light)' }}
              >
                <h3 className="text-lg font-bold">{section.title}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${openAccordion === section.id ? 'rotate-180' : ''}`}
                  style={{ color: openAccordion === section.id ? 'var(--brand-red)' : 'currentColor' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === section.id && section.items.length > 0 && (
                <div className="px-6 pb-6" style={{ backgroundColor: 'var(--brand-light)' }}>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 text-xl leading-none mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ backgroundColor: 'var(--brand-light)' }}>
        <GridSection
          bgColor=""
          showLines={[true, false, true, false, true]}
          className="py-20"
        >
          <GridContainer className="items-start">
            <GridCol span="AB" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="sticky top-8">
                <div className="pl-12 pr-12">
                  <h2 className="text-4xl font-extrabold mb-6 leading-tight">The Technology Behind Your Growth</h2>
                  <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    We build eShops with modern technologies that deliver speed, security, and scalability — without the limits of traditional platforms.
                  </p>

                  <div className="space-y-5 mb-12">
                    <div className="flex items-start gap-4">
                      <img src="/icons/cloud-native.svg" alt="" className="w-7 h-7 mt-1 shrink-0" />
                      <span className="text-gray-700 text-base">Cloud-native, resilient, and future-proof</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <img src="/icons/fast-response.svg" alt="" className="w-7 h-7 mt-1 shrink-0" />
                      <span className="text-gray-700 text-base">Fast response times — even with 100K+ SKUs.</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <img src="/icons/always-available.svg" alt="" className="w-7 h-7 mt-1 shrink-0" />
                      <span className="text-gray-700 text-base">Always available — built-in failover & scalability.</span>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-between px-6 py-5 bg-white text-black">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm text-gray-600 mb-1">
                      Our headless, modular architecture outperforms Shopify, Woo, Magento & traditional platforms
                    </span>
                    <span className="text-lg font-normal">
                      Learn About Our Tech Stack
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center shrink-0 ml-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </GridCol>

            <GridCol span="CD" className="pl-8 pr-12">
              <div className="space-y-4">
                {accordionData.map((section) => (
                  <div
                    key={section.id}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(section.id)}
                      className="w-full flex items-center justify-between p-6 text-left transition-colors"
                      style={{ backgroundColor: 'var(--brand-light)' }}
                    >
                      <h3 className="text-xl font-bold">{section.title}</h3>
                      <svg
                        className={`w-6 h-6 transition-transform shrink-0 ${
                          openAccordion === section.id ? 'rotate-180' : ''
                        }`}
                        style={{ color: openAccordion === section.id ? 'var(--brand-red)' : '#6B7280' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openAccordion === section.id && section.items.length > 0 && (
                      <div className="px-6 pb-6 pt-2" style={{ backgroundColor: 'var(--brand-light)' }}>
                        <ul className="space-y-3">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <span className="text-gray-400 text-xl leading-none" style={{ marginTop: '-2px' }}>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>
    </>
  );
}