import React from 'react'
import { NewsDetailUi } from '../_component/NewsDetailUi'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INewsResponseData } from '../interface/newsType'

const page = async ({ params }: { params: { slug: string } }) => {
  const newsDetail: INewsResponseData | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/${params.slug}`
  )
  return (
    <NewsDetailUi
      slug={params.slug}
      data={newsDetail?.data ? newsDetail.data : undefined}
    />
  )
}

export default page
