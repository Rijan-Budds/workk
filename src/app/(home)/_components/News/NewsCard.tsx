'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { GoArrowRight } from 'react-icons/go'

const newsandevent = [
  {
    id: 1,
    date: 'July 19, 2024',
    title: 'Co-curricular Activities',
    img: '/home/news1.png',
  },
  {
    id: 2,
    date: 'July 19, 2024',
    title: 'Co-curricular Activities',
    img: '/home/news2.png',
  },
  {
    id: 3,
    date: 'July 19, 2024',
    title: 'Co-curricular Activities',
    img: '/home/news1.png',
  },
  {
    id: 4,
    date: 'July 19, 2024',
    title: 'Co-curricular Activities',
    img: '/home/news2.png',
  },
]

export const NewsCard = () => {
  return (
    <div className="relative">
      <SwiperWrapper>
        {newsandevent.map((news) => (
          <SwiperSlide key={news.id} className="mt-10">
            <div className="relative max-w-[397px] group cursor-pointer mx-auto ">
              <div className="overflow-hidden rounded-xl max-w-[397px]">
                <Image
                  src={news.img}
                  width={447}
                  height={298}
                  alt="news"
                  className="relative max-w-[397px] h-[298px] object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="absolute w-[94%] h-[98px] bg-white top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
                <div className="p-6 z-10 relative">
                  <p className="text-body text-sm font-workSans font-normal leading-4 z-20">
                    {news.date}
                  </p>
                  <h2 className="text-primary text-xl font-poppins font-medium leading-7  transition-all duration-500">
                    {news.title}
                  </h2>
                </div>
                <div>
                  <Link
                    href="/"
                    className="bg-primaryLighter will-change-transform  w-[82px] h-[82px] absolute -right-[20px] group-hover:scale-[10] transition-transform duration-700 top-[55px] rounded-full z-0"
                  ></Link>
                  <GoArrowRight className=" absolute right-3 top-1/2 -translate-y-1/2 mt-8  z-20  text-2xl text-primary " />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="justify-center mt-10 gap-x-4 absolute bottom-0 left-1/2 -translate-x-1/2 z-50 flex md:left-auto md:translate-x-0 md:top-[-2.5rem] 2lg:left-[46.5rem] w-fit h-fit">
          <SwiperButtonPrevious>
            <IoIosArrowRoundBack className="text-body text-2xl font-light 2lg:bg-white rounded-full size-7 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
          </SwiperButtonPrevious>
          <SwiperButtonNext>
            <IoIosArrowRoundForward className="text-body text-2xl font-light 2lg:bg-white rounded-full size-7 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
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
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        992: { slidesPerView: 2, spaceBetween: 10 },
      }}
      spaceBetween={25}
      slidesPerView={1}
      loop
      className="!h-[475px] sm:h-auto relative"
    >
      {children}
    </Swiper>
  )
}
