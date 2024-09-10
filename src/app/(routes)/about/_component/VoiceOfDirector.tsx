'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React, { ReactNode } from 'react'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './about.css'
import Link from 'next/link'
import { slides, socialLinks, voices } from '../constants/data'

const VoiceOfDirector = () => {
  return (
    <>
      <HomeWrapper isBg>
        <div className="mt-[56px]  max-w-[1230px] mx-auto">
          <SwiperWrapper className="flex flex-col-reverse md:flex-col gap-[40px] md:gap-[110px]">
            {voices.map((voice, index) => (
              <SwiperSlide key={index}>
                <div className="relative justify-between md:gap-[40px] lg:gap-[80px] p-4 w-full flex flex-col md:flex-row-reverse">
                  <div className="relative lg:max-w-[552px]">
                    <div className="absolute bg-[#187EC0] w-[200px] 2lg:w-[289px] h-[226px] right-0 -top-4 rounded-tr-3xl" />
                    <Image
                      src={voice.image}
                      width={528}
                      height={693}
                      alt="director"
                      className="w-[95%] h-[382px] md:h-[462px] lg:h-[726px] object-cover rounded-xl relative"
                    />
                    <div className="absolute bottom-8 left-8 bg-secondary rounded-xl">
                      <ul className="flex gap-4 p-4">
                        {socialLinks.map((link, index) => (
                          <Link
                            href={link.href}
                            key={index}
                            className="flex justify-center items-center"
                          >
                            <Image
                              src={link.src}
                              width={100}
                              height={100}
                              alt={link.alt}
                              className="w-[14px] h-[14px]"
                            />
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className=" md:max-w-[304px] lg:max-w-[500px] 2lg:max-w-[608px]">
                    <h1 className="font-poppins text-[28px] lg:text-[38px] font-medium mt-11 leading-[49px]">
                      Voice Of Director
                    </h1>
                    {voice.paragraph.split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-body font-workSans font-normal text-base leading-7 mt-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <h2 className="font-workSans font-medium text-lg leading-6 mt-6">
                      {voice.name}
                    </h2>
                    <p className="font-poppins font-normal text-base leading-4 mt-2">
                      {voice.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination" />
          </SwiperWrapper>
        </div>
      </HomeWrapper>
    </>
  )
}

export default VoiceOfDirector

interface SwiperWrapperProps {
  children: ReactNode
  className?: string
}

const SwiperWrapper = ({ children, className }: SwiperWrapperProps) => {
  return (
    <Swiper
      id="director"
      breakpoints={{
        528: { slidesPerView: 1 },
      }}
      spaceBetween={25}
      slidesPerView={1}
      loop
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <div class="${className} custom-card ">
              <div class="custom-card-timer"></div>
              <img src="${slides[index].img}" alt="${slides[index].name}" class="custom-card-image"/>
              <div class="custom-card-info">
                <h4>${slides[index].name}</h4>
                <p>${slides[index].role}</p>
              </div>
            </div>`
        },
      }}
      className={`w-full ${className} !flex`}
    >
      {children}
    </Swiper>
  )
}
