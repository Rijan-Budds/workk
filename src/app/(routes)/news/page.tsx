'use client'

import React, { useEffect, useState } from 'react'
import { NewsSection } from './_component/NewsSection'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsResponseData } from './interface/newsType'

const NewsPage = () => {
  const [newsData, setNewsData] = useState<INewsResponseData | undefined>(
    undefined
  )

  useEffect(() => {
    const fetchNewsAndNoticeList = async () => {
      try {
        const newsNoticeData: INewsResponseData | undefined =
          await UseServerFetch('/api/v1/news-and-notice')
        setNewsData(newsNoticeData)
      } catch (error) {
        console.error('Error fetching news data:', error)
      }
    }

    fetchNewsAndNoticeList()
  }, [])

  return <NewsSection newsData={newsData?.data ? newsData.data : undefined} />
}

export default NewsPage
