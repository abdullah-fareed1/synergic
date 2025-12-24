"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const BuildFusionBottomSection: React.FC = () => {
  const [hoveredFusion, setHoveredFusion] = useState<boolean>(false);

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="bg-[#111D2B]">
        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, true, false, true]}
          className="text-white border-t border-b border-gray-700"
          desktopOnly={true}
        >
          <GridContainer className="items-start">
          {/* LEFT — A-B */}
          <GridCol span="AB" className="relative">
            <div className="py-16 px-5">
              <div className="space-y-6 pl-2">
                <p className="text-sm text-gray-400 tracking-widest uppercase">
                  FUSION PLATFORM
                </p>
                
                <h2 className="text-5xl font-bold leading-tight">
                  Engineered for Your Business
                </h2>
                
                <div className="inline-block">
                  <span className="bg-[#FB3B22] text-white px-4 py-2 text-sm font-medium">
                    Scale. Control. Complexity ?
                  </span>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Solved with Fusion — the intelligent platform that runs your applications.
                </p>
              </div>
            </div>

            {/* CTA btn */}
            <div 
              className="border-t border-b border-gray-700 hover:bg-white/5 transition-colors cursor-pointer group"
              onMouseEnter={() => setHoveredFusion(true)}
              onMouseLeave={() => setHoveredFusion(false)}
            >
              <div className="flex items-center justify-between px-5 py-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Learn more</p>
                  <h3 className="text-xl font-bold group-hover:text-gray-300 transition-colors">
                    How Fusion Powers Your Business
                  </h3>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </GridCol>

          {/* RIGHT — C-D section*/}
          <GridCol span="CD" className="relative">
            <div className="relative aspect-4/3">
              <img 
                src="/fusion.webp" 
                alt="FusionMesh Platform Dashboard"
                className="w-full h-full object-cover"
              />
              {/* FusionMesh */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-[#00CED1]">Fusion</span>
                  <span className="text-white">Mesh</span>
                  <span className="text-[#00CED1] text-sm align-super">™</span>
                </h3>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>
      <div className="bg-[#111D2B] h-12 hidden lg:block"></div>
      </div>

      {/* MOBILE VERSION */}
      <section className="lg:hidden bg-[#111D2B] text-white relative">
        {/* Left Vertical Line */}
        <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-700"></div>
        {/* Right Vertical Line */}
        <div className="absolute right-[5.56%] top-0 bottom-0 w-px bg-gray-700"></div>
        
        <div className="mx-[5.56%]">
          {/* Image Mobile */}
          <div className="relative">
            <div className="relative aspect-4/3">
              <img 
                src="/fusion.webp" 
                alt="FusionMesh Platform Dashboard"
                className="w-full h-full object-cover"
              />
              {/* FusionMesh */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl sm:text-2xl font-bold">
                  <span className="text-[#00CED1]">Fusion</span>
                  <span className="text-white">Mesh</span>
                  <span className="text-[#00CED1] text-xs align-super">™</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Content*/}
          <div className="py-12 space-y-6 pl-3">
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              FUSION PLATFORM
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Engineered for Your Business
            </h2>
            
            <div className="inline-block">
              <span className="bg-[#FB3B22] text-white px-4 py-2 text-sm font-medium">
                Scale. Control. Complexity ?
              </span>
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed">
              Solved with Fusion — the intelligent platform that runs your applications.
            </p>
          </div>

          {/* Learn More btn*/}
          <div 
            className="border-t border-b border-gray-700 hover:bg-white/5 transition-colors cursor-pointer group"
            onMouseEnter={() => setHoveredFusion(true)}
            onMouseLeave={() => setHoveredFusion(false)}
          >
            <div className="flex items-center justify-between py-4 pl-2 pr-2">
              <div>
                <p className="text-sm text-gray-400 mb-1">Learn more</p>
                <h3 className="text-lg group-hover:text-gray-300 transition-colors">
                  How Fusion Powers Your Business
                </h3>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildFusionBottomSection;