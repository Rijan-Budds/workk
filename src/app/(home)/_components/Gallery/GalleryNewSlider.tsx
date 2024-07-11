'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { galleriesCarouselData } from './constant/data'
import { GalleryCard } from './GalleryCard'

export const GalleryNewSlider = () => {
  return (
    <div>
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
          disableOnInteraction: true,
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
