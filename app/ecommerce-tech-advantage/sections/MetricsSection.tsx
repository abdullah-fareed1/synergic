import { GridSection, GridContainer, GridCol } from "../../components/grid";

const columnCCards = [
  {
    num: "01",
    title: "Performance at scale",
    desc: "Handle thousands of concurrent users & millions of products",
  },
  {
    num: "03",
    title: "Built",
    desc: "In flexibility to grow and adapt with your business",
  },
  {
    num: "05",
    title: "Future",
    desc: "Proof architecture that evolves with technology",
  },
  {
    num: "07",
    title: "Easily integrate new channels",
    desc: "Mobile apps, marketplaces, suppliers",
  },
];

const columnDCards = [
  {
    num: "02",
    title: "Fully customizable logic",
    desc: 'No "that\'s not possible" limits',
  },
  {
    num: "04",
    title: "Total ownership",
    desc: "No hidden costs or licensing fees",
  },
  {
    num: "06",
    title: "Complete operational control",
    desc: "From product data to fulfillment",
  },
  {
    num: "08",
    title: "Centralize product data",
    desc: "Across suppliers and channels with PIM",
  },
];

const featureCards = [
  {
    icon: "/icons/dashboard.svg",
    title: "Open & Modular",
    description: "API-first, standards-based, and fully extensible – adapt it to your needs.",
  },
  {
    icon: "/icons/scale-out-repository.svg",
    title: "Scalable by Design",
    description: "Built to scale vertically or horizontally — from hundreds to thousands of users and millions of transactions.",
  },
  {
    icon: "/icons/secure-shield.svg",
    title: "Secure & Compliant",
    description: "Encryption, 2FA, SSO, audit logs, and RBAC – ready for enterprise security standards.",
  },
  {
    icon: "/icons/24-hour-service.svg",
    title: "Highly Available & Observable",
    description: "Engineered for 24/7 uptime with failover, redundancy, and real-time system insights through integrated monitoring and logs.",
  },
  {
    icon: "/icons/speed-alt.svg",
    title: "Optimized for Speed",
    description: "In-memory processing, smart caching, and asynchronous pipelines ensure real-time performance.",
  },
  {
    icon: "/icons/light-bulb-idea.svg",
    title: "Intelligent by Default",
    description: "AI-ready foundation enables automation, dynamic workflows, and smart data discovery.",
  },
  {
    icon: "/icons/server-cluster.svg",
    title: "Integrates Seamlessly",
    description: "Built for deep integration with your systems, services, and external data sources.",
  },
  {
    icon: "/icons/cloud-network.svg",
    title: "Cloud or On-Premise",
    description: "Fully deployable in the cloud, on-premise, or hybrid – depending on your strategy.",
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

interface MobileFeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const MobileFeatureCard: React.FC<MobileFeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="border-t border-b border-gray-400/30 py-8 -mx-6 px-6">
    <div className="mb-4">
      <img src={icon} alt={title} className="w-10 h-10 " />
    </div>
    <h3 className="text-[16px] font-bold text-white mb-2">{title}</h3>
    <p className="text-white text-[14px] opacity-75 leading-relaxed">{description}</p>
  </div>
);

const DesktopFeatureCard = ({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col" style={{ padding: "0 24px" }}>
    <span
      style={{
        fontSize: "14px",
        color: "#FFFFFF",
        marginBottom: "8px",
      }}
    >
      {num}
    </span>
    <h3
      style={{
        fontSize: "18px",
        fontWeight: 700,
        color: "#F3F5F5",
        marginBottom: "8px",
        lineHeight: "1.3",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.65)",
        lineHeight: "1.5",
      }}
    >
      {desc}
    </p>
  </div>
);

const MetricsSection = () => {
  return (
    <>
      <GridSection
        showLines={[false, false, true, true, true]}
        bgColor="bg-[#2B7856]"
        minHeight="797px"
        desktopOnly={true}
      >
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "5.56%",
            width: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            zIndex: 20,
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: "10%",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            zIndex: 20,
          }}
        />

        <GridContainer className="h-full">
          <GridCol
            span="AB"
            className="relative flex flex-col"
            style={{ height: "797px" }}
          >
            <div
              style={{
                paddingTop: "80px",
                paddingLeft: "24px",
                paddingRight: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "38px",
                  fontWeight: 800,
                  color: "#F3F5F5",
                  lineHeight: "1.15",
                  marginBottom: "24px",
                }}
              >
                You don't have to keep fixing
                <br />
                the same problems
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#F3F5F5",
                  lineHeight: "1.6",
                  maxWidth: "480px",
                }}
              >
                Our composable commerce platform gives you stable building blocks
                that replace fragile plugins with scalable solutions.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#F3F5F5",
                  lineHeight: "1.6",
                  marginTop: "16px",
                  maxWidth: "480px",
                }}
              >
                Stop fighting platform limitations.
                <br />
                Build on technology designed for growth.
              </p>
            </div>
            <div
              className="absolute left-0 right-0"
              style={{
                bottom: "10%",
              }}
            >
              <img
                src="/images/ecom-metrics-chart.avif"
                alt="E-commerce metrics chart showing Sales, Visitors, and AOV growth"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
            </div>
          </GridCol>
          <GridCol
            span="C"
            className="flex flex-col justify-between"
            style={{
              height: "797px",
              paddingTop: "80px",
              paddingBottom: "calc(10% + 40px)",
            }}
          >
            {columnCCards.map((card, index) => (
              <DesktopFeatureCard
                key={index}
                num={card.num}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </GridCol>
          <GridCol
            span="D"
            className="flex flex-col justify-between"
            style={{
              height: "797px",
              paddingTop: "80px",
              paddingBottom: "calc(10% + 40px)",
            }}
          >
            {columnDCards.map((card, index) => (
              <DesktopFeatureCard
                key={index}
                num={card.num}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-[#2B7856] px-6 py-12">
        <div className="mb-12">
          <h2 className="text-[25px] font-extrabold text-white mb-4">
            {sectionContent.header.title}
          </h2>
          <p className="text-white text-[16px] leading-relaxed">
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
            <h2 className="text-[30px] font-extrabold text-white mb-4">
              {sectionContent.costEfficient.title}
            </h2>
            <p className="text-white opacity-80 text-[18px] leading-relaxed mb-4">
              {sectionContent.costEfficient.description}
            </p>
            <p className="text-white opacity-75 text-[16px] leading-relaxed">
              {sectionContent.costEfficient.subDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetricsSection;