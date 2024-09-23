'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { GalleryMobileSlider, GallerySlider } from './GalleryNewSlider'

export const GallerySection = () => {
  return (
    <div className="bg-[url('/home/gallery-bg.svg')]">
      <HomeWrapper className=" 2lg:py-[112px]">
        <div className="flex flex-col gap-y-10  2lg:gap-y-10 overflow-hidden ">
          <div className="flex flex-col justify-center items-center gap-y-2 ">
            <MiniHeading className="text-secondary ">galleries</MiniHeading>
            <SectionHeading className="md:text-[38px]">
              Our Galleries
            </SectionHeading>
          </div>
          <GallerySlider />
          <GalleryMobileSlider />
        </div>
      </HomeWrapper>
    </div>
  )
}
