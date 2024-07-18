import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'

import Notice from './Notice'
import './notice.css'
import { NewsCard } from './NewsCard'

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
              <h3 className="text-secondary text-[14px] leading-[21px] tracking-[2px] font-semibold font-workSans uppercase text-center 2lg:text-left">
                News and Events
              </h3>
              <h1 className="font-poppins font-medium text-[28px] leading-[36.4px] mt-2 text-center 2lg:text-left">
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
