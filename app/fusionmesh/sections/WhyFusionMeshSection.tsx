import { GridSection, GridContainer, GridCol } from "../../components/grid";

const featureCards = [
  {
    icon: "/icons/dashboard.svg",
    title: "Open & Modular",
    description: "API-first, standards-based, and fully extensible – adapt it to your needs.",
    hasStripedBackground: false,
  },
  {
    icon: "/icons/scale-out-repository.svg",
    title: "Scalable by Design",
    description: "Built to scale vertically or horizontally — from hundreds to thousands of users and millions of transactions.",
    hasStripedBackground: false,
  },
  {
    icon: "/icons/secure-shield.svg",
    title: "Secure & Compliant",
    description: "Encryption, 2FA, SSO, audit logs, and RBAC – ready for enterprise security standards.",
    hasStripedBackground: true,
  },
  {
    icon: "/icons/24-hour-service.svg",
    title: "Highly Available & Observable",
    description: "Engineered for 24/7 uptime with failover, redundancy, and real-time system insights through integrated monitoring and logs.",
    hasStripedBackground: true,
  },
  {
    icon: "/icons/speed-alt.svg",
    title: "Optimized for Speed",
    description: "In-memory processing, smart caching, and asynchronous pipelines ensure real-time performance.",
    hasStripedBackground: false,
  },
  {
    icon: "/icons/light-bulb-idea.svg",
    title: "Intelligent by Default",
    description: "AI-ready foundation enables automation, dynamic workflows, and smart data discovery.",
    hasStripedBackground: false,
  },
  {
    icon: "/icons/server-cluster.svg",
    title: "Integrates Seamlessly",
    description: "Built for deep integration with your systems, services, and external data sources.",
    hasStripedBackground: true,
  },
  {
    icon: "/icons/cloud-network.svg",
    title: "Cloud or On-Premise",
    description: "Fully deployable in the cloud, on-premise, or hybrid – depending on your strategy.",
    hasStripedBackground: true,
  },
];

const sectionContent = {
  header: {
    title: "Why FusionMesh",
    description: "FusionMesh gives you the technical foundation modern systems demand — modular, secure, and built to perform under scale.",
  },
  costEfficient: {
    title: "Cost-Efficient by Design",
    description: "Fusion is built on open standards and proven technologies — giving you freedom of choice and control over costs.",
    subDescription: "It supports both open-source and commercial solutions, so you can optimize infrastructure based on your scale, budget, and compliance needs.",
  },
};

const stripeStyle = {
  backgroundImage: 'linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)',
  backgroundSize: '6.00px 6.00px',
};

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
  const cardClasses = hasStripedBackground
    ? "h-full border-t border-b border-gray-400/30"
    : "h-full";

  return (
    <div
      className={cardClasses}
      style={hasStripedBackground ? stripeStyle : {}}
    >
      <div className="px-8 py-10 h-full flex flex-col">
        <div className="mb-6">
          <img src={icon} alt={title} className="w-10 h-10 opacity-70" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const MobileFeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
    <div className="mb-4">
      <img src={icon} alt={title} className="w-10 h-10 opacity-70" />
    </div>
    <h3 className="text-lg font-bold text-gray-300 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const WhyFusionMeshSection = () => {
  const firstRowCards = featureCards.slice(0, 4);
  const secondRowCards = featureCards.slice(4, 8);
  const columnSpans = ["A", "B", "C", "D"] as const;

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
              {sectionContent.header.title}
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl">
              {sectionContent.header.description.split(' — ')[0]} —<br />
              {sectionContent.header.description.split(' — ')[1]}
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
          {firstRowCards.map((card, index) => (
            <GridCol key={card.title} span={columnSpans[index]}>
              <FeatureCard {...card} />
            </GridCol>
          ))}
        </GridContainer>
      </GridSection>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#111D2B]"
        className="relative"
        desktopOnly={true}
      >
        <GridContainer className="min-h-70">
          {secondRowCards.map((card, index) => (
            <GridCol key={card.title} span={columnSpans[index]}>
              <FeatureCard {...card} />
            </GridCol>
          ))}
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
                style={stripeStyle}
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
                <img src="/icons/red-cube.svg" alt="Cost Efficient" className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                {sectionContent.costEfficient.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                {sectionContent.costEfficient.description}
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                {sectionContent.costEfficient.subDescription}
              </p>
            </div>
          </div>
        </div>
      </GridSection>

      {/* Mobile */}
      <section className="lg:hidden bg-[#111D2B] px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {sectionContent.header.title}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            {sectionContent.header.description}
          </p>
        </div>

        <div className="space-y-0">
          {featureCards.map((card) => (
            <MobileFeatureCard key={card.title} {...card} />
          ))}

          <div className="pt-8">
            <div className="mb-6">
              <img src="/icons/red-cube.svg" alt="Cost Efficient" className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {sectionContent.costEfficient.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              {sectionContent.costEfficient.description}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {sectionContent.costEfficient.subDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFusionMeshSection;