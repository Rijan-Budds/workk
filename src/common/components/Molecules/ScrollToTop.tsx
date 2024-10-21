'use client'

import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const ScrollToTopUi = ({ layout }: { layout: string }) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false)

  console.log('layout: ', layout)

  useEffect(() => {
    const getHomeLayout = document?.querySelector(layout)
    const handleScroll = () => {
      const scrollPosition = getHomeLayout?.scrollTop
        ? getHomeLayout?.scrollTop
        : 0
      const scrollThreshold = 10

      console.log('scroll position: ', scrollPosition)

      setShowScrollButton(scrollPosition > scrollThreshold)
    }
    getHomeLayout?.addEventListener('scroll', handleScroll)
    return () => getHomeLayout?.removeEventListener('scroll', handleScroll)
  }, [layout])

  const scrollToTop = () => {
    const getHomeLayout = document?.querySelector(layout)

    getHomeLayout?.scroll({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'rounded-full fixed bottom-[0%] right-12 z-[999] size-10 border border-[#FFA86A] flex justify-center items-center shadow pointer-events-none opacity-0 transition-all duration-300',
        {
          'opacity-100 bottom-[5%] pointer-events-auto ': showScrollButton,
        }
      )}
    >
      <Image
        width={12}
        height={8}
        alt="top arrow"
        className=""
        src={'/others/scroll-top-arrow.svg'}
      />
    </button>
  )
}
