import { MobileNav } from '@/common/components/Molecules/Navbar/MobileNav'
import { NavHeader } from '@/common/components/Molecules/Navbar/NavHeader'
import { Navbar } from '@/common/components/Molecules/Navbar/Navbar'
import React from 'react'

export const NavSection = () => {
  return (
    <>
      <NavHeader />
      <Navbar />
      <MobileNav />
    </>
  )
}
