'use client'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React, { ReactNode, useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import SchoolGallery from './SchoolGallery'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsData } from '../../_interface/academic'

const SchoolSection = ({ detail }: { detail: IAcademicsData }) => {
  const [response, setResponse] = useState<ITestimonialResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ITestimonialResponse | undefined = await UseServerFetch(
          `/api/v1/testimonial?page=${1}&pageSize=${6}`
        )

        if (response) {
          setResponse(response)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col">
      <div className="max-w-[787px]">
        <MiniHeading className="text-left">{detail?.title}</MiniHeading>
        <SectionHeading>{detail?.articleTitle}</SectionHeading>
        <SchoolGallery gallery={detail?.image} />
        <div
          className="mt-6 font-workSans font-normal text-base leading-7 text-body break-all"
          dangerouslySetInnerHTML={{ __html: detail?.description }}
        ></div>
      </div>
      {response && response?.data.length > 0 && (
        <>
          <hr className="border-secondary border-dashed my-10" />
          <div className="mt-10 relative max-w-[787px] hidden lg:block">
            <div className="">
              <h2 className="text-heading text-xl font-poppins font-medium leading-5">
                What Parents Say About Our School
              </h2>
            </div>
            <div
              id="testimonial"
              className="space-x-3 absolute top-0 right-0 w-28 h-12 hidden md:flex "
            >
              <div className="swiper-button-prev">
                <IoIosArrowRoundBack className="text-body text-2xl font-light 2lg:bg-white rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
              <div className="swiper-button-next">
                <IoIosArrowRoundForward className="text-body text-2xl font-light 2lg:bg-white rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
            </div>
            <SwiperWrapper>
              {response?.data.map((card) => (
                <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
                  <TestimonialCard card={card} />
                </SwiperSlide>
              ))}
            </SwiperWrapper>
          </div>
        </>
      )}
    </div>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="testimonial"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        // 992: { slidesPerView: 2, spaceBetween: 10 },
        // 1200: { slidesPerView: 3 },
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

export default SchoolSection
