'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

import { cn } from '@/lib/utils'
import NewsSection from './NewsSection'
import Notice from './Notice'
import './notice.css'

const NewsAndEvents = () => {
  return (
    <HomeWrapper isBg>
      <div
        className={cn(
          'flex flex-col  2lg:flex-row gap-6 2xl:gap-x-6 justify-between 3xl:gap-6'
        )}
      >
        <div className="2lg:max-w-[820px] ">
          <NewsSection />
        </div>
        <div className="flex justify-center 2lg:justify-start ">
          <Notice />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default NewsAndEvents
