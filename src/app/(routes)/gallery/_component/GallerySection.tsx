'use client'

import React, { useState } from 'react'
import { GalleryTab } from './GalleryTab'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { GalleryCard } from './GalleryCard'
import { galleriesCarouselData } from '@/app/(home)/_components/Gallery/constant/data'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { GalleryModal } from './GalleryModal'

export const GallerySection = () => {
  const [src, setSrc] = useState<string>('')
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const renderGalleryCardsUi = () => {
    return galleriesCarouselData.map((gallery) => {
      return (
        <GalleryCard
          key={gallery.id}
          gallery={gallery}
          setSrc={setSrc}
          setModalOpen={setModalOpen}
          setActiveImage={setActiveImage}
        />
      )
    })
  }

  return (
    <HomeWrapper>
      <div className="flex flex-col items-center gap-y-10 2lg:gap-y-14">
        <GalleryTab />
        <div className="flex flex-row flex-wrap justify-center  gap-6 md:gap-x-5 md:gap-y-6 2lg:gap-6 ">
          {renderGalleryCardsUi()}
        </div>
      </div>

      {src.length > 0 && (
        <CustomModal isOpen={isModalOpen}>
          <GalleryModal
            src={
              activeImage
                ? galleriesCarouselData[activeImage].src
                : galleriesCarouselData[0].src
            }
            setModalOpen={setModalOpen}
            setSrc={setSrc}
            setActiveImage={setActiveImage}
            length={galleriesCarouselData.length - 1}
          />
        </CustomModal>
      )}
    </HomeWrapper>
  )
}
