'use client'
import React, { ReactNode, useEffect, useState } from 'react'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

import './testimonial.css'
import { TestimonialCard } from './TestimonialCard'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import { UseServerFetch } from '@/common/hook/useServerFetch'

export const swiperParams = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const TestimonialsSection = () => {
  const [response, setResponse] = useState<ITestimonialResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ITestimonialResponse | undefined = await UseServerFetch(
          `/api/v1/testimonial?page=${1}&pageSize=${6}`
        )

        if (response) {
          setResponse(response)
          console.log('Fetched response:', response) // Check the data structure
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <HomeWrapper isBg>
      <div className="relative">
        <div className="flex justify-center md:justify-between items-center relative">
          <div className="">
            <MiniHeading isMd>Testimonials</MiniHeading>
            <SectionHeading isMd className="mt-2">
              Our Happy Students
            </SectionHeading>
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
          {response?.data.map((card) => (
            <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
              <TestimonialCard card={card} />
            </SwiperSlide>
          ))}
          <div className="flex justify-center gap-x-4 mt-10 md:hidden">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body text-2xl font-light " />
            </SwiperButtonPrevious>

            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body text-2xl font-light" />
            </SwiperButtonNext>
          </div>
        </SwiperWrapper>
      </div>
    </HomeWrapper>
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
      loop={true}
      {...swiperParams}
    >
      {children}
    </Swiper>
  )
}

export default TestimonialsSection
