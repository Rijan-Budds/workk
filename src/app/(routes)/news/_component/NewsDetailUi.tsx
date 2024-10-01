import React from 'react'
import { NewsDetailSection } from './NewsDetailSection'
import { StickySidebar } from './StickySidebar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MobileSidebar } from './MobileSidebar'
import { INewsItem } from '../interface/newsType'

export const NewsDetailUi = ({
  slug,
  data,
}: {
  slug: string
  data: INewsItem | undefined
}) => {
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
      <CoverImage title="News" list={BreadCrumbList} />
      <HomeWrapper>
        <div className="flex flex-col gap-y-20 2lg:gap-y-0  2lg:flex-row justify-between gap-x-12">
          {data && <NewsDetailSection data={data} />}
          <StickySidebar />
          <MobileSidebar />
        </div>
      </HomeWrapper>
    </div>
  )
}
