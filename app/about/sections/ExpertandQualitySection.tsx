import React from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function ExpertandQualitySection() {
  return (
    <>
      {/* Desktop*/}
      <GridSection
        desktopOnly={true}
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="py-20"
      >
        <GridContainer>
          {/* AB */}
          <GridCol span="AB" className="p-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Experts</h2>
            <p className="text-lg mb-6 text-gray-700">
              We operate with a core team of fifteen plus full-time specialists — from architects and engineers to analysts and designers.
            </p>
            <p className="text-base mb-6 text-gray-600">
              To deliver the best outcomes, we also draw from a trusted global network of 30+ international experts who bring domain-specific knowledge and cutting-edge skills tailored to each project.
            </p>
            <p className="text-base mb-4 text-gray-700 font-semibold">This flexible model ensures:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Access to specialized talent when you need it</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Scalable teams without compromise on quality</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Global insights applied to your local challenges</span>
              </li>
            </ul>
          </GridCol>

          {/* CD Span*/}
          <GridCol span="CD"  className="flex flex-col">
            <div className="p-12 flex-1">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Quality You Can Trust</h2>
              <p className="text-lg mb-6 text-gray-700">
                We follow certified processes and hold ourselves to the highest standards of delivery and service.
              </p>
              <p className="text-sm mb-3 text-gray-600">ISO 9001:2015 certified for quality management</p>
              <p className="text-sm mb-4 text-gray-600">Trusted by organizations across:</p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                  <span>Enterprises & Institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                  <span>Startups & SaaS Builders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                  <span>Retailers & Consumer Brands</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                  <span>B2B & Industrial Businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                  <span>Public Sector & Government Bodies</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between px-12 py-8 cursor-pointer hover:bg-[#e8e8e0] transition-colors" style={{ backgroundColor: '#F3F3EE' }}>
              <div className="flex items-center gap-6">
                <img src="logos/iso.png" alt="ISO Certification" className="h-12 w-auto" />
                <span className="text-lg font-semibold text-gray-900">ΕΛΟΤ EN ISO 9001:2015</span>
              </div>
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile*/}
      <section className="lg:hidden bg-white px-4 py-12">
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Experts</h2>
          <p className="text-base mb-4 text-gray-700">
            We operate with a core team of fifteen plus full-time specialists — from architects and engineers to analysts and designers.
          </p>
          <p className="text-sm mb-4 text-gray-600">
            To deliver the best outcomes, we also draw from a trusted global network of 30+ international experts who bring domain-specific knowledge and cutting-edge skills tailored to each project.
          </p>
          <p className="text-sm mb-3 text-gray-700 font-semibold">This flexible model ensures:</p>
          <ul className="space-y-2 text-gray-700 text-sm mb-6">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>Access to specialized talent when you need it</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>Scalable teams without compromise on quality</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>Global insights applied to your local challenges</span>
            </li>
          </ul>
        </div>

        
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Quality You Can Trust</h2>
            <p className="text-base mb-4 text-gray-700">
              We follow certified processes and hold ourselves to the highest standards of delivery and service.
            </p>
            <p className="text-xs mb-2 text-gray-600">ISO 9001:2015 certified for quality management</p>
            <p className="text-xs mb-3 text-gray-600">Trusted by organizations across:</p>
            <ul className="space-y-2 text-gray-700 text-sm mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Enterprises & Institutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Startups & SaaS Builders</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Retailers & Consumer Brands</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>B2B & Industrial Businesses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                <span>Public Sector & Government Bodies</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between px-6 py-6 cursor-pointer active:bg-[#e8e8e0]" style={{ backgroundColor: '#F3F3EE' }}>
            <div className="flex items-center gap-4">
              <img src="/iso.png" alt="ISO Certification" className="h-10 w-auto" />
              <span className="text-sm font-semibold text-gray-900">ΕΛΟΤ EN ISO 9001:2015</span>
            </div>
            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}