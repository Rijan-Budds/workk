'use client'
import React from 'react'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import AcademicDetailSection from './AcademicDetailSection'
import StickyAcademicSide from './StickyAcademicSide'
import { IAcademicsData } from '../../_interface/academic'

const AcademicDetail = ({
  detail,
  slug,
}: {
  detail: IAcademicsData
  slug: string
}) => {
  return (
    <>
      <CoverImage
        title={slug}
        list={[
          { link: '/academics', title: 'Academic' },
          { link: null, title: 'PLus Two' },
          { link: null, title: slug },
        ]}
      />
      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[80px] 2lg:gap-[56px]">
          <AcademicDetailSection detail={detail} />
          <StickyAcademicSide />
        </div>
      </HomeWrapper>
    </>
  )
}

export default AcademicDetail
