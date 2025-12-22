'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IndustryFocusedSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <section className="w-full min-h-screen bg-[#111D2B] overflow-hidden px-6 md:px-12 lg:px-16 xl:px-20">
      {/* Content Container */}
      <div className="w-full min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="px-2 md:px-6 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12 bg-[#111D2B]">
          <p className="text-[#FB3B22] text-sm md:text-base font-bold uppercase tracking-wider mb-4">
            Industry-Focused Solutions
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
            From startups to enterprises, we build what works at any scale
          </h2>
        </div>

        {/* Cards Section - Desktop */}
        <div className="hidden md:grid md:grid-cols-4 flex-1 relative overflow-hidden rounded-lg">
          {/* Background Image for Cards */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/industryfocusedsolutions.webp)' }}
          />
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative z-10 border-r border-gray-700 last:border-r-0 ${
                industry.isHighlighted 
                  ? 'bg-black/80' 
                  : 'bg-black/40 hover:bg-black/60 transition-all duration-300'
              }`}
            >
              <div className={`h-full flex flex-col ${industry.isHighlighted ? 'justify-start' : 'justify-center items-center text-center'} p-6 lg:p-8 ${!industry.isHighlighted ? 'pt-[66%]' : ''}`}>
                <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${
                  industry.isHighlighted ? 'text-[#FB3B22]' : 'text-white'
                }`}>
                  {industry.title}
                </h3>
                
                {industry.subtitle && (
                  <p className="text-gray-400 text-sm lg:text-base mb-6">
                    {industry.subtitle}
                  </p>
                )}
                
                {industry.services.length > 0 && (
                  <ul className="space-y-3 mt-4">
                    {industry.services.map((service, idx) => (
                      <li 
                        key={idx}
                        className="text-gray-300 text-sm lg:text-base hover:text-white transition-colors cursor-pointer"
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

        {/* Cards Section - Mobile Carousel */}
        <div className="md:hidden relative w-full" style={{ height: '70vh' }}>
          {/* Background Image for Mobile Cards */}
          <div 
            className="absolute inset-0 bg-center"
            style={{ 
              backgroundImage: 'url(/industryfocusedsolutions.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
          
          <div className="h-full overflow-hidden relative z-10 rounded-lg">
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
                  <div className={`h-full flex flex-col ${industry.isHighlighted ? 'justify-start' : 'justify-center items-center text-center'} p-8 ${!industry.isHighlighted ? 'pt-[66%]' : ''}`}>
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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
      </div>
    </section>
  );
};

export default IndustryFocusedSection;