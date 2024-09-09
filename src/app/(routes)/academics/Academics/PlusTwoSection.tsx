import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

const PlusTwoSection = () => {
  return (
    <div className="relative space-y-6 max-w-[77.5rem] flex flex-col md:flex-row items-start justify-center flex-wrap mx-auto">
      <div className="bg-background rounded-xl p-6 relative flex-1 md:w-[53%] lg:w-[50%] lg:ml-[3%] md:mr-[-6%]">
        <div className="md:pr-[18%]">
          <SectionHeading>Plus Two</SectionHeading>
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

        <div className="">
          <hr className="my-6" />
          <h1 className="font-poppins text-heading text-xl leading-6 font-medium">
            Available Programs
          </h1>
          <ul className="text-heading font-workSans text-lg leading-6 font-normal space-y-8 mt-6">
            <li>Management</li>
            <li>Humanities</li>
            <li>Education</li>
            <li>Law</li>
          </ul>
        </div>
      </div>
      <div className="rounded-xl w-full md:w-[50%] z-50 relative">
        <Image
          src="/home/academic1.png"
          width={610}
          height={405}
          alt="academic1 "
          className="rounded-xl w-full md:max-w-full h-auto md:mt-14 relative"
        />
        <div className="absolute w-[206px] h-[75px] bottom-0 left-0 bg-white rounded-tr-xl flex justify-center items-center rounded-bl-xl">
          <h2 className="text-lg leading-7 font-workSans font-medium text-heading">
            Take A Warm Tour
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PlusTwoSection
