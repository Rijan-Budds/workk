import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const schoollinks = [
  {
    id: 1,
    title: 'Pre-School (Kindergarten)',
    link: 'pre-school',
  },
  {
    id: 2,
    title: 'Primary Level (One - Five)',
    link: 'primary',
  },
  {
    id: 3,
    title: 'Basic Level (Six - Eight)',
    link: 'basic',
  },
  {
    id: 4,
    title: 'Senior Level (Nine - Ten)',
    link: 'senior',
  },
]

const SchoolSection = () => {
  return (
    <div className="relative space-y-6 max-w-[77.5rem] flex gap-y-6 flex-col-reverse md:flex-row items-start justify-center flex-wrap mx-auto">
      <div className="rounded-xl w-full md:w-[50%] z-50 relative">
        <Image
          src="/home/academic1.png"
          width={610}
          height={405}
          alt="academic1 "
          className="rounded-xl w-full md:max-w-full h-auto md:mt-14"
        />
        <div className="absolute w-[206px] h-[75px] bottom-0 left-0 bg-white rounded-tr-xl flex justify-center items-center rounded-bl-xl">
          <h2 className="text-lg leading-7 font-workSans font-medium text-heading">
            Take A Warm Tour
          </h2>
        </div>
      </div>
      <div className="bg-background rounded-xl p-6 relative flex-1 md:w-[53%] lg:w-[50%] lg:ml-[-6%] md:ml-[-4%]">
        <div className="md:pl-[12%]">
          <SectionHeading>School Level</SectionHeading>
          <hr className="my-6" />
          <p className="font-workSans text-base leading-7 font-normal text-body">
            When reading an application, we get to know the person behind the
            numbers. We take into consideration your academic achievements,
            extracurricular activities, personal qualities, and life
            experiences. Just as there is no typical Pawan Prakriti student,
            there is no ideal applicant. We look forward to learning more about
            you.
          </p>
        </div>

        <div className="md:pl-[12%]">
          <hr className="my-6" />
          <div className="mt-12 flex flex-col 2lg:flex-row gap-x-[80px] gap-y-[24px]">
            <p className="font-poppins font-medium text-xl leading-[26px] text-heading">
              Available Programs
            </p>
            <ul className="font-workSans text-lg leading-6 font-normal space-y-8">
              {schoollinks.map((links, idx) => (
                <li key={idx}>
                  <Link
                    href={`/academics/school/${links.link}`}
                    className="flex justify-start items-center gap-2 hover:text-secondary"
                  >
                    {links.title}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolSection
