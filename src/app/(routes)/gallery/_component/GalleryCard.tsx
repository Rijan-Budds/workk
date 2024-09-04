'use client'

import { IGalleryItem } from '@/app/(home)/_components/Gallery/interface/Gallery'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'
import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { Dispatch, useRef } from 'react'

export const GalleryCard = ({
  gallery,
  setSrc,
  setModalOpen,
  setActiveImage,
  index,
}: {
  gallery: IGalleryItem
  setSrc: Dispatch<string>
  setModalOpen: Dispatch<boolean>
  setActiveImage: Dispatch<number>
  index: number
}) => {
  const handleClick = () => {
    setSrc(gallery.src)
    setModalOpen(true)
    setActiveImage(index)
  }

  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <div
      onClick={() => handleClick()}
      className="w-[343px] h-[229px] md:w-[326px] md:h-[218px] 2lg:w-[390px] 2lg:h-[265px]  rounded-[12px] relative overflow-hidden group cursor-pointer"
    >
      {gallery.type === 'video' ? (
        <div>
          <CustomVideo
            src={gallery.src}
            width="397"
            height="265"
            className="w-[397px] h-[265px] rounded-[12px]  object-cover"
            videoRef={videoRef}
            autoPlay={false}
            fallbackThumb="/home/gallery-5.png"
          />
          <button className="absolute bottom-[1.5rem] right-[1.5rem] bg-white  rounded-full  size-[32px] flex justify-center items-center">
            <Image
              width={10}
              height={11}
              alt="pause icon"
              src={'/home/pause.svg'}
            />
          </button>

          <button className="absolute bottom-[1.5rem] right-[4.5rem] bg-white text-white p-2 rounded-full  size-[32px] flex justify-center items-center">
            <Image
              width={15}
              height={12}
              alt="fullscreen icon"
              src={'/home/fullscreen.svg'}
            />
          </button>
        </div>
      ) : (
        <>
          <Image
            src={gallery.src}
            width={343}
            height={229}
            className="w-full h-full  rounded-[12px]"
            alt="students studying on class"
          />
        </>
      )}

      <div
        className={cn(
          'bg-white absolute 2lg:-bottom-20 left-1/2 -translate-x-1/2 rounded-[12px] text-nowrap bottom-6 2lg:group-hover:bottom-6 transition-all duration-500 will-change-transform ',
          {
            '2lg:group-hover:bottom-20': gallery.type === 'video',
          }
        )}
      >
        <p className="text-[18px] font-workSans leading-6 font-medium text-heading px-4 py-3">
          {gallery.title}
        </p>
      </div>
    </div>
  )
}
