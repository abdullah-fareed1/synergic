import Footer from "../components/Footer";
import AutomatedErpSection from "./sections/AutomatedErpSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import WhyAutomatedSection from "./sections/WhyAutomatedSection";

const  ErpIntegrations = () => {
  return (
    <>
      <HeroSection />
      <WhyAutomatedSection/>
      <AutomatedErpSection/>
      <div className="bg-white border h-20">
        Temporarily created space for dev purposes
      </div>
      <FaqSection/>
      <Footer />
    </>
  );
};

export default ErpIntegrations;