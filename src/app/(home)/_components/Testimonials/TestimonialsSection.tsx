import React from 'react'
import TestimonialCard from './TestimonialCard'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

const TestimonialsSection = () => {
  return (
    <HomeWrapper isBg>
      <h3 className="text-[#F58534] text-[14px] leading-[21px] tracking-[2px]  font-semibold font-workSans uppercase">
        Testimonials
      </h3>
      <h1 className="font-poppins font-medium text-[38px] leading-[49.4px] mt-2">
        Our Happy Students
      </h1>
      <TestimonialCard />
    </HomeWrapper>
  )
}

export default TestimonialsSection
