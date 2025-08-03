'use client'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { ReactNode, useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { IAcademicsData } from '../../_interface/academic'
import SchoolGallery from './SchoolGallery'

// STATIC DATA - Edit these to change the content
const STATIC_TESTIMONIALS = {
  data: [
    {
      id: 1,
      name: "Ram Tamang",
      designation: "Plus Two Graduate",
      image: {
        key: "/home/ram.jpg" // Replace with actual image path
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5
    },
    {
      id: 2,
      name: "Shriya Rai",
      designation: "Management Student",
      image: {
        key: "/home/shirya.jpg" // Replace with actual image path
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5
    }
  ]
}

const SchoolSection = ({ detail }: { detail: IAcademicsData }) => {
  // Use static data instead of API call
  const [response, setResponse] = useState<ITestimonialResponse | null>(STATIC_TESTIMONIALS)

  // Remove the API call and just set static data
  useEffect(() => {
    setResponse(STATIC_TESTIMONIALS)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="2lg:w-[787px]">
        <MiniHeading className="text-left">{detail?.title}</MiniHeading>
        <SectionHeading>{detail?.articleTitle}</SectionHeading>
        <SchoolGallery gallery={detail?.image} />
        <div
          className="mt-6 font-workSans font-normal text-base leading-7 text-body break-all"
          dangerouslySetInnerHTML={{ __html: detail?.description }}
        ></div>
      </div>
      {response && response.data.length > 0 && (
        <>
          <hr className="border-secondary border-dashed my-10" />
          <div className="lg:mt-10 relative 2lg:max-w-[787px]">
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
                <IoIosArrowRoundBack className="text-body text-2xl font-light 2lg:bg-white shadow rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
              <div className="swiper-button-next">
                <IoIosArrowRoundForward className="text-body text-2xl font-light 2lg:bg-white shadow rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
            </div>
            <SwiperWrapper>
              {response.data.map((card) => (
                <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
                  <TestimonialCard card={card} />
                </SwiperSlide>
              ))}
              <div className="flex justify-center gap-x-4 mt-10 md:hidden">
                <SwiperButtonPrevious>
                  <IoIosArrowRoundBack className="text-body text-2xl font-light" />
                </SwiperButtonPrevious>

                <SwiperButtonNext>
                  <IoIosArrowRoundForward className="text-body text-2xl font-light" />
                </SwiperButtonNext>
              </div>
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