import React from "react";

const CustomersLogoSection: React.FC = () => {
  const gridItems = [
    { hasLogo: true, src: "logos/bn.png", alt: "BN Logo" },
    { hasLogo: false },
    { hasLogo: true, src: "logos/conyx.png", alt: "Conyx Logo" },
    { hasLogo: false },
    { hasLogo: false },
    { hasLogo: true, src: "logos/gimell.png", alt: "Gimell Logo" },
    { hasLogo: false },
    { hasLogo: true, src: "logos/cyclops.png", alt: "Cyclops Logo" },
    { hasLogo: true, src: "logos/arlington.png", alt: "Arlington Logo" },
    { hasLogo: false },
    { hasLogo: true, src: "logos/beefeater.png", alt: "Beefeater Logo" },
    { hasLogo: false },
  ];

  return (
    <section className="w-full bg-[#F3F5F5] relative overflow-hidden">
      <div className="w-full h-4 bg-[#111D2B]" />

      <div className="hidden lg:block relative py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        </div>

        <div className="relative z-10 flex">
          <div style={{ width: "50%" }}>
            <div className="pl-[15%] pr-[11.11%] h-full flex flex-col justify-center space-y-6">
              <p className="text-sm font-extrabold text-gray-900 tracking-wider uppercase">
                CUSTOMERS
              </p>
              <h2 className="text-5xl font-extrabold text-[#111D2B] leading-tight">
                Working with innovative partners creating unique digital
                experiences
              </h2>
            </div>
          </div>

          <div className="relative" style={{ width: "50%", paddingRight: "5.56%" }}>
            <div className="grid grid-cols-4 border-x border-gray-300">
              {gridItems.map((item, index) => {
                const row = Math.floor(index / 4);
                const col = index % 4;

                return (
                  <div
                    key={index}
                    className={`relative aspect-square flex items-center justify-center p-8
                      ${row !== 0 ? "border-t" : ""}
                      ${index < gridItems.length - 4 ? "border-b" : ""}
                      ${col !== 3 ? "border-r" : ""}
                      border-gray-300`}
                  >
                    {index === 0 && (
                      <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 flex items-center justify-center z-10">
                        <div className="w-full h-0.5 bg-gray-600" />
                        <div className="absolute w-0.5 h-full bg-gray-600" />
                      </div>
                    )}
                    
                    {index === 7 && (
                      <div className="absolute -top-2.5 left-[-10px] w-5 h-5 flex items-center justify-center z-10">
                        <div className="w-full h-0.5 bg-gray-600" />
                        <div className="absolute w-0.5 h-full bg-gray-600" />
                      </div>
                    )}
                    
                    {index === 10 && (
                      <div className="absolute -top-2.5 left-[-10px] w-5 h-5 flex items-center justify-center z-10">
                        <div className="w-full h-0.5 bg-gray-600" />
                        <div className="absolute w-0.5 h-full bg-gray-600" />
                      </div>
                    )}

                    {item.hasLogo && (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="absolute -top-2.5 left-[-10px] w-5 h-5 flex items-center justify-center z-20">
              <div className="w-full h-0.5 bg-gray-600" />
              <div className="absolute w-0.5 h-full bg-gray-600" />
            </div>
            
            <div className="absolute -top-2.5 right-24 w-5 h-5 flex items-center justify-center z-20">
              <div className="w-full h-0.5 bg-red-600" />
              <div className="absolute w-0.5 h-full bg-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="space-y-6">
          <p className="text-sm font-extrabold text-gray-900 tracking-wider uppercase">
            CUSTOMERS
          </p>

          <h2 className="text-4xl font-extrabold text-[#111D2B]">
            Working with innovative partners creating unique digital experiences
          </h2>

          <p className="text-base text-gray-600 max-w-md">
            Solved with Fusion – the intelligent platform that runs your
            applications.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-4 border-l border-r border-gray-400">
            {gridItems.map((item, index) => {
              const row = Math.floor(index / 4);
              const col = index % 4;
              return (
                <div
                  key={index}
                  className={`relative aspect-square flex items-center justify-center p-6
                    ${row !== 0 ? "border-t" : ""}
                    ${col !== 3 ? "border-r" : ""}
                    border-gray-300`}
                >
                  {index === 0 && (
                    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 flex items-center justify-center z-10">
                      <div className="w-full h-0.5 bg-gray-600" />
                      <div className="absolute w-0.5 h-full bg-gray-600" />
                    </div>
                  )}
                  
                  {index === 7 && (
                    <div className="absolute -top-1.5 left-[-6px] w-3 h-3 flex items-center justify-center z-10">
                      <div className="w-full h-0.5 bg-gray-600" />
                      <div className="absolute w-0.5 h-full bg-gray-600" />
                    </div>
                  )}
                  
                  {index === 10 && (
                    <div className="absolute -top-1.5 left-[-6px] w-3 h-3 flex items-center justify-center z-10">
                      <div className="w-full h-0.5 bg-gray-600" />
                      <div className="absolute w-0.5 h-full bg-gray-600" />
                    </div>
                  )}

                  {item.hasLogo && (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="absolute top-[-6px] left-[-6px] w-3 h-3 flex items-center justify-center z-20">
            <div className="w-full h-0.5 bg-gray-600" />
            <div className="absolute w-0.5 h-full bg-gray-600" />
          </div>
          
          <div className="absolute top-[-6px] right-[-6px] w-3 h-3 flex items-center justify-center z-20">
            <div className="w-full h-0.5 bg-red-600" />
            <div className="absolute w-0.5 h-full bg-red-600" />
          </div>
        </div>
      </div>

      <div className="w-full h-4 bg-[#111D2B]" />
    </section>
  );
};

export default CustomersLogoSection;