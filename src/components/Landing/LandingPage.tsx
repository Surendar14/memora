import Navigation from './Navigation'
import Hero from './Hero'
import ScrollTransition from './ScrollTransition'
import WhatIsMemora from './WhatIsMemora'
import TheExperience from './TheExperience'
import PhotoShowcase from './PhotoShowcase'
import StorySection from './StorySection'
import Occasions from './Occasions'
import WhatCanBeInside from './WhatCanBeInside'
import EmotionalMoment from './EmotionalMoment'
import HowItWorks from './HowItWorks'
import PersonalTouch from './PersonalTouch'
import BrandStatement from './BrandStatement'
import ContactCTA from './ContactCTA'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="noise-overlay">
      <Navigation />
      <main>
        <Hero />
        <ScrollTransition />
        <WhatIsMemora />
        <TheExperience />
        <PhotoShowcase />
        <StorySection />
        <Occasions />
        <WhatCanBeInside />
        <EmotionalMoment />
        <HowItWorks />
        <PersonalTouch />
        <BrandStatement />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
