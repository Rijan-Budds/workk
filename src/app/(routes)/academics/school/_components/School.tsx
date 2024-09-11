import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import SchoolSection from './SchoolSection'
import SchoolStickySidebar from './SchoolStickySidebar'

const School = () => {
  return (
    <div>
      <CoverImage
        title="Pre-School"
        list={[
          { link: '', title: 'Academics' },
          { link: '', title: 'School' },
          { link: '', title: 'Pre-School' },
        ]}
      />

      <HomeWrapper>
        <div className="flex flex-col lg:flex-row gap-[56px]">
          <SchoolSection />
          <SchoolStickySidebar />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default School
