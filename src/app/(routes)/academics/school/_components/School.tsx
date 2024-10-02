import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { IAcademicBanner, IAcademicsData } from '../../_interface/academic'
import SchoolSection from './SchoolSection'
import SchoolStickySidebar from './SchoolStickySidebar'

const School = ({
  bannerDetail,
  detail,
  slug,
}: {
  bannerDetail: IAcademicBanner
  detail: IAcademicsData
  slug: string
}) => {
  return (
    <div>
      <CoverImage
        title={slug}
        list={[
          { link: '/academics', title: 'Academics' },
          { link: null, title: 'School' },
          { link: null, title: slug },
        ]}
      />

      <HomeWrapper>
        <div className="flex flex-col lg:flex-row gap-[56px]">
          <SchoolSection detail={detail} />
          <SchoolStickySidebar bannerDetail={bannerDetail} />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default School
