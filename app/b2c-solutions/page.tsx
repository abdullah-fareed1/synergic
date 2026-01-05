import Footer from '../components/Footer'
import BuiltForGrowthSection from './sections/BuiltForGrowthSection'
import HeroSection from './sections/HeroSection'
import ReadyToBuildSection from './sections/ReadyToBuildSection'
import SneakersSection from './sections/SneakersSection'
import SolvingSection from './sections/SolvingSection'
import TechnologySection from './sections/TechnologySection'

export default function B2cSolutions() {
  return (
    <main className="min-h-screen">
        <HeroSection />
        <SolvingSection />
        <SneakersSection />
        <TechnologySection />
        <BuiltForGrowthSection />
        <ReadyToBuildSection />
        <Footer />
    </main>
  )
}

