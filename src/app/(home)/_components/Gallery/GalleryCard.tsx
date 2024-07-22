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
    <div
      className={cn('flex flex-col gap-y-4 will-change-transform ', {
        'ml-[5px]': isActive,
      })}
    >
      <div
        className={cn(
          ' rounded-[8px] gallery-card w-[292px] h-[235px]  relative  transition-all duration-500 clip-image mx-auto 2lg:mx-0',
          {
            'rounded xl:scale-x-[1.8] xl:scale-y-[1.7]  3xl:scale-x-[1.982] 3xl:scale-y-[1.840] transition-all duration-500':
              isActive,
          }
        )}
      >
        {isVideoExists ? (
          <CustomVideo
            autoPlay={isActive ? true : false}
            height="827"
            width="578"
            src={data.src}
            className="object-cover h-full rounded-[8px]"
            fallbackThumb="/home/video-thumb.png"
          />
        ) : (
          <Image
            width={292}
            height={235}
            src={data.src}
            alt="gallery carousel"
            className="rounded-[8px]  w-full h-full object-cover"
          />
        )}
      </div>
      {isActive && (
        <>
          <div className="absolute -left-36 -bottom-48 flex flex-col gap-y-10 w-[578px] ">
            <p className="font-workSans font-normal text-[16px] leading-[16px] text-[#313131]">
              <span className="font-poppins font-medium text-[20px] leading-[26px] text-center text-[#187EC0]">
                {data.serialNo}
                {'   '}
              </span>
              {data.title}
            </p>
            <GalleryLoader />
          </div>
        </>
      )}
    </div>
  )
}

const GalleryLoader = () => {
  return (
    <div className="bg-[#E7EEF8] w-full">
      <div className="w-[608px] bg-[#187EC0] rounded-xl h-[1px] animate-fill " />
    </div>
  )
}
