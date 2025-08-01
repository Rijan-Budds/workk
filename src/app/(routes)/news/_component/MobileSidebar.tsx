'use client'
import React, { useEffect, useState } from 'react'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { INewsResponseData } from '../interface/newsType'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import {
  IBrochureApiResponse,
  IBrochureItem,
} from '../../brochure/interface/brochureType'
import { BannerData } from '../../notice/_interface/type'

export const MobileSidebar = ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data: BannerData | undefined
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
    <div className="flex flex-col 2lg:hidden gap-y-6">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      {brochureData && <DownloadUi data={brochureData} />}
      {data && <SidebarAd banner={data} />}
    </div>
  )
}
