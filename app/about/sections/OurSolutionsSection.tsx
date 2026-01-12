import React from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

export default function OurSolutionsSection() {
  return (
    <>
      <GridSection
        desktopOnly={true}
        showLines={[true, true, true, true, true]} 
        bgImage='images/solutions-bg.webp'
      >
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 55%, transparent 75%)',
          }}
        />
        
        <div className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50" />
        <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50" />
        <div className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-50" />
        
        <GridContainer className="h-full min-h-180 relative z-2">
          <GridCol span="AB" className="relative h-full min-h-180">
            <div className="absolute inset-0 flex items-center">
              <div className="pl-8 pb-28 pr-12">
                <h2 className="text-white text-5xl font-bold mb-8 italic">
                  Our Solutions
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  We design systems that do more than execute code — they solve<br />
                  real problems, unlock efficiency, and grow with you.
                </p>
              </div>
            </div>
            
            <div 
              className="absolute left-0 right-0 w-full"
              style={{ bottom: '20%' }}
            >
              <button 
                className="w-full flex items-center justify-between px-8 py-6 text-white text-lg transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(43, 120, 86, 0.75)',
                }}
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm text-white/70 mb-1">Need more info ?</span>
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

      <section 
        className="lg:hidden relative"
        style={{
          backgroundImage: 'url(images/solutions-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="relative px-6 pt-10 pb-6 z-10">
          <div className="relative">
            <h2 className="text-white text-3xl font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              We design systems that do more than execute code — they
              solve real problems, unlock efficiency, and grow with you.
            </p>
          </div>
        </div>
        
        <div className="h-40 relative z-10"></div>
        
        <button 
          className="relative z-10 w-full flex items-center justify-between px-6 py-5 text-white"
          style={{
            backgroundColor: 'rgba(43, 120, 86, 0.75)',
          }}
        >
          <div className="flex flex-col items-start">
            <span className="text-sm text-white/70 mb-1">Need more info ?</span>
            <span className="text-xl font-medium">Explore All Solutions</span>
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
      </section>
    </>
  );
}