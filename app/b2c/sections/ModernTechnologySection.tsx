import { GridSection, GridContainer, GridCol } from "../../components/grid";

const ModernTechnologySection = () => {
  const content = {
    tagline: "CHOOSE. COMBINE. GROW.",
    heading: "Powered by a Modern<br />Technology Stack",
    subheading: "At the core of every project is our Composable Technology<br />Pack — built to adapt, scale, and integrate.",
    features: [
      {
        icon: "/icons/24-hour-service-purple.svg",
        alt: "Cloud Native",
        text: "Cloud-native, resilient, and future-proof"
      },
      {
        icon: "/icons/speed-alt-purple.svg",
        alt: "Fast Response",
        text: "Fast response times — even with 100K+ SKUs"
      },
      {
        icon: "/icons/cloud-network2.svg",
        alt: "Scalability",
        text: "Always available — built-in failover & scalability"
      }
    ],
    technologies: [
      {
        title: "Medusa.js",
        description: "open-source headless commerce engine"
      },
      {
        title: "Cubik PIM & OMS",
        description: "centralized product and order manager"
      },
      {
        title: "Next.js",
        description: "fast, secure, mobile-first storefronts"
      },
      {
        title: "Directus CMS",
        description: "flexible content management for blogs<br /> and marketing pages",
        descriptionMobile: "flexible content management for blogs and marketing pages"
      },
      {
        title: "Cloud & AI Search",
        description: "fast, typo-tolerant, semantic product discovery"
      },
      {
        title: "Automation & Workflows",
        description: "enterprise-grade orchestration and analytics"
      }
    ]
  };

  return (
    <>
      <GridSection
        desktopOnly={true}
        showLines={[true, true, true, true, true]}
        bgColor="bg-[#F3F5F5]"
        className="pb-20"
        minHeight="0"
      >
        <div
          className="absolute left-0 pointer-events-none"
          style={{
            top: 0,
            height: '20%',
            width: '27.78%',
            zIndex: 1,
            backgroundImage: 'linear-gradient(45deg, rgb(156 163 175 / 0.3) 8.33%, transparent 8.33%, transparent 50%, rgb(156 163 175 / 0.3) 50%, rgb(156 163 175 / 0.3) 58.33%, transparent 58.33%, transparent 100%)',
            backgroundSize: '6.00px 6.00px',
          }}
        />

        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30"
          style={{ top: "10%", zIndex: 2 }}
        />

        <GridContainer className="items-center gap-12 pt-32">
          <GridCol span="AB" className="pr-8 pl-5">
            <div className="space-y-6 relative z-10">
              <p className="text-[#8044DE] text-base font-bold tracking-wider uppercase">
                {content.tagline}
              </p>

              <h2 
                className="text-5xl font-extrabold text-black leading-tight"
                dangerouslySetInnerHTML={{ __html: content.heading }}
              />

              <p 
                className="text-black text-2xl leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.subheading }}
              />

              <div className="space-y-5 pt-4">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img
                      src={feature.icon}
                      alt={feature.alt}
                      className="w-10 h-10 shrink-0"
                    />
                    <p className="text-black text-lg">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GridCol>

          <GridCol span="CD" className="">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 auto-rows-fr">
              {content.technologies.map((tech, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-black font-bold text-lg mb-2 min-h-7">
                    {tech.title}
                  </h3>
                  <p 
                    className="text-black text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: tech.description }}
                  />
                </div>
              ))}
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-[#F3F5F5] px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[#8044DE] text-sm font-bold tracking-wider uppercase">
              {content.tagline}
            </p>

            <h2 className="text-3xl font-bold text-black leading-tight">
              Powered by a Modern Technology Stack
            </h2>

            <p className="text-black text-base leading-relaxed">
              At the core of every project is our Composable Technology Pack —
              built to adapt, scale, and integrate.
            </p>
          </div>

          <div className="space-y-4">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="w-8 h-8 shrink-0"
                />
                <p className="text-black text-sm">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-gray-400 opacity-30" />

          <div className="space-y-6">
            {content.technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="text-black font-bold text-base mb-1.5">
                  {tech.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {tech.descriptionMobile || tech.description.replace(/<br\s*\/?>/g, ' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ModernTechnologySection;