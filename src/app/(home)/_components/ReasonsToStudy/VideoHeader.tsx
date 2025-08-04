import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { IHomepageItem } from '@/app/(routes)/contact/_interface/Contact'

// Helper to normalize keys
const normalize = (str: string) =>
  str.toLowerCase().replace(/[_\s]+/g, ' ').trim()

// Hardcoded fallback data
const fallbackStats: IHomepageItem[] = [
  { key: 'Trending Courses', value: '25+' },
  { key: 'Qualified Teachers', value: '10+' },
]

// Desktop Header
export const VideoHeader = ({
  settings,
}: {
  settings?: IHomepageItem[]
}) => {
  const combinedStats = settings?.length ? settings : fallbackStats

  const filterStats = combinedStats.filter((d) =>
    ['trending courses', 'qualified teachers'].includes(normalize(d.key))
  )

  return (
    <div className="hidden md:flex p-6 bg-primary items-center gap-x-6 rounded-[8px]">
      {filterStats.map((d) => {
        const isTrendingCourse = normalize(d.key) === 'trending courses'
        return (
          <div key={d.key} className="flex items-center gap-x-6">
            <Image
              src={isTrendingCourse ? '/home/course.svg' : '/home/teachers.svg'}
              width={64}
              height={64}
              alt={isTrendingCourse ? 'Trending course icon' : 'Teacher icon'}
            />
            <div className="flex flex-col w-[166px]">
              <span className="font-workSans text-[20px] font-semibold leading-[30px] text-white">
                {d.value}
              </span>
              <p className="text-[14px] leading-[21px] font-normal font-workSans text-white">
                {d.key}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Mobile Header
export const VideoHeaderMobile = ({
  settings,
}: {
  settings?: IHomepageItem[]
}) => {
  const combinedStats = settings?.length ? settings : fallbackStats

  const filterStats = combinedStats.filter((d) =>
    ['trending courses', 'qualified teachers'].includes(normalize(d.key))
  )

  return (
    <div className="py-3 pl-3 pr-6 bg-primary flex flex-col items-center gap-x-6 h-[66px] overflow-hidden rounded-[12px] md:hidden">
      <Swiper
        direction="vertical"
        spaceBetween={20}
        height={52}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {filterStats.map((d) => {
          const isTrendingCourse = normalize(d.key) === 'trending courses'
          return (
            <SwiperSlide key={d.key}>
              <div className="flex items-center gap-x-4">
                <Image
                  src={isTrendingCourse ? '/home/book.svg' : '/home/teacher.svg'}
                  width={40}
                  height={40}
                  alt={isTrendingCourse ? 'Trending course icon' : 'Teacher icon'}
                  className="size-10 bg-primaryDark rounded-full p-1"
                />
                <div className="flex flex-col">
                  <span className="font-workSans text-[16px] font-semibold leading-[24px] text-white">
                    {d.value}
                  </span>
                  <p className="text-[12px] leading-[18px] font-normal font-workSans text-white">
                    {d.key}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
