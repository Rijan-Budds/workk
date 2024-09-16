import React from 'react'
import { NoticeDetail } from '../_component/NoticeDetail'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { INoticeResponse } from '../_interface/type'

const page = async ({ params }: { params: { slug: string } }) => {
  const noticeDetail: INoticeResponse | undefined = await UseServerFetch(
    `/api/v1/news-and-notice/${params.slug}`
  )
  return <NoticeDetail detail={noticeDetail?.data} />
}

export default page
