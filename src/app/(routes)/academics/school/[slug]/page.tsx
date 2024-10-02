import React from 'react'
import School from '../_components/School'
import { IAcademicsResponse } from '../../_interface/academic'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NoDataFound } from '@/common/components/NoDataFound'

const Page = async ({ params }: { params: { slug: string } }) => {
  const response: IAcademicsResponse | undefined = await UseServerFetch(
    `/api/v1/academics/${params.slug}`
  )

  console.log('reponse school detail', response)
  const renderSchoolDetailUi = () => {
    if (response) {
      return <School detail={response.data} slug={params.slug} />
    } else {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No detail found" />
        </div>
      )
    }
  }
  return renderSchoolDetailUi()
}

export default Page
