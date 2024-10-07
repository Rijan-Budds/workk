import React from 'react'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { INewsResponseData } from '../interface/newsType'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { BannerData } from '../../notice/_interface/type'

export const MobileSidebar = async ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data: BannerData | undefined
}) => {
  const response: INewsResponseData | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/type/${type}`
  )

  return (
    <div className="flex flex-col 2lg:hidden gap-y-6">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      <DownloadUi />
      {data && <SidebarAd banner={data} />}
    </div>
  )
}
