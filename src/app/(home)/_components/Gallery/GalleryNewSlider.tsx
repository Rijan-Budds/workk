'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { GalleryCard } from './GalleryCard'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IHomeGalleryResponse } from './interface/Gallery'
import { NoDataFound } from '@/common/components/NoDataFound'

export const GallerySlider = () => {
  const [response, setResponse] = useState<IHomeGalleryResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IHomeGalleryResponse | undefined = await UseServerFetch(
          `/api/v1/gallery/photos`
        )

        if (response) {
          setResponse(response)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [])

  const renderGallerySliider = () => {
    if (response?.data) {
      return (
        <div className="gallery__slider hidden 2lg:flex 2lg:h-[600px]   justify-center items-center">
          {response?.data && (
            <Swiper
              spaceBetween={180}
              slidesPerView={3}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              modules={[EffectCoverflow, Autoplay]}
              className="w-full h-full !pt-32"
            >
              {response?.data.map((d, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <GalleryCard data={d} isActive={isActive} index={index} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )
    } else {
      return <NoDataFound title="No Gallery Data Found" />
    }
  }

  return <div>{renderGallerySliider()}</div>
}

export const GalleryMobileSlider = () => {
  const [response, setResponse] = useState<IHomeGalleryResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IHomeGalleryResponse | undefined = await UseServerFetch(
          `/api/v1/gallery/photos`
        )

        if (response) {
          setResponse(response)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [])

  const renderGallerySliiderMobile = () => {
    if (response?.data) {
      return (
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            736: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop
        >
          {response?.data.map((d, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <GalleryCard data={d} isActive={isActive} index={index} />
              )}
            </SwiperSlide>
          ))}

          <div className="flex justify-center mt-20 gap-x-4">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body text-2xl font-light " />
            </SwiperButtonPrevious>

            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body text-2xl font-light" />
            </SwiperButtonNext>
          </div>
        </Swiper>
      )
    } else {
      return <NoDataFound title="No Gallery Data Found" />
    }
  }

  return (
    <div className="flex justify-center items-center w-full 2lg:hidden">
      {renderGallerySliiderMobile()}
    </div>
  )
}
