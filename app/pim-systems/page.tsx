import Footer from "../components/Footer"
import HeroSection from "./sections/HeroSection";
import OurSolutionSection from "./sections/OurSolutionSection";
import WhatIsPimSection from "./sections/WhatIsPimSection";

const  PimSystems = () => {
  return (
    <>
      <HeroSection />
      <OurSolutionSection />
      <WhatIsPimSection/>
      <div className="h-20 border">     </div>
      <Footer />
    </>
  );
};

export default PimSystems;