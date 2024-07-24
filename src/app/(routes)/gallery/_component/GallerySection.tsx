import React from 'react'
import { GalleryTab } from './GalleryTab'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { GalleryCard } from './GalleryCard'
import { galleriesCarouselData } from '@/app/(home)/_components/Gallery/constant/data'

export const GallerySection = () => {
  const renderGalleryCardsUi = () => {
    return galleriesCarouselData.map((gallery) => {
      return <GalleryCard key={gallery.id} gallery={gallery} />
    })
  }

  return (
    <HomeWrapper>
      <div className="flex flex-col items-center gap-y-10 2lg:gap-y-14">
        <GalleryTab />
        <div className="flex flex-row flex-wrap justify-center  gap-6 md:gap-x-5 md:gap-y-6 2lg:gap-6 ">
          {renderGalleryCardsUi()}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-center  gap-6 md:gap-x-5 md:gap-y-6 ">
          {galleriesCarouselData.map((gallery) => (
            <GalleryCard gallery={gallery} key={gallery.id} />
          ))} */}
      </div>
    </HomeWrapper>
  )
}
