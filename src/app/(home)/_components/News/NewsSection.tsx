'use client'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import React, { ReactNode } from 'react'
import { newsandevent, NewsCard } from './NewsCard'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import './notice.css'

export const swiperParams = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const NewsSection = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center md:justify-between items-center relative">
          <div className="">
            <MiniHeading isMd>News and Events</MiniHeading>
            <h1 className="font-poppins font-medium text-[28px] leading-[36.4px] mt-2 text-center md:text-left">
              News and Events
            </h1>
          </div>
          <div
            id="testimonial"
            className="space-x-3 absolute bottom-0 right-0 w-28 h-8 hidden md:flex "
          >
            <div className="swiper-button-prev">
              <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
            </div>
            <div className="swiper-button-next">
              <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
            </div>
          </div>
        </div>
        <SwiperWrapper>
          {newsandevent.map((news) => (
            <SwiperSlide key={news.id} className="mt-10 mx-auto">
              <NewsCard news={news} />
            </SwiperSlide>
          ))}
          <div className="md:hidden flex justify-center mt-10 gap-x-4 absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-fit h-fit">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full size-8 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
            </SwiperButtonPrevious>
            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full size-8 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
            </SwiperButtonNext>
          </div>
        </SwiperWrapper>
      </div>
    </>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="news"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        992: { slidesPerView: 2, spaceBetween: 10 },
      }}
      spaceBetween={25}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      loop
      className="!h-[475px] sm:h-auto relative"
      {...swiperParams}
    >
      {children}
    </Swiper>
  )
}

export default NewsSection
