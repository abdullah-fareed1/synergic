import Footer from '../components/Footer'
import FormSection from './sections/FormSection'
import HeroSection from './sections/HeroSection'
import OpportunitiesSection from './sections/OpportunitiesSection'

export default function Contact() {
  return (
    <main className="min-h-screen">
        <HeroSection />
        <OpportunitiesSection />
        <FormSection />
        <Footer />
    </main>
  )
}
