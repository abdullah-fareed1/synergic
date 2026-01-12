import React from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function ExpertandQualitySection() {
  return (
    <>
      <GridSection
        desktopOnly={true}
        showLines={[true, false, true, false, true]}
        bgColor="bg-white"
        className="py-20"
      >
        <GridContainer>
          <GridCol span="AB" className="py-16 px-12">
            <h2 className="text-4xl leading-tight font-extrabold mb-6 text-[#111D2B]">
              Our Experts
            </h2>
            <p className="text-2xl mb-6 text-[#111D2B] ">
              We operate with a core team of fifteen plus full-time<br/> 
              specialists — from architects and engineers to<br/> 
              analysts and designers.
            </p>
            <p className="text-lg mb-8 text-black leading-relaxed opacity-80">
              To deliver the best outcomes, we also draw from a trusted global network<br/> 
              of 30+ international experts who bring domain-specific knowledge and<br/>
              cutting-edge skills tailored to each project.
            </p>
            <p className="text-lg mb-4 text-black">This flexible model ensures:</p>
            <ul className="space-y-3 text-black text-lg">
              <li className="flex items-baseline">
                <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                <span>Access to specialized talent when you need it</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                <span>Scalable teams without compromise on quality</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                <span>Global insights applied to your local challenges</span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="CD" className="flex flex-col">
            <div className="py-16 px-12 flex-1">
              <h2 className="text-4xl leading-tight font-extrabold mb-6 text-black">
                Quality You Can Trust
              </h2>
              <p className="text-2xl mb-6 text-black leading-relaxed">
                We follow certified processes and hold ourselves to<br/>
                the highest standards of delivery and service.
              </p>
              <p className="text-lg mb-3 text-black ">ISO 9001:2015 certified for quality management</p>
              <p className="text-lg mb-6 text-black ">Trusted by organizations across:</p>
              <ul className="space-y-3 text-black text-lg">
                <li className="flex items-baseline">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                  <span>Enterprises & Institutions</span>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                  <span>Startups & SaaS Builders</span>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                  <span>Retailers & Consumer Brands</span>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                  <span>B2B & Industrial Businesses</span>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full shrink-0 -translate-y-0.5"></span>
                  <span>Public Sector & Government Bodies</span>
                </li>
              </ul>
            </div>

            <div 
              className="relative flex items-center px-12 py-6 cursor-pointer hover:bg-[#e8e8e0] transition-colors" 
              style={{ backgroundColor: '#F3F3EE' }}
            >
              <div className="flex items-center gap-4">
                <img src="/logos/iso.png" alt="ISO Certification" className="h-12 w-auto" />
                <span className="text-xl font-bold text-[#111D2B]">ΕΛΟΤ EN ISO 9001:2015</span>
              </div>
              <svg 
                className="absolute top-4 right-4 w-7 h-7 text-[#111D2B]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-white px-4 py-12">
        
        <div className="bg-white rounded-lg p-2 mb-6">
          <h2 className="text-2xl font-extrabold mb-4 text-gray-900">Our Experts</h2>
          <p className="text-md mb-5 text-black max-w-sm">
            We operate with a core team of fifteen plus full-time specialists — from architects and engineers to analysts and designers.
          </p>
          <p className="text-xs mb-5 text-gray-900 max-w-xs ">
            To deliver the best outcomes, we also draw from a trusted global network of 30+ international experts who bring domain-specific knowledge and cutting-edge skills tailored to each project.
          </p>
          <p className="text-xs mb-4 text-black ">This flexible model ensures:</p>
          <ul className="space-y-2 text-black text-xs mb-6">
            <li className="flex items-baseline">
              <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
              <span>Access to specialized talent when you need it</span>
            </li>
            <li className="flex items-baseline">
              <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
              <span>Scalable teams without compromise on quality</span>
            </li>
            <li className="flex items-baseline">
              <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
              <span>Global insights applied to your local challenges</span>
            </li>
          </ul>
        </div>

        
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-2">
            <h2 className="text-2xl font-extrabold mb-4 text-gray-900">Quality You Can Trust</h2>
            <p className="text-md mb-5 text-gray-900 max-w-sm">
              We follow certified processes and hold ourselves to the highest standards of delivery and service.
            </p>
            <p className="text-xs mb-3 text-gray-900">ISO 9001:2015 certified for quality management</p>
            <p className="text-xs mb-4 text-gray-900">Trusted by organizations across:</p>
            <ul className="space-y-2 text-gray-900 text-xs mb-6">
              <li className="flex items-baseline">
                <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
                <span>Enterprises & Institutions</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
                <span>Startups & SaaS Builders</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
                <span>Retailers & Consumer Brands</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
                <span>B2B & Industrial Businesses</span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full shrink-0 -translate-y-px"></span>
                <span>Public Sector & Government Bodies</span>
              </li>
            </ul>
          </div>

          <div 
            className="relative flex items-center px-6 py-6 cursor-pointer active:bg-[#e8e8e0]" 
            style={{ backgroundColor: '#F3F3EE' }}
          >
            <div className="flex items-center gap-4">
              <img src="/logos/iso.png" alt="ISO Certification" className="h-10 w-auto" />
              <span className="text-sm font-bold text-gray-900">ΕΛΟΤ EN ISO 9001:2015</span>
            </div>
            <svg 
              className="absolute top-3 right-3 w-6 h-6 text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}