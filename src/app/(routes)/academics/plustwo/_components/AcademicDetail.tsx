'use client'
import React from 'react'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import AcademicDetailSection from './AcademicDetailSection'
import StickyAcademicSide from './StickyAcademicSide'

interface AcademicDetailProps {
  slug: string
}

const AcademicDetail: React.FC<AcademicDetailProps> = ({ slug }) => {
  return (
    <>
      <CoverImage
        title="Academics"
        list={[
          { link: 'academic', title: 'Academic' },
          { link: '', title: 'PLus Two' },
          { link: '', title: slug },
        ]}
      />
      <HomeWrapper>
        <div className="flex flex-col gap-[80px] lg:flex-row 2lg:gap-[56px]">
          <AcademicDetailSection />
          <StickyAcademicSide />
        </div>
      </HomeWrapper>
    </>
  )
}

export default AcademicDetail
