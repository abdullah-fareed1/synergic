import Footer from "../components/Footer";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import OurSolutionSection from "./sections/OurSolutionSection";
import WhyOrdersSection from "./sections/WhyOrdersSection";

export default function OrderManagementSystems() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <WhyOrdersSection/>
      <OurSolutionSection/>
      <FaqSection/>
      <Footer/>
    </main>
  );
}