import Footer from "../components/Footer";
import HeroSection from "./sections/HeroSection";
import RetailerSolvingSection from "./sections/SolvingSection";
import WhatYouCanBuildSection from "./sections/WhatYouCanBuilSection";

export default function B2cSolutions() {
  return (
    <main className="min-h-screen">
        <HeroSection />
        <RetailerSolvingSection />
        <WhatYouCanBuildSection />
        <Footer />
    </main>
  )
}
