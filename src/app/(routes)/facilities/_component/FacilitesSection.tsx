import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { ActiveImage } from './ActiveImage'
import { SwipeableCards } from './SwipeableCards'
import { FacilitesDesc } from './FacilitesDesc'

export const FacilitesSection = () => {
  return (
    <div className="min-h-screen ">
      <CoverImage title="Science Lab" />
      <HomeWrapper>
        <div className="flex justify-between flex-col md:flex-row gap-x-6  2lg:flex-row gap-y-6 2lg:gap-y-0 ">
          <ActiveImage src="/facilites/facil-1.png" />
          <div className="flex flex-col md:flex-col-reverse gap-y-3  2lg:max-w-[503px]  ">
            <SwipeableCards />
            <FacilitesDesc />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}
