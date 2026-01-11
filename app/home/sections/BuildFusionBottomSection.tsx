"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const BuildFusionBottomSection: React.FC = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className="bg-[#111D2B]">
        <GridSection
          bgColor="bg-[#111D2B]"
          showLines={[true, false, false, false, true]}
          className="text-white border-t border-gray-700"
          desktopOnly={true}
        >
          <GridContainer className="items-stretch">
            <GridCol span="AB" className="relative flex flex-col">
              <div className="flex-1 px-5 flex items-center">
                <div className="space-y-6 pl-2 py-16">
                  <p className="text-sm text-gray-400 font-bold tracking-widest uppercase">
                    FUSION PLATFORM
                  </p>
                  
                  <h2 className="text-4xl font-extrabold leading-tight mb-8">
                    Engineered for Your Business
                  </h2>
                  
                  <div className="inline-block mt-4">
                    <span className="bg-[#FB3B22] text-white px-4 py-2 text-xl">
                      Scale. Control. Complexity ?
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-2xl leading-relaxed">
                    Solved with Fusion — the intelligent platform that<br />
                    runs your applications.
                  </p>
                </div>
              </div>

              <div className="border-t border-b border-gray-700 cursor-pointer">
                <div className="flex items-center justify-between px-5 py-6">
                  <div>
                    <p className="text-lg text-gray-400 mb-1">Learn more</p>
                    <h3 className="text-2xl">
                      How Fusion Powers Your Business
                    </h3>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className=" border-t border-b border-gray-700 h-20"></div>
              
              <div className="h-18"></div>
            </GridCol>

            <GridCol span="CD" className="relative border-l border-gray-700">
              <div className="relative aspect-4/3">
                <img 
                  src="images/fusion.webp" 
                  alt="FusionMesh Platform Dashboard"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, #111D2B 0%, transparent 25%)'
                  }}
                />
                <div className="absolute bottom-6 left-6 z-10">
                  <Image 
                    src="/logos/fusionmesh-logo.svg" 
                    alt="FusionMesh"
                    width={180}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-gray-700"></div>
              <div className="h-18"></div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* MOBILE */}
      <section className="lg:hidden bg-[#111D2B] text-white">
        <div className="relative w-full">
          <div className="relative aspect-4/3">
            <img 
              src="images/fusion.webp" 
              alt="FusionMesh Platform Dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 z-10">
              <Image 
                src="/logos/fusionmesh-logo.svg" 
                alt="FusionMesh"
                width={140}
                height={32}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-700"></div>
          <div className="absolute right-[5.56%] top-0 bottom-0 w-px bg-gray-700"></div>
          
          <div className="mx-[5.56%]">
            <div className="py-12 space-y-6 pl-3">
              <p className="text-sm text-gray-400 font-bold tracking-widest uppercase">
                FUSION PLATFORM
              </p>
              
              <h2 className="text-4xl font-bold leading-tight">
                Engineered for Your<br />
                Business
              </h2>
              
              <div className="inline-block">
                <span className="bg-[#FB3B22] text-white px-4 py-2 text-base">
                  Scale. Control. Complexity ?
                </span>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed">
                Solved with Fusion — the intelligent platform<br />
                that runs your applications.
              </p>
            </div>

            <div className="border-t border-gray-700 cursor-pointer">
              <div className="flex items-center justify-between py-5 pl-2 pr-2">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Learn more</p>
                  <h3 className="text-lg">
                    How Fusion Powers Your Business
                  </h3>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildFusionBottomSection;