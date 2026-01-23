import Footer from "../components/Footer"
import HeroSection from "./sections/HeroSection";
import OurApproachSection from "./sections/OurApproachSection";
import OurSolutionSection from "./sections/OurSolutionSection";
import WhatIsPimSection from "./sections/WhatIsPimSection";

const  PimSystems = () => {
  return (
    <>
      <HeroSection />
      <OurSolutionSection />
      <WhatIsPimSection/>
      <OurApproachSection/>
      <div className="h-20 border">     </div>
      <Footer />
    </>
  );
};

export default PimSystems;