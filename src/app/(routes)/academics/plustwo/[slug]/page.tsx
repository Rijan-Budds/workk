import { NoDataFound } from '@/common/components/NoDataFound'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsResponse } from '../../_interface/academic'
import AcademicDetail from '../_components/AcademicDetail'

const Page = async ({ params }: { params: { slug: string } }) => {
  const response: IAcademicsResponse | undefined = await UseServerFetch(
    `/api/v1/academics/${params.slug}`
  )

  const renderAcademicsDetailUi = () => {
    if (response && response.data) {
      return (
        <AcademicDetail
          bannerDetail={response && response.banner}
          detail={response && response.data}
          slug={params.slug}
        />
      )
    } else if (!response) {
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
