import Footer from "../components/Footer";
import EmpoweringSection from "./sections/EmpoweringSection";
import MissionSection from "./sections/MissionSection";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <EmpoweringSection />
      <MissionSection />
      <Footer />
    </main>
  );
}