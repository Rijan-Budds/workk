import React from 'react'
import { NewsDetailSection } from './NewsDetailSection'
import { StickySidebar } from './StickySidebar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

export const NewsDetailUi = () => {
  return (
    <>
      <CoverImage title="News & Events" />
      <HomeWrapper>
        <div className="flex justify-between">
          <NewsDetailSection />
          <StickySidebar />
        </div>
      </HomeWrapper>
    </>
  )
}
