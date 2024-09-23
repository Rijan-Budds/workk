'use client'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Link from 'next/link'
import React, { ReactNode, useEffect, useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsData } from '../../_interface/academic'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'

const AcademicDetailSection = ({ detail }: { detail: IAcademicsData }) => {
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
    <div className="max-w-[787px]">
      <MiniHeading className="text-left">{detail.title}</MiniHeading>
      <SectionHeading>{detail.articleTitle}</SectionHeading>
      <div className="flex gap-x-5 my-10">
        {detail.image?.key.map((imageKey, index) => (
          <div key={imageKey} className={index === 1 ? 'mt-10' : ''}>
            <ImageWithPlaceholder
              src={imageKey ? imageKey : undefined}
              width={246}
              height={454}
              alt={`Image ${index + 1}`}
              className="h-[191px] md:h-[388px] 2lg:w-[246px] 2lg:h-[454px] rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className="mt-10 font-workSans font-normal text-base leading-7 text-body break-all"
        dangerouslySetInnerHTML={{ __html: detail.description }}
      ></div>
      <hr className="border-secondary border-dashed my-10" />
      <SectionHeading className="lg:hidden">Related Course</SectionHeading>
      <div className="flex flex-col md:flex-row gap-6 mt-[30px] lg:hidden">
        <button className="bg-secondaryLighter w-full h-[90px] rounded-xl text-secondary font-poppins font-medium text-xl leading-[26px]">
          <Link href="/">Humanities</Link>
        </button>
        <button className="bg-secondaryLighter w-full h-[90px] rounded-xl text-secondary font-poppins font-medium text-xl leading-[26px]">
          <Link href="/">Education</Link>
        </button>
        <button className="bg-secondaryLighter w-full h-[90px] rounded-xl text-secondary font-poppins font-medium text-xl leading-[26px]">
          <Link href="/">Law</Link>
        </button>
      </div>
      <div className="mt-10 relative max-w-[787px] hidden lg:block">
        <div className="">
          <h2 className="text-heading text-xl font-poppins font-medium leading-5">
            Our Happy Students
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
            <SwiperSlide key={card.id} className="!mt-[40px] !mx-auto">
              <TestimonialCard card={card} />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
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

export default AcademicDetailSection
