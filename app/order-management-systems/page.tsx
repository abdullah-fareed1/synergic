import Footer from "../components/Footer";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import OurSolutionSection from "./sections/OurSolutionSection";

export default function OrderManagementSystems() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <OurSolutionSection/>
      <FaqSection/>
      <Footer/>
    </main>
  );
}