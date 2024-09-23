'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Button } from '@/common/components/ui/button'
import Link from 'next/link'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import {
  ISchoolGallery,
  ISchoolGalleryResponse,
} from '../../_interface/academic'

const SchoolGallery = () => {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)
  const [response, setResponse] = useState<ISchoolGalleryResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ISchoolGalleryResponse | undefined =
          await UseServerFetch(`/api/v1/gallery/photos`)

        if (response) {
          setResponse(response)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    if (response?.data && response.data.length > 0 && !activeSrc) {
      setActiveSrc(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}/${response.data[0].photo?.key}`
      )
    }
  }, [response, activeSrc])
  return (
    <div className="flex justify-between flex-col gap-x-6 gap-y-6 mt-6">
      {activeSrc && (
        <div className="flex justify-center">
          <Image
            src={activeSrc}
            alt="Active School Gallery"
            width={787}
            height={524}
            className="rounded-xl md:w-[787px] md:h-[524px] object-contain"
          />
        </div>
      )}

      <div className="mt-6 relative">
        <ThumbnailSwiper
          activeSrc={activeSrc}
          setActiveSrc={setActiveSrc}
          galleries={response?.data || []}
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
  galleries: ISchoolGallery[]
}) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={4} className="relative">
      {galleries.map((gallery, index) => (
        <SwiperSlide key={index}>
          <Image
            onClick={() =>
              setActiveSrc(
                `${process.env.NEXT_PUBLIC_IMAGE_URL}/${gallery.photo?.key}`
              )
            }
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${gallery.photo?.key}`}
            width={787}
            height={524}
            className={`rounded-xl cursor-pointer h-[85px] md:h-[152px] object-cover ${
              activeSrc ===
              `${process.env.NEXT_PUBLIC_IMAGE_URL}/${gallery.photo?.key}`
                ? 'border-2 border-primary'
                : ''
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
