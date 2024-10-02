import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsData, INewsResponseData } from '../interface/newsType'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'

export const StickySidebar = async ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data: INewsData
}) => {
  const response: INewsResponseData | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/type/${type}`
  )

  return (
    <div className="max-h-[1015px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      <DownloadUi />
      {data && <SidebarAd data={data} />}
    </div>
  )
}
