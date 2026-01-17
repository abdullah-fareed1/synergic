import Footer from "../components/Footer";
import B2BCapabilitiesSection from "./sections/b2bCapabilitiesSection";
import HeroSection from "./sections/HeroSection";
import ReadyToBuildSection from "./sections/ReadyToBuildSection";
import TechnologySection from "./sections/TechnologySection";

export default function B2cSolutions() {
  return (
    <main className="min-h-screen">
        <HeroSection />
        <B2BCapabilitiesSection/>
        <TechnologySection/>
        <ReadyToBuildSection/>
        <Footer />
    </main>
  )
}
