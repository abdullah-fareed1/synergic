import Footer from "../components/Footer";
import CommerceLeadersSection from "./sections/CommerceLeadersSection";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import ModernTechnologySection from "./sections/ModernTechnologySection";
import ModularSection from "./sections/ModularSection";
import SolutionsSection from "./sections/SolutionsSection";
import SolvingSection from "./sections/SolvingSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <SolvingSection />
      <SolutionsSection />
      <ModularSection />
      <CommerceLeadersSection />
      <ModernTechnologySection />
    </main>
  );
}