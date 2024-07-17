'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

const newsandevent = [
  {
    id: 1,
    date: 'July 19, 2024',
    title: 'Co-currircular Activties',
    img: '/home/news1.png',
  },
  {
    id: 2,
    date: 'July 19, 2024',
    title: 'Co-currircular Activties',
    img: '/home/news2.png',
  },
  {
    id: 3,
    date: 'July 19, 2024',
    title: 'Co-currircular Activties',
    img: '/home/news1.png',
  },
  {
    id: 4,
    date: 'July 19, 2024',
    title: 'Co-currircular Activties',
    img: '/home/news2.png',
  },
]

export const swiperParams1 = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const NewsCard = () => {
  return (
    <div className="relative">
      <Swiper
        id="news"
        breakpoints={{
          528: { slidesPerView: 1 },
          728: { slidesPerView: 2 },
          992: { slidesPerView: 2, spaceBetween: 10 },
          1200: { slidesPerView: 2 },
        }}
        slidesPerView={1}
        spaceBetween={65}
        modules={[Pagination, Navigation]}
        className="!h-[475px] sm:h-auto"
        {...swiperParams1}
        loop={true}
      >
        {newsandevent.map((news) => (
          <SwiperSlide key={news.id} className="mt-10">
            <div className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={news.img}
                  width={447}
                  height={298}
                  alt="news"
                  className="relative w-[446px] h-[298px] object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <div className="absolute w-[94%] h-[98px] bg-white top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
                <div className="p-6">
                  <p className="text-body text-sm font-workSans font-normal leading-4">
                    {news.date}
                  </p>
                  <h2 className="text-primary text-xl font-poppins font-medium leading-7 group-hover:text-secondary transition-all duration-500">
                    {news.title}
                  </h2>
                </div>
                <Link
                  href={'/'}
                  className="bg-primaryLight w-[82px] h-[82px] absolute -right-[20px] top-[55px] rounded-full"
                >
                  <Image
                    src="/home/newsarrow.png"
                    width={21}
                    height={14}
                    alt="arrow"
                    className="ml-[25px] mt-[18px]"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NewsCard
