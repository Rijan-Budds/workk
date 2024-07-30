import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { NoticeCardData } from '../constant/data'
import { NoticeCard } from './NoticeCard'

export const NoticeSection = () => {
  return (
    <div>
      <CoverImage title="Notices" />
      <HomeWrapper>
        <div className="flex flex-col  gap-y-10 2lg:items-center">
          <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
            Stay up-to-date with the latest news and events at Pawan Prakriti
            Secondary School. Discover student achievements, sporting highlights
            and other event stories.
          </p>
          <div className="grid  2lg:grid-cols-3 gap-6">
            {NoticeCardData.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}
