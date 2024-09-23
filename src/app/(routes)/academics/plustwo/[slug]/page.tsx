import React from 'react'
import AcademicDetail from '../_components/AcademicDetail'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsResponse } from '../../_interface/academic'
import { NoDataFound } from '@/common/components/NoDataFound'

const Page = async ({ params }: { params: { slug: string } }) => {
  const response: IAcademicsResponse | undefined = await UseServerFetch(
    `/api/v1/academics/${params.slug}`
  )

  const renderAcademicsDetailUi = () => {
    if (response) {
      return (
        <AcademicDetail detail={response && response.data} slug={params.slug} />
      )
    } else {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No detail found" />
        </div>
      )
    }
  }

  return renderAcademicsDetailUi()
}

export default Page
