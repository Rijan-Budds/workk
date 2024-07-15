import React from 'react'
import { MobileNavHeader } from './MobileNavHeader'

export const MobileNav = () => {
  return (
    <div className="block 2lg:hidden  sticky top-0 z-50">
      <MobileNavHeader />
    </div>
  )
}
