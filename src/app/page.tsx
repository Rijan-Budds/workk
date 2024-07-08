import { NavHeader } from '@/common/components/Molecules/NavHeader'
import { HeroSection } from './(home)/_components/Hero/HeroSection'
import AboutusWrapper from './(home)/_components/Aboutus/AboutusWrapper'
import ProcessSection from './(home)/_components/Process/ProcessSection'

export default function Home() {
  return (
    <>
      <NavHeader />
      <HeroSection />
      <ProcessSection />
      <AboutusWrapper />
    </>
  )
}
