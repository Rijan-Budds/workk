'use client'

import React, { ReactNode } from 'react'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { NoDataFound } from '@/common/components/NoDataFound'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NewsCard } from './NewsCard'
import './notice.css'
import { INewsItem } from '@/app/(routes)/news/interface/newsType'

// Define your static news data here with the same shape as your API data
const staticNewsData: INewsItem[] = [
  {
    id: '1',
    title: 'Sample News Title 1',
    description: 'This is the description for news 1.',
    images: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'General',
    type: 'NEWS',
    status: 'PUBLISHED',
    publishedAt: '2025-07-01T10:00:00Z',
    createdAt: '2025-06-25T12:00:00Z',
    updatedAt: '2025-06-30T08:00:00Z',
    slug: 'sample-news-title-1',
    isHoliday: false,
  },
  {
    id: '2',
    title: 'Sample News Title 2',
    description: 'This is the description for news 2.',
    images: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'Events',
    type: 'NEWS',
    status: 'PUBLISHED',
    publishedAt: '2025-07-05T14:00:00Z',
    createdAt: '2025-07-01T09:00:00Z',
    updatedAt: '2025-07-03T15:00:00Z',
    slug: 'sample-news-title-2',
  },
  // add more items as needed
]


const NewsSection = () => {
  if (!staticNewsData.length)
    return (
      <div>
        <MiniHeading className="md:text-start">News and Events</MiniHeading>
        <SectionHeading className="mt-2 text-center md:text-left">
          News and Events
        </SectionHeading>
        <NoDataFound title="No News Data Found" />
      </div>
    )

  return (
    <div className="relative">
      <div className="flex justify-center md:justify-between items-center relative">
        <div>
          <MiniHeading className="md:text-start">News and Events</MiniHeading>
          <SectionHeading className="mt-2 text-center md:text-left !text-[28px]">
            News and Events
          </SectionHeading>
        </div>
        {staticNewsData.length > 1 && (
          <div
            id="testimonial"
            className="space-x-3 absolute bottom-0 right-0 w-24 h-8 hidden md:flex"
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

      {staticNewsData.length > 1 ? (
        <SwiperWrapper>
          {staticNewsData.map((news) => (
            <SwiperSlide key={news.id} className="mt-10 mx-auto max-h-4">
              <NewsCard news={news} />
            </SwiperSlide>
          ))}

          <div className="md:hidden flex justify-center mt-10 gap-x-4 absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-fit h-fit">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full size-8 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
            </SwiperButtonPrevious>
            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full size-8 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
            </SwiperButtonNext>
          </div>
        </SwiperWrapper>
      ) : (
        staticNewsData.map((news) => (
          <div className="mt-10 h-[465px]" key={news.id}>
            <NewsCard news={news} />
          </div>
        ))
      )}
    </div>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="news"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        992: { slidesPerView: 2, spaceBetween: 10 },
      }}
      spaceBetween={25}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      loop
      className="!h-[475px] sm:h-auto relative"
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {children}
    </Swiper>
  )
}

export default NewsSection
