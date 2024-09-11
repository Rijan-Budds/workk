import { Button } from '@/common/components/Atom/Button'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import Image from 'next/image'
import React from 'react'

const AboutComponent = () => {
  return (
    <>
      <CoverImage
        title="About Us"
        list={[{ link: 'about', title: 'About us' }]}
      />
      <HomeWrapper>
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px]">
          <div className="flex gap-6 max-w-[656px]">
            <div className="max-w-[316px] ">
              <Image
                src="/home/about3.png"
                width={316}
                height={583}
                alt="about"
                className="rounded-xl"
              />
            </div>
            <div className="max-w-[316px]">
              <Image
                src="/home/about4.png"
                width={316}
                height={583}
                alt="about"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
            <MiniHeading isMd className="text-start">
              about pawan prakriti
            </MiniHeading>
            <SectionHeading isMd className="mt-2 text-start">
              Skilled Teachers And Support Staff
            </SectionHeading>
            <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
              Pawan Prakriti English Secondary School (PPESS), one of the
              leading co-educational and residential school, situated at
              Mahalaxmi Municipality-05, Tikathali, Lalitpur, established in
              2048 B.S. is approximately four kilometers south-east from the
              down-town of Gwarkoo, Kathmandu ring road.
            </p>
            <div className="flex flex-col lg:flex-row gap-y-[16px] gap-2 2lg:gap-[24px]">
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
              <Button>Apply Admission</Button>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default AboutComponent
