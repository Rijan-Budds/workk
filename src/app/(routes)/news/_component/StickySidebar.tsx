import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsResponseData } from '../interface/newsType'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { BannerData } from '../../notice/_interface/type'

export const StickySidebar = async ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data?: BannerData | undefined
}) => {
  const response: INewsResponseData | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/type/${type}`
  )

  return (
    <div className="max-h-[1015px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      <DownloadUi />
      {data && <SidebarAd banner={data} />}
    </div>
  )
}
