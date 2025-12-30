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
          <GridCol span="AB" className="p-12 pt-40">
            <h2 className="text-4xl font-extrabold mb-6">
              FusionMesh at a Glance
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Fusion helps you build fast, scalable custom systems ideal for performance and
              resilience in high-traffic, data-intensive environments.
            </p>

            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-8">
                <div>
                  <p className="text-[#FB3B22] text-l font-semibold mb-2">01</p>
                  <h3 className="text-l font-semibold">Fast, scalable custom<br/>systems</h3>
                </div>

                <div>
                  <p className="text-[#FB3B22] text-l font-semibold mb-2">03</p>
                  <h3 className="text-l font-semibold">Integrated business<br/> applications</h3>
                </div>

                <div>
                  <p className="text-[#FB3B22] text-l font-semibold mb-2">05</p>
                  <h3 className="text-l font-semibold">Multi tenant SaaS or enterprise<br/> solutions</h3>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-[#FB3B22] text-l mb-2">02</p>
                  <h3 className="text-l font-semibold">Secure cloud or on-premise<br/> platforms</h3>
                </div>

                <div>
                  <p className="text-[#FB3B22] text-l font-semibold mb-2">04</p>
                  <h3 className="text-l font-semibold">Smart, automation-ready<br/> services</h3>
                </div>
              </div>
            </div>
          </GridCol>

          <GridCol span="CD" className="relative pl-8 pt-20 h-full flex items-center">
            <img
              src="/images/fusionmesh-screen.svg"
              alt="FusionMesh Screen"
              className="h-[75vh] w-auto max-w-none"
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
          <p className="text-base text-gray-700 mb-8">
            Fusion helps you build fast, scalable custom systems ideal for performance and
            resilience in high-traffic, data-intensive environments.
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <p className="text-[#FB3B22] text-l font-semibold mb-1">01</p>
              <h3 className="text-lg font-semibold">Fast, scalable custom systems</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-l font-semibold mb-1">02</p>
              <h3 className="text-lg font-semibold">Secure cloud or on-premise platforms</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-l font-semibold mb-1">03</p>
              <h3 className="text-lg font-semibold">Integrated business applications</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-l font-semibold mb-1">04</p>
              <h3 className="text-lg font-semibold">Smart, automation-ready services</h3>
            </div>

            <div>
              <p className="text-[#FB3B22] text-l font-semibold mb-1">05</p>
              <h3 className="text-lg font-semibold">Multi tenant SaaS or enterprise solutions</h3>
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