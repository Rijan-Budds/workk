import React from 'react'
import School from '../_components/School'
import { IAcademicsResponse } from '../../_interface/academic'
import { UseServerFetch } from '@/common/hook/useServerFetch'

const Page = async ({ params }: { params: { slug: string } }) => {
  const response: IAcademicsResponse | undefined = await UseServerFetch(
    `/api/v1/academics/${params.slug}`
  )
  if (!response || !response.data) {
    return <div>No academic details found</div>
  }

  const detail = response.data
  return (
    <div>
      <School detail={detail} slug={params.slug} />
    </div>
  )
}

export default Page
