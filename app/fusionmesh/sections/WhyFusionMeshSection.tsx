import { GridSection, GridContainer, GridCol } from "../../components/grid";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  hasStripedBackground?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  hasStripedBackground = false,
}) => {
  const stripePattern =
    "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 4px)";

  const cardClasses = hasStripedBackground
    ? "h-full border-t border-b border-gray-400/30"
    : "h-full";

  return (
    <div
      className={cardClasses}
      style={
        hasStripedBackground
          ? {
              backgroundImage: stripePattern,
              backgroundSize: "auto",
            }
          : {}
      }
    >
      <div className="px-8 py-10 h-full flex flex-col">
        <div className="mb-6">
          <img src={icon} alt={title} className="w-10 h-10 opacity-70" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyFusionMeshSection = () => {
  return (
    <>
      {/* Desktop */}
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="min-h-50">
          <GridCol
            span="ABCD"
            className="flex flex-col justify-center py-16 pl-12"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
              Why FusionMesh
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              FusionMesh gives you the technical foundation modern systems
              demand —<br />
              modular, secure, and built to perform under scale.
            </p>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="min-h-70">
          <GridCol span="A">
            <FeatureCard
              icon="/icons/dashboard.svg"
              title="Open & Modular"
              description="API-first, standards-based, and fully extensible – adapt it to your needs."
            />
          </GridCol>

          <GridCol span="B">
            <FeatureCard
              icon="/icons/scale-out-repository.svg"
              title="Scalable by Design"
              description="Built to scale vertically or horizontally — from hundreds to thousands of users and millions of transactions."
            />
          </GridCol>

          <GridCol span="C">
            <FeatureCard
              icon="/icons/secure-shield.svg"
              title="Secure & Compliant"
              description="Encryption, 2FA, SSO, audit logs, and RBAC – ready for enterprise security standards."
              hasStripedBackground={true}
            />
          </GridCol>

          <GridCol span="D">
            <FeatureCard
              icon="/icons/24-hour-service.svg"
              title="Highly Available & Observable"
              description="Engineered for 24/7 uptime with failover, redundancy, and real-time system insights through integrated monitoring and logs."
              hasStripedBackground={true}
            />
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="min-h-70">
          <GridCol span="A">
            <FeatureCard
              icon="/icons/speed-alt.svg"
              title="Optimized for Speed"
              description="In-memory processing, smart caching, and asynchronous pipelines ensure real-time performance."
            />
          </GridCol>

          <GridCol span="B">
            <FeatureCard
              icon="/icons/light-bulb-idea.svg"
              title="Intelligent by Default"
              description="AI-ready foundation enables automation, dynamic workflows, and smart data discovery."
            />
          </GridCol>

          <GridCol span="C">
            <FeatureCard
              icon="/icons/server-cluster.svg"
              title="Integrates Seamlessly"
              description="Built for deep integration with your systems, services, and external data sources."
              hasStripedBackground={true}
            />
          </GridCol>

          <GridCol span="D">
            <FeatureCard
              icon="/icons/cloud-network.svg"
              title="Cloud or On-Premise"
              description="Fully deployable in the cloud, on-premise, or hybrid – depending on your strategy."
              hasStripedBackground={true}
            />
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="min-h-120 relative">
          <GridCol 
            span="AB" 
            className="relative"
            style={{ minHeight: '480px' }}
          >
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="w-full h-full border-t border-b border-gray-400/30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 4px)",
                }}
              ></div>
              <div 
                className="absolute w-full h-px bg-gray-400/30"
                style={{ top: '50%', left: 0, right: 0 }}
              ></div>
            </div>
          </GridCol>

          <GridCol span="CD" style={{ minHeight: '480px' }}>
            <div className="h-full"></div>
          </GridCol>
        </GridContainer>

        <div className="hidden lg:block absolute top-0 left-0 right-0 bottom-0 z-30 pointer-events-none">
          <div className="h-full flex items-center" style={{ marginLeft: '27.78%', marginRight: '5.56%' }}>
            <div className="pointer-events-auto p-4" style={{ maxWidth: '66.66%' }}>
              <div className="mb-6">
                <div className="w-8 h-8 bg-[#FB3B22] rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#0D1821]"></div>
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Cost-Efficient by Design
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Fusion is built on open standards and proven technologies — giving
                you freedom of choice and control over costs.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                It supports both open-source and commercial solutions, so you can
                optimize infrastructure based on your scale, budget, and
                compliance needs.
              </p>
            </div>
          </div>
        </div>
      </GridSection>

      {/* Mobile */}
      <section className="lg:hidden bg-[#111D2B] px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Why FusionMesh
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            FusionMesh gives you the technical foundation modern systems demand
            — modular, secure, and built to perform under scale.
          </p>
        </div>

        <div className="space-y-0">
          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/dashboard.svg"
                  alt="Open & Modular"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Open & Modular
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  API-first, standards-based, and fully extensible – adapt it to
                  your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/scale-out-repository.svg"
                  alt="Scalable by Design"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Scalable by Design
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built to scale vertically or horizontally — from hundreds to
                  thousands of users and millions of transactions.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/secure-shield.svg"
                  alt="Secure & Compliant"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Secure & Compliant
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Encryption, 2FA, SSO, audit logs, and RBAC – ready for
                  enterprise security standards.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/24-hour-service.svg"
                  alt="Highly Available"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Highly Available & Observable
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Engineered for 24/7 uptime with failover, redundancy, and
                  real-time system insights through integrated monitoring and
                  logs.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/speed-alt.svg"
                  alt="Optimized for Speed"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Optimized for Speed
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  In-memory processing, smart caching, and asynchronous
                  pipelines ensure real-time performance.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/light-bulb-idea.svg"
                  alt="Intelligent by Default"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Intelligent by Default
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  AI-ready foundation enables automation, dynamic workflows, and
                  smart data discovery.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/server-cluster.svg"
                  alt="Integrates Seamlessly"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Integrates Seamlessly
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built for deep integration with your systems, services, and
                  external data sources.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <img
                  src="/icons/cloud-network.svg"
                  alt="Cloud or On-Premise"
                  className="w-10 h-10 opacity-70"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Cloud or On-Premise
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fully deployable in the cloud, on-premise, or hybrid –
                  depending on your strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#FB3B22] rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-[#0D1821]"></div>
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Cost-Efficient by Design
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Fusion is built on open standards and proven technologies — giving
              you freedom of choice and control over costs.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              It supports both open-source and commercial solutions, so you can
              optimize infrastructure based on your scale, budget, and
              compliance needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFusionMeshSection;