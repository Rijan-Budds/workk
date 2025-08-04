import { ISettingsResponseData } from '@/app/(routes)/contact/_interface/Contact'
import { MobileNav } from '@/common/components/Molecules/Navbar/MobileNav'
import { NavHeader } from '@/common/components/Molecules/Navbar/NavHeader'
import { Navbar } from '@/common/components/Molecules/Navbar/Navbar'
import React from 'react'

export const NavSection = ({
  settings,
}: {
  settings: ISettingsResponseData | undefined
}) => {
  return (
    <>
      <NavHeader />
      <Navbar />
      <MobileNav socialLinks={settings?.data.socialMedia} />
    </>
  )
}
