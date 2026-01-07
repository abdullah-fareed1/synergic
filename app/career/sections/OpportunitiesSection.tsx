import { GridSection, GridContainer, GridCol } from "../../components/grid";

const OpportunitiesSection = () => {
  const stripePatternWhite =
    "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(209, 209, 209, 0.3) 2px, rgba(209, 209, 209, 0.3) 4px)";

  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-(--brand-white)"
        className="pt-20 pb-16"
        desktopOnly={true}
      >
        <GridContainer>
          <GridCol span="AB" className="pl-3 pr-8">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] mb-6 font-bold">
              Opportunities to Grow
            </h2>
            <p className="text-lg text-(--brand-black) leading-relaxed max-w-135">
              Whether you're early in your career or ready to lead,<br />
              we offer space to specialize, take ownership,<br />
              and level up. Clear paths. Real progress.
            </p>
          </GridCol>
          <GridCol span="CD">
            <></>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-(--brand-white)"
        className="pt-12 pb-0 relative"
        desktopOnly={true}
      >
        <GridContainer>
          <GridCol span="A" className="pl-3 pr-6 pb-16">
            <h3 className="text-2xl font-bold mb-4 text-(--brand-black)">
              Onboarding Process
            </h3>
            <p className="text-base text-(--brand-black) leading-relaxed mb-6">
              We want you to hit the ground running — and feel right at<br />
              home. Our onboarding combines structured guidance<br />
              with hands-on experience, so you can:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-base text-(--brand-black)">
                <span className="w-1.5 h-1.5 rounded-full bg-(--brand-black) mt-2 shrink-0"></span>
                <span>Get familiar with our tools, systems, and culture</span>
              </li>
              <li className="flex items-start gap-3 text-base text-(--brand-black)">
                <span className="w-1.5 h-1.5 rounded-full bg-(--brand-black) mt-2 shrink-0"></span>
                <span>Pair with mentors for support and real-time feedback</span>
              </li>
              <li className="flex items-start gap-3 text-base text-(--brand-black)">
                <span className="w-1.5 h-1.5 rounded-full bg-(--brand-black) mt-2 shrink-0"></span>
                <span>Join real projects early, with gradual responsibility</span>
              </li>
            </ul>
          </GridCol>
          <GridCol span="B" className="px-6 pb-16">
            <h3 className="text-2xl font-bold mb-4 text-(--brand-black)">
              Tech Stack
            </h3>
            <p className="text-base text-(--brand-black) leading-relaxed mb-6">
              We work with a wide range of tools — modern,<br />
              modular, and ready for scale
            </p>
            <p className="text-base text-(--brand-black) leading-relaxed">
              Java &nbsp;|&nbsp; Angular &nbsp;|&nbsp; React &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp;<br />
              Ionic &nbsp;|&nbsp; HTML/CSS &nbsp;|&nbsp; JavaScript &nbsp;|&nbsp; RDBMS<br />
              |&nbsp; NoSQL &nbsp;|&nbsp; OOP | CMS | Python &nbsp;|&nbsp; PHP &nbsp;|&nbsp;<br />
              BPM &nbsp;|&nbsp; AI/ML &nbsp;|&nbsp; Data Streaming | OLAP |<br />
              DevOps &nbsp;|&nbsp; Microservices
            </p>
          </GridCol>
          <GridCol span="C" className="px-6 pb-16">
            <h3 className="text-2xl font-bold mb-6 text-(--brand-black)">
              Example Career Paths
            </h3>
            <div className="mb-5">
              <h4 className="text-base font-bold text-(--brand-black) mb-1">Engineering</h4>
              <p className="text-base text-(--brand-black)">
                Junior SW Engineer → SW Engineer → Senior Engineer<br />
                → Systems Architect
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-base font-bold text-(--brand-black) mb-1">Design & UX</h4>
              <p className="text-base text-(--brand-black)">
                Junior Designer → Product Designer → UX Expert
              </p>
            </div>
            <div>
              <h4 className="text-base font-bold text-(--brand-black) mb-1">QA & Analyst</h4>
              <p className="text-base text-(--brand-black)">
                Junior Designer → Product Designer → UX Expert
              </p>
            </div>
          </GridCol>
          <GridCol span="D">
            <></>
          </GridCol>
        </GridContainer>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400/30"></div>
      </GridSection>

      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-(--brand-white)"
        className="m-0 p-0 relative"
        desktopOnly={true}
      >
        <GridContainer>
          <GridCol span="A" className="h-20">
            <></>
          </GridCol>
          <GridCol span="B" className="h-20">
            <></>
          </GridCol>
          <GridCol
            span="C"
            className="h-20"
            style={{
              background: stripePatternWhite,
              backgroundColor: "var(--brand-white)",
            }}
          >
            <></>
          </GridCol>
          <GridCol
            span="D"
            className="h-20"
            style={{
              background: stripePatternWhite,
              backgroundColor: "var(--brand-white)",
            }}
          >
            <></>
          </GridCol>
        </GridContainer>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-20"></div>
        <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30 z-20"></div>
      </GridSection>

      <section className="lg:hidden bg-(--brand-white) px-5 py-12">
        <h2 className="text-[2rem] leading-[1.15] mb-4 font-bold">
          Opportunities to Grow
        </h2>
        <p className="text-base text-(--brand-black) leading-relaxed mb-10">
          Whether you're early in your career or ready to lead, we offer space to specialize, take
          ownership, and level up. Clear paths. Real progress.
        </p>
        <div className="mb-8 pb-8 relative">
          <h3 className="text-xl font-bold mb-3 text-(--brand-black)">
            Onboarding Process
          </h3>
          <p className="text-base text-(--brand-black) leading-relaxed mb-4">
            We want you to hit the ground running — and feel right at home. Our onboarding combines
            structured guidance with hands-on experience, so you can:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-base text-(--brand-black)">
              <span className="w-1.5 h-1.5 rounded-full bg-(--brand-black) mt-2 shrink-0"></span>
              <span>Get familiar with our tools, systems, and culture</span>
            </li>
            <li className="flex items-start gap-3 text-base text-(--brand-black)">
              <span className="w-1.5 h-1.5 rounded-full bg-(--brand-black) mt-2 shrink-0"></span>
              <span>Pair with mentors for support and real-time feedback</span>
            </li>
            <li className="flex items-start gap-3 text-base text-(--brand-black)">
              <span className="w-1.5 h-1.5 rounded-full bg-(--brand-black) mt-2 shrink-0"></span>
              <span>Join real projects early, with gradual responsibility</span>
            </li>
          </ul>
          <div className="absolute bottom-0 -left-5 -right-5 h-px bg-gray-400/30"></div>
        </div>
        <div className="mb-8 pb-8 relative">
          <h3 className="text-xl font-bold mb-3 text-(--brand-black)">
            Tech Stack
          </h3>
          <p className="text-base text-(--brand-black) leading-relaxed mb-4">
            We work with a wide range of tools — modern, modular, and ready for scale
          </p>
          <p className="text-base text-(--brand-black) leading-relaxed">
            Java &nbsp;|&nbsp; Angular &nbsp;|&nbsp; React &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; 
            Ionic &nbsp;|&nbsp; HTML/CSS &nbsp;|&nbsp; JavaScript &nbsp;|&nbsp; RDBMS &nbsp;|&nbsp; 
            NoSQL &nbsp;|&nbsp; OOP | CMS | Python &nbsp;|&nbsp; PHP &nbsp;|&nbsp; 
            BPM &nbsp;|&nbsp; AI/ML &nbsp;|&nbsp; Data Streaming | OLAP | 
            DevOps &nbsp;|&nbsp; Microservices
          </p>
          <div className="absolute bottom-0 -left-5 -right-5 h-px bg-gray-400/30"></div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-(--brand-black)">
            Example Career Paths
          </h3>
          <div className="mb-4">
            <h4 className="text-base font-bold text-(--brand-black) mb-1">Engineering</h4>
            <p className="text-base text-(--brand-black)">
              Junior SW Engineer → SW Engineer → Senior Engineer → Systems Architect
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-base font-bold text-(--brand-black) mb-1">Design & UX</h4>
            <p className="text-base text-(--brand-black)">
              Junior Designer → Product Designer → UX Expert
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-(--brand-black) mb-1">QA & Analyst</h4>
            <p className="text-base text-(--brand-black)">
              Junior Designer → Product Designer → UX Expert
            </p>
          </div>
        </div>
        <div className="h-8"></div>
      </section>
    </>
  );
};

export default OpportunitiesSection;