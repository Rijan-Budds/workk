'use client'

import React, { ReactNode } from 'react'
import 'swiper/css'
import { AcademicCards } from './AcademicCards'
import { academicCardsDataOne, academicCardsDataTwo } from './constant/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

export const AcademicSwipeCard = () => {
  return (
    <div className="block 2lg:hidden mt-10">
      <SwiperWrapper>
        <SwiperSlide className="">
          <AcademicCards
            title={'Plus Two'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-primaryLighter'}
            list={academicCardsDataOne}
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <AcademicCards
            title={'School'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-secondaryLighter'}
            list={academicCardsDataTwo}
          />
        </SwiperSlide>
        <div className="flex justify-center mt-10 gap-x-4">
          <SwiperButtonPrevious>
            <IoIosArrowRoundBack className="text-body text-2xl font-light " />
          </SwiperButtonPrevious>

          <SwiperButtonNext>
            <IoIosArrowRoundForward className="text-body text-2xl font-light" />
          </SwiperButtonNext>
        </div>
      </SwiperWrapper>
    </div>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={15}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  )
}
