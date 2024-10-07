'use client'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsResponseData } from '../interface/newsType'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { BannerData } from '../../notice/_interface/type'
import { useEffect, useState } from 'react'
import {
  IBrochureApiResponse,
  IBrochureItem,
} from '../../brochure/interface/brochureType'

export const StickySidebar = ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data?: BannerData | undefined
}) => {
  const [brochureData, setBrochureData] = useState<IBrochureItem[] | undefined>(
    undefined
  )

  const [response, setResponse] = useState<INewsResponseData | null>(null)

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response: INewsResponseData | undefined = await UseServerFetch(
          `/api/v1/news-and-notice/type/${type}`
        )
        if (response) {
          setResponse(response)
        }
      } catch (error) {
        console.error('Error fetching brochure data:', error)
      }
    }

    fetchResponse()
  }, [])

  useEffect(() => {
    const fetchBrochureResponse = async () => {
      try {
        const brochureDataResponse: IBrochureApiResponse | undefined =
          await UseServerFetch(`/api/v1/brochure`)
        if (brochureDataResponse) {
          setBrochureData(brochureDataResponse?.data)
        }
      } catch (error) {
        console.error('Error fetching brochure data:', error)
      }
    }

    fetchBrochureResponse()
  }, [])

  return (
    <div className="max-h-[1015px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      {brochureData && <DownloadUi data={brochureData} />}
      {data && <SidebarAd banner={data} />}
    </div>
  )
}
