import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <>
      <div className="relative hidden lg:block">
        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-light)]"
          className="py-20"
          desktopOnly={true}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 z-10"
            style={{ left: "50%" }}
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
            style={{ left: "72.22%" }}
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
            <GridCol span="A" className="pl-12 pr-8 py-12 flex flex-col justify-center">
              <h2
                className="font-extrabold mb-6"
                style={{ color: "#1E303E", fontSize: "36px" }}
              >
                How it works
              </h2>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.75)",
                  fontSize: "18px",
                  lineHeight: "1.6",
                }}
              >
                With our step by step process you can achieve fast, reliable, and
                automated workflows, built around how your business actually
                operates.
              </p>
            </GridCol>

            <GridCol span="B" className="pl-12 pr-8 py-12 flex flex-col justify-center">
              <div>
                <p
                  className="font-bold mb-2"
                  style={{ color: "var(--brand-red)", fontSize: "20px" }}
                >
                  STEP 1
                </p>
                <h3
                  className="font-bold mb-3"
                  style={{ color: "#1E303E", fontSize: "20px" }}
                >
                  Review & Design (Week 1–2)
                </h3>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  We review your ERP setup, data flows, and sales channels.
                </p>
              </div>
            </GridCol>

            <GridCol span="C" className="pl-12 pr-8 py-12 flex flex-col justify-center">
              <div>
                <p
                  className="font-bold mb-2"
                  style={{ color: "var(--brand-red)", fontSize: "20px" }}
                >
                  STEP 2
                </p>
                <h3
                  className="font-bold mb-3"
                  style={{ color: "#1E303E", fontSize: "20px" }}
                >
                  Setup & Onboarding (Week 2–4)
                </h3>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  across every sales channel and ERP system
                </p>
              </div>
            </GridCol>

            <GridCol span="D" className="pl-12 pr-8 py-12 flex flex-col justify-center">
              <div>
                <p
                  className="font-bold mb-2"
                  style={{ color: "var(--brand-red)", fontSize: "20px" }}
                >
                  STEP 3
                </p>
                <h3
                  className="font-bold mb-3"
                  style={{ color: "#1E303E", fontSize: "20px" }}
                >
                  Go Live (Week 4+)
                </h3>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  We sync systems, train your staff, and monitor stability, then
                  your ERP and commerce operations run automatically.
                </p>
              </div>
            </GridCol>
          </GridContainer>
        </GridSection>
        
        <div
          className="absolute left-0 right-0 h-px"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", bottom: "50px" }}
        />
      </div>

      <section
        className="lg:hidden px-6 py-12"
        style={{ backgroundColor: "var(--brand-light)" }}
      >
        <h2
          className="font-extrabold mb-4"
          style={{ color: "#111D2B", fontSize: "25px" }}
        >
          How it works
        </h2>
        <p
          className="mb-10"
          style={{
            color: "#111D2B",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          With our step by step process you can achieve fast, reliable, and
          automated workflows, built around how your business actually operates.
        </p>

        <div className="flex flex-col">
          <div className="pb-6">
            <p
              className="font-bold mb-2"
              style={{ color: "var(--brand-red)", fontSize: "20px" }}
            >
              STEP 1
            </p>
            <h3
              className="font-bold mb-2"
              style={{ color: "#111D2B", fontSize: "20px" }}
            >
              Review & Design (Week 1–2)
            </h3>
            <p
              style={{
                color: "rgba(17, 29, 43, 0.75)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We review your ERP setup, data flows, and sales channels.
            </p>
          </div>

          <div className="relative py-4">
            <div
              className="absolute left-0 right-[40px] h-px"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", top: "calc(50% - 9px)" }}
            />
            <div className="flex justify-end mr-[40px]">
              <Image
                src="/icons/red-triangle.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0 rotate-90"
              />
            </div>
          </div>

          <div className="pb-6">
            <p
              className="font-bold mb-2"
              style={{ color: "var(--brand-red)", fontSize: "20px" }}
            >
              STEP 2
            </p>
            <h3
              className="font-bold mb-2"
              style={{ color: "#111D2B", fontSize: "20px" }}
            >
              Setup & Onboarding (Week 2–4)
            </h3>
            <p
              style={{
                color: "rgba(17, 29, 43, 0.75)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              across every sales channel and ERP system
            </p>
          </div>

          <div className="relative py-4">
            <div
              className="absolute left-0 right-[40px] h-px"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", top: "calc(50% - 9px)" }}
            />
            <div className="flex justify-end mr-[40px]">
              <Image
                src="/icons/red-triangle.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0 rotate-90"
              />
            </div>
          </div>

          <div>
            <p
              className="font-bold mb-2"
              style={{ color: "var(--brand-red)", fontSize: "20px" }}
            >
              STEP 3
            </p>
            <h3
              className="font-bold mb-2"
              style={{ color: "#111D2B", fontSize: "20px" }}
            >
              Go Live (Week 4+)
            </h3>
            <p
              style={{
                color: "rgba(17, 29, 43, 0.75)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We sync systems, train your staff, and monitor stability, then
              your ERP and commerce operations run automatically.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;