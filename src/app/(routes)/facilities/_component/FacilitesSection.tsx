import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { FacilitesTabSection } from './FacilitesTabSection'

export const FacilitesSection = ({ slug }: { slug: string }) => {
  return (
    <div className="min-h-screen ">
      <CoverImage
        title={slug}
        list={[
          { link: '/facilities', title: 'facilites' },
          { link: null, title: slug },
        ]}
      />
      <HomeWrapper>
        <FacilitesTabSection slug={slug} />
      </HomeWrapper>
    </div>
  )
}
