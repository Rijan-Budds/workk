import {
  DownloadUi,
  ForInquiry,
} from '@/app/(routes)/news/_component/DownloadUi'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import Link from 'next/link'
import { IAcademicBanner } from '../../_interface/academic'
import { Button } from '@/common/components/Atom/Button'

const SchoolSidebar = ({ bannerDetail }: { bannerDetail: IAcademicBanner }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-background p-6 rounded-xl">
        <div className="p-6 border-2 border-border rounded-lg">
          <h2 className="text-heading text-xl leading-[26px] font-poppins font-medium">
            Next step toward your future career?
          </h2>
          <p className="text-body font-workSans font-normal text-base leading-7 mt-4">
            Opportunities are like sunrises. lf you wait too long, you miss
            them.
          </p>
          <Link href={'/apply?form=school'}>
            <Button variant={'default'} className="mt-6 w-full">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
      <DownloadUi />
      <ForInquiry />
      <div className="cursor-pointer">
        {bannerDetail ? (
          <Link href={bannerDetail.link} target="_blank">
            <ImageWithPlaceholder
              src={bannerDetail.image.key}
              width={397}
              height={397}
              alt="admission"
            />
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default SchoolSidebar
