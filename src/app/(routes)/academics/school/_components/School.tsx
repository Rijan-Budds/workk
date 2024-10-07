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
  const getBreadcrumbTitle = (slug: string) => {
    switch (slug) {
      case 'pre-school-kindergarden':
        return 'Pre School (Kindergarden)'
      case 'primary-level-one-five':
        return 'Primary Level (One-Five)'
      case 'basic-level-six-eight':
        return 'Basic Level (Six-Eight)'
      case 'senior-level-nine-ten':
        return 'Senior Level (Nine-Ten)'
      default:
        return slug // Fallback to the actual slug if it's not one of the specific cases
    }
  }

  return (
    <div>
      <CoverImage
        title={getBreadcrumbTitle(slug)}
        list={[
          { link: '/academics', title: 'Academics' },
          { link: null, title: 'School' },
          { link: null, title: getBreadcrumbTitle(slug) },
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
