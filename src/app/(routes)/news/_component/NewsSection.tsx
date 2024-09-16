'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { TabSwitch } from '@/common/components/Atom/TabSwitch'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { NoticeClientSection } from '../../notice/_component/NoticeClientSection'
import { INewsItem } from '../interface/newsType'
import { format } from 'date-fns'
import { cn } from '@/common/utils/utils'

export const NewsSection = ({
  newsData,
}: {
  newsData: INewsItem[] | undefined
}) => {
  const tabs = [
    {
      key: 'news',
      title: 'News',
    },
    {
      key: 'notice',
      title: 'Notices',
    },
  ]

  const [active, setActiveTab] = useState<string>(tabs[0]?.key)

  const filterNews = newsData && newsData?.filter((d) => d.type === 'NEWS')
  // const filterNotice = newsData && newsData?.filter((d) => d.type === 'NOTICE')

  const renderNewsNoticeUi = () => {
    if (active === 'news') {
      return (
        <div
          className={cn(
            'flex flex-row flex-wrap justify-center md:justify-between  gap-x-4 gap-y-28 pb-16 2lg:pb-1 '
          )}
        >
          {filterNews &&
            filterNews.map((news) => {
              return (
                <Link
                  href={`/news/${news.id}`}
                  key={news.id}
                  className={cn('mb-0', {
                    'mb-8 2lg:mb-0': news.title.length > 40,
                  })}
                >
                  <div className="relative max-w-[397px] group cursor-pointer">
                    <div className="overflow-hidden rounded-xl max-w-[397px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${news.images.key}`}
                        width={447}
                        height={298}
                        alt="news"
                        className="relative w-[343px] h-[231px] md:w-[324px] md:h-[243px]  2lg:w-[398px] 2lg:h-[298px] object-cover group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute w-[94%] max-h-[145px] 2lg:max-h-[120px] bg-white shadow-sm top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
                      <div className="p-6 z-10 relative flex flex-col gap-y-2">
                        <p className="text-body text-sm font-workSans font-normal leading-4 z-20">
                          {format(news.createdAt, 'MMMM d, yyyy')}
                        </p>
                        <h2 className="text-primary text-xl font-poppins font-medium leading-7  transition-all duration-500 2lg:line-clamp-2">
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
              )
            })}
        </div>
      )
    } else if (active === 'notice') {
      return <NoticeClientSection />
    }
  }

  return (
    <>
      <CoverImage
        title="News & Notices"
        list={[{ link: null, title: 'News & Notices' }]}
      />
      <HomeWrapper className="2lg:pb-32">
        <div className="flex justify-center mb-10">
          <TabSwitch
            tabs={tabs}
            activeTab={active}
            setActive={setActiveTab}
            className="w-fit text-sm"
            handleDynamicData={(key) => setActiveTab(key)}
          />
        </div>
        {renderNewsNoticeUi()}
      </HomeWrapper>
    </>
  )
}
