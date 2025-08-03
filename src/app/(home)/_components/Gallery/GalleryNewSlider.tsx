'use client'

import React from 'react'
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
import { NoDataFound } from '@/common/components/NoDataFound'
import { IHomeGallery } from './interface/Gallery'

const staticGalleryData: IHomeGallery[] = [
  {
    id: '1',
    title: 'Gallery Image 1',
    photo: {
      key: '/home/user1.jpg',
      bucket: '',           // you can leave empty string if unused
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '2',
    title: 'Gallery Image 2',
    photo: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '3',
    title: 'Gallery Image 3',
    photo: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
    {
    id: '3',
    title: 'Gallery Image 3',
    photo: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
    {
    id: '4',
    title: 'Gallery Image 4',
    photo: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
    {
    id: '5',
    title: 'Gallery Image 5',
    photo: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
]



export const GallerySlider = () => {

  if (!staticGalleryData.length) return <NoDataFound title="No Gallery Data Found" />

  return (
    <div className="gallery__slider hidden 2lg:flex 2lg:h-[600px] justify-center items-center">
      <Swiper
        spaceBetween={180}
        slidesPerView={3}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full !pt-32"
      >
        {staticGalleryData.map((item, index) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <GalleryCard
                data={{ photo: item.photo, title: item.title }}
                isActive={isActive}
                index={index}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


export const GalleryMobileSlider = () => {
  if (!staticGalleryData.length) return <NoDataFound title="No Gallery Data Found" />

  return (
    <div className="flex justify-center items-center w-full 2lg:hidden">
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
        {staticGalleryData.map((item, index) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <GalleryCard data={{ photo: item.photo, title: item.title }} isActive={isActive} index={index} />
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
    </div>
  )
}
