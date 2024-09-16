'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { facilitiesCard } from '../constant/data'
import Image from 'next/image'

const FacilitiesSwiper = () => {
  return (
    <div className="w-full max-w-full flex-shrink-0">
      <>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1280: { slidesPerView: 3.5, spaceBetween: 20 }, // 3 and a half slides at desktop width
          }}
          //   modules={[Pagination]}
          className="mySwiper"
        >
          {facilitiesCard.map((facility, index) => (
            <SwiperSlide key={index} className="flex-shrink-0">
              <div className="w-[292px] h-[431px] space-y-4 mx-auto">
                <p className="font-poppins font-medium text-xl leading-[26px] text-heading text-center sm:text-start">
                  {facility.title}
                </p>
                <Image
                  src={facility.imgSrc}
                  width={292}
                  height={389}
                  alt="card"
                  className="rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  )
}

export default FacilitiesSwiper
