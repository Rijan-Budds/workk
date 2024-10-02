import { IAcademicBanner } from '../../_interface/academic'
import SchoolSidebar from './SchoolSidebar'

const SchoolStickySidebar = ({
  bannerDetail,
}: {
  bannerDetail: IAcademicBanner
}) => {
  return (
    <div className="max-h-[1145px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <SchoolSidebar bannerDetail={bannerDetail} />
    </div>
  )
}

export default SchoolStickySidebar
