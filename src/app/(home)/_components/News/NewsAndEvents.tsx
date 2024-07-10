import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'
import NewsCard from './NewsCard'
import Notice from './Notice'

const NewsAndEvents = () => {
  return (
    <HomeWrapper isBg>
      <div className="flex gap-[25px]">
        <div className="relative">
          <h3 className="text-[#F58534] text-[14px] leading-[21px] tracking-[2px]  font-semibold font-workSans uppercase">
            News and Events
          </h3>
          <h1 className="font-poppins font-medium text-[28px] leading-[36.4px] mt-2">
            News and Events
          </h1>
          <NewsCard />
        </div>
        <div>
          <Notice />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default NewsAndEvents
