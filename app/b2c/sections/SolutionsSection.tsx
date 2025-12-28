import React from 'react';
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  comingSoon?: boolean;
  tags?: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, comingSoon, tags }) => {
  return (
    <div className="py-10 px-8 flex flex-col h-full">
      <div className="mb-6">
        <img src={icon} alt={title} className="w-10 h-10 opacity-60" />
      </div>
      <div className="min-h-6 mb-2">
        {comingSoon && (
          <span className="bg-[#FFFF00] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
            COMING SOON
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-black mb-3 leading-tight">{title}</h3>
      <p className="text-black text-sm leading-relaxed">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex gap-3 flex-wrap mt-auto pt-6">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-gray-400">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

const SolutionsSection = () => {
  const stripePattern = 'repeating-linear-gradient(45deg, transparent, transparent 8px, #e5e5e5 10px, #e5e5e5 11px)';

  return (
    <>
      <GridSection 
        showLines={[true, true, true, false, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="h-25">
          <GridCol 
            span="AB" 
            className="h-full"
            style={{ 
              backgroundImage: stripePattern,
              backgroundSize: 'auto'
            }}
          >
            <div className="h-full w-full"></div>
          </GridCol>

          <GridCol span="CD" className="flex items-stretch h-full">
            <div className="w-full border border-gray-400/30 bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer flex items-center">
              <div className="flex items-center justify-between p-6 w-full">
                <div>
                  <p className="text-sm text-white/80 mb-1">Talk to an eCommerce expert</p>
                  <h3 className="text-xl text-white">
                    Let's create your new eShop
                  </h3>
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
        minHeight="320px"
        desktopOnly={true}
      >
        <GridContainer className="min-h-80">
          <GridCol span="AB" className="flex flex-col justify-center pl-12 pb-12">
            <p className="text-sm font-semibold text-gray-600 mb-3 tracking-wider">SOLUTIONS WE DELIVER</p>
            <h2 className="text-4xl font-extrabold text-black mb-4 leading-tight">What You Can Build</h2>
            <p className="text-black text-base leading-relaxed max-w-md">
              Start with what you need, then expand as you grow.
              <br />
              From eShops to enterprise-grade omnichannel ecosystems.
            </p>
          </GridCol>

          <GridCol 
            span="CD" 
            className="min-h-80"
            style={{ 
              backgroundImage: stripePattern,
              backgroundSize: 'auto'
            }}
          >
            <div className="h-full w-full"></div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute left-[5.56%] right-[5.56%] h-px bg-gray-300 opacity-30" style={{ top: '0' }}></div>
        
        <GridContainer className="min-h-70">
          <GridCol span="A" className="border-r border-gray-300/30">
            <SolutionCard
              icon="/shopping-cart.svg"
              title="B2C eCommerce"
              description="fast, mobile-first online stores for brands and merchants"
            />
          </GridCol>

          <GridCol span="B" className="border-r border-gray-300/30">
            <SolutionCard
              icon="/factory-thin.svg"
              title="B2B Commerce Platforms"
              description="custom pricing, roles, bulk orders, automations"
            />
          </GridCol>

          <GridCol span="C" className="border-r border-gray-300/30">
            <SolutionCard
              icon="/shop.svg"
              title="Marketplaces"
              description="multi-vendor and multi-channel commerce"
              comingSoon={true}
              tags={["commerce", "startups & saas", "public sector"]}
            />
          </GridCol>

          <GridCol span="D">
            <SolutionCard
              icon="/boxes.svg"
              title="Product Information Management (PIM)"
              description="centralized product management across suppliers and channel"
            />
          </GridCol>
        </GridContainer>

        <div className="absolute left-[5.56%] right-[5.56%] h-px bg-gray-300 opacity-30" style={{ bottom: '0' }}></div>
      </GridSection>

      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute left-[5.56%] right-[5.56%] h-px bg-gray-300 opacity-30" style={{ top: '0' }}></div>
        
        <GridContainer className="min-h-70">
          <GridCol span="A" className="border-r border-gray-300/30">
            <SolutionCard
              icon="/inbox-up.svg"
              title="Order Management Systems (OMS)"
              description="automated order processing, fulfillment, and inventory control"
            />
          </GridCol>

          <GridCol span="B" className="border-r border-gray-300/30">
            <SolutionCard
              icon="/bulb.svg"
              title="AI enhanced Product Discovery & Recommendations"
              description="semantic search, personalization, and recommendations"
              comingSoon={true}
            />
          </GridCol>

          <GridCol span="C" className="border-r border-gray-300/30">
            <SolutionCard
              icon="/plug-disconnected.svg"
              title="CRM & ERP Integration"
              description="seamless connections to back-office systems"
            />
          </GridCol>

          <GridCol 
            span="D" 
            className="min-h-70"
            style={{ 
              backgroundImage: stripePattern,
              backgroundSize: 'auto'
            }}
          >
            <div className="h-full w-full"></div>
          </GridCol>
        </GridContainer>

        <div className="absolute left-[5.56%] right-[5.56%] h-px bg-gray-300 opacity-30" style={{ bottom: '0' }}></div>
      </GridSection>

      <GridSection 
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        className="relative"
        desktopOnly={true}
      >
        <div className="absolute left-[5.56%] right-[5.56%] h-px bg-gray-300 opacity-30" style={{ top: '0' }}></div>
        
        <GridContainer className="h-25">
          <GridCol 
            span="AB" 
            className="h-full"
            style={{ 
              backgroundImage: stripePattern,
              backgroundSize: 'auto'
            }}
          >
            <div className="h-full w-full"></div>
          </GridCol>

          <GridCol span="CD" className="h-full">
            <div></div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-white">
        <div className="bg-[#2B7856] hover:bg-[#4A8A6D] transition-colors cursor-pointer">
          <div className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-white/80 mb-1">Talk to an eCommerce expert</p>
              <h3 className="text-xl text-white">
                Let's create your new eShop
              </h3>
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

        <div className="border-t border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/shopping-cart.svg" alt="B2C eCommerce" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">B2C eCommerce</h3>
              <p className="text-black text-sm leading-relaxed">
                fast, mobile-first online stores for brands and merchants
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/factory-thin.svg" alt="B2B Commerce" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">B2B Commerce Platforms</h3>
              <p className="text-black text-sm leading-relaxed">
                custom pricing, roles, bulk orders, automations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/shop.svg" alt="Marketplaces" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Marketplaces</h3>
              <p className="text-black text-sm leading-relaxed">
                multi-vendor and multi-channel commerce
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/boxes.svg" alt="PIM" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">
                Product Information Management (PIM)
              </h3>
              <p className="text-black text-sm leading-relaxed">
                centralized product management across suppliers and channel
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/inbox-up.svg" alt="OMS" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">
                Order Management Systems (OMS)
              </h3>
              <p className="text-black text-sm leading-relaxed">
                automated order processing, fulfillment, and inventory control
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/bulb.svg" alt="AI Product Discovery" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">
                AI enhanced Product Discovery & Recommendations
              </h3>
              <p className="text-black text-sm leading-relaxed">
                semantic search, personalization, and recommendations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-b border-gray-300 px-6 py-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <img src="/plug-disconnected.svg" alt="CRM & ERP Integration" className="w-10 h-10 opacity-60" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">CRM & ERP Integration</h3>
              <p className="text-black text-sm leading-relaxed">
                seamless connections to back-office systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsSection;