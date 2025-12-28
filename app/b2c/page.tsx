import Footer from "../components/Footer";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}