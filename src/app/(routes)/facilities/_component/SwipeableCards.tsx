'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { facilitiesCardsData } from '../constant/data'
import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

export const SwipeableCards = ({
  setActiveSrc,
}: {
  setActiveSrc: Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <div className="2lg:overflow-x-hidden md:max-w-[324px]   2lg:max-w-[503px]  ">
      <Swiper
        breakpoints={{
          300: { slidesPerView: 2, spaceBetween: 10 },
          600: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
        spaceBetween={5}
        slidesPerView={3}
        loop
        className="relative "
      >
        {facilitiesCardsData.map((d) => (
          <SwiperSlide key={d.id}>
            <Image
              onClick={() => setActiveSrc(d.src)}
              src={d.src}
              width={152}
              height={152}
              className="size-[152px]"
              alt="facilites school"
            />
          </SwiperSlide>
        ))}
        <div className="absolute right-[3px] top-1/2 -translate-y-1/2 z-10">
          <SwiperButtonNext>
            <IoIosArrowRoundForward className="text-body text-2xl font-light bg-white rounded-full size-7" />
          </SwiperButtonNext>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ">
          <SwiperButtonPrevious>
            <IoIosArrowRoundBack className="text-body text-2xl font-light bg-white rounded-full size-7" />
          </SwiperButtonPrevious>
        </div>
      </Swiper>
    </div>
  )
}
