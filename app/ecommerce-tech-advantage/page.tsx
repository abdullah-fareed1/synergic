import Footer from "../components/Footer";
import HeroSection from "./sections/HeroSection";
import LegacyPlatformsSection from "./sections/LegacyPlatformsSection";

export default function EcommerceTechAdvantage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="h-20 border"></div>
      <LegacyPlatformsSection />
      <Footer/>
    </main>
  );
}
