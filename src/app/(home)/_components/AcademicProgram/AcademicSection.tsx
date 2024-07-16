import { Button } from '@/common/components/Atom/Button'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import { AcademicCards } from './AcademicCards'
import { academicCardsDataOne, academicCardsDataTwo } from './constant/data'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'

export const AcademicSection = () => {
  return (
    <HomeWrapper isBg className=" ">
      <div className="pt-[13.6rem] 2lg:pt-0  flex flex-col  2lg:flex-row justify-between">
        <div className="flex flex-col gap-y-2">
          <MiniHeading>Program</MiniHeading>
          <SectionHeading>Academic Program</SectionHeading>
          <p className="font-normal text-[16px] font-workSans mt-2 text-heading">
            As you begin to consider your career goals
            <br />
            choices may appear confusing.
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <Image
              width={112}
              height={40}
              src={'/home/image-overlap.png'}
              alt="list of user profiles"
            />
            <div className="flex flex-col gap-y-1">
              <span className="font-workSans font-semibold text-[14px] leading-4 text-heading">
                15000 +
              </span>
              <p className="font-workSans text-[12px] leading-[18px] text-body">
                Satisfied Students
              </p>
            </div>
          </div>
          <Button className="mt-6 w-fit">Our Success</Button>
        </div>
        <div className="flex gap-x-4 ">
          <AcademicCards
            title={'Plus Two'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-primaryLighter'}
            list={academicCardsDataOne}
          />
          <AcademicCards
            title={'School'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-secondaryLighter'}
            list={academicCardsDataTwo}
          />
        </div>
      </div>
    </HomeWrapper>
  )
}
