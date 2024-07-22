import React from 'react'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

import './testimonial.css'
import { TestimonialCard } from './TestimonialCard'

const TestimonialsSection = () => {
  return (
    <HomeWrapper isBg>
      <div className="relative">
        <div className="flex justify-center sm:justify-between items-center relative">
          <div className="">
            <h3 className="text-secondary text-[12px] sm:text-[14px] leading-4 sm:leading-[21px] tracking-[2px] font-semibold font-workSans uppercase text-center sm:text-start">
              Testimonials
            </h3>
            <h1 className="font-poppins font-medium text-[28px] sm:text-[38px] leading-[36px] sm:leading-[49.4px] mt-2 text-center sm:text-start">
              Our Happy Students
            </h1>
          </div>
          <div
            id="testimonial"
            className="space-x-3 absolute bottom-0 right-0 w-28 h-12 hidden sm:flex "
          >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <TestimonialCard />
      </div>
    </HomeWrapper>
  )
}

export default TestimonialsSection
