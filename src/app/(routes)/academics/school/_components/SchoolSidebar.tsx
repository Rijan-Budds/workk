import {
  DownloadUi,
  ForInquiry,
} from '@/app/(routes)/news/_component/DownloadUi'
import Link from 'next/link'
import React from 'react'

const SchoolSidebar = () => {
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
            <button className="mt-6 w-full bg-secondary h-12 rounded-lg font-workSans text-white font-medium leading-4">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <DownloadUi />
      <ForInquiry />
    </div>
  )
}

export default SchoolSidebar
