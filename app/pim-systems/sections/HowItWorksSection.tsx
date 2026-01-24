import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";

const HowItWorksSection = () => {
  const stripePattern =
    "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)";
  const stripeSize = "6.00px 6.00px";

  return (
    <>
      <div className="relative hidden lg:block">
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-dark)]"
          desktopOnly={true}
        >
          <GridContainer className="items-stretch">
            <GridCol span="A" className="py-12 pl-12 pr-8 flex items-center">
              <h2
                className="font-extrabold"
                style={{ color: "#F3F3EE", fontSize: "36px" }}
              >
                How It Works
              </h2>
            </GridCol>

            <GridCol span="BC" className="py-12">
              <></>
            </GridCol>

            <GridCol
              span="D"
              className="py-12"
              style={{
                backgroundImage: stripePattern,
                backgroundSize: stripeSize,
              }}
            >
              <></>
            </GridCol>
          </GridContainer>
        </GridSection>

        <div
          className="absolute left-0 right-0 h-px z-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        />

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-dark)]"
          desktopOnly={true}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 z-10"
            style={{ left: "calc(50% + 2px)" }}
          >
            <Image
              src="/icons/red-triangle.svg"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
            />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 z-10"
            style={{ left: "calc(72.22% + 2px)" }}
          >
            <Image
              src="/icons/red-triangle.svg"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
            />
          </div>

          <GridContainer className="items-stretch">
            <GridCol
              span="A"
              style={{
                backgroundImage: stripePattern,
                backgroundSize: stripeSize,
                minHeight: "280px",
              }}
            >
              <></>
            </GridCol>

            <GridCol
              span="B"
              className="pl-12 pr-8 py-12 flex flex-col justify-center"
            >
              <div>
                <p
                  className="font-bold mb-3"
                  style={{ color: "var(--brand-red)", fontSize: "20px" }}
                >
                  STEP 1
                </p>
                <h3
                  className="font-bold mb-4"
                  style={{ color: "#F3F3EE", fontSize: "20px" }}
                >
                  Review & Design
                </h3>
                <p
                  style={{
                    color: "rgba(243, 243, 238, 0.75)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  We review your product data sources, suppliers, and sales
                  channels.
                </p>
              </div>
            </GridCol>

            <GridCol
              span="C"
              className="pl-12 pr-8 py-12 flex flex-col justify-center"
            >
              <div>
                <p
                  className="font-bold mb-3"
                  style={{ color: "var(--brand-red)", fontSize: "20px" }}
                >
                  STEP 2
                </p>
                <h3
                  className="font-bold mb-4"
                  style={{ color: "#F3F3EE", fontSize: "20px" }}
                >
                  Setup & Onboarding
                </h3>
                <p
                  style={{
                    color: "rgba(243, 243, 238, 0.75)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  We configure Cubik PIM workflows, pricing rules, and
                  integrations — while training your team.
                </p>
              </div>
            </GridCol>

            <GridCol
              span="D"
              className="pl-12 pr-8 py-12 flex flex-col justify-center"
            >
              <div>
                <p
                  className="font-bold mb-3"
                  style={{ color: "var(--brand-red)", fontSize: "20px" }}
                >
                  STEP 3
                </p>
                <h3
                  className="font-bold mb-4"
                  style={{ color: "#F3F3EE", fontSize: "20px" }}
                >
                  Go Live
                </h3>
                <p
                  style={{
                    color: "rgba(243, 243, 238, 0.75)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  We migrate your data, automate processes, and launch. From
                  here, your PIM handles product data automatically across every
                  sales channel.
                </p>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>
      </div>

      <section
        className="lg:hidden py-12"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <h2
          className="font-extrabold mb-8 px-6"
          style={{ color: "#FFFFFF", fontSize: "25px" }}
        >
          How it works
        </h2>

        <div className="flex flex-col">
          <div className="relative py-4">
            <div
              className="absolute left-0 right-0 h-0.5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", top: "calc(50% - 1px)" }}
            />
          </div>
          <div className="pb-6 px-6">
            <p
              className="font-bold mb-2"
              style={{ color: "var(--brand-red)", fontSize: "20px" }}
            >
              STEP 1
            </p>
            <h3
              className="font-bold mb-3"
              style={{ color: "#FFFFFF", fontSize: "20px" }}
            >
              Review & Design
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We review your product data sources, suppliers, and sales
              channels.
            </p>
          </div>

          <div className="relative py-4">
            <div
              className="absolute left-0 right-0 h-0.5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", top: "calc(50% - 9px)" }}
            />
            <div className="flex justify-end" style={{ marginRight: "40px" }}>
              <Image
                src="/icons/red-triangle.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0 rotate-90"
              />
            </div>
          </div>
          <div className="pb-6 px-6">
            <p
              className="font-bold mb-2"
              style={{ color: "var(--brand-red)", fontSize: "20px" }}
            >
              STEP 2
            </p>
            <h3
              className="font-bold mb-3"
              style={{ color: "#FFFFFF", fontSize: "20px" }}
            >
              Setup & Onboarding
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We configure Cubik PIM workflows, pricing rules, and integrations
              — while training your team.
            </p>
          </div>

          <div className="relative py-4">
            <div
              className="absolute left-0 right-0 h-0.5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", top: "calc(50% - 9px)" }}
            />
            <div className="flex justify-end" style={{ marginRight: "40px" }}>
              <Image
                src="/icons/red-triangle.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0 rotate-90"
              />
            </div>
          </div>
          <div className="px-6">
            <p
              className="font-bold mb-2"
              style={{ color: "var(--brand-red)", fontSize: "20px" }}
            >
              STEP 3
            </p>
            <h3
              className="font-bold mb-3"
              style={{ color: "#FFFFFF", fontSize: "20px" }}
            >
              Go Live
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We migrate your data, automate processes, and launch. From here,
              your PIM handles product data automatically across every sales
              channel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;