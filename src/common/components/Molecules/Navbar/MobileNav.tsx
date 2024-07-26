import React from 'react'
import { MobileNavHeader } from './MobileNavHeader'

export const MobileNav = () => {
  return (
    <div className="block 2lg:hidden  sticky top-0 z-[999]">
      <MobileNavHeader />
    </div>
  )
}
