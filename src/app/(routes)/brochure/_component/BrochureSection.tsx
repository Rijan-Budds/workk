import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { BrochureUi } from './BrochureUi'

export const BrochureSection = () => {
  return (
    <div>
      <CoverImage title="Brochure" list={[{ link: null, title: 'brochure' }]} />
      <HomeWrapper>
        <BrochureUi />
      </HomeWrapper>
    </div>
  )
}
