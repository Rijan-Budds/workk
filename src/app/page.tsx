import { AcademicSection } from './(home)/_components/AcademicProgram/AcademicSection'
import { ContactSection } from './(home)/_components/Contact/ContactSection'
import { HeroSection } from './(home)/_components/Hero/HeroSection'
import { NavSection } from './(home)/_components/NavSection'
import { ReasonsToStudy } from './(home)/_components/ReasonsToStudy/ReasonsToStudy'
import AboutusWrapper from './(home)/_components/Aboutus/AboutusWrapper'
import ProcessSection from './(home)/_components/Process/ProcessSection'
import TestimonialsSection from './(home)/_components/Testimonials/TestimonialsSection'
import NewsAndEvents from './(home)/_components/News/NewsAndEvents'
import Footer from '@/common/components/Molecules/Footer/Footer'

export default function Home() {
  return (
    <>
      {/* <AdPopup /> */}
      <NavSection />
      <HeroSection />
      <AcademicSection />
      <ReasonsToStudy />
      <ProcessSection />
      <AboutusWrapper />
      <TestimonialsSection />
      <NewsAndEvents />
      <ContactSection />
      <Footer />
    </>
  )
}
