import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { FacilitesTabSection } from './FacilitesTabSection'

export const FacilitesSection = () => {
  return (
    <div className="min-h-screen ">
      <CoverImage title="Science Lab" />
      <HomeWrapper>
        <FacilitesTabSection />
      </HomeWrapper>
    </div>
  )
}
