import Footer from "../components/Footer"
import HeroSection from "./sections/HeroSection";
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
      <div className="h-20 border">     </div>
      <Footer />
    </>
  );
};

export default PimSystems;