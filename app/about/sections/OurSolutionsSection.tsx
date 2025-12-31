import React from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function OurSolutionsSection() {
  return (
    <>
      {/* Desktop */}
      <GridSection
        desktopOnly={true}
        showLines={[false, false, false, false, false]} // Turned off default lines
        bgColor="bg-black"
        className="relative overflow-hidden"
        minHeight="600px"
      >
        
        <div 
          className="absolute right-0 top-0 bottom-0 w-[67.5%] pointer-events-none -z-10"
          style={{
            backgroundImage: 'url(images/solutions-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* I added Manual gridlines on top, because wwe had a z index issue and the default gridlines were hiding below the bg img */}
        <div className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50 pointer-events-none" />
        <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50 pointer-events-none" />
        <div className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50 pointer-events-none" />
        <div className="hidden lg:block absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50 pointer-events-none" />
        
        <GridContainer className="items-center h-full min-h-[600px]">
          <GridCol span="AB" className="flex flex-col justify-center py-16">
            <div className="pl-12 pr-12">
              <h2 className="text-white text-5xl font-bold mb-8">
                Our Solutions
              </h2>
              <p className="text-white/90 text-lg mb-16 leading-relaxed">
                We design systems that do more than execute code — they solve<br />
                real problems, unlock efficiency, and grow with you.
              </p>
            </div>
            
            
            <div className="mt-auto">
              <button 
                className="w-full flex items-center justify-between px-8 py-6 text-white text-lg  transition-all duration-300 hover:bg-opacity-90"
                style={{
                  backgroundColor: 'rgba(43, 120, 86, 0.8)',
                }}
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm text-white/70 mb-1">Need more info?</span>
                  <span className="text-xl">Explore All Solutions</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                  <svg 
                    width="20" 
                    height="20" 
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
          
          <GridCol span="CD">
            <div></div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile Layout */}
      <section className="lg:hidden relative bg-black">
        
        <div className="relative h-64 w-full">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url(images/solutions-bg.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20">
            <h2 className="text-white text-4xl font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-white/90 text-base leading-relaxed">
              We design systems that do more than execute code — they solve
              real problems, unlock efficiency, and grow with you.
            </p>
          </div>
        </div>
        
        <button 
          className="w-full flex items-center justify-between px-6 py-6 text-white text-base font-medium"
          style={{
            backgroundColor: 'rgba(43, 120, 86, 0.8',
          }}
        >
          <div className="flex flex-col items-start">
            <span className="text-xs text-white/70 mb-1">Need more info?</span>
            <span className="text-lg">Explore All Solutions</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
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
      </section>
    </>
  );
}