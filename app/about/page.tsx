import Footer from "../components/Footer";
import EmpoweringSection from "./sections/EmpoweringSection";
import MissionSection from "./sections/MissionSection";
import SystemIntelligentSection from "./sections/SystemIntelligentSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <EmpoweringSection />
      <MissionSection />
      <SystemIntelligentSection />
      <Footer />
    </main>
  );
}