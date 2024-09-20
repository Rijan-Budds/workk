'use client'
import Image from 'next/image'
import React from 'react'
import { ITestimonialData } from '@/app/(routes)/testimonials/_interface/testimonial'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'

export const TestimonailBigCard = ({ card }: { card: ITestimonialData }) => {
  return (
    <>
      <div
        className="bg-background max-w-[608px] rounded-[12px] relative mx-auto"
        style={{ boxShadow: '4px 4px 0 0 #FAFAFA' }}
      >
        <Image
          src="/home/quote.svg"
          width={60}
          height={51}
          alt="quote"
          className="absolute w-[60px] h-[51px] top-[18.33px] left-[13.51px]"
        />
        <p className="p-[40px] font-workSans font-[400] text-base leading-[27.2px] tracking-tight">
          {card.description}
        </p>
        <div className="px-10 py-6 flex gap-4 border-border-2 border-t-[1px]">
          <ImageWithPlaceholder
            src={card.image ? card.image.key : undefined}
            width={56}
            height={56}
            alt="stud"
            className="rounded-full w-14 h-14 object-cover"
          />
          <div className="flex flex-col justify-center space-y-[8px]">
            <h1 className="font-poppins  font-medium text-base leading-4 text-heading">
              {card.name}
            </h1>
            <p className="text-sm font-workSans font-[400] text-body leading-4">
              {card.position}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
