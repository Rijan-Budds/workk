'use client'

import React, { useEffect, useState } from 'react'
import { galleriesCarouselData } from './constant/data'
import { GalleryCard } from './GalleryCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Swiper as SwiperType } from 'swiper'

export const GallerySlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const handleSlideChange = (swiper: SwiperType) => {
    setTimeout(() => {
      const newIndex = swiper.realIndex
      setActiveSlide(newIndex)
    }, 0)
  }

  useEffect(() => {
    const swiperElement = document.querySelector('.mySwiper') as HTMLElement & {
      swiper: SwiperType
    }

    if (swiperElement && swiperElement.swiper) {
      const swiperInstance = swiperElement.swiper

      setActiveSlide(swiperInstance.activeIndex)

      swiperInstance.on('slideChange', handleSlideChange)

      return () => {
        swiperInstance.off('slideChange', handleSlideChange)
      }
    }
  }, [])

  return (
    <div className="w-full h-full ">
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        centeredSlides
        modules={[Navigation, Autoplay, Pagination]}
        loop
        onSwiper={(swiper: SwiperType) => {
          setActiveSlide(swiper.activeIndex)
          swiper.on('slideChange', handleSlideChange)
        }}
        className=" w-full !pl-[79px] relative mx-auto"
      >
        {galleriesCarouselData.map((d, index) => (
          <SwiperSlide className=" my-auto" key={index}>
            <GalleryCard data={d} isActive={activeSlide === index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
