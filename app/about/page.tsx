import Footer2 from "../components/Footer2";
import EmpoweringSection from "./sections/EmpoweringSection";
import ExpertandQualitySection from "./sections/ExpertandQualitySection";
import MissionSection from "./sections/MissionSection";
import OurSolutionsSection from "./sections/OurSolutionsSection";
import SystemIntelligentSection from "./sections/SystemIntelligentSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <EmpoweringSection />
      <MissionSection />
      <SystemIntelligentSection />
      <OurSolutionsSection />
      <ExpertandQualitySection />
      <Footer2 />
    </main>
  );
}