import Footer from "../components/Footer";
import FusionMeshGlanceSection from "./sections/FusionMeshGlanceSection";
import HeroSection from "./sections/HeroSection";

export default function FusionMesh() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FusionMeshGlanceSection />
      
    </main>
  );
}