import { AcademicSection } from './_components/AcademicProgram/AcademicSection'
import { ContactSection } from './_components/Contact/ContactSection'
import { HeroSection } from './_components/Hero/HeroSection'
import { ReasonsToStudy } from './_components/ReasonsToStudy/ReasonsToStudy'
import AboutusWrapper from './_components/Aboutus/AboutusWrapper'
import ProcessSection from './_components/Process/ProcessSection'
import { GallerySection } from './_components/Gallery/GallerySection'
import TestimonialsSection from './_components/Testimonials/TestimonialsSection'
import { NoticeModal } from './_components/Notice/NoticeModal'
import NewsAndEvents from './_components/News/NewsAndEvents'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AcademicSection />
      <ReasonsToStudy />
      <ProcessSection />
      <AboutusWrapper />
      <TestimonialsSection />
      <GallerySection />
      <NewsAndEvents />
      <ContactSection />
      <NoticeModal />
    </>
  )
}
