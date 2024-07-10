'use client'

import Image from 'next/image'
import React from 'react'
import { IGalleryItem } from './interface/Gallery'
import { cn } from '@/common/utils/utils'
import { isVideo } from '@/common/utils/checkIsVideo'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'

export const GalleryCard = ({
  data,
  isActive,
}: {
  data: IGalleryItem
  isActive: boolean
}) => {
  const isVideoExists = isVideo(data.src)
  return (
    <div className="flex flex-col gap-y-4 will-change-transform ">
      <div
        className={cn(
          ' rounded-[8px] gallery-card w-[292px] h-[219px]  gallery-transition-all duration-500',
          {
            'w-[580px] h-[400px]  ': isActive,
            'mt-auto': !isActive,
          }
        )}
      >
        {isVideoExists ? (
          <CustomVideo
            height="400"
            width="580"
            src={data.src}
            className="rounded-[8px]"
            fallbackThumb="/home/video-thumb.png"
          />
        ) : (
          <Image
            width={292}
            height={219}
            src={data.src}
            alt="gallery carousel"
            className="rounded-[8px]  w-full h-full"
          />
        )}
      </div>
      <div>
        <p className="font-workSans font-normal text-[16px] leading-[16px] text-[#313131]">
          <span className="font-poppins font-medium text-[20px] leading-[26px] text-center text-[#187EC0]">
            {data.serialNo}
            {'   '}
          </span>
          {data.title}
        </p>
      </div>
      {isActive && <GalleryLoader />}
    </div>
  )
}

const GalleryLoader = () => {
  return (
    <div className="bg-[#E7EEF8]">
      <div className="w-[608px] bg-[#187EC0] rounded-xl h-[1px] animate-fill " />
    </div>
  )
}
