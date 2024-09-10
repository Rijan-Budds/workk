import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

export const NoticeDetailSection = () => {
  return (
    <div className="flex flex-col items-start gap-y-2 md:max-w-[672px]  2lg:max-w-[787px]">
      <MiniHeading className="font-semibold leading-4 tracking-widest text-secondary">
        July 19, 2024
      </MiniHeading>
      <SectionHeading>Admission opens for 2080</SectionHeading>

      <p className="text-body font-workSans text-[16px] leading-[27.2px] mt-8 ">
        We are more than glad to announce that the admissions are now open for
        academic session 2080 and we welcome young kids with arms wide open to
        push open the gates of our institution and grow, learn, flourish and
        reach sky high limits.
        <br />
        <br />
        <span className="font-medium">
          For more information, please contact : 015007275, 5007259
        </span>
      </p>

      <Image
        width={343}
        height={485}
        alt="Admission open banner"
        src={'/facilites/facil-banner.png'}
        className="md:w-[672px] md:h-[935px]  2lg:w-[787px] 2lg:h-[1114px] 2lg:mt-10"
      />
    </div>
  )
}
