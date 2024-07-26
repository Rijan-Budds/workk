import React from 'react'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

import './testimonial.css'
import { TestimonialCard } from './TestimonialCard'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'

const TestimonialsSection = () => {
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
            className="space-x-3 absolute bottom-0 right-0 w-28 h-12 hidden md:flex "
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
