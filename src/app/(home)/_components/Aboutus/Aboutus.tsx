import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React from 'react'
import './about.css'
import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Link from 'next/link'

const Aboutus = () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col lg:flex-row gap-[40px] justify-between 2lg:gap-[80px]">
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start  w-fit">
            about pawan prakriti
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-start">
            Skilled Teachers And Support Staff
          </SectionHeading>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
            As you begin to consider your career goals choices may appear
            confusing. Go with Modern Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-y-[16px] md:gap-x-20  gap-8 2lg:gap-[24px]">
            <ul className="custom-list text-heading font-normal font-workSans text-[16px] leading-[27.2px] space-y-[16px]">
              <li>Popular Online Courses</li>
              <li>Guaranted Career Security</li>
              <li>Books and Library</li>
            </ul>
            <ul className="custom-list text-heading font-normal text-[16px] leading-[27.2px] space-y-[16px]">
              <li>Easy to learn every time</li>
              <li>Experienced Faculty</li>
              <li>Flexible Payment Methods</li>
            </ul>
          </div>
          <div className="mt-[40px]">
            <Link href={'/about'}>
              <Button className="w-full 2lg:w-fit">About us</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="gap-4 flex flex-col">
            <div>
              <Image
                src="/home/about1.png"
                width={320}
                height={335}
                alt="ab"
                className="w-full h-[360px] md:w-[321px] sm:h-[335px] object-cover rounded-xl"
              />
            </div>
            <div className="hidden md:block blue-bg text-white max-w-[320px] h-[258px] ">
              <h2 className="font-poppins text-[18px] 4xl:text-[20px] font-medium leading-[26px] p-6 2lg:p-10">
                Get guidance from our team of teacgers
              </h2>
              <p className="text-[14px] 4xl:text-[16px] font-workSans font-normal leading-[27.2px] p-6 2lg:p-10">
                Teachers are the heart and soul of our daily operations.
              </p>
            </div>
          </div>
          <div className="h-[610px]">
            <Image
              src="/home/about2.png"
              width={320}
              height={610}
              alt="ab"
              className="w-full md:w-[321px] h-[610px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Aboutus
