import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

const SchoolSection = () => {
  return (
    // <div className="relative flex flex-col-reverse md:flex-row justify-center items-center md:items-start md:justify-end 2lg:items-center mx-auto md:w-[668px] 2lg:w-[1240px] gap-y-6">
    //   <div className="relative md:absolute left-0 rounded-xl z-40">
    //     <Image
    //       src="/home/academic1.png"
    //       width={610}
    //       height={405}
    //       alt="academic"
    //       className="relative rounded-xl w-[335px] 2lg:w-[555px] object-contain"
    //     />
    //     <div className="absolute w-[206px] h-[75px] bottom-0 left-0 bg-white rounded-tr-xl flex justify-center items-center rounded-bl-xl">
    //       <h2 className="text-lg leading-7 font-workSans font-medium text-heading">
    //         Take A Warm Tour
    //       </h2>
    //     </div>
    //   </div>
    //   <div className="w-[343px] sm:w-[411px] 2lg:w-[710px] bg-background rounded-xl relative 2lg:right-16 2xl_lg:right-[55px]">
    //     <div className="px-6 py-6 md:pl-[110px] md:py-8">
    //       <div className="w-full md:w-[289px] 2lg:w-[568px] mx-auto md:mx-0">
    //         <h1 className="font-poppins text-[32px] leading-10 font-medium ">
    //           Plus Two
    //         </h1>
    //         <hr className="my-6" />
    //         <p>
    //           When reading an application, we get to know the person behind the
    //           numbers. We take into consideration your academic achievements,
    //           extracurricular activities, personal qualities, and life
    //           experiences. Just as there is no typical Pawan Prakriti student,
    //           there is no ideal applicant. We look forward to learning more
    //           about you.
    //         </p>
    //       </div>
    //       <div className="mt-12 flex flex-col 2lg:flex-row gap-x-[80px] gap-y-[24px]">
    //         <p className="font-poppins font-medium text-xl leading-[26px] text-heading">
    //           Available Programs
    //         </p>
    //         <ul className="font-workSans text-lg leading-6 font-normal space-y-8">
    //           <li>Management</li>
    //           <li>Humanities</li>
    //           <li>Education</li>
    //           <li>Law</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

        <div className="md:pl-[12%]">
          <hr className="my-6" />
          <div className="mt-12 flex flex-col 2lg:flex-row gap-x-[80px] gap-y-[24px]">
            <p className="font-poppins font-medium text-xl leading-[26px] text-heading">
              Available Programs
            </p>
            <ul className="font-workSans text-lg leading-6 font-normal space-y-8">
              <li>Management</li>
              <li>Humanities</li>
              <li>Education</li>
              <li>Law</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolSection
