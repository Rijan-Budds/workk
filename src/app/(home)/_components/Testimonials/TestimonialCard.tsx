'use client'
import Image from 'next/image'
import React, { ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import './testimonial.css'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const cardData = [
  {
    id: 1,
    name: 'Bipina Bajracharya',
    position: 'Project Engineer in Dolidar',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
  {
    id: 2,
    name: 'Kusma Rai',
    position: 'George Washington University',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
  {
    id: 3,
    name: 'Bipina Bajracharya',
    position: 'Project Engineer in Dolidar',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
  {
    id: 4,
    name: 'Kusma Rai',
    position: 'George Washington University',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
  {
    id: 5,
    name: 'Bipina Bajracharya',
    position: 'Project Engineer in Dolidar',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
]
export const swiperParams = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
export const TestimonialCard = () => {
  return (
    <>
      <div className="">
        <SwiperWrapper>
          <div className="flex justify-between gap-[24px]">
            {cardData.map((card) => (
              <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
                <div className="bg-white max-w-[397px] rounded-[12px] relative mx-auto">
                  <Image
                    src="/home/quote.svg"
                    width={60}
                    height={51}
                    alt="quote"
                    className="absolute w-[60px] h-[51px] top-[18.33px] left-[13.51px]"
                  />
                  <p className="p-[40px] font-workSans font-[400] text-base leading-[27.2px] tracking-tight">
                    {card.desc}
                  </p>
                  <div className="px-10 py-6 flex gap-4 border-border-2 border-t-[1px]">
                    <Image
                      src={card.img}
                      width={56}
                      height={56}
                      alt="stud"
                      className="rounded-full w-14 h-14 object-cover"
                    />
                    <div className="flex flex-col justify-center space-y-[8px]">
                      <h1 className="font-inter font-medium text-base leading-4 text-heading">
                        {card.name}
                      </h1>
                      <p className="text-sm font-workSans font-[400] text-body leading-4">
                        {card.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="flex justify-center gap-x-4 mt-10 sm:hidden">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body text-2xl font-light " />
            </SwiperButtonPrevious>

            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body text-2xl font-light" />
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
      id="testimonial"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        992: { slidesPerView: 2, spaceBetween: 10 },
        1200: { slidesPerView: 3 },
      }}
      slidesPerView={1}
      spaceBetween={65}
      modules={[Pagination, Navigation]}
      // className="!h-[475px] sm:h-auto"
      {...swiperParams}
      loop={true}
    >
      {children}
    </Swiper>
  )
}
