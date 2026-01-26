import { GridSection, GridContainer, GridCol } from "../../components/grid";

const OurCompleteSection = () => {
  const textColor = "#09051F";

  return (
    <div className="relative">
      <img
        src="/images/complete-tech-stack.webp"
        alt="Complete Tech Stack - Medusa, Cubik, Next.js, Directus logos"
        className="absolute z-10 pointer-events-none hidden lg:block"
        style={{
          top: "2%",
          right: 0,
          width: "43%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "top right",
        }}
      />

      <div
        className="absolute left-0 right-0 h-px bg-gray-300 z-20"
        style={{ bottom: "8%" }}
      />

      <GridSection
        showLines={[true, true, true, false, true]}
        bgColor="bg-white"
        desktopOnly={true}
      >
        <GridContainer>
          <GridCol span="AB" className="py-16 pb-24 pl-8 pr-8">
            <div className="mb-12">
              <h2
                className="font-extrabold mb-4"
                style={{
                  color: textColor,
                  fontSize: "32px",
                }}
              >
                Our Complete Tech Stack
              </h2>
              <p
                style={{
                  color: textColor,
                  fontSize: "23px",
                }}
              >
                Unlike PHP-based or saas monoliths, our stack is API-first,
                flexible and customizable by design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: textColor,
                    fontSize: "20px",
                  }}
                >
                  Medusa.js
                </h3>
                <p
                  style={{
                    color: textColor,
                    fontSize: "18px",
                    opacity: 0.75,
                  }}
                >
                  Headless commerce engine built for flexibility and scale
                </p>
              </div>

              <div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: textColor,
                    fontSize: "20px",
                  }}
                >
                  Cubik PIM & OMS
                </h3>
                <p
                  style={{
                    color: textColor,
                    fontSize: "18px",
                    opacity: 0.75,
                  }}
                >
                  Centralized product data, multi-supplier integration, and
                  automated order workflows
                </p>
              </div>

              <div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: textColor,
                    fontSize: "20px",
                  }}
                >
                  Next.js
                </h3>
                <p
                  style={{
                    color: textColor,
                    fontSize: "18px",
                    opacity: 0.75,
                  }}
                >
                  Secure, lightning-fast, mobile-first & PWA-ready storefronts
                </p>
              </div>

              <div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: textColor,
                    fontSize: "20px",
                  }}
                >
                  Directus
                </h3>
                <p
                  style={{
                    color: textColor,
                    fontSize: "18px",
                    opacity: 0.75,
                  }}
                >
                  Headless CMS for content management, blogs, and marketing
                  pages
                </p>
              </div>

              <div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: textColor,
                    fontSize: "20px",
                  }}
                >
                  Semantic AI Engine
                </h3>
                <p
                  style={{
                    color: textColor,
                    fontSize: "18px",
                    opacity: 0.75,
                  }}
                >
                  Advanced search, recommendations, and product discovery
                </p>
              </div>
            </div>
          </GridCol>

          <GridCol span="CD" style={{ minHeight: "500px" }}>
            <></>
          </GridCol>
        </GridContainer>
      </GridSection>
    </div>
  );
};

export default OurCompleteSection;