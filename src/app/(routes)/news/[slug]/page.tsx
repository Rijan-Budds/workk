import React from 'react'
import { NewsDetailUi } from '../_component/NewsDetailUi'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsDetailResponse } from '../interface/newsType'
import { NoDataFound } from '@/common/components/NoDataFound'

const page = async ({ params }: { params: { slug: string } }) => {
  const newsDetail: INewsDetailResponse | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/${params.slug}`
  )

  const renderNewsNoticeUi = () => {
    if (newsDetail) {
      return (
        <NewsDetailUi
          slug={params.slug}
          data={newsDetail?.data ? newsDetail.data : undefined}
        />
      )
    } else {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No academic detail found" />
        </div>
      )
    }
  }

  return renderNewsNoticeUi()
}

export default page
