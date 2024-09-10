'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { schoolGallery } from '../_constants/data'
import Image from 'next/image'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Button } from '@/common/components/ui/button'
import Link from 'next/link'

const SchoolGallery = () => {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)

  React.useEffect(() => {
    if (!activeSrc) {
      setActiveSrc(schoolGallery[0].src)
    }
  }, [activeSrc])

  return (
    <div className="flex justify-between flex-col gap-x-6 gap-y-6">
      {activeSrc && (
        <div className="flex justify-center">
          <Image
            src={activeSrc}
            alt="Active School Gallery"
            width={787}
            height={524}
            className="rounded-xl"
          />
        </div>
      )}

      <div className="mt-6 relative">
        <ThumbnailSwiper activeSrc={activeSrc} setActiveSrc={setActiveSrc} />

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
}: {
  activeSrc: string | null
  setActiveSrc: (src: string) => void
}) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={4} className="relative">
      {schoolGallery.map((gallery, index) => (
        <SwiperSlide key={index}>
          <Image
            onClick={() => setActiveSrc(gallery.src)} // Set the active image when clicked
            src={gallery.src}
            width={787}
            height={524}
            className={`rounded-xl cursor-pointer ${
              activeSrc === gallery.src ? 'border-2 border-primary' : ''
            }`} // Apply a blue border if the image is active
            alt={`Thumbnail ${index + 1}`}
          />
        </SwiperSlide>
      ))}

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
    </Swiper>
  )
}

export default SchoolGallery
