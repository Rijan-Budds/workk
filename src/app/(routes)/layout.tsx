import { ReactNode } from 'react'
import { NavSection } from '../(home)/_components/NavSection'
import Footer from '@/common/components/Molecules/Footer/Footer'

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="h-screen overflow-y-scroll">
      <NavSection />
      {children}
      <Footer />
    </div>
  )
}
