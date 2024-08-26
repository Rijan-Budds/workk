import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PlusTwoSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start 2lg:items-center mx-auto md:w-[668px] 2lg:w-[1240px] gap-y-6">
      <div className="w-[343px] sm:w-[411px] 2lg:w-[710px] bg-background rounded-xl ">
        <div className="px-6 py-6 md:pl-8 md:py-8">
          <div className="w-full md:w-[289px] 2lg:w-[568px] mx-auto md:mx-0">
            <h1 className="font-poppins text-[32px] leading-10 font-medium ">
              Plus Two
            </h1>
            <hr className="my-6" />
            <p className="text-[16px] font-workSans leading-7 font-normal text-body">
              When reading an application, we get to know the person behind the
              numbers. We take into consideration your academic achievements,
              extracurricular activities, personal qualities, and life
              experiences. Just as there is no typical Pawan Prakriti student,
              there is no ideal applicant. We look forward to learning more
              about you.
            </p>
          </div>
          <div className="mt-12 flex flex-col 2lg:flex-row gap-x-[80px] gap-y-[24px]">
            <p className="font-poppins font-medium text-xl leading-[26px] text-heading">
              Available Programs
            </p>
            <ul className="font-workSans text-lg leading-6 font-normal space-y-8 ">
              <li>
                <Link href="/">Management</Link>
              </li>
              <li>
                <Link href="/">Humanities</Link>
              </li>
              <li>
                <Link href="/">Education</Link>
              </li>
              <li>
                <Link href="/">Law</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative md:absolute right-0 2lg:right-[65px] rounded-xl">
        <Image
          src="/home/academic1.png"
          width={610}
          height={405}
          alt="academic"
          className="relative rounded-xl w-[335px] 2lg:w-[555px] object-contain"
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
