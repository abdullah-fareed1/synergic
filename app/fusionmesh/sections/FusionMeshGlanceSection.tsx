import { GridSection, GridContainer, GridCol } from "../../components/grid";

const FusionMeshGlanceSection = () => {
  return (
    <>
      {/* Desktop*/}
      <GridSection
        desktopOnly={true}
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#F3F3EE]"
        className="relative overflow-x-hidden"
        minHeight="90vh"
      >
        <div className="absolute left-0 right-0 top-[15%] h-px bg-gray-400 opacity-30 z-20" />

        <GridContainer className="items-center h-full">
          <GridCol span="AB" className="pl-9 pt-28">
            <h2 className="text-4xl font-extrabold mb-4">
              FusionMesh at a Glance
            </h2>
            <p className="text-lg max-w-2xl text-gray-800 mb-12">
              Fusion helps you build fast, scalable custom systems ideal for performance and
              resilience in high-traffic, data-intensive environments.
            </p>

            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <p className="text-[#FB3B22] text-xl font-semibold mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">01</p>
                  <h3 className="text-xl font-bold text-black opacity-60 group-hover:opacity-100 transition-opacity duration-200">Fast, scalable custom<br/>systems</h3>
                </div>

                <div className="group cursor-pointer">
                  <p className="text-[#FB3B22] text-xl font-semibold mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">03</p>
                  <h3 className="text-xl font-bold text-black opacity-60 group-hover:opacity-100 transition-opacity duration-200">Integrated business<br/> applications</h3>
                </div>

                <div className="group cursor-pointer">
                  <p className="text-[#FB3B22] text-xl font-semibold mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">05</p>
                  <h3 className="text-xl font-bold text-black opacity-60 group-hover:opacity-100 transition-opacity duration-200">Multi tenant SaaS or enterprise<br/> solutions</h3>
                </div>
              </div>
              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <p className="text-[#FB3B22] text-xl mb-2 font-semibold opacity-60 group-hover:opacity-100 transition-opacity duration-200">02</p>
                  <h3 className="text-xl font-bold text-black opacity-60 group-hover:opacity-100 transition-opacity duration-200">Secure cloud or on-premise<br/> platforms</h3>
                </div>

                <div className="group cursor-pointer">
                  <p className="text-[#FB3B22] text-xl font-semibold mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">04</p>
                  <h3 className="text-xl font-bold text-black opacity-60 group-hover:opacity-100 transition-opacity duration-200">Smart, automation-ready<br/> services</h3>
                </div>
              </div>
            </div>
          </GridCol>

          <GridCol span="CD" className="relative pl-22 pt-20 h-full flex items-center">
            <img
              src="/images/fusionmesh-screen.svg"
              alt="FusionMesh Screen"
              className="h-[72vh] w-auto max-w-none"
            />
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile */}
      <section className="lg:hidden bg-[#F3F3EE] py-12 overflow-x-hidden">
        <div className="px-6">
          <h2 className="text-3xl font-extrabold mb-4">
            FusionMesh at a Glance
          </h2>
          <p className="text-base text-gray-800 mb-8">
            Fusion helps you build fast, scalable custom systems ideal for performance and
            resilience in high-traffic, data-intensive environments.
          </p>

          <div className="space-y-5 mb-12">
            <div>
              <p className="text-[#FB3B22] text-xl font-semibold">01</p>
              <h3 className="text-xl font-extrabold text-[#111D2B]">Fast, scalable custom<br/>systems</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-xl font-semibold">02</p>
              <h3 className="text-xl font-extrabold text-[#111D2B]">Secure cloud or on-premise<br/>platforms</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-xl font-semibold">03</p>
              <h3 className="text-xl font-extrabold text-[#111D2B]">Integrated business<br/>applications</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-xl font-semibold">04</p>
              <h3 className="text-xl font-extrabold text-[#111D2B]">Smart, automation-ready<br/>services</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-xl font-semibold">05</p>
              <h3 className="text-xl font-extrabold text-[#111D2B]">Multi tenant SaaS or enterprise<br/>solutions</h3>
            </div>
          </div>
        </div>

        <div className="pl-2 overflow-x-hidden">
          <img
            src="/images/fusionmesh-screen.svg"
            alt="FusionMesh Screen"
            className="h-112.5 w-auto max-w-none"
          />
        </div>
      </section>
    </>
  );
};

export default FusionMeshGlanceSection;