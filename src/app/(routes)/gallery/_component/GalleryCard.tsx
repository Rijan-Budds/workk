'use client'

import { IGalleryItem } from '@/app/(home)/_components/Gallery/interface/Gallery'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'
import Image from 'next/image'
import React, { Dispatch } from 'react'

export const GalleryCard = ({
  gallery,
  setSrc,
  setModalOpen,
  setActiveImage,
}: {
  gallery: IGalleryItem
  setSrc: Dispatch<string>
  setModalOpen: Dispatch<boolean>
  setActiveImage: Dispatch<number>
}) => {
  const handleClick = () => {
    setSrc(gallery.src)
    setModalOpen(true)
    setActiveImage(gallery.id)
  }

  return (
    <div
      onClick={() => handleClick()}
      className="w-[343px] h-[229px] md:w-[326px] md:h-[218px] 2lg:w-[390px] 2lg:h-[265px]  rounded-[12px] relative overflow-hidden group cursor-pointer"
    >
      {gallery.type === 'video' ? (
        <CustomVideo
          src={gallery.src}
          width="397"
          height="265"
          className="w-full h-full"
        />
      ) : (
        <>
          <Image
            src={gallery.src}
            width={343}
            height={229}
            className="w-full h-full  rounded-[12px]"
            alt="students studying on class"
          />

          <div className="bg-white absolute -bottom-20 left-1/2 -translate-x-1/2 rounded-[12px] text-nowrap group-hover:bottom-6 transition-all duration-500 will-change-transform ">
            <p className="text-[18px] font-workSans leading-6 font-medium text-heading px-4 py-3">
              {gallery.title}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
