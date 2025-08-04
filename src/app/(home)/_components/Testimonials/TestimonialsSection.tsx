'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import './testimonial.css'
import { TestimonialCard } from './TestimonialCard'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperSlide } from 'swiper/react'
import { SwiperWrapper } from '@/common/components/SwiperWrapper'
import { ITestimonialData } from '@/app/(routes)/testimonials/_interface/testimonial'

const staticTestimonials: ITestimonialData[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Frontend Developer at Google',
    rating: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..',
    image: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Software Engineer at Meta',
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 3,
    name: 'Ali Khan',
    position: 'Backend Engineer at Amazon',
    rating: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
]

const TestimonialsSection = () => {
  const isSingleCard = staticTestimonials.length === 1

  return (
    <HomeWrapper isBg>
      <div className="relative selection:bg-transparent">
        <div className="flex justify-center md:justify-between items-center relative">
          <div>
            <MiniHeading isMd>Testimonials</MiniHeading>
            <SectionHeading className="!text-center !md:text-start">
              Student&apos;s Success Stories
            </SectionHeading>
          </div>
          {staticTestimonials.length > 3 && (
            <div
              id="testimonial"
              className="space-x-3 absolute bottom-0 right-0 w-28 h-8 hidden md:flex"
            >
              <div className="swiper-button-prev">
                <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
              <div className="swiper-button-next">
                <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
            </div>
          )}
        </div>

        <SwiperWrapper>
          {staticTestimonials.map((card) => (
            <SwiperSlide
              key={card.id}
              className={`!mt-[40px] ${isSingleCard ? '!ml-0' : '!ml-auto'}`}
            >
              <TestimonialCard card={card} />
            </SwiperSlide>
          ))}

          {staticTestimonials.length > 1 && (
            <div className="flex justify-center gap-x-4 mt-10 md:hidden">
              <SwiperButtonPrevious>
                <IoIosArrowRoundBack className="text-body text-2xl font-light" />
              </SwiperButtonPrevious>

              <SwiperButtonNext>
                <IoIosArrowRoundForward className="text-body text-2xl font-light" />
              </SwiperButtonNext>
            </div>
          )}
        </SwiperWrapper>
      </div>
    </HomeWrapper>
  )
}

export default TestimonialsSection
