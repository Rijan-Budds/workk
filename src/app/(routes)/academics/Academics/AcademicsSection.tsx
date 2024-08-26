import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import PlusTwoSection from './PlusTwoSection'
import MiddleBanner from './MiddleBanner'
import SchoolSection from './SchoolSection'

const AcademicsSection = () => {
  return (
    <>
      <CoverImage
        title="Academics"
        list={[{ link: 'academic', title: 'Academic' }]}
      />
      <HomeWrapper>
        <PlusTwoSection />
      </HomeWrapper>
      <MiddleBanner />
      <HomeWrapper>
        <SchoolSection />
      </HomeWrapper>
    </>
  )
}

export default AcademicsSection
