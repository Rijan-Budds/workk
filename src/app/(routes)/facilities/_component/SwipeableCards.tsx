'use client'

import React from 'react'
import { facilitiesCardsData } from '../constant/data'
import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

export const SwipeableCards = () => {
  return (
    <div className="relative">
      <Swiper spaceBetween={5} slidesPerView={3} loop>
        {facilitiesCardsData.map((d) => (
          <SwiperSlide key={d.id}>
            <Image
              src={d.src}
              width={152}
              height={152}
              className="size-[152px]"
              alt="facilites school"
            />
          </SwiperSlide>
        ))}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <SwiperButtonNext>
            <IoIosArrowRoundForward className="text-body text-2xl font-light 2lg:bg-white rounded-full size-7 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
          </SwiperButtonNext>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ">
          <SwiperButtonPrevious>
            <IoIosArrowRoundBack className="text-body text-2xl font-light 2lg:bg-white rounded-full size-7 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
          </SwiperButtonPrevious>
        </div>
      </Swiper>
    </div>
  )
}
