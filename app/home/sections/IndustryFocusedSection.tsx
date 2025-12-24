'use client';

import { useState } from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const IndustryFocusedSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const industries = [
    {
      title: 'Enterprises',
      subtitle: 'Integrate. Automate. Modernize.',
      services: [
        'Enterprise Apps',
        'Customer & Partner Portals',
        'Workflow Automation & AI Agents',
        'System Integration & APIs',
        'Data Integration & BI',
        'Legacy Modernization',
        'AI-Enhanced Search'
      ],
      isHighlighted: true
    },
    {
      title: 'Startups & SaaS Builders',
      subtitle: '',
      services: [],
      isHighlighted: false
    },
    {
      title: 'Retailers & B2B',
      subtitle: '',
      services: [],
      isHighlighted: false
    },
    {
      title: 'Public Sector',
      subtitle: '',
      services: [],
      isHighlighted: false
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <>
      {/* DESKTOP VERSION - Grid Layout */}
      <div className="hidden lg:block">
        {/* Section 1: Header */}
        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="text-white pt-20 pb-12"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="ABCD" className="px-5">
              <p className="text-[#FB3B22] text-sm font-bold uppercase tracking-wider mb-4">
                INDUSTRY-FOCUSED SOLUTIONS
              </p>
              <h2 className="text-5xl font-bold leading-tight max-w-4xl">
                From startups to enterprises, we build what works at any scale
              </h2>
            </GridCol>
          </GridContainer>
        </GridSection>
        

        {/* Section 2: Cards with Background Image */}
        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="text-white border-t border-b border-gray-700 relative"
          desktopOnly={true}
        >
          {/* Diagonal Striped Background - Left Side */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-[5.56%] pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 8px,
                rgba(100, 116, 139, 0.1) 10px,
                rgba(100, 116, 139, 0.1) 11px
              )`
            }}
          />
          
          <GridContainer className="min-h-150 relative">
            {/* Background Image Column - ABCD */}
            <GridCol 
              span="ABCD" 
              position="absolute"
              className="z-0 h-full"
              style={{
                backgroundImage: 'url(/industryfocusedsolutions.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="h-150"></div>
            </GridCol>
            
            {/* Column A - Enterprises */}
            <GridCol span="A" className="relative z-10 group">
              <div className="h-150 bg-black/40 hover:bg-black/70 transition-all duration-300 mx-0.5">
                <div className="h-full flex flex-col justify-start items-start text-left p-8 pl-12">
                  <h3 className="text-2xl font-bold mb-2 text-[#FB3B22]">
                    {industries[0].title}
                  </h3>
                  <p className="text-gray-400 text-base mb-6">
                    {industries[0].subtitle}
                  </p>
                  <ul className="space-y-3">
                    {industries[0].services.map((service, idx) => (
                      <li 
                        key={idx}
                        className="text-gray-300 text-base hover:text-white transition-colors cursor-pointer"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GridCol>

            {/* Column B - Startups & SaaS */}
            <GridCol span="B" className="relative z-10 group">
              <div className="h-150 bg-black/40 hover:bg-black/70 transition-all duration-300 mx-0.5">
                <div className="h-full flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {industries[1].title}
                  </h3>
                </div>
              </div>
            </GridCol>

            {/* Column C - Retailers & B2B */}
            <GridCol span="C" className="relative z-10 group">
              <div className="h-150 bg-black/40 hover:bg-black/70 transition-all duration-300 mx-0.5">
                <div className="h-full flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {industries[2].title}
                  </h3>
                </div>
              </div>
            </GridCol>

            {/* Column D - Public Sector */}
            <GridCol span="D" className="relative z-10 group">
              <div className="h-150 bg-black/40 hover:bg-black/70 transition-all duration-300 mx-0.5">
                <div className="h-full flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {industries[3].title}
                  </h3>
                </div>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>

        {/* Spacer section below cards */}
        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="h-16"
          desktopOnly={true}
        >
          <GridContainer>
            <GridCol span="ABCD">
              <div></div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* MOBILE VERSION - Carousel */}
      <section className="lg:hidden bg-[#111D2B] text-white">
        {/* Header */}
        <div className="px-[5.56%] py-12">
          <p className="text-[#FB3B22] text-xs font-bold uppercase tracking-wider mb-4">
            INDUSTRY-FOCUSED SOLUTIONS
          </p>
          <h2 className="text-2xl font-bold leading-tight">
            From startups to enterprises, we build what works at any scale
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative" style={{ height: '50vh' }}>
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-center"
            style={{ 
              backgroundImage: 'url(/industryfocusedsolutions.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
          
          <div className="h-full overflow-hidden relative z-10">
            <div 
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`w-full h-full shrink-0 ${
                    industry.isHighlighted 
                      ? 'bg-black/85' 
                      : 'bg-black/60'
                  }`}
                >
                  <div className={`h-full flex flex-col ${industry.isHighlighted ? 'justify-start items-start text-left p-8' : 'justify-center items-center text-center p-8'}`}>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      industry.isHighlighted ? 'text-[#FB3B22]' : 'text-white'
                    }`}>
                      {industry.title}
                    </h3>
                    
                    {industry.subtitle && (
                      <p className="text-gray-400 text-base mb-6">
                        {industry.subtitle}
                      </p>
                    )}
                    
                    {industry.services.length > 0 && (
                      <ul className="space-y-4 mt-4">
                        {industry.services.map((service, idx) => (
                          <li 
                            key={idx}
                            className="text-gray-300 text-base"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="bg-[#0A1929] py-6 flex justify-center">
          <div className="flex gap-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide 
                    ? 'w-8 bg-[#FB3B22]' 
                    : 'w-1.5 bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryFocusedSection;