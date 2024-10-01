'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Button } from '@/common/components/ui/button'
import Link from 'next/link'
import { IAcademicsImage } from '../../_interface/academic'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { cn } from '@/common/utils/utils'

const SchoolGallery = ({ gallery }: { gallery: IAcademicsImage }) => {
  const [activeSrc, setActiveSrc] = useState<string | null>(
    gallery && gallery?.key[0]
  )

  return (
    <div className="flex justify-between flex-col gap-x-6 gap-y-6 mt-6">
      <div className="flex justify-center">
        <ImageWithPlaceholder
          src={activeSrc ? activeSrc : undefined}
          alt="Active School Gallery"
          width={787}
          height={524}
          className="rounded-xl md:w-[787px] md:h-[524px] object-contain"
        />
      </div>

      <div className="mt-6 relative">
        <ThumbnailSwiper
          activeSrc={activeSrc}
          setActiveSrc={setActiveSrc}
          galleries={gallery || []}
        />

        <Link href="/gallery">
          <div className="mt-6">
            <Button
              variant="secondary"
              className="w-full font-workSans text-heading text-lg font-medium"
            >
              View Our Gallery
            </Button>
          </div>
        </Link>
      </div>
    </div>
  )
}

const ThumbnailSwiper = ({
  activeSrc,
  setActiveSrc,
  galleries,
}: {
  activeSrc: string | null
  setActiveSrc: (src: string) => void
  galleries: IAcademicsImage
}) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={4} className="relative">
      {galleries &&
        galleries.key &&
        galleries.key.map((gallery, index) => (
          <SwiperSlide key={index} onClick={() => setActiveSrc(gallery)}>
            <ImageWithPlaceholder
              src={gallery}
              width={787}
              height={524}
              className={cn(
                `rounded-xl cursor-pointer h-[85px] md:h-[152px] object-cover`,
                {
                  'border-2 border-primary': activeSrc === gallery,
                }
              )}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      {galleries && galleries.key && galleries.key.length > 4 && (
        <>
          <div className="absolute right-[3px] top-1/2 -translate-y-1/2 z-10">
            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body text-2xl font-light bg-white rounded-full size-7" />
            </SwiperButtonNext>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body text-2xl font-light bg-white rounded-full size-7" />
            </SwiperButtonPrevious>
          </div>
        </>
      )}
    </Swiper>
  )
}

export default SchoolGallery
