import React from "react";

const CustomersLogoSection: React.FC = () => {
  // Grid layout: 3 rows x 4 columns = 12 boxes
  const gridItems = [
    { hasLogo: true, src: "/bn.png", alt: "BN Logo" }, // Row 1, Col 1
    { hasLogo: false }, // Row 1, Col 2
    { hasLogo: true, src: "/cronyx.png", alt: "Conyx Logo" }, // Row 1, Col 3
    { hasLogo: false }, // Row 1, Col 4
    { hasLogo: false }, // Row 2, Col 1
    { hasLogo: true, src: "/gimell.png", alt: "Gimell Logo" }, // Row 2, Col 2
    { hasLogo: false }, // Row 2, Col 3
    { hasLogo: true, src: "/cyclops.png", alt: "Cyclops Logo" }, // Row 2, Col 4
    { hasLogo: true, src: "/arlington.png", alt: "Arlington Logo" }, // Row 3, Col 1
    { hasLogo: false }, // Row 3, Col 2
    { hasLogo: true, src: "/beefeater.png", alt: "Beefeater Logo" }, // Row 3, Col 3
    { hasLogo: false }, // Row 3, Col 4
  ];

  return (
    <section className="w-full bg-white relative">
      {/* Top Dark Border */}
      <div className="w-full h-4 bg-[#111D2B]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              CUSTOMERS
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111D2B] leading-tight">
              Working with innovative partners creating unique digital
              experiences
            </h2>
          </div>

          {/* Right Logo Grid - 3 rows x 4 columns */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-0 border-l border-r border-gray-300">
              {gridItems.map((item, index) => {
                const row = Math.floor(index / 4);
                const col = index % 4;
                const isFirstRow = row === 0;
                const isLastRow = row === 2;
                const isFirstCol = col === 0;
                const isLastCol = col === 3;

                return (
                  <div
                    key={index}
                    className={`
                      relative aspect-square flex items-center justify-center p-4 sm:p-6 md:p-8
                      ${!isFirstRow ? "border-t" : ""} 
                      ${!isLastCol ? "border-r" : ""} 
                      border-gray-300
                    `}
                  >
                    {/* Plus icons at intersections */}
                    {!isFirstRow && !isLastCol && (
                      <div className="absolute -top-2.25 -right-2.25 w-4.5 h-4.5 flex items-center justify-center z-10">
                        <div className="w-full h-0.5 bg-gray-300"></div>
                        <div className="absolute w-0.5 h-full bg-gray-300"></div>
                      </div>
                    )}

                    {/* Logo */}
                    {item.hasLogo && (
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"

                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Corner Plus Icons */}
            {/* Top-left corner */}
            <div className="absolute -top-2.25 -left-2.25 w-4.5 h-4.5 flex items-center justify-center z-10">
              <div className="w-full h-0.5 bg-gray-300"></div>
              <div className="absolute w-0.5 h-full bg-gray-300"></div>
            </div>

            {/* Top-right corner - RED */}
            <div className="absolute -top-2.25 -right-2.25 w-4.5 h-4.5 flex items-center justify-center z-10">
              <div className="w-full h-0.5 bg-[#FB3B22]"></div>
              <div className="absolute w-0.5 h-full bg-[#FB3B22]"></div>
            </div>

            {/* Bottom-left corner */}
            <div className="absolute -bottom-2.25 -left-2.25 w-4.5 h-4.5 flex items-center justify-center z-10">
              <div className="w-full h-0.5 bg-gray-300"></div>
              <div className="absolute w-0.5 h-full bg-gray-300"></div>
            </div>

            {/* Bottom-right corner */}
            <div className="absolute -bottom-2.25 -right-2.25 w-4.5 h-4.5 flex items-center justify-center z-10">
              <div className="w-full h-0.5 bg-gray-300"></div>
              <div className="absolute w-0.5 h-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Border */}
      <div className="w-full h-4 bg-[#111D2B]"></div>
    </section>
  );
};

export default CustomersLogoSection;
