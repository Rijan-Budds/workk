import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React from 'react'
import './about.css'
import { Button } from '@/common/components/Atom/Button'

const Aboutus = () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col md:flex-row gap-[40px] justify-between 2lg:gap-[80px]">
        <div className="w-full md:max-w-[333px] 2lg:max-w-[503px] flex flex-col justify-center">
          <h3 className="text-secondary text-[12px] 2lg:text-[14px] leading-4 2lg:leading-[21px] tracking-[2px] font-semibold font-workSans uppercase">
            about pawan prakriti
          </h3>
          <h1 className="font-poppins font-medium text-[28px] 2lg:text-[38px] leading-9 2lg:leading-[49.4px] mt-2">
            Skilled Teachers And Support Staff
          </h1>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
            As you begin to consider your career goals choices may appear
            confusing. Go with Modern Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-y-[16px] gap-2 2lg:gap-[24px]">
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
        <div className="flex flex-col md:flex-row gap-4">
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
        {/* <div className="flex flex-col sm:flex-row gap-[16px] max-w-[657px] justify-center items-center">
          <div className="flex flex-col gap-[16px]">
            <Image
              src="/home/about1.png"
              width={320}
              height={335}
              alt="ab"
              className="w-full h-[360px] sm:w-[321px] sm:h-[335px] object-cover rounded-xl"
            />
            <div className="hidden sm:block blue-bg text-white space-y-[72px]">
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
            className="w-[343px] sm:w-[321px] h-[610] rounded-xl object-cover"
          />
        </div> */}
      </div>
    </HomeWrapper>
  )
}

export default Aboutus
