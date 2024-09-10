'use client'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'

import { cardData } from '@/app/(routes)/testimonials/_constants/data'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'

const AcademicDetailSection = () => {
  return (
    <div className="max-w-[787px]">
      <MiniHeading className="text-left">Management</MiniHeading>
      <SectionHeading>Are you prepared to advance your career?</SectionHeading>
      <p className="mt-6 font-workSans font-normal text-base leading-7 text-body">
        The National Examination Board (NEB), Nepal offers +2 programs which has
        been a mile stone to further education after SLC/SEE. The +2 program has
        wide ranges of subject choices to meet the purpose of secondary
        education in Nepal. It has almost every stream including Management,
        Humanities, Law, education and Science.
        <br />
        Pawan Prakriti English Secondary School (PPESS) is on a fascinating path
        of growth and development adopting different streams for + 2 Level. As
        you are aware, it has already established itself as one of the top
        colleges in the country. Ever since the inception of this college, we
        have been striving hard to comprehend the broad significance of
        education while designing our mode of instruction.{' '}
      </p>
      <div className="flex gap-x-5 mt-10">
        <div>
          <Image
            src="/home/academicgirl1.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
        <div className="mt-9">
          <Image
            src="/home/academicgirl2.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
        <div>
          <Image
            src="/home/academicgirl3.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
      </div>
      <p className="mt-10 font-workSans font-normal text-base leading-7 text-body">
        We mentor our students to sharpen their intelligence and enable them to
        accomplish their aspirations. The excellence in teaching and research
        comes from the careful choice of faculty members in which The PPESS has
        not made any compromise. We procure the support of a strong team of
        faculty members, who wholeheartedly put their efforts to motivate our
        students and guide them to progress at every step. Similarly, we instill
        in them a positive value system that shapes their attitude, outlook and
        conduct, that provides a strong foundation for them to tackle the
        challenges of life. The sacred vibrations of our campus invite you to
        the unique experience of quality learning in a multi-dimensional and
        participatory manner where you too shape the process. Students at PPESS
        work collaboratively in their classroom context. They are required to do
        their daily assignments, classwork, project work, individual or groups
        presentation and adequate self-study. PPESS also offers full, partial
        and semi partial scholarships to the needy students. The scholarships at
        PPESS are in wide rages and they are provided based on the academic
        excellence or performance of the students. The deserving students
        receive many different types of scholarships such as Entrance Toppers,
        Board Examination Toppers, etc.
      </p>
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

export default AcademicDetailSection
