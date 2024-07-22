'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { galleriesCarouselData } from './constant/data'
import { GalleryCard } from './GalleryCard'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

export const GallerySlider = () => {
  return (
    <div className="gallery__slider hidden 2lg:block ">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 1,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        modules={[EffectCoverflow, Autoplay]}
      >
        <div className="">
          {galleriesCarouselData.map((d, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => <GalleryCard data={d} isActive={isActive} />}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  )
}

export const GalleryMobileSlider = () => {
  return (
    <div className="flex justify-center items-center w-full  2lg:hidden ">
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          736: {
            slidesPerView: 2,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop
      >
        {galleriesCarouselData.map((d, index) => (
          <SwiperSlide key={index} className="">
            {({ isActive }) => <GalleryCard data={d} isActive={isActive} />}
          </SwiperSlide>
        ))}

        <div className="flex justify-center mt-10 gap-x-4">
          <SwiperButtonPrevious>
            <IoIosArrowRoundBack className="text-body text-2xl font-light " />
          </SwiperButtonPrevious>

          <SwiperButtonNext>
            <IoIosArrowRoundForward className="text-body text-2xl font-light" />
          </SwiperButtonNext>
        </div>
      </Swiper>
    </div>
  )
}
