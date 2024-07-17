import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'

import Notice from './Notice'
import './notice.css'
import { NewsCard } from './NewsCard'

const NewsAndEvents = () => {
  return (
    <HomeWrapper isBg>
      <div className="flex flex-col 2lg:flex-row gap-6 2lg:justify-between  3xl:gap-6">
        <div className="max-w-[820px]">
          <div className="relative">
            <div>
              <h3 className="text-secondary text-[14px] leading-[21px] tracking-[2px] font-semibold font-workSans uppercase">
                News and Events
              </h3>
              <h1 className="font-poppins font-medium text-[28px] leading-[36.4px] mt-2">
                News and Events
              </h1>
            </div>
            <div
              id="news"
              className="space-x-3 absolute bottom-0 right-0 w-28 h-8 hidden sm:flex "
            >
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
          <NewsCard />
        </div>
        <div>
          <Notice />
        </div>
      </div>
      {/* <div className="flex gap-[25px]">
        <div className="flex">
          <div className="relative flex-1 max-w-[820px]">
            <div className="relative">
              <div>
                <h3 className="text-secondary text-[14px] leading-[21px] tracking-[2px] font-semibold font-workSans uppercase">
                  News and Events
                </h3>
                <h1 className="font-poppins font-medium text-[28px] leading-[36.4px] mt-2">
                  News and Events
                </h1>
              </div>
              <div
                id="news"
                className="space-x-3 absolute bottom-0 right-0 w-28 h-8 hidden sm:flex "
              >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
            <NewsCard />
          </div>
        </div>
        <div className="flex-1">
          <Notice />
        </div>
      </div> */}
    </HomeWrapper>
  )
}

export default NewsAndEvents
