import { AcademicSection } from './(home)/_components/AcademicProgram/AcademicSection'
import { ContactSection } from './(home)/_components/Contact/ContactSection'
import { HeroSection } from './(home)/_components/Hero/HeroSection'
import { NavSection } from './(home)/_components/NavSection'
import { ReasonsToStudy } from './(home)/_components/ReasonsToStudy/ReasonsToStudy'
import AboutusWrapper from './(home)/_components/Aboutus/AboutusWrapper'
import ProcessSection from './(home)/_components/Process/ProcessSection'
import { GallerySection } from './(home)/_components/Gallery/GallerySection'
import TestimonialsSection from './(home)/_components/Testimonials/TestimonialsSection'
import { NoticeModal } from './(home)/_components/Notice/NoticeModal'

export default function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <AcademicSection />
      <ReasonsToStudy />
      <ProcessSection />
      <AboutusWrapper />
      <GallerySection />
      <ContactSection />
      <TestimonialsSection />
      <NoticeModal />
    </>
  )
}
