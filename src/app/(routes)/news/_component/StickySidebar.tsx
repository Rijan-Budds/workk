import React from 'react'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsResponseData } from '../interface/newsType'

export const StickySidebar = async ({ type }: { type: 'NEWS' | 'NOTICE' }) => {
  const response: INewsResponseData | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/type/${type}`
  )
  return (
    <div className="max-h-[1015px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      <DownloadUi />
      <SidebarAd />
    </div>
  )
}
