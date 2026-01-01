import { GridSection, GridContainer, GridCol } from "../../components/grid";

const WhyThisStackSection = () => {
  const features = [
    {
      title: "Start Fast & Small",
      description: "Build just what you need, without overengineering"
    },
    {
      title: "Grow Without Limits",
      description: "Handle thousands to millions of business transactions"
    },
    {
      title: "Adapt Quickly",
      description: "Add, change, or replace modules without system downtime"
    },
    {
      title: "Customize Freely",
      description: "Fit the technology around your business — not the reverse"
    },
    {
      title: "Integrate Seamlessly",
      description: "APIs and pipelines connect with your existing systems"
    },
    {
      title: "Stay Future-Ready",
      description: "From AI to mobile to new channels — your system is built to evolve"
    }
  ];

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <GridSection
          desktopOnly={true}
          bgColor="bg-[var(--brand-dark)]"
          showLines={[true, true, false, true, true]}
        >
          <GridContainer className="items-center justify-center">
            <GridCol span="BC" className="relative flex items-center justify-center py-16">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 5px)"
                }}
              />
              
              <div className="relative z-10 text-center w-full">
                <h2 className="text-white text-5xl font-bold mb-6">
                  Why This Stack?
                </h2>
                <p className="text-gray-400 text-lg px-8">
                  We didn't just choose the latest technologies — we chose the ones
                  that enable real business results.
                </p>
              </div>
            </GridCol>
          </GridContainer>
          <div className="absolute bottom-0 left-0 right-0 w-full h-px bg-gray-300 opacity-30" style={{ zIndex: 40 }} />
        </GridSection>

        <GridSection
          desktopOnly={true}
          bgColor="bg-[var(--brand-dark)]"
          showLines={[true, true, false, true, true]}
          className="pt-12 pb-24 relative"
        >
          
          <GridContainer>
            <GridCol span="ABCD">
              <div className="w-full">
                <p className="text-gray-300 text-center text-xl mb-6">
                  Whether you're managing 10,000 SKUs or processing a billion API calls, this<br/>
                  stack has the resilience, security, and scale to support your growth.
                </p>
                
                <p className="text-gray-400 text-center text-lg mb-16">
                  Our tech stack allows you to :
                </p>

                <div className="grid grid-cols-3 gap-x-24 gap-y-16 max-w-5xl mx-auto">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      {/* Mobile Layout */}
      <section className="lg:hidden bg-(--brand-dark) px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold mb-4">
            Why This Stack?
          </h2>
          <p className="text-white text-lg">
            We didn't just choose the latest<br/> technologies we chose the ones that<br/> enable real business results.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-300 text-sm mb-8">
            Whether you're managing 10,000 SKUs or processing a<br/> billion API calls, this stack has the resilience, security,<br/> and scale to support your growth.
          </p>
          <p className="text-gray-400 text-lg mb-8">
            Our tech stack allows you to :
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm width-xl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyThisStackSection;