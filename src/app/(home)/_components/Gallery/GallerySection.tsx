import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { GallerySlider } from './GallerySlider'

export const GallerySection = () => {
  return (
    <div className="bg-[url('/home/gallery-bg.svg')] ">
      <HomeWrapper>
        <div className="flex flex-col gap-y-10 min-h-[75vh]">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <MiniHeading>galleries</MiniHeading>
            <SectionHeading>Our Galleries</SectionHeading>
          </div>
          <GallerySlider />
        </div>
      </HomeWrapper>
    </div>
  )
}
