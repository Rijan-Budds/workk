import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import Image from 'next/image'
import { IFacilityListResponse } from '../interface/facilityInterface'
import FacilitiesSwiper from './FacilitiesSwiper'
import { NoDataFound } from '@/common/components/NoDataFound'

const FacilitiesSwiperSection = async () => {
  const response: IFacilityListResponse | undefined = await UseServerFetch(
    '/api/v1/facility/list'
  )

  return (
    <HomeWrapper
      className="!px-0 !pl-4 md:!pl-12 lg:!pl-[60px] 2xl_lg:!pl-[240px] 3xl:!pl-[310px] 5xl:!pl-[540px]"
      isBg
    >
      <div className="flex flex-col 2lg:flex-row justify-between overflow-hidden gap-[47px]">
        <div className="max-w-[397px] mx-5 md:mx-0 2lg:mx-0 flex flex-col justify-center flex-shrink-0">
          <MiniHeading className="text-center md:text-start 2lg:text-start">
            Facilities
          </MiniHeading>
          <h2 className="font-poppins text-[28px] 2lg:text-[38px] leading-[36.4px] 2lg:leading-[49.4px] font-medium text-center md:text-left 2lg:text-left text-heading mt-2">
            Our facilities
          </h2>
          <p className="font-workSans text-center md:text-start 2lg:text-start font-normal text-[16px] leading-7 text-heading mt-4">
            Our College can also attend regular networking events, and benefit
            from exclusive resources and mentorship programs.
          </p>
          <div className="flex items-start justify-center md:justify-start gap-x-2 mt-4">
            <Image
              width={112}
              height={40}
              src={'/home/default-users.svg'}
              alt="list of user profiles"
              className="pointer-events-none"
            />
            <div className="flex flex-col gap-y-1">
              <span className="font-workSans font-semibold text-[14px] leading-4 text-heading">
                15000 +
              </span>
              <p className="font-workSans text-[12px] leading-[18px] text-body">
                Satisfied Students
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1100px] flex-grow">
          {response && response?.data.length > 0 ? (
            <FacilitiesSwiper data={response?.data} />
          ) : (
            <NoDataFound title="No facilities found" />
          )}
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FacilitiesSwiperSection
