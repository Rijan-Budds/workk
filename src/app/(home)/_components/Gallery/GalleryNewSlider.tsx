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
    <div className="mt-32">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: false,
          scale: 1,
        }}
        autoplay={{
          delay: 2800,
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
