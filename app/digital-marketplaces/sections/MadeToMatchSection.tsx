import { GridSection, GridContainer, GridCol } from "../../components/grid";

const MadeToMatchSection = () => {
  return (
    <>
      <div className="hidden lg:block relative">
        <div className="flex justify-end">
          <img 
            src="/images/dotted-bg-marketplace.avif" 
            alt=""
            className="w-1/2 h-auto"
          />
        </div>

        <div className="absolute inset-0 z-10">
          <GridSection 
            showLines={[true, true, true, true, true]}
            className="bg-transparent! h-full"
          >
            <GridContainer className="h-full">
              <GridCol span="AB" className="flex flex-col justify-center py-24 pl-7 pr-12">
                <h2 className="text-[33px] font-extrabold leading-tight text-[--brand-black] mb-4">
                  Made to Match the Way You Sell
                </h2>
                <p className="text-[26px] text-[--brand-black] mb-6">
                  Transform your business into a thriving digital ecosystem.
                </p>
                <p className="text-[19px] text-gray-900 leading-relaxed max-w-md">
                  Connect vendors, manage diverse catalogs, and orchestrate seamless multi-channel experiences — all with a platform designed to scale with your ambitions.
                </p>
              </GridCol>
              <GridCol span="CD">
                <></>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>
      </div>

      <section className="lg:hidden flex flex-col">
        <div className="px-6 pt-16 pb-8">
          <div className="max-w-md">
            <h2 className="text-[32px] font-extrabold leading-tight text-[--brand-black] mb-3 max-w-xs">
              Made to Match the Way You Sell
            </h2>
            <p className="text-xl text-[--brand-black] mb-4">
              Transform your business into a thriving digital ecosystem.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Connect vendors, manage diverse catalogs, and orchestrate seamless multi-channel experiences all with a platform designed to scale with your ambitions.
            </p>
          </div>
        </div>

        <div className="w-full leading-0 text-[0] overflow-hidden">
          <img 
            src="/images/dotted-bg-marketplace-mobile.avif" 
            alt=""
            className="w-full block align-bottom"
          />
        </div>
      </section>
    </>
  );
};

export default MadeToMatchSection;