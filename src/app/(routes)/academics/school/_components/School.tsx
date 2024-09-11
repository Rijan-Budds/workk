import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import SchoolSection from './SchoolSection'
import SchoolStickySidebar from './SchoolStickySidebar'

interface SchoolProps {
  slug: string
}

const School: React.FC<SchoolProps> = ({ slug }) => {
  return (
    <div>
      <CoverImage
        title="Pre-School"
        list={[
          { link: '', title: 'Academics' },
          { link: '', title: 'School' },
          { link: '', title: slug },
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
