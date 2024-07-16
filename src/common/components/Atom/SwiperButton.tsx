'use client'

import React, { ReactNode } from 'react'
import { useSwiper } from 'swiper/react'

export const SwiperButtonNext = ({ children }: { children: ReactNode }) => {
  const swiper = useSwiper()
  return <button onClick={() => swiper.slideNext()}>{children}</button>
}

export const SwiperButtonPrevious = ({ children }: { children: ReactNode }) => {
  const swiper = useSwiper()
  return <button onClick={() => swiper.slidePrev()}>{children}</button>
}
