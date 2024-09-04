import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { TestimonailBigCard } from './TestimonialBigCard'
import { cardData } from '../_constants/data'
import { Button } from '@/common/components/Atom/Button'

const TestimonialsSection = () => {
  return (
    <>
      <CoverImage
        title="Testimonial"
        list={[{ link: '', title: 'Testimonial' }]}
      />
      <HomeWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          {cardData.map((card) => (
            <TestimonailBigCard card={card} key={card.id} />
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center gap-2">
          <Button variant="outline">Previous Page</Button>
          <Button variant="outline">Next Page</Button>
        </div>
      </HomeWrapper>
    </>
  )
}

export default TestimonialsSection
