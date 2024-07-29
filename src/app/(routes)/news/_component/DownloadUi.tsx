import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { recentPostData } from '../constant/newsdata'
import { cn } from '@/common/utils/utils'
import { CircleCardWrapper } from '@/common/components/Atom/CircleCardWrapper'

export const DownloadUi = () => {
  return (
    <CircleCardWrapper>
      <div className=" border border-border rounded-lg p-6 flex flex-col gap-y-6">
        <h3 className="font-poppins text-[20px] leading-[26px] font-medium text-heading">
          Download
        </h3>
        <DownloadListUi />
        <DownloadListUi />
      </div>
    </CircleCardWrapper>
  )
}

const DownloadListUi = () => {
  return (
    <Link
      href={`/news/sample.pdf`}
      download={'news-sample.pdf'}
      target="_blank"
      className="flex gap-x-3 "
    >
      <Image src={'/news/pdf-icon.svg'} width={20} height={20} alt="pdf icon" />
      <span className="text-body text-[16px] leading-4 font-workSans text-center font-medium">
        Prospectus Grade 11, 12
      </span>
    </Link>
  )
}

export const RecentPostUi = () => {
  return (
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
