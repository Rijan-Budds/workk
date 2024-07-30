import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import Image from 'next/image'
import React from 'react'

export const NoticeDetail = () => {
  return (
    <div>
      <CoverImage title="Notices" />
      <HomeWrapper>
        <div className="flex flex-col items-start gap-y-2">
          <MiniHeading>July 19, 2024</MiniHeading>
          <SectionHeading>Admission opens for 2080</SectionHeading>

          <p className="text-body font-workSans text-[16px] leading-[27.2px]">
            We are more than glad to announce that the admissions are now open
            for academic session 2080 and we welcome young kids with arms wide
            open to push open the gates of our institution and grow, learn,
            flourish and reach sky high limits.
            <br />
            <br />
            For more information, please contact : 015007275, 5007259
          </p>

          <Image
            width={343}
            height={485}
            alt="Admission open banner"
            src={'/facilites/facil-banner.png'}
          />
        </div>
      </HomeWrapper>
    </div>
  )
}
