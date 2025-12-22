"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface BuildOption {
  id: string;
  title: string;
}

const BuildFusionSection: React.FC = () => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [hoveredFusion, setHoveredFusion] = useState<boolean>(false);

  const buildOptions: BuildOption[] = [
    { id: 'online-store', title: 'Modern Online Store' },
    { id: 'b2b-platform', title: 'B2B Commerce Platform' },
    { id: 'saas-platform', title: 'SaaS Platform You Can Grow' },
    { id: 'product-catalog', title: 'Smart Product Catalog or PIM' },
    { id: 'internal-system', title: 'Custom Business Internal System' },
    { id: 'customer-portal', title: 'Portal for Your Customers or Partners' }
  ];

  return (
    <section className="w-full bg-[#111D2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What Do You Want to Build Section */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-sm text-gray-400 tracking-wider uppercase">
                CHOOSE. COMBINE. GROW.
              </p>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                What Do You Want to Build?
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">Not sure where to start?</p>
                <p className="text-base leading-relaxed">
                  Just tell us what you're aiming to build — we'll bring the right technology, logic, and integrations to make it work.
                </p>
              </div>
            </div>

            {/* Right Grid */}
            <div className="space-y-4">
              {/* First 4 options in 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {buildOptions.slice(0, 4).map((option) => (
                  <div
                    key={option.id}
                    onMouseEnter={() => setHoveredOption(option.id)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className="relative border border-gray-700 p-6 rounded-lg cursor-pointer transition-all duration-300 hover:border-gray-500 group min-h-30 flex items-center"
                  >
                    <h3 className="text-lg font-medium leading-snug pr-8">
                      {option.title}
                    </h3>
                    <ArrowUpRight 
                      className="absolute top-4 right-4 w-5 h-5 text-gray-500 group-hover:text-white transition-colors" 
                    />
                  </div>
                ))}
              </div>

              {/* Next 2 options in 2x1 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {buildOptions.slice(4, 6).map((option) => (
                  <div
                    key={option.id}
                    onMouseEnter={() => setHoveredOption(option.id)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className="relative border border-gray-700 p-6 rounded-lg cursor-pointer transition-all duration-300 hover:border-gray-500 group min-h-30 flex items-center"
                  >
                    <h3 className="text-lg font-medium leading-snug pr-8">
                      {option.title}
                    </h3>
                    <ArrowUpRight 
                      className="absolute top-4 right-4 w-5 h-5 text-gray-500 group-hover:text-white transition-colors" 
                    />
                  </div>
                ))}
              </div>

              {/* CTA Button - Full Width */}
              <div 
                className="relative bg-[#2b7856] hover:bg-[#4A8A6D] p-6 rounded-lg cursor-pointer transition-all duration-300 group"
                onMouseEnter={() => setHoveredOption('custom')}
                onMouseLeave={() => setHoveredOption(null)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/80 mb-1">Beyond the Usual ?</p>
                    <h3 className="text-xl font-bold">Let's Build Your System Together</h3>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fusion Platform Section */}
        <div className="pt-0 pb-16 lg:pb-20 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-sm text-gray-400 tracking-wider uppercase">
                FUSION PLATFORM
              </p>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
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

              {/* Learn More Link */}
              <div 
                className="pt-8 border-t border-gray-800"
                onMouseEnter={() => setHoveredFusion(true)}
                onMouseLeave={() => setHoveredFusion(false)}
              >
                <div className="flex items-center justify-between cursor-pointer group">
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
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden">
                {/* Placeholder for fusion.png image */}
                <div className="relative aspect-4/3 bg-linear-to-br from-gray-800 to-gray-900">
                  <img 
                    src="/fusion.png" 
                    alt="FusionMesh Platform Dashboard"
                    className="w-full h-full object-cover"
                  />
                  {/* FusionMesh Logo Overlay */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      <span className="text-[#00CED1]">Fusion</span>
                      <span className="text-white">Mesh</span>
                      <span className="text-[#00CED1] text-sm align-super">™</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildFusionSection;