'use client'

import React, { useState } from 'react'
import { GalleryTab } from './GalleryTab'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { GalleryCard } from './GalleryCard'
import { galleriesCarouselData } from '@/app/(home)/_components/Gallery/constant/data'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { GalleryModal } from './GalleryModal'

type IType = 'photo' | 'video'

export const GallerySection = () => {
  const filterImageData = galleriesCarouselData.filter(
    (d) => d.type === 'image'
  )

  const [src, setSrc] = useState<string>('')
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [dynamicCardsData, setDynamicCardsData] = useState(filterImageData)
  const [type, setType] = useState<IType>('photo')

  const handleDynamicData = (type: IType) => {
    setType(type)
    if (type === 'video') {
      const filterVideoData = galleriesCarouselData.filter(
        (d) => d.type === 'video'
      )
      setDynamicCardsData(filterVideoData)
    } else {
      setDynamicCardsData(filterImageData)
    }
  }

  const renderGalleryCardsUi = () => {
    return dynamicCardsData.map((gallery, index) => {
      return (
        <GalleryCard
          key={gallery.id}
          gallery={gallery}
          setSrc={setSrc}
          setModalOpen={setModalOpen}
          setActiveImage={setActiveImage}
          index={index}
        />
      )
    })
  }

  return (
    <HomeWrapper>
      <div className="flex flex-col items-center gap-y-10 2lg:gap-y-14">
        <GalleryTab handleDynamicData={handleDynamicData} />
        <div className="flex flex-row flex-wrap justify-center  gap-6 md:gap-x-5 md:gap-y-6 2lg:gap-6 ">
          {renderGalleryCardsUi()}
        </div>
      </div>

      {src.length > 0 && (
        <CustomModal isOpen={isModalOpen}>
          <GalleryModal
            src={
              activeImage
                ? dynamicCardsData[activeImage].src
                : dynamicCardsData[0].src
            }
            setModalOpen={setModalOpen}
            setSrc={setSrc}
            setActiveImage={setActiveImage}
            length={dynamicCardsData.length - 1}
            type={type}
            showSwipe={dynamicCardsData.length > 1}
          />
        </CustomModal>
      )}
    </HomeWrapper>
  )
}
