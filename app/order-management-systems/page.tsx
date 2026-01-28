import Footer from "../components/Footer";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import OmsDashboardSection from "./sections/OmsDashboardSection";
import OurSolutionSection from "./sections/OurSolutionSection";
import PIMIntegrationSection from "./sections/PimIntegrationSection";
import WhyOrdersSection from "./sections/WhyOrdersSection";

export default function OrderManagementSystems() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <WhyOrdersSection/>
      <OurSolutionSection/>
      <OmsDashboardSection/>
      <PIMIntegrationSection/>
      <FaqSection/>
      <Footer/>
    </main>
  );
}