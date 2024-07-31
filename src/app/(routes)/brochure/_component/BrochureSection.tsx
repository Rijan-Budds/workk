import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { NoticeCardData } from '../../notice/constant/data'
import { BrochureCardUi } from './BrochureCardUi'

export const BrochureSection = () => {
  return (
    <div>
      <CoverImage title="Brochure" />
      <HomeWrapper>
        <div className="flex flex-col  gap-y-10 2lg:items-center">
          <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
            Our vision is “Working hard to be always the best”. We, as an
            institute are aimed to encourage each of our students & Guide them
            to achieve a successful career tudents them to achieve success.
          </p>
          <div className="grid  2lg:grid-cols-3 gap-6">
            {NoticeCardData.map((notice) => (
              <BrochureCardUi data={notice} key={notice.id} />
            ))}
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}
