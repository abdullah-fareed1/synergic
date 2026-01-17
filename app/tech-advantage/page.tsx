import Footer2 from "../components/Footer2";
import CoreTechnologiesSection from "./sections/CoreTechnologiesSection";
import HeroSection from "./sections/HeroSection";
import MixMatchSection from "./sections/MixMatchSection";
import WhyThisStackSection from "./sections/WhyThisStackSection";

export default function TechAdvantage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CoreTechnologiesSection />
      <MixMatchSection />
      <WhyThisStackSection />
      <Footer2 />
    </main>
  );
}