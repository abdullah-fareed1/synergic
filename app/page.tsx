import HeroSection from "./home/sections/HeroSection";
import ChooseCombineGrow from "./home/sections/ChooseCombineGrow";
import SolutionsSection from "./home/sections/SolutionsSection";
import BuildFusionSection from "./home/sections/BuildFusionSection";
import CustomersLogoSection from "./home/sections/CustomersLogoSection";
import IndustryFocusedSection from "./home/sections/IndustryFocusedSection";
import BlogSection from "./home/sections/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ChooseCombineGrow />
      <SolutionsSection />
      <BuildFusionSection />
      <CustomersLogoSection />
      <IndustryFocusedSection />
      <BlogSection />
    </main>
  );
}
