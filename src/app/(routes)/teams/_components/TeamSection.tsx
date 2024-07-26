import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import TeamCards from './TeamCards'

const TeamSection = () => {
  return (
    <>
      <CoverImage title="Our Team" />
      <HomeWrapper>
        <div>
          <TeamCards />
        </div>
      </HomeWrapper>
    </>
  )
}

export default TeamSection
