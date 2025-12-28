import Footer from "../components/Footer";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import SolutionsSection from "./sections/SolutionsSection";
import SolvingSection from "./sections/SolvingSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <SolvingSection />
      <SolutionsSection />
    </main>
  );
}