import React from 'react'
import AcademicDetail from '../_components/AcademicDetail'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsResponse } from '../../_interface/academic'
import { NoDataFound } from '@/common/components/NoDataFound'

const Page = async ({ params }: { params: { slug: string } }) => {
  const response: IAcademicsResponse | undefined = await UseServerFetch(
    `/api/v1/academics/${params.slug}`
  )
  if (!response || !response.data) {
    return (
      <div>
        <NoDataFound title="No Academic Detail " />
      </div>
    )
  }

  const detail = response.data

  return (
    <div>
      <AcademicDetail detail={detail} slug={params.slug} />
    </div>
  )
}

export default Page
