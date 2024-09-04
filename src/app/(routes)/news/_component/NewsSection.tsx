'use client'

import { newsandevent } from '@/app/(home)/_components/News/NewsCard'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

export const NewsSection = () => {
  return (
    <>
      <CoverImage
        title="News & Events"
        list={[{ link: null, title: 'News & Events' }]}
      />
      <HomeWrapper className="2lg:pb-32">
        <div className="flex flex-row flex-wrap justify-center md:justify-between  gap-x-4 gap-y-28  ">
          {newsandevent.map((news) => (
            <Link href={`/news/ffff`} key={news.id}>
              <div className="relative max-w-[397px] group cursor-pointer">
                <div className="overflow-hidden rounded-xl max-w-[397px]">
                  <Image
                    src={news.img}
                    width={447}
                    height={298}
                    alt="news"
                    className="relative w-[343px] h-[231px] md:w-[324px] md:h-[243px]  2lg:w-[398px] 2lg:h-[298px] object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute w-[94%] h-[98px] bg-white shadow-sm top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
                  <div className="p-6 z-10 relative">
                    <p className="text-body text-sm font-workSans font-normal leading-4 z-20">
                      {news.date}
                    </p>
                    <h2 className="text-primary text-xl font-poppins font-medium leading-7  transition-all duration-500">
                      {news.title}
                    </h2>
                  </div>
                  <div>
                    <Link
                      href="/news/ffff"
                      className="bg-primaryLighter will-change-transform  w-[82px] h-[82px] absolute -right-[20px] group-hover:scale-[10] transition-transform duration-700 top-[55px] rounded-full z-0"
                    ></Link>
                    <GoArrowRight className=" absolute right-3 top-1/2 -translate-y-1/2 mt-8  z-20  text-2xl text-primary " />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </HomeWrapper>
    </>
  )
}
