import { ReactNode } from 'react'
import Footer from '@/common/components/Molecules/Footer/Footer'
import { NavSection } from '../(home)/_components/NavSection'

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
