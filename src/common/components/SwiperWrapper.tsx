'use client'
import { ReactNode } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

export const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="testimonial"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        992: { slidesPerView: 2, spaceBetween: 10 },
        1200: { slidesPerView: 3 },
      }}
      slidesPerView={1}
      spaceBetween={65}
      modules={[Pagination, Navigation]}
      loop={false}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {children}
    </Swiper>
  )
}
  