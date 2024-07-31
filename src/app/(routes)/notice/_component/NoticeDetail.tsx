import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { StickySidebar } from '../../news/_component/StickySidebar'
import { NoticeDetailSection } from './NoticeDetailSection'
import { MobileSidebar } from '../../news/_component/MobileSidebar'

export const NoticeDetail = () => {
  return (
    <div>
      <CoverImage title="Notices" />
      <HomeWrapper>
        <div className="flex flex-col gap-y-20 2lg:gap-y-0  2lg:flex-row justify-between gap-x-12">
          <NoticeDetailSection />
          <StickySidebar />
          <MobileSidebar />
        </div>
      </HomeWrapper>
    </div>
  )
}
