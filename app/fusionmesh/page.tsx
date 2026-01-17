import Footer from "../components/Footer";
import FusionMeshGlanceSection from "./sections/FusionMeshGlanceSection";
import HeroSection from "./sections/HeroSection";
import SolutionsSection from "./sections/SolutionsSection";
import StartBuildingSmarterSection from "./sections/StartBuildingSmarterSection";
import WhyFusionMeshSection from "./sections/WhyFusionMeshSection";

export default function FusionMesh() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FusionMeshGlanceSection />
      <WhyFusionMeshSection />
      <SolutionsSection />
      <StartBuildingSmarterSection />
      <Footer />
    </main>
  );
}