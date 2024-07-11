import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { GalleryNewSlider } from './GalleryNewSlider'

export const GallerySection = () => {
  return (
    <div className="bg-[url('/home/gallery-bg.svg')]">
      <HomeWrapper>
        <div className="flex flex-col gap-y-[8.5rem]  overflow-hidden ">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <MiniHeading>galleries</MiniHeading>
            <SectionHeading>Our Galleries</SectionHeading>
          </div>
          <GalleryNewSlider />
        </div>
      </HomeWrapper>
    </div>
  )
}
