import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { NoticeClientSection } from './NoticeClientSection'

export const NoticeSection = () => {
  return (
    <>
      <CoverImage title="Notices" list={[{ link: '', title: 'Notices' }]} />
      <HomeWrapper>
        <div className="flex flex-col  gap-y-10 2lg:items-center">
          <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
            Stay up-to-date with the latest news and events at Pawan Prakriti
            Secondary School. Discover student achievements, sporting highlights
            and other event stories.
          </p>
          <NoticeClientSection />
        </div>
      </HomeWrapper>
    </>
  )
}
