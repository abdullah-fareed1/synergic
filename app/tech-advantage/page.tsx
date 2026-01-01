import Footer from "../components/Footer";
import CoreTechnologiesSection from "./sections/CoreTechnologiesSection";
import HeroSection from "./sections/HeroSection";

export default function TechAdvantage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CoreTechnologiesSection />
      <Footer />
    </main>
  );
}