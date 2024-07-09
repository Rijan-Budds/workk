'use client'

import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

export const HeroImageSection = () => {
  const firstImageContainerRef = useRef(null)
  const secondImageContainerRef = useRef(null)
  const thirdImageContainerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(
      firstImageContainerRef.current,
      {
        height: 400,
        transformOrigin: 'top',
        marginTop: 0,
        marginBottom: 106,
      },
      'a'
    )
    tl.to(
      secondImageContainerRef.current,
      {
        height: 400,
        transformOrigin: 'bottom',
        marginTop: 106,
        marginBottom: 0,
      },
      'a'
    )
    tl.to(
      thirdImageContainerRef.current,
      {
        height: 400,
        transformOrigin: 'bottom',
        marginTop: 0,
        marginBottom: 106,
      },
      'a'
    )
  })
  return (
    <div className="flex gap-x-5  h-[506px]  transition-all duration-500 group ">
      <div
        ref={firstImageContainerRef}
        className="bg-[url('/home/hero-images-1.png')] bg-cover w-[186px] h-[180px] rounded-xl mb-[146px] mt-[180px] group-hover:!-translate-y-2 transition-all duration-500 "
      />

      <div
        ref={secondImageContainerRef}
        className="bg-[url('/home/hero-images-2.png')] w-[186px] h-[180px] rounded-xl  mb-[100px] mt-[226px] group-hover:!translate-y-2 transition-all duration-500"
      />
      <div
        ref={thirdImageContainerRef}
        className="bg-[url('/home/hero-images-3.png')] w-[186px] h-[180px] rounded-xl mb-[146px] mt-[180px] group-hover:!-translate-y-2 transition-all duration-500 "
      />
    </div>
  )
}
