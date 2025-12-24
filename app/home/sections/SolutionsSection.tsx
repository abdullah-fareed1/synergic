"use client";

import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, Store, Package, RefreshCw, Lightbulb, Plug } from 'lucide-react';

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('enterprise');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filters = [
    { id: 'enterprise', label: 'enterprise' },
    { id: 'commerce', label: 'commerce' },
    { id: 'integrations', label: 'integrations' },
    { id: 'ai-data', label: 'AI & Data' }
  ];

  const solutions: Solution[] = [
    {
      id: 'b2c',
      icon: <ShoppingCart className="w-8 h-8" strokeWidth={1.5} />,
      title: 'B2C eCommerce',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    },
    {
      id: 'b2b',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
      title: 'B2B Commerce Platforms',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    },
    {
      id: 'marketplaces',
      icon: <Store className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Marketplaces',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    },
    {
      id: 'pim',
      icon: <Package className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Product Information Management (PIM)',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    },
    {
      id: 'oms',
      icon: <RefreshCw className="w-8 h-8" strokeWidth={1.5} />,
      title: 'Order Management Systems (OMS)',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    },
    {
      id: 'ai',
      icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
      title: 'AI enhanced Product Discovery & Recommendations',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    },
    {
      id: 'crm',
      icon: <Plug className="w-8 h-8" strokeWidth={1.5} />,
      title: 'CRM & ERP Integration',
      description: "Every organization is different. That's why our solutions aren't just off-the-shelf."
    }
  ];

  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      {/* Vertical gridlines - only on desktop */}
      <div className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      <div className="hidden lg:block absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      <div className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      <div className="hidden lg:block absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      {/* Content container */}
      <div className="relative z-10 px-4 lg:px-0">
        {/* Header - starts from gridline 1 */}
        <div className="lg:ml-[5.56%] lg:mr-[5.56%] mb-12">
          <p className="text-m text-black font-bold mb-2 tracking-wide uppercase">
            SOLUTIONS WE DELIVER
          </p>
          <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-[#111D2B] mb-4 leading-tight">
            Powerful digital solutions on modern technological platforms
          </h2>
          <p className="text-base text-black max-w-3xl">
            Our modular, API-driven framework empowers you to create, customize, and expand without constraints
          </p>
        </div>

        {/* Beige section with horizontal lines and filters */}
        <div className="relative mb-12">
          {/* Top horizontal line - full width */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-300 opacity-30" />
          
          {/* Beige background */}
          <div className="lg:mx-[5.56%] bg-[#F3F3EE] py-6 px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <span className="text-gray-700 font-medium text-center lg:text-left">Solutions for :</span>
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3 flex-1">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-2.5 rounded-lg lg:rounded-full text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter.id
                        ? 'bg-[#111D2B] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors justify-center lg:justify-start">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm">Reset</span>
              </button>
            </div>
          </div>
          
          {/* Bottom horizontal line - full width */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400 opacity-30" />
        </div>

        {/* Tagline */}
        <div className="lg:ml-[5.56%] lg:mr-[5.56%] mb-8">
          <p className="text-lg font-bold text-gray-800">
            From eShops to <span className="text-[#FB3B22] font-semibold">enterprise-grade</span> omnichannel ecosystems.
          </p>
        </div>

        {/* Solutions Grid - 2 rows x 4 columns, fitting to gridlines */}
        <div className="relative">
          {/* Top border line for cards - full viewport width matching gridlines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-300 opacity-30" style={{ marginLeft: '-100vw', marginRight: '-100vw', width: '200vw' }} />
          
          <div className="lg:ml-[5.56%] lg:mr-[5.56%]">
            {/* First Row - 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-0">
              {solutions.slice(0, 4).map((solution) => (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative transition-all duration-300 cursor-pointer group border-l border-r border-b border-t border-gray-300 flex flex-col ${
                    hoveredCard === solution.id
                      ? 'bg-[#FB3B22] text-white'
                      : 'bg-white text-gray-800'
                  } min-h-45 lg:min-h-70`}
                >
                  {/* Arrow icon on hover */}
                  {hoveredCard === solution.id && (
                    <div className="absolute top-4 right-4 z-10">
                      <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 17L17 7M17 7H7M17 7V17" 
                        />
                      </svg>
                    </div>
                  )}
                  
                  {/* Content wrapper - vertically centered */}
                  <div className="flex-1 flex flex-col justify-center p-6">
                    {/* Icon */}
                    <div className={`mb-4 ${hoveredCard === solution.id ? 'text-white' : 'text-gray-600'}`}>
                      {solution.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold mb-3 leading-tight">
                      {solution.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${
                      hoveredCard === solution.id ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 cards + 1 empty with diagonal stripes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {solutions.slice(4).map((solution) => (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative transition-all duration-300 cursor-pointer group border-l border-r border-b border-gray-200 flex flex-col ${
                    hoveredCard === solution.id
                      ? 'bg-[#FB3B22] text-white'
                      : 'bg-white text-gray-800'
                  } min-h-45 lg:min-h-70`}
                >
                  {/* Arrow icon on hover */}
                  {hoveredCard === solution.id && (
                    <div className="absolute top-4 right-4 z-10">
                      <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 17L17 7M17 7H7M17 7V17" 
                        />
                      </svg>
                    </div>
                  )}
                  
                  {/* Content wrapper*/}
                  <div className="flex-1 flex flex-col justify-center p-6">
                    {/* Icon */}
                    <div className={`mb-4 ${hoveredCard === solution.id ? 'text-white' : 'text-gray-600'}`}>
                      {solution.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold mb-3 leading-tight">
                      {solution.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${
                      hoveredCard === solution.id ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Empty card with diagonal stripes - bottom right - hidden on mobile */}
              <div 
                className="hidden lg:block bg-white border-r border-b border-gray-200 relative overflow-hidden min-h-70" 
                style={{ 
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, #e5e5e5 10px, #e5e5e5 11px)',
                }}
              >
                {/* Diagonal stripe pattern */}
              </div>
            </div>
          </div>
          
          {/* Bottom border line for cards - full viewport width matching gridlines */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 opacity-30" style={{ marginLeft: '-100vw', marginRight: '-100vw', width: '200vw' }} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;