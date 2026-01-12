import { GridSection, GridContainer, GridCol } from "../../components/grid";

const StripedBackground = () => (
  <div 
    className="absolute inset-0 w-full h-full" 
    style={{ 
      backgroundImage: 'linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)',
      backgroundSize: '6.00px 6.00px',
    }}
  />
);

export default function FeatureSection() {
  return (
    <>
      {/* Desktop */}
      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#F3F5F5]"
        className="relative"
      >
        <div 
          className="hidden lg:block absolute inset-y-0 left-0 w-[5.56%]"
        >
          <StripedBackground />
        </div>
        <div 
          className="hidden lg:block absolute inset-y-0 right-0 w-[5.56%]"
        >
          <StripedBackground />
        </div>

        <GridContainer className="py-16">
          <GridCol span="AB" className="flex items-center justify-start pl-29 pb-25 pt-5">
            <div className="text-left pl-28">
              <h2 className="text-4xl font-extrabold text-black mb-4 ">
                Made to Match the Way You Sell
              </h2>
              <p className="text-black text-xl mb-6 leading-relaxed">
                No two businesses sell the same way. That's why no single<br/>
                platform works for all. We build commerce systems around<br/>
                <span className="font-bold">how you operate:</span>
              </p>
              <div className="flex justify-start gap-2.5">
                <div className="w-10 h-10 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
                  <img src="icons/pc-and-smartphone.svg" alt="PC and Smartphone" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
                  <img src="icons/server.svg" alt="Server" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
                  <img src="icons/cloud-network3.svg" alt="Cloud Network" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
                  <img src="icons/shield-check.svg" alt="Shield Check" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </GridCol>
          <GridCol span="CD" className="flex items-center pl-32">
            <div className="max-w-md">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-[#8044DE] text-2xl font-bold leading-none">•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">Launch a fast, mobile-first eShop</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8044DE] text-2xl font-bold leading-none">•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">Scale to B2B or hybrid models</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8044DE] text-2xl font-bold leading-none">•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">Manage thousands of SKUs with ease</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8044DE] text-2xl font-bold leading-none">•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">Integrate ERP, CRM, or logistics providers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8044DE] text-2xl font-bold leading-none">•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">Expand with portals, mobile apps, or automations</span>
                </li>
              </ul>
            </div>
          </GridCol>

        </GridContainer>
      </GridSection>

      {/* Mobile*/}
      <section className="lg:hidden px-6 pt-8 pb-8 bg-[#F3F5F5]">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-black mb-3 leading-tight">
            Made to Match the Way You Sell
          </h2>
          <p className="text-black text-l mb-5 leading-relaxed">
            No two businesses sell the same way. That's why no single platform works for all. We build commerce systems around <span className="font-bold">how you operate:</span>
          </p>
          
          <div className="flex justify-left gap-3 mb-6">
            <div className="w-12 h-12 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
              <img src="icons/pc-and-smartphone.svg" alt="PC and Smartphone" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
              <img src="icons/server.svg" alt="Server" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
              <img src="icons/cloud-network3.svg" alt="Cloud Network" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-[#8044DE] rounded-lg flex items-center justify-center text-white">
              <img src="icons/shield-check.svg" alt="Shield Check" className="w-6 h-6" />
            </div>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#8044DE] text-xl mt-1">•</span>
              <span className="text-gray-700 text-base leading-relaxed">Launch a fast, mobile-first eShop</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8044DE] text-xl mt-1">•</span>
              <span className="text-gray-700 text-base leading-relaxed">Scale to B2B or hybrid models</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8044DE] text-xl mt-1">•</span>
              <span className="text-gray-700 text-base leading-relaxed">Manage thousands of SKUs with ease</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8044DE] text-xl mt-1">•</span>
              <span className="text-gray-700 text-base leading-relaxed">Integrate ERP, CRM, or logistics providers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8044DE] text-xl mt-1">•</span>
              <span className="text-gray-700 text-base leading-relaxed">Expand with portals, mobile apps, or automations</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}