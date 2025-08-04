import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { FacilitesTabSection } from './FacilitesTabSection'

// Allowed slugs
const validSlugs = ['science-lab', 'library', 'transportation', 'school-canteen'] as const
type FacilitySlug = typeof validSlugs[number]

function isValidFacilitySlug(slug: string): slug is FacilitySlug {
  return validSlugs.includes(slug as FacilitySlug)
}

export const FacilitesSection = ({ slug }: { slug: string }) => {
  if (!isValidFacilitySlug(slug)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Invalid facility</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <CoverImage
        title={slug}
        list={[
          { link: '/facilities', title: 'facilities' },
          { link: null, title: slug },
        ]}
      />
      <HomeWrapper>
        <FacilitesTabSection slug={slug} />
      </HomeWrapper>
    </div>
  )
}
