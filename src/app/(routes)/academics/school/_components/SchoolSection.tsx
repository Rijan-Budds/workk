'use client'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React, { ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import SchoolGallery from './SchoolGallery'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { cardData } from '@/app/(routes)/testimonials/_constants/data'
import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'

const SchoolSection = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-[787px]">
        <MiniHeading className="text-left">Pre-School</MiniHeading>
        <SectionHeading>
          Are you prepared to advance your career?
        </SectionHeading>
        <p className="mt-6 font-workSans font-normal text-base leading-7 text-body">
          The National Examination Board (NEB), Nepal offers +2 programs which
          has been a mile stone to further education after SLC/SEE. The +2
          program has wide ranges of subject choices to meet the purpose of
          secondary education in Nepal. It has almost every stream including
          Management, Humanities, Law, education and Science.
          <br />
          Pawan Prakriti English Secondary School (PPESS) is on a fascinating
          path of growth and development adopting different streams for + 2
          Level. As you are aware, it has already established itself as one of
          the top colleges in the country. Ever since the inception of this
          college, we have been striving hard to comprehend the broad
          significance of education while designing our mode of instruction.{' '}
        </p>
        <SchoolGallery />
        <p className="mt-6 font-workSans font-normal text-base leading-7 text-body">
          The National Examination Board (NEB), Nepal offers +2 programs which
          has been a mile stone to further education after SLC/SEE. The +2
          program has wide ranges of subject choices to meet the purpose of
          secondary education in Nepal. It has almost every stream including
          Management, Humanities, Law, education and Science.
          <br />
          Pawan Prakriti English Secondary School (PPESS) is on a fascinating
          path of growth and development adopting different streams for + 2
          Level. As you are aware, it has already established itself as one of
          the top colleges in the country. Ever since the inception of this
          college, we have been striving hard to comprehend the broad
          significance of education while designing our mode of instruction.{' '}
        </p>
      </div>
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
          {cardData.map((card) => (
            <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
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

export default SchoolSection
