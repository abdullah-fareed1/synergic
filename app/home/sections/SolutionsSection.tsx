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
    <section className="w-full bg-[#F3F3EE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-600 mb-2 tracking-wide uppercase">
            SOLUTIONS WE DELIVER
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111D2B] mb-4 leading-tight">
            Powerful digital solutions on modern technological platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            Our modular, API-driven framework empowers you to create, customize, and expand without constraints
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-gray-700 font-medium mr-2">Solutions for :</span>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-[#111D2B] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <button className="ml-auto flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">Reset</span>
          </button>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-lg text-gray-800">
            From eShops to <span className="text-[#FB3B22] font-semibold">enterprise-grade</span> omnichannel ecosystems.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {solutions.slice(0, 4).map((solution) => (
            <div
              key={solution.id}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative p-6 rounded-lg transition-all duration-300 cursor-pointer group ${
                hoveredCard === solution.id
                  ? 'bg-[#FB3B22] text-white scale-[1.02]'
                  : 'bg-white text-gray-800 hover:shadow-lg'
              }`}
            >
              {/* Arrow icon on hover */}
              {hoveredCard === solution.id && (
                <div className="absolute top-4 right-4">
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
              
              <div className={`mb-4 ${hoveredCard === solution.id ? 'text-white' : 'text-gray-600'}`}>
                {solution.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 leading-tight">
                {solution.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                hoveredCard === solution.id ? 'text-white/90' : 'text-gray-600'
              }`}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.slice(4).map((solution) => (
            <div
              key={solution.id}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative p-6 rounded-lg transition-all duration-300 cursor-pointer group ${
                hoveredCard === solution.id
                  ? 'bg-[#FB3B22] text-white scale-[1.02]'
                  : 'bg-white text-gray-800 hover:shadow-lg'
              }`}
            >
              {/* Arrow icon on hover */}
              {hoveredCard === solution.id && (
                <div className="absolute top-4 right-4">
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
              
              <div className={`mb-4 ${hoveredCard === solution.id ? 'text-white' : 'text-gray-600'}`}>
                {solution.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 leading-tight">
                {solution.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                hoveredCard === solution.id ? 'text-white/90' : 'text-gray-600'
              }`}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;