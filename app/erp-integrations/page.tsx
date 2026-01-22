import Footer from "../components/Footer";
import AutomatedErpSection from "./sections/AutomatedErpSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import WhyAutomatedSection from "./sections/WhyAutomatedSection";

const  ErpIntegrations = () => {
  return (
    <>
      <HeroSection />
      <WhyAutomatedSection/>
      <AutomatedErpSection/>
      <HowItWorksSection/>
      <FaqSection/>
      <Footer />
    </>
  );
};

export default ErpIntegrations;