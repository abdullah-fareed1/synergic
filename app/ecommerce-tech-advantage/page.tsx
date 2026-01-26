import Footer from "../components/Footer";
import BuiltForGrowthSection from "./sections/BuiltForGrowthSection";
import CompleteCommerceSection from "./sections/CompleteCommerceSection";
import HeroSection from "./sections/HeroSection";
import LegacyPlatformsSection from "./sections/LegacyPlatformsSection";
import OurCompleteSection from "./sections/OurCompleteSection";

export default function EcommerceTechAdvantage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LegacyPlatformsSection />
      
      <OurCompleteSection/>
      <BuiltForGrowthSection/>
      <CompleteCommerceSection/>
      <Footer/>
    </main>
  );
}
