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
    <section className="w-full bg-white relative overflow-hidden">
      {/* Top Dark Border */}
      <div className="w-full h-4 bg-[#111D2B]" />

      {/* DESKTOP */}
      <div className="hidden lg:block relative py-20">
        {/* GRIDLINES */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
          <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
        </div>

        <div className="relative z-10 flex">
          {/* LEFT SIDE */}
          <div style={{ width: "50%" }}>
            <div className="pl-[27.78%] pr-[11.11%] h-full flex flex-col justify-center space-y-6">
              <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                CUSTOMERS
              </p>
              <h2 className="text-5xl font-bold text-[#111D2B] leading-tight">
                Working with innovative partners creating unique digital
                experiences
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative" style={{ width: "50%", paddingRight: "5.56%" }}>
            <div className="grid grid-cols-4 border border-gray-300">
              {gridItems.map((item, index) => {
                const row = Math.floor(index / 4);
                const col = index % 4;

                return (
                  <div
                    key={index}
                    className={`relative aspect-square flex items-center justify-center p-8
                      ${row !== 0 ? "border-t" : ""}
                      ${col !== 3 ? "border-r" : ""}
                      border-gray-300`}
                  >
                    {row !== 0 && col !== 3 && (
                      <div className="absolute -top-2.5 -right-2.5 w-5 h-5 flex items-center justify-center z-10">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <div className="absolute w-0.5 h-full bg-gray-300" />
                      </div>
                    )}

                    {item.hasLogo && (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Corner Plus Icons */}
            {[
              "top-[-10px] left-[-10px]",
              "top-[-10px] right-[-10px]",
              "bottom-[-10px] left-[-10px]",
              "bottom-[-10px] right-[-10px]",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-5 h-5 flex items-center justify-center z-10`}
              >
                <div className="w-full h-0.5 bg-gray-400" />
                <div className="absolute w-0.5 h-full bg-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="space-y-6">
          <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
            CUSTOMERS
          </p>

          <h2 className="text-4xl font-bold text-[#111D2B]">
            Working with innovative partners creating unique digital experiences
          </h2>

          {/* ADDED — mobile-only text */}
          <p className="text-base text-gray-600 max-w-md">
            Solved with Fusion – the intelligent platform that runs your
            applications.
          </p>
        </div>

        <div className="grid grid-cols-4 border-l border-r border-gray-400">
          {gridItems.map((item, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;

            return (
              <div
                key={index}
                className={`aspect-square flex items-center justify-center p-6
                  ${row !== 0 ? "border-t" : ""}
                  ${col !== 3 ? "border-r" : ""}
                  border-gray-300`}
              >
                {item.hasLogo && (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain grayscale opacity-50"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Dark Border */}
      <div className="w-full h-4 bg-[#111D2B]" />
    </section>
  );
};

export default CustomersLogoSection;
