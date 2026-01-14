import { GridSection, GridContainer, GridCol } from "../../components/grid";
import { ArrowRight } from "lucide-react";

const BuiltToEvolveSection = () => {
  return (
    <>
      <GridSection
        showLines={[false, false, true, true, true]}
        className="py-16 relative"
        minHeight="40vh"
        desktopOnly={true}
      >
        <div 
          className="absolute left-0 -top-30 -bottom-24 w-[48%] z-0"
          style={{
            backgroundImage: 'url(/images/dotted-bg.webp)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <GridContainer className="items-stretch relative z-10">
          <GridCol 
            span="AB" 
            className="relative overflow-hidden bg-transparent"
          >
            <div className="relative z-10 p-12 flex items-center h-full">
              <div>
                <h2 className="font-black text-3xl text-gray-900 mb-6">
                  Built to Evolve With You
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Markets change, technology shifts, and your business grows.<br/>
                  Our composable architecture ensures your commerce platform<br/>
                  adapts — without costly rebuilds or disruptions
                </p>
              </div>
            </div>
          </GridCol>

          <GridCol span="CD" className="flex items-center justify-center w-full">
            <div className="w-full h-28 border border-gray-400/30 bg-[#2B7856] transition-colors cursor-pointer flex items-center">
              <div className="flex items-center justify-between px-8 w-full">
                <div>
                  <p className="text-base text-white/80 mb-1">Need more info?</p>
                  <h3 className="text-2xl text-white">
                    Book a call with an eCommerce expert
                  </h3>
                </div>

                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden">
        <div className="px-6 py-12 bg-white">
          <h2 className="font-black text-3xl text-gray-900 mb-4">
            Built to Evolve With You
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Markets change, technology shifts, and your business grows. Our composable architecture ensures your commerce platform adapts — without costly rebuilds or disruptions
          </p>
        </div>

        <div className="w-full bg-[#2B7856] active:bg-[#4A8A6D] transition-colors cursor-pointer">
          <div className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-white/80 mb-1">Need more info?</p>
              <h3 className="text-lg text-white">
                Book a call with an eCommerce expert
              </h3>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuiltToEvolveSection;