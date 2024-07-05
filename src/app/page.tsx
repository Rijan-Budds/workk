import { NavHeader } from '@/common/components/Molecules/NavHeader'
import { HeroSection } from './(home)/_components/Hero/HeroSection'
import AboutusWrapper from './(home)/_components/TeacherAndStaff/AboutusWrapper'

export default function Home() {
  return (
    <>
      <NavHeader />
      <HeroSection />
      <AboutusWrapper />
    </>
  )
}
