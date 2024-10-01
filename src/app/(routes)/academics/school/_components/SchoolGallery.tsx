'use client'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { Button } from '@/common/components/ui/button'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { MdOutlineChevronRight } from 'react-icons/md'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
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
              className="group w-full flex items-center gap-4 font-workSans text-heading text-lg font-medium transition-all duration-500"
            >
              View Our Gallery
              <MdOutlineChevronRight
                width={24}
                height={24}
                className="group-hover:rotate-90 transition-all duration-500"
              />
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
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  useEffect(() => {
    setIsEnd(false)
  }, [])
  return (
    <Swiper
      breakpoints={{
        360: {
          spaceBetween: 0,
          slidesPerView: 3.5,
        },
        400: {
          spaceBetween: 0,
          slidesPerView: 4,
        },
        736: {
          spaceBetween: 4,
          slidesPerView: 4.5,
        },
        1280: {
          spaceBetween: 0,
          slidesPerView: 4.5,
        },
      }}
      onReachBeginning={() => setIsBeginning(true)}
      onReachEnd={() => setIsEnd(true)}
      onFromEdge={() => {
        setIsBeginning(false)
        setIsEnd(false)
      }}
      className="relative"
    >
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
            className={`rounded-xl cursor-pointer w-[85px] h-[85px] md:h-[152px] md:w-[152px] object-cover ${
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
          <IoIosArrowRoundForward
            className={`text-body text-2xl font-light bg-white rounded-full size-7 ${
              isEnd ? 'opacity-25 cursor-not-allowed' : ''
            }`}
          />
        </SwiperButtonNext>
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <SwiperButtonPrevious>
          <IoIosArrowRoundBack
            className={`text-body text-2xl font-light bg-white rounded-full size-7 ${
              isBeginning ? 'opacity-25 cursor-not-allowed' : ''
            }`}
          />
        </SwiperButtonPrevious>
      </div>
    </Swiper>
  )
}

export default SchoolGallery
