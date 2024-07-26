import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'

import Notice from './Notice'
import './notice.css'
import { NewsCard } from './NewsCard'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'

const NewsAndEvents = () => {
  return (
    <HomeWrapper isBg>
      <div className="flex flex-col  2lg:flex-row gap-6 2lg:justify-between  3xl:gap-6  ">
        <div
          className="2lg:max-w-[820px] 
        "
        >
          <div className="relative">
            <div>
              <MiniHeading isMd>News and Events</MiniHeading>
              <h1 className="font-poppins font-medium text-[28px] leading-[36.4px] mt-2 text-center md:text-left">
                News and Events
              </h1>
            </div>
          </div>
          <NewsCard />
        </div>
        <div className="flex items-center  justify-center 2lg:justify-start ">
          <Notice />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default NewsAndEvents
