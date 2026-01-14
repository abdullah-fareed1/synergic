import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: "icons/shopping-cart.svg",
    title: "B2C eCommerce",
    description: "fast, mobile-first online stores for brands and merchants"
  },
  {
    icon: "icons/factory-thin.svg",
    title: "B2B Commerce Platforms",
    description: "custom pricing, roles, bulk orders, automations"
  },
  {
    icon: "icons/shop.svg",
    title: "Marketplaces",
    description: "multi-vendor and multi-channel commerce",
    comingSoon: true,
    tags: ["commerce", "startups & saas", "public sector"]
  },
  {
    icon: "icons/boxes.svg",
    title: "Product Information Management (PIM)",
    description: "centralized product management across suppliers and channel"
  },
  {
    icon: "icons/inbox-up.svg",
    title: "Order Management Systems (OMS)",
    description: "automated order processing, fulfillment, and inventory control"
  },
  {
    icon: "icons/bulb.svg",
    title: "AI enhanced Product Discovery & Recommendations",
    description: "semantic search, personalization, and recommendations",
    comingSoon: true
  },
  {
    icon: "icons/plug-disconnected.svg",
    title: "CRM & ERP Integration",
    description: "seamless connections to back-office systems"
  }
];

const StripedBackground = () => (
  <div 
    className="absolute inset-0 w-full h-full" 
    style={{ 
      backgroundImage: 'linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)',
      backgroundSize: '6.00px 6.00px',
    }}
  />
);

const SolutionsSection = () => {
  return (
    <>
      <div className="hidden lg:block w-full h-px bg-gray-400/30" />

      <GridSection 
        showLines={[true, true, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="h-25">
          <GridCol span="AB" className="h-full relative">
            <StripedBackground />
          </GridCol>
          <GridCol span="CD" className="flex items-stretch h-full">
            <div className="w-full border border-gray-400/30 bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer flex items-center">
              <div className="flex items-center justify-between p-6 w-full">
                <div>
                  <p className="text-sm text-white/80 mb-1">Talk to an eCommerce expert</p>
                  <h3 className="text-xl text-white">Let's create your new eShop</h3>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer>
          <GridCol span="AB" className="flex flex-col justify-center pl-6 py-12">
            <p className="text-sm font-bold text-black mb-2">SOLUTIONS WE DELIVER</p>
            <h2 className="text-3xl font-extrabold text-black mb-3 leading-tight">What You Can Build</h2>
            <p className="text-black text-2xl leading-relaxed">
              Start with what you need, then expand as you grow.
              <br />
              From eShops to enterprise-grade omnichannel ecosystems.
            </p>
          </GridCol>
          <GridCol span="CD" className="relative">
            <StripedBackground />
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, true, false, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute left-0 right-0 h-px bg-gray-400/30" style={{ top: '0' }} />
        <GridContainer className="min-h-96">
          {solutions.slice(0, 4).map((solution, index) => {
            const spans: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
            return (
              <GridCol key={solution.title} span={spans[index]} className={index < 3 ? "border-r border-gray-300/30" : ""}>
                <div className="pt-10 pb-8 px-6 flex flex-col h-full">
                  <div className="h-10 w-10 mt-2 mb-8 flex items-center justify-center">
                    <img src={solution.icon} alt={solution.title} className="w-10 h-10 opacity-80 object-contain" />
                  </div>
                  <div className="min-h-6 mb-2">
                    {solution.comingSoon && (
                      <span className="bg-[#FFFF00] text-black text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-9 mt-2 leading-tight">{solution.title}</h3>
                  <p className="text-black text-xl leading-relaxed">{solution.description}</p>
                  {solution.tags && solution.tags.length > 0 && (
                    <div className="flex gap-3 flex-wrap mt-auto pt-6">
                      {solution.tags.map((tag, i) => (
                        <span key={i} className="text-sm text-gray-400">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </GridCol>
            );
          })}
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, true, false, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute left-0 right-0 h-px bg-gray-400/30" style={{ top: '0' }} />
        <GridContainer className="min-h-96">
          {solutions.slice(4, 7).map((solution, index) => {
            const spans: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
            return (
              <GridCol key={solution.title} span={spans[index]} className={index < 2 ? "border-r border-gray-300/30" : ""}>
                <div className="pt-10 pb-8 px-6 flex flex-col h-full">
                  <div className="h-10 w-10 mt-2 mb-8 flex items-center justify-center">
                    <img src={solution.icon} alt={solution.title} className="w-10 h-10 opacity-80 object-contain" />
                  </div>
                  <div className="min-h-6 mb-2">
                    {solution.comingSoon && (
                      <span className="bg-[#FFFF00] text-black text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-9 mt-2 leading-tight">{solution.title}</h3>
                  <p className="text-black text-xl leading-relaxed">{solution.description}</p>
                  {solution.tags && solution.tags.length > 0 && (
                    <div className="flex gap-3 flex-wrap mt-auto pt-6">
                      {solution.tags.map((tag, i) => (
                        <span key={i} className="text-sm text-gray-400">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </GridCol>
            );
          })}
          <GridCol span="D" className="relative">
            <StripedBackground />
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute left-0 right-0 h-px bg-gray-400/30" style={{ top: '0' }} />
        <GridContainer className="h-25">
          <GridCol span="AB" className="h-full relative">
            <StripedBackground />
          </GridCol>
          <GridCol span="CD" className="h-full relative">
            <div />
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-white">
        <div className="bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer">
          <div className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-white/80 mb-1">Talk to an eCommerce expert</p>
              <h3 className="text-xl text-white">Let's create your new eShop</h3>
            </div>
            <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="px-6 pt-12 pb-6">
          <p className="text-sm font-bold text-gray-600 mb-2 tracking-wide">SOLUTIONS WE DELIVER</p>
          <h2 className="text-3xl font-extrabold text-black mb-4">What You Can Build</h2>
          <p className="text-black text-base leading-relaxed">
            Start with what you need, then expand as you grow. From eShops to enterprise-grade omnichannel ecosystems.
          </p>
        </div>

        {solutions.map((solution, index) => (
          <div key={solution.title} className={`px-6 py-6 ${index === solutions.length - 1 ? 'border-t border-b border-gray-300' : 'border-t border-gray-300'}`}>
            <div className="flex gap-4">
              <div className="shrink-0">
                <img src={solution.icon} alt={solution.title} className="w-10 h-10 opacity-80" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">{solution.title}</h3>
                <p className="text-black text-sm leading-relaxed">{solution.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SolutionsSection;