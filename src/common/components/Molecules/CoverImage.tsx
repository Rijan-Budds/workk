import Image from 'next/image'
import React from 'react'
import { SectionHeading } from '../Atom/SectionHeading'

export const CoverImage = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[142px] md:h-[235px] relative flex items-center justify-center">
      <Image
        src="/home/coverimage.svg"
        alt="Banner"
        width={1920}
        height={235}
        className={`w-full h-full object-cover `}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SectionHeading className="text-center text-white">
          {title}
        </SectionHeading>
      </div>
    </div>
  )
}
