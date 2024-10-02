import { NoDataFound } from '@/common/components/NoDataFound'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsResponse } from '../../_interface/academic'
import School from '../_components/School'

const Page = async ({ params }: { params: { slug: string } }) => {
  const response: IAcademicsResponse | undefined = await UseServerFetch(
    `/api/v1/academics/${params.slug}`
  )
  const renderSchoolDetailUi = () => {
    if (response) {
      return (
        <School
          bannerDetail={response && response.banner}
          detail={response.data}
          slug={params.slug}
        />
      )
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
