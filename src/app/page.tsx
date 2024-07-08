import { AcademicSection } from './(home)/_components/AcademicProgram/AcademicSection'
import { HeroSection } from './(home)/_components/Hero/HeroSection'
import { NavSection } from './(home)/_components/NavSection'
import { ReasonsToStudy } from './(home)/_components/ReasonsToStudy/ReasonsToStudy'
import AboutusWrapper from './(home)/_components/Aboutus/AboutusWrapper'
import ProcessSection from './(home)/_components/Process/ProcessSection'

export default function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <AcademicSection />
      <ReasonsToStudy />
      <ProcessSection />
      <AboutusWrapper />
    </>
  )
}
