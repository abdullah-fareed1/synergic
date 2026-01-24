import Footer from "../components/Footer"
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import OurApproachSection from "./sections/OurApproachSection";
import OurSolutionSection from "./sections/OurSolutionSection";
import PimDashboardSection from "./sections/PimDashboardSection";
import WhatIsPimSection from "./sections/WhatIsPimSection";

const  PimSystems = () => {
  return (
    <>
      <HeroSection />
      <OurSolutionSection />
      <WhatIsPimSection/>
      <OurApproachSection/>
      <PimDashboardSection/>
      <HowItWorksSection/>
      <FaqSection/>
      <Footer />
    </>
  );
};

export default PimSystems;