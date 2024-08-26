import React from 'react'
import AcademicDetailSection from './AcademicDetailSection'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import AcademicSideBar from './AcademicSideBar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'

const AcademicDetail = () => {
  return (
    <>
      <CoverImage
        title="Academics"
        list={[{ link: 'academic', title: 'Academic' }]}
      />
      <HomeWrapper>
        <div className="flex flex-col gap-[80px] lg:flex-row 2lg:gap-[56px]">
          <AcademicDetailSection />
          <AcademicSideBar />
        </div>
      </HomeWrapper>
    </>
  )
}

export default AcademicDetail
