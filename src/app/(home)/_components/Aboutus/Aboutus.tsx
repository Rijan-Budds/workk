import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React from 'react'
import './about.css'
import { Button } from '@/common/components/Atom/Button'

const Aboutus = () => {
  return (
    <HomeWrapper>
      <div className="flex gap-[80px] justify-between">
        <div className="max-w-[503px] flex flex-col justify-center">
          <h3 className="text-secondary text-[14px] leading-[21px] tracking-[2px]  font-semibold font-workSans uppercase">
            about pawan prakriti
          </h3>
          <h1 className="font-poppins font-medium text-[38px] leading-[49.4px] mt-2">
            Skilled Teachers And Support Staff
          </h1>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
            As you begin to consider your career goals choices may appear
            confusing. Go with Modern Technology.
          </p>
          <div className="flex gap-[24px]">
            <ul className="custom-list text-heading font-normal text-[16px] leading-[27.2px] space-y-[16px]">
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
            <Button>About us</Button>
          </div>
        </div>
        <div className="flex gap-[16px] max-w-[657px]">
          <div className="flex flex-col gap-[16px]">
            <Image
              src="/home/about1.png"
              width={320}
              height={335}
              alt="ab"
              className="w-[320px] h-[335px] object-cover rounded-xl"
            />
            <div className="blue-bg text-white space-y-[72px]">
              <h2 className="font-poppins text-[20px] font-medium leading-[26px]">
                Get guidance from our team of teacgers
              </h2>
              <p className="text-[16px] font-workSans font-normal leading-[27.2px]">
                Teachers are the heart and soul of our daily operations.
              </p>
            </div>
          </div>
          <Image
            src="/home/about2.png"
            width={320}
            height={610}
            alt="ab"
            className="w-[321px] h-[610] rounded-xl object-cover"
          />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Aboutus
