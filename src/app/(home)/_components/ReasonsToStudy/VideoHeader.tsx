import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export const VideoHeader = () => {
  return (
    <div className="hidden md:flex p-6 bg-primary items-center gap-x-6  rounded-[8px]">
      <div className="flex items-center gap-x-6">
        <Image
          src={'/home/course.svg'}
          width={64}
          height={64}
          alt="Trending course icon"
        />
        <div className="flex flex-col  w-[166px]">
          <span className="font-workSans text-[20px] font-semibold leading-[30px] text-white">
            400 +
          </span>
          <p className="text-[14px] leading-[21px] font-normal font-workSans text-white">
            Trending Courses
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <Image
          src={'/home/teachers.svg'}
          width={64}
          height={64}
          alt="Trending course icon"
        />
        <div className="flex flex-col w-[166px]">
          <span className="font-workSans text-[20px] leading-[30px] text-white">
            800 +
          </span>
          <p className="text-[14px] leading-[21px] font-normal font-workSans text-white">
            Qualified Teachers
          </p>
        </div>
      </div>
    </div>
  )
}

export const VideoHeaderMobile = () => {
  return (
    <div className="py-3 pl-3 pr-6 bg-primary flex flex-col  items-center gap-x-6 h-[66px] overflow-hidden   rounded-[12px] md:hidden">
      <Swiper
        direction={'vertical'}
        spaceBetween={20}
        height={52}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="flex items-center gap-x-4 ">
            <Image
              src={'/home/book.svg'}
              width={40}
              height={40}
              alt="Trending course icon"
              className="size-10 bg-primaryDark rounded-full p-1 "
            />
            <div className="flex flex-col">
              <span className="font-workSans text-[16px] font-semibold leading-[24px]  text-white">
                400 +
              </span>
              <p className="text-[12px] leading-[18px] font-normal font-workSans text-white">
                Trending Courses
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center gap-x-4 ">
            <Image
              src={'/home/teacher.svg'}
              width={64}
              height={64}
              alt="Trending course icon"
              className="size-10 bg-primaryDark rounded-full p-1 "
            />
            <div className="flex flex-col">
              <span className="font-workSans text-[16px] font-semibold leading-[24px]  text-white">
                800 +
              </span>
              <p className="text-[12px] leading-[18px] font-normal font-workSans text-white">
                Qualified Teachers
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
