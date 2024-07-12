import Image from 'next/image'
import React from 'react'

export const VideoHeader = () => {
  return (
    <div className="p-6 bg-primary flex items-center gap-x-6  rounded-[8px]">
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
