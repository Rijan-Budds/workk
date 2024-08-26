import React from 'react'
import { NewsDetailSection } from './NewsDetailSection'
import { StickySidebar } from './StickySidebar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MobileSidebar } from './MobileSidebar'

export const NewsDetailUi = ({ slug }: { slug: string }) => {
  const BreadCrumbList = [
    {
      title: 'News & Events',
      link: '/news',
    },
    {
      title: slug,
      link: null,
    },
  ]
  return (
    <div className="overflow-x-hidden  2lg:overflow-visible">
      <CoverImage title="News & Events" list={BreadCrumbList} />
      <HomeWrapper>
        <div className="flex flex-col gap-y-20 2lg:gap-y-0  2lg:flex-row justify-between gap-x-12">
          <NewsDetailSection />
          <StickySidebar />
          <MobileSidebar />
        </div>
      </HomeWrapper>
    </div>
  )
}
