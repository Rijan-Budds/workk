import { Button } from '@/common/components/Atom/Button'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import { AcademicCards } from './AcademicCards'
import { academicCardsDataOne, academicCardsDataTwo } from './constant/data'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'

export const AcademicSection = () => {
  return (
    <HomeWrapper isBg>
      <div className=" flex justify-between">
        <div className="flex flex-col gap-y-2">
          <MiniHeading>Program</MiniHeading>
          <SectionHeading>Academic Program</SectionHeading>
          <p className="font-normal text-[16px] font-workSans mt-2 text-[#313131]">
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
              <span className="font-workSans font-semibold text-[14px] leading-4 text-[#313131]">
                15000 +
              </span>
              <p className="font-workSans text-[12px] leading-[18px] text-[#5D5F69]">
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
            color={'bg-[#0661A70F]'}
            list={academicCardsDataOne}
          />
          <AcademicCards
            title={'School'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-[#E0630A0F]'}
            list={academicCardsDataTwo}
          />
        </div>
      </div>
    </HomeWrapper>
  )
}
