import { AcademicSection } from './(home)/_components/AcademicProgram/AcademicSection'
import { HeroSection } from './(home)/_components/Hero/HeroSection'
import { NavSection } from './(home)/_components/NavSection'
import { ReasonsToStudy } from './(home)/_components/ReasonsToStudy/ReasonsToStudy'

export default function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <AcademicSection />
      <ReasonsToStudy />
    </>
  )
}
