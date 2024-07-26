import Image from 'next/image'
import React from 'react'
import { recentPostData } from '../constant/newsdata'
import { cn } from '@/common/utils/utils'
import { CircleCardWrapper } from '@/common/components/Atom/CircleCardWrapper'
import { DownloadUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'

export const StickySidebar = () => {
  return (
    <div className="max-h-[1015px]  w-[397px] bg-white  sticky top-24 transition-all duration-700 flex flex-col gap-y-6  ">
      <CircleCardWrapper>
        <div className="flex flex-col gap-y-6">
          <h1
            className="font-poppins font-medium text-[20px] leading-[26px]  
      "
          >
            Recent Post
          </h1>
          {recentPostData.map((post, index) => {
            return (
              <RecentPostCard
                key={post.id}
                post={post}
                hideBorder={index === recentPostData.length - 1}
              />
            )
          })}
        </div>
      </CircleCardWrapper>

      <CircleCardWrapper>
        <DownloadUi />
      </CircleCardWrapper>
      <SidebarAd />
    </div>
  )
}

const RecentPostCard = ({
  post,
  hideBorder,
}: {
  post: (typeof recentPostData)[0]
  hideBorder: boolean
}) => {
  return (
    <div
      className={cn('flex items-center gap-x-6 pb-6 border-b border-border', {
        ' border-transparent ': hideBorder,
      })}
    >
      <Image
        src={post.src}
        width={56}
        height={56}
        className="rounded-full size-[56px] object-cover"
        alt="recent post image"
      />
      <div className="flex flex-col">
        <h2 className="font-workSans font-medium text-[16px] leading-[20.8px] text-heading">
          {post.title}
        </h2>
        <span className="text-body font-workSans text-[14px] leading-4">
          {post.date}
        </span>
      </div>
    </div>
  )
}
